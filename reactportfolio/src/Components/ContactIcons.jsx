import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function ContactIcons() {
    
    return <div className='pb-5'>
        <h3 className="p-5">You can also can reach me using the buttons below:</h3>
        <div className="px-5 py-1 inline-block">
            <h3>
                <a href='mailto:rosiegalezia@gmail.com' target="_blank" className='p-2'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                </a>

                <a href='https://www.linkedin.com/in/rosiegalezia/' target="_blank" className='p-2'>
                    <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                </a>

                <a href='https://github.com/rosiegalezia' target="_blank" className='p-2'>
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
                </a>
            </h3>

        </div>

    </div>
}
export default ContactIcons

