import { Router } from "express";
import { signInController, signUpController, signOutController } from "./dependencies";
import { JsonWebTokenUtility } from "./utilities/jwt.utility";

const UserRouter = Router();
const jsonWebTokenUtility = new JsonWebTokenUtility();

UserRouter.post("/signup", signUpController.run.bind(signUpController));
UserRouter.post("/signin", signInController.run.bind(signInController));
UserRouter.post("/signout", jsonWebTokenUtility.verifyToken, signOutController.run.bind(signOutController));
// UserRouter.put("/update", jsonWebTokenUtility.verifyToken, updateController.run.bind(updateController));

export default UserRouter;