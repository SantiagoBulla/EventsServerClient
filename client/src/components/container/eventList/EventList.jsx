import React, { useEffect, useState } from 'react';
import './EventList.css';
import Event from '../../pure/event/event';
import EventForm from '../../pure/forms/eventForm/EventForm';
import { eventServices } from '../../../services/apiEventService';

const EventList = () => {
    /**
     * status of the component that manages the component data
     */
    const [modalVisible, setModalVisible] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // get the initial events from API
        fetchData();
    }, []);

    //method that request events from the API
    const fetchData = async () => {
        try {
            const data = await eventServices.getAllEvents();
            if (data.status === 200) {
                setEvents(data.data.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    };

    //http methods
    // TODO create a login to store the user id and associate it with the post action
    const addEvent = async (newEvent) => {
        const idUserFK = '12345';
        const data = {
            ...newEvent,
            idUserFK: idUserFK
        }
        try {
            const response = await eventServices.addNewEvent(data);
            alert(response.data.message);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteEvent = () => {
        console.log('delete was click');
    }

    // manage modal window actions
    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <div className='event-list'>
            <div className='event-list-header'>
                <div className='el-header-title'>
                    <h1>TUS EVENTOS SON</h1>
                    <button onClick={openModal}>Add Event</button>
                </div>
            </div>
            <div className='el-header-add'>
                <EventForm
                    closeModal={closeModal}
                    addEvent={addEvent}
                    modalVisible={modalVisible}
                />
            </div>
            <div className='event-list-events'>
                {
                    events.map((item, index) => {
                        return (
                            <Event key={index} eventData={item} deleteEvent={deleteEvent} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default EventList;
