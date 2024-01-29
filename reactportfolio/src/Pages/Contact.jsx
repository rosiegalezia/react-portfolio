import ReactDOM from 'react-dom'
import React, { useState } from 'react';

import Form from '../Components/Form';
import ContactIcons from '../Components/ContactIcons';

import '../Pages/Styles.css'

function Contact() {
    return <div className='background'>
        <Form></Form>
        <ContactIcons></ContactIcons>
    </div>
}
export default Contact

