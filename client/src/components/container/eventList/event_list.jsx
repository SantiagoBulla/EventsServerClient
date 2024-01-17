import React from 'react';
import './event_list.css';
import Event from '../../pure/event/event';

const EventList = () => {
    const events = [];

    for (let i = 0; i < 10; i++) {
        // Agrega eventos a la lista
        events.push(<Event />);
    }

    return (
        <div className='event-list'>
            <h1 className='title-event-list'>TUS EVENTOS SON</h1>
            {events}
        </div>
    );
}

export default EventList;
