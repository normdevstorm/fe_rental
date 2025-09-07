import { Container } from "brandi";
import { TOKENS } from "./tokens";
import { AuthRepositoryImpl } from "../../data/auth/repository/auth_reponsitory_iml";
import { AuthUseCase } from "../../domain/auth/usecases/auth_usecase";
const container = new Container();
container
  .bind(TOKENS.authRepository)
  .toInstance(AuthRepositoryImpl)
  .inSingletonScope();

container.bind(TOKENS.authUsecase).toInstance(AuthUseCase).inSingletonScope();

export { container };
