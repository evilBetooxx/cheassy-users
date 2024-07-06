import { Router } from "express";
import { signInController, signUpController, verifyTokenController } from "./dependencies";

const UserRouter = Router();

UserRouter.post("/signup", signUpController.run.bind(signUpController));
UserRouter.post("/signin", signInController.run.bind(signInController));
// UserRouter.put("/update", jsonWebTokenUtility.verifyToken, updateController.run.bind(updateController));
UserRouter.get("/status", verifyTokenController.run.bind(verifyTokenController));

export default UserRouter;