import ReactDOM from 'react-dom'
import React, { useState } from 'react';

import Form from '../Components/Form';
import ContactIcons from '../Components/ContactIcons';

import './Styles.css'

function Contact() {
    return <div className='background min-vh-100 pb-5'>
        <Form></Form>
        <ContactIcons></ContactIcons>
    </div>
}
export default Contact

