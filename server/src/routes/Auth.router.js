import { Router } from "express";
import { methods as eventsController } from "../controller/Auth.controller.js";

const authRouter = Router();

authRouter.post('/login', eventsController.login);

export default authRouter;