import { token } from "brandi";
import type { AuthRepository } from "../../domain/auth/repositories/auth_repository";
import type { AuthUseCase } from "../../domain/auth/usecases/auth_usecase";
export const TOKENS = {
  authRepository: token<AuthRepository>("AuthRepository"),
  authUsecase: token<AuthUseCase>("AuthUseCase"),
};
