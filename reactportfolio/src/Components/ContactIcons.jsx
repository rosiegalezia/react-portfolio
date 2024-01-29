import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function ContactIcons() {
    
    return <div>
        <h3 className="p-5">Alternatively you can reach me using the below:</h3>
        <div className="px-5 py-1 inline-block">
            <h3>
                <a href='mailto:rosiegalezia@gmail.com' className='p-1'>
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                </a>

                <a href='https://www.linkedin.com/feed/' className='p-1'>
                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                </a>

                <a href='https://github.com/rosiegalezia' className='p-1'>
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                </a>
            </h3>

        </div>

    </div>
}
export default ContactIcons

