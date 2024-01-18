import React from 'react';
import '../eventForm/eventForm.css';
import { useRef } from 'react';

const EventForm = ({ closeModal, addEvent, modalVisible }) => {

    //references for input fields
    let nameEvent = useRef();
    let descriptionEvent = useRef();
    let dateEvent = useRef();

    //manages a submission form action
    const handleAddEvent = (e) => {
        e.preventDefault();

        const now = new Date().toISOString().split('T')[0]
        const userDate = dateEvent.current.value

        //validate the date to avoid old dates
        if (now > userDate) {
            alert(`The event date can't be lower than the actual date`);
            dateEvent.current.value = ''
            return;
        }

        const data = {
            eventName: nameEvent.current.value,
            eventDescription: descriptionEvent.current.value,
            eventDate: userDate
        }

        addEvent(data);
        closeModal();
    }


    return (
        <div>
            {modalVisible && (
                <div className='modal-overlay'>
                    <div className='event-form'>
                        <div className='header-modal'>
                            <h2>ADD A NEW EVENT</h2>
                            <button onClick={closeModal} id='btn-close-modal'>Close Modal</button>
                        </div>
                        <form onSubmit={handleAddEvent}>
                            <div className='event-form-fields'>
                                <input type='text' placeholder='Event Name' ref={nameEvent} required />
                                <input type='text' placeholder='Event Description' ref={descriptionEvent} required />
                                <input type='date' placeholder='Event Date' ref={dateEvent} required />
                                <button type='submit' className='btn-add-modal'>ADD EVENT</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EventForm;