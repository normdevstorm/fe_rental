import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080 /";
const token: string =
  "eyJhbGciOiJSUzI1NiJ9.eyJpZCI6ImRlOTE0NzcwLWFlOTktNGEzYy05OWViLWRmNzZhMTY5Y2ZlNCIsInJvbGUiOiJPV05FUiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJpdGVtOmRlbGV0ZSJ9LHsiYXV0aG9yaXR5IjoiaXRlbTpjcmVhdGUifSx7ImF1dGhvcml0eSI6Iml0ZW06cmVhZCJ9LHsiYXV0aG9yaXR5IjoiaXRlbTp1cGRhdGUifSx7ImF1dGhvcml0eSI6IlJPTEVfT1dORVIifV0sInZlcnNpb24iOjIwLCJ1c2VybmFtZSI6Im5vcm1fb3duZXJfMyIsInN1YiI6Im5vcm1fb3duZXJfMyIsImlhdCI6MTc1NzE1NjMwMCwiZXhwIjoxNzU3MTY2MzgwfQ.MrmlDGfZJHRUxsHUB4viFhkfoO1kZ_-roWhRr9g26XQ4hb9A6aMUCGEk8nBiMwYu8yDByTkLstI4S7crwwjg0JlGYK7nInsauqyW8aT222C1CPhIsrVBpqMy_Nyios_e28HKNFLuuZfoXvqh3RzWmU-WMPyluzW9aZ9NKTZjCsLYYHzyjjzPiTWj4KCc4rvBTtakdtOFJYaxYcMMMQu1YYQqpZ4zxkhvdyF9QsYrGG-cALiJ496qnVbfxvRC8JVWaPPhxAjkZBum3H-smTPCl9yt2yM59imaucwxgPRywjprS4uClbsMhVtvWmBKqgS5kXg13s7IUgVkp_aYV00Dcg";
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`,
  // },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    if (!config.url?.startsWith("/auth/")) {
      // const token = localStorage.getItem("auth-token");
      // if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // }
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
