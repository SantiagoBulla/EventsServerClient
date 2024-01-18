import axios from "axios";

/**
 * obtains all events through the  access point provided by the API
 * @returns the API responses with the event data
 */
const getAllEvents = async () => {
    return axios.get('http://localhost:9000/api/events')
        .then(response => {
            return response;
        }
        )
        .catch(error => {
            throw error;
        });
}

/**
 * sends to the API a dispatch request to add an event 
 * @param {object} data 
 * @returns the  transaction's response
 */
const addNewEvent = async (data) => {
    return axios.post('http://localhost:9000/api/events', data)
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        });
}

export const eventServices = {
    getAllEvents,
    addNewEvent,
}