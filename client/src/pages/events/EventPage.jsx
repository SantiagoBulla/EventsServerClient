import React from 'react';
import '../events/EventsPage.css'
import EventList from '../../components/container/eventList/EventList';

const EventPage = () => {
    return (
        <div className='container-event'>
            {/* <EventForm /> */}
            <EventList />
        </div>
    );
}

export default EventPage;
