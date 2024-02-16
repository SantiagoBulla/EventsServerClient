import { Router } from "express";
import { methods as eventsController } from "../controller/Events.controller.js";

const eventsRouter = Router(); // creates the router to events services

// http requests to events servicies
eventsRouter.get('/', eventsController.getAllEvents);
eventsRouter.get('/:iduser', eventsController.getAllEventsByUser);
eventsRouter.post('/', eventsController.addEvent);
eventsRouter.delete('/:id', eventsController.deleteEvent); // id via url

export default eventsRouter;