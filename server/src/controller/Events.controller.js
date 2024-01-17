import { dbMethods as db } from "../database/events_database.js";

/**
 * send all events with the countdown for their fulfillment
 */
// TODO return 0 when the event has expired
const getAllEvents = async (req, res) => {
    try {
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
                countdown: dateDifference
            };
        }
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// TODO validate the date so as not to allow dates lower than the actual date
const addEvent = async (req, res) => {
    try {
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
        if (error instanceof DatabaseValidationError) {
            res.status(400).json({ error: 'Validation error in database', details: error.message });
        } else {
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    }
}

export const methods = {
    getAllEvents,
    addEvent
}