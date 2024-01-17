import { Router } from "express";
import { methods as eventsController } from "../controller/events.controller.js";

const eventsRouter = Router(); // creates the router to events services

// http requests to events servicies
eventsRouter.get('/', eventsController.getAllEvents);
eventsRouter.post('/', eventsController.addEvent);

export default eventsRouter;