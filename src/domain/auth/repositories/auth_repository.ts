import type { LoginRequestModel } from "../../../data/auth/model/request/login_request_model";
import type { LoginEntity } from "../entities/session_entity";

export interface AuthRepository {
  login(loginRequest: LoginRequestModel): Promise<LoginEntity | null>;
  //   logout(): Promise<void>;
  //   getUserRole(userId: string): Promise<UserRole>;
  refreshToken(refresh_token: string): Promise<LoginEntity | null>;
  ///TODO: Handle signup later
  // signup(): Promise<void>;
}
