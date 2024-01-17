import React from 'react';
import './EventList.css';
import Event from '../../pure/event/event';
import EventForm from '../../pure/forms/eventForm/EventForm';

const EventList = () => {
    const events = [];
    const data = {
        "idEvent": 3,
        "eventName": "My Hapy Bithday",
        "eventDescription": "The best book's events in Colombia",
        "eventDate": "2024-04-17",
        "idUserFK": "12345",
        "countdown": 90
    }

    for (let i = 0; i < 4; i++) {
        // Agrega eventos a la lista
        events.push(<Event key={i} eventData={data} />);
    }

    const addEvent = (message) => {
        console.log(`la data de form es ${message}`);
    }

    return (
        <div className='event-list'>
            <div className='event-list-header'>
                <div className='el-header-title'>
                    <h1 className='title-event-list'>TUS EVENTOS SON</h1>
                </div>
                <div className='el-header-add'>
                    <EventForm />
                </div>
            </div>
            <div className='event-list-events'>
                {events}
            </div>
        </div>
    );
}

export default EventList;
