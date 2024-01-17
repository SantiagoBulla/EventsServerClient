import React from 'react';
import '../events/EventsPage.css'
import EventForm from '../../components/pure/forms/eventForm/EventForm';
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
