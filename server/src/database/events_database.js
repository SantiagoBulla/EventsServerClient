import { getConnection } from "../config/database.js";

/**
 * 
 * @returns the database response or an error in case of request failure
 */
const getAllEventsFromDB = async () => {
    try {
        const connection = await getConnection();
        const data = await connection.query('select * from events');
        return data;
    } catch (error) {
        throw new Error(`Error fetching events from the database: ${error}`);
    }
}

/**
 * 
 * @returns the database response with the events of the user or an error in case of request failure
 */
const getAllEventsByUserFromDB = async (id) => {
    try {
        console.log(`El id que llega a la bd es ${id}`);
        const connection = await getConnection();
        const data = await connection.query('select * from events where iduserfk = ?', id);
        return data;
    } catch (error) {
        throw new Error(`Error fetching events from the database: ${error}`);
    }
}

/**
 * Inserting a new event to the database
 * @param {object} eventData 
 * @returns the database response to an insert request or an error in case of failure
 */
const addEventToDB = async (eventData) => {
    try {
        const connection = await getConnection();
        const response = await connection.query('insert into events set ?', eventData);
        return response;
    } catch (error) {
        throw new Error(`Error while adding an event to the database: ${error}`);
    }
}

/**
 * Deleting a specific event from the database 
 * @param {int} idEvent 
 * @returns the database response to an deletion request or an error in case of failure
 */
const deleteEventFromDB = async (idEvent) => {
    try {
        const connection = getConnection();
        const response = (await connection).query('delete from events where idEvent = ?', idEvent);
        return response;
    } catch (error) {
        throw new Error(`Error while deleting an event to the database ${error.message}`);
    }
}

export const dbMethods = {
    getAllEventsFromDB,
    addEventToDB,
    deleteEventFromDB,
    getAllEventsByUserFromDB
}