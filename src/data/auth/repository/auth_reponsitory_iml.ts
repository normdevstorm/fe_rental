import type { LoginEntity } from "../../../domain/auth/entities/session_entity";
import type { AuthRepository } from "../../../domain/auth/repositories/auth_repository";
import { authApi } from "../api/auth_api";
import type { LoginRequestModel } from "../model/request/login_request_model";
import { toLoginEntity } from "../model/response/login_response_model";

export class AuthRepositoryImpl implements AuthRepository {
  private static instance: AuthRepositoryImpl;

  public static getInstance(): AuthRepositoryImpl {
    if (!AuthRepositoryImpl.instance) {
      AuthRepositoryImpl.instance = new AuthRepositoryImpl();
    }
    return AuthRepositoryImpl.instance;
  }

  async login(loginRequest: LoginRequestModel): Promise<LoginEntity | null> {
    try {
      const response = await authApi.login(loginRequest);
      if (response === null) {
        throw new Error("Login failed");
      }
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      return toLoginEntity(response.data);
    } catch (error) {
      console.error("AuthRepositoryImpl login error:", error);
      return null;
    }
  }

  // logout(): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }

  async refreshToken(refresh_token: string): Promise<LoginEntity | null> {
    try {
      const response = await authApi.refreshToken(refresh_token);
      if (response !== null) {
        localStorage.setItem("accessToken", response.accessToken);
        // localStorage.setItem("refreshToken", response.refreshToken);
        return toLoginEntity(response);
      }
      return null;
    } catch (error) {
      console.error("AuthRepositoryImpl refreshToken error:", error);
      return null;
    }
  }
}

// export const authRepositoryImpl = AuthRepositoryImpl.getInstance();
