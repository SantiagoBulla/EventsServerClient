import React from 'react';
import './event_list.css';
import Event from '../../pure/event/event';

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

    for (let i = 0; i < 10; i++) {
        // Agrega eventos a la lista
        events.push(<Event key={i} eventData={data} />);
    }

    return (
        <div className='event-list'>
            <h1 className='title-event-list'>TUS EVENTOS SON</h1>
            {events}
        </div>
    );
}

export default EventList;
