import { Router } from "express";
import { methods as userController } from "../controller/User.controller.js";

const userRouter = Router(); // creates the router to users services
// http requests to users servicies
userRouter.get('/:id', userController.getUser);

export default userRouter;