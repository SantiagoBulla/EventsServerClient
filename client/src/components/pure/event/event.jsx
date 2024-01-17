import React, { useState } from 'react';
import '../event/event.css'

const Event = ({ eventData }) => {

    const [event, setEvent] = useState(eventData);

    return (
        <div>
            <div className='event'>
                <div className="countdown">
                    <span className="days">{event.countdown}</span>
                    <span className="text">dias para</span>
                </div>
                <p className='name-event'>{event.eventName}</p>
                <p className='date-event'>{event.eventDate}</p>
                <button className='delete-event'>DELETE</button>
            </div>
        </div>
    );
}

export default Event;
