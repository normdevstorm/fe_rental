import axios from "axios";
import { TOKENS } from "../di/tokens";
import { container } from "../di/container";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    if (!config.url?.startsWith("/auth/")) {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      try {
        const authUseCase = container.get(TOKENS.authUsecase);
        const newTokens = await authUseCase.refreshToken(
          localStorage.getItem("refreshToken") || ""
        );

        if (newTokens) {
          localStorage.setItem("accessToken", newTokens.accessToken);
          localStorage.setItem("refreshToken", newTokens.refreshToken);

          // Retry the original request with the new access token
          if (error.config) {
            error.config.headers.Authorization = `Bearer ${newTokens.accessToken}`;
            return apiClient.request(error.config);
          }
        } else {
          window.location.href = "/login"; // Redirect to login if refresh fails
          return Promise.reject(new Error("Refresh token failed"));
        }
      } catch (refreshError) {
        console.error("Refresh token error:", refreshError);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
