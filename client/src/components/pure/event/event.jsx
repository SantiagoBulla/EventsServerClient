import React from 'react';
import '../event/event.css'

const Event = ({ eventData, deleteEvent }) => {
    // destructuring syntax to event data
    const { countdown, eventName, eventDate } = eventData;

    //control variables
    let countdownText = countdown;
    let isText = false;
    let now = true;

    //asigning a value to countdown and changing the values of the control variables
    if (countdown === 0) {
        countdownText = 'Today'
        isText = true;
    } else if (countdown < 0) {
        countdownText = 'Expired'
        isText = true;
        now = false;
    }

    //span class style mapping
    const textOrDate = () => {
        if (isText) {
            const className = now ? 'days-text-now' : 'days-text-expired';
            return <span className={className}>{countdownText}</span>;
        } else {
            return (
                <div>
                    <span className="days">{countdownText}</span>
                    <span className="text">dias para</span>
                </div>
            );
        }
    }

    return (
        <div>
            <div className='event'>
                <div className="countdown">
                    {textOrDate()}
                </div>
                <p className='name-event'>{eventName}</p>
                <p className='date-event'>{eventDate}</p>
                <button onClick={deleteEvent} className='delete-event'>DELETE</button>
            </div>
        </div>
    );
}

export default Event;
