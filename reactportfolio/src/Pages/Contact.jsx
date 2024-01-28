import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return <div>
        <h2 className="p-3">Contact me:</h2>
        <div className="p-3">
            <div className='email'>
                <p> <a href='mailto:rosiegalezia@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                </p>
            </div>

            <div className='linkedin'>
                <p> <a href='https://www.linkedin.com/feed/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                </p>
            </div>

            <div className='github'>
                <p> <a href='https://github.com/'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                </p>
            </div>
        </div>

    </div>
}
export default Contact

