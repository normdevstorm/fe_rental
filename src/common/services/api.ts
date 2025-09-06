import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/";
const token: string =
  "eyJhbGciOiJSUzI1NiJ9.eyJpZCI6ImRlOTE0NzcwLWFlOTktNGEzYy05OWViLWRmNzZhMTY5Y2ZlNCIsInJvbGUiOiJPV05FUiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJpdGVtOmRlbGV0ZSJ9LHsiYXV0aG9yaXR5IjoiaXRlbTp1cGRhdGUifSx7ImF1dGhvcml0eSI6Iml0ZW06Y3JlYXRlIn0seyJhdXRob3JpdHkiOiJpdGVtOnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfT1dORVIifV0sInZlcnNpb24iOjIxLCJ1c2VybmFtZSI6Im5vcm1fb3duZXJfMyIsInN1YiI6Im5vcm1fb3duZXJfMyIsImlhdCI6MTc1NzE4NTUwMiwiZXhwIjoxNzU3MTk1NTgyfQ.IHbWpIUqxuQJ5xJ_fj8lDsA3sXO652vTM7zYS-LivsCV7UlPnuh07oQbK9VnAp-HUq1TVZzTHRfkIbCvaM1Bipkn9AqMaPQvmv1JC2yVIfxMYJdt-k-zD4s_WmEinhiSD3An8yNel-qp3aNpNDNiYiTPzJD8mO9DChTUekItWOBuVHqtvhlxSJqSC04lqYw_-OJOIzNg0OZXm80p4N9kRg28_s3ltuZP7NK_waPrVxq228zylPgaFgQ8Ars8PKn4ijjmWp5fRmQ50qMhswEXedc-2a79-SDuzpLA_uweaK6MoP6v5wyiD5AKfNTcp2hlA4_x5rkR8d_EyO8w6WOM2g";
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    if (!config.url?.startsWith("/auth/")) {
      const token = localStorage.getItem("auth-token");
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
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("auth-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
