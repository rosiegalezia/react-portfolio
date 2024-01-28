import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return <div>
        <h2 className="p-3">Contact me:</h2>
        <div className="p-3 inline-block">
            <h3>
                <a href='mailto:rosiegalezia@gmail.com' className='p-3'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

                <a href='https://www.linkedin.com/feed/' className='p-3'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href='https://github.com/' className='p-3'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </h3>

        </div>

    </div>
}
export default Contact

