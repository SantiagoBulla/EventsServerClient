import { dbMethods as db } from "../database/events_database.js";
import { validateToken } from "./Auth.controller.js";

/**
 * send all events with the countdown for their fulfillment
 */
const getAllEvents = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const validation = validateToken(token);

        if (!validation.value) {
            return res.status(401).json({ error: validation.message });
        }

        const events = await db.getAllEventsFromDB(); //get the response from db
        const date = new Date();
        // iterates each event and adds the countdown 
        for (let i = 0; i < events.length; i++) {
            const event = events[i]; //store the actual event
            const eventDate = new Date(event.eventDate); // get the date for the event
            // calculates the differece beetwen the event date and the actual date to get the countdown
            const dateDifference = Math.floor((eventDate - date) / (1000 * 60 * 60 * 24));
            //reassigns the value of the event date and adds the countdown of the event
            events[i] = {
                ...event,
                eventDate: eventDate.toISOString().split('T')[0],
                countdown: dateDifference + 1
            };
        }
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllEventsByUser = async (req, res) => {
    try {
        const { iduser } = req.params;
        const token = req.headers.authorization.split(" ")[1];
        const validation = validateToken(token);

        if (!validation.value) {
            return res.status(401).json({ error: validation.message });
        }

        const events = await db.getAllEventsByUserFromDB(iduser); //get the response from db
        const date = new Date();
        // iterates each event and adds the countdown 
        for (let i = 0; i < events.length; i++) {
            const event = events[i]; //store the actual event
            const eventDate = new Date(event.eventDate); // get the date for the event
            // calculates the differece beetwen the event date and the actual date to get the countdown
            const dateDifference = Math.floor((eventDate - date) / (1000 * 60 * 60 * 24));
            //reassigns the value of the event date and adds the countdown of the event
            events[i] = {
                ...event,
                eventDate: eventDate.toISOString().split('T')[0],
                countdown: dateDifference + 1
            };
        }
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addEvent = async (req, res) => {
    try {
        // Gets the token and validates with the server information
        const token = req.headers.authorization.split(" ")[1];
        const validation = validateToken(token);

        if (!validation.value) {
            return res.status(401).json({ error: validation.message });
        }

        // fetches event data from the client request and performs destructuring  sintaxis 
        const { eventName, eventDescription, eventDate, idUserFK } = req.body;
        // Data validation
        if (eventName === undefined || eventDescription === undefined || eventDate === undefined || idUserFK === undefined) {
            return res.json('All fields are required');
        }
        //Creates an object with the event data and makes a request to the database  
        const eventData = { eventName, eventDescription, eventDate, idUserFK };
        const response = await db.addEventToDB(eventData);
        // return a message to the client
        const successMessage = 'Event added successfully';
        res.json({ message: successMessage, details: response });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}

// TODO -> agregate the token validation to the next methods 

/**
 * receives the event id via url and deletes the event from the database
*/
const deleteEvent = async (req, res) => {
    try {
        const { id: idEvent } = req.params;
        const response = await db.deleteEventFromDB(idEvent);
        res.json({ message: 'Event successfully deleted', details: response });
    } catch (error) {
        res.json({ message: 'error in delete', error: error.message });
    }
}

export const methods = {
    getAllEvents,
    addEvent,
    deleteEvent,
    getAllEventsByUser
}