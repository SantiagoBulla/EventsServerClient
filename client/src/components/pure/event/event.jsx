import React from 'react';
import '../event/event.css'

const Event = () => {
    return (
        <div>
            <div className='event'>
                <div className="countdown">
                    <span className="days">9</span>
                    <span className="text">dias para</span>
                </div>
                <p className='name-event'>Happy Birthday Happy Birthday Happy Birthday Happy Birthday</p>
                <p className='date-event'>2024-02-16</p>
                <button className='delete-event'>DELETE</button>
            </div>
        </div>
    );
}

export default Event;
