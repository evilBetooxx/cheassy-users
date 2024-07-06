import { UserRepositoryPrisma } from "./repository.prisma";

import { SignInController } from "./controllers/signin.controller";
import { SignUpController } from "./controllers/signup.controller";
// import { UpdateController } from "./controllers/update.controller";
import { VerifyTokenController } from "./controllers/verifyToken.controller";

import { signIn } from "../application/use-cases/signin";
import { signUp } from "../application/use-cases/signup";
// import { update } from "../application/use-cases/update";
import { VerifyToken } from "../application/use-cases/verifyToken";

import { BcryptUtility } from "./utilities/bycript.utility";
import { JsonWebTokenUtility } from "./utilities/jwt.utility";

const repository = new UserRepositoryPrisma();

const bycriptUtility = new BcryptUtility();

const jwtUtility = new JsonWebTokenUtility();

const signInUseCase = new signIn(repository, bycriptUtility);
export const signInController = new SignInController(signInUseCase);

const signUpUseCase = new signUp(repository, bycriptUtility);
export const signUpController = new SignUpController(signUpUseCase);

// const updateUseCase = new update(repository);
// export const updateController = new UpdateController(updateUseCase);

const verifyTokenUseCase = new VerifyToken(repository, jwtUtility);
export const verifyTokenController = new VerifyTokenController(verifyTokenUseCase);