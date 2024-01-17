// import React from 'react';
// import '../eventForm/eventForm.css'

// const EventForm = () => {

//     const handleAddEvent = (e) => {
//         e.preventDefault();
//         console.log('data');
//     }

//     return (
//         <div className='event-form'>
//             <h2>Add a new event</h2>
//             <form onSubmit={handleAddEvent}>
//                 <div className='event-form-fields'>
//                     <input type='text' placeholder='Event Name' required></input>
//                     <input type='text' placeholder='Event Description' required></input>
//                     <input type='date' placeholder='Event Date'></input>
//                     <button type='submit'>ADD EVENT</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default EventForm;


import React, { useState } from 'react';
import '../eventForm/eventForm.css';

const EventForm = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddEvent = (e) => {
        e.preventDefault();
        console.log('data');
    }

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            {modalVisible && (
                <div className='modal-overlay'>
                    <div className='event-form'>
                        <div className='header-add-modal'>
                            <h2>Add a new event</h2>
                            <button onClick={closeModal} className='btn-close-modal'>Close Modal</button>
                        </div>
                        <form onSubmit={handleAddEvent}>
                            <div className='event-form-fields'>
                                <input type='text' placeholder='Event Name' required />
                                <input type='text' placeholder='Event Description' required />
                                <input type='date' placeholder='Event Date' />
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