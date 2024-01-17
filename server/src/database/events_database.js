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

export const dbMethods = {
    getAllEventsFromDB,
    addEventToDB,
}