import { apiClient } from "../../../common/services/api";
import type { ApiResponse } from "../../common/ApiResponse";
import type { LoginRequestModel } from "../model/request/login_request_model";
import type { LoginResponseModel } from "../model/response/login_response_model";

class AuthApi {
  private static instance: AuthApi;

  public static getInstance(): AuthApi {
    if (!AuthApi.instance) {
      AuthApi.instance = new AuthApi();
    }
    return AuthApi.instance;
  }

  async login(
    LoginRequestModel: LoginRequestModel
  ): Promise<ApiResponse<LoginResponseModel> | null> {
    try {
      const response = await apiClient.post<ApiResponse<LoginResponseModel>>(
        "/auth/login",
        LoginRequestModel
      );
      return response.data;
    } catch (error) {
      console.error("Login API error:", error);
      return null;
    }
  }

  async signup(): Promise<void> {
    // Implement signup logic here
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout API error:", error);
    }
  }

  async refreshToken(
    refresh_token: string
  ): Promise<LoginResponseModel | null> {
    try {
      const response = await apiClient.post<LoginResponseModel>(
        "/auth/refresh-token",
        { refresh_token: refresh_token }
      );
      return response.data;
    } catch (error) {
      console.error("Refresh Token API error:", error);
      return null;
    }
  }
}

export const authApi = AuthApi.getInstance();
