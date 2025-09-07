import { injected } from "brandi";
import type { LoginRequestModel } from "../../../data/auth/model/request/login_request_model";
import type { AuthRepository } from "../repositories/auth_repository";
import { TOKENS } from "../../../common/di/tokens";
import type { LoginEntity } from "../entities/session_entity";

export class AuthUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(loginRequest: LoginRequestModel): Promise<LoginEntity | null> {
    return this.authRepository.login(loginRequest);
  }

  async refreshToken(refresh_token: string): Promise<LoginEntity | null> {
    return this.authRepository.refreshToken(refresh_token);
  }
}

injected(AuthUseCase, TOKENS.authRepository);
