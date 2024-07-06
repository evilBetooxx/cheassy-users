import { UserRepositoryPrisma } from "./repository.prisma";

import { SignInController } from "./controllers/signin.controller";
import { SignUpController } from "./controllers/signup.controller";
import { SignOutController } from "./controllers/signout.controller";
// import { UpdateController } from "./controllers/update.controller";

import { signIn } from "../application/use-cases/signin";
import { signUp } from "../application/use-cases/signup";
import { signOut } from "../application/use-cases/signout";
// import { update } from "../application/use-cases/update";

import { BcryptUtility } from "./utilities/bycript.utility";

const repository = new UserRepositoryPrisma();

const bycriptUtility = new BcryptUtility();

const signInUseCase = new signIn(repository, bycriptUtility);
export const signInController = new SignInController(signInUseCase);

const signUpUseCase = new signUp(repository, bycriptUtility);
export const signUpController = new SignUpController(signUpUseCase);

const signOutUseCase = new signOut(repository);
export const signOutController = new SignOutController(signOutUseCase);

// const updateUseCase = new update(repository);
// export const updateController = new UpdateController(updateUseCase);