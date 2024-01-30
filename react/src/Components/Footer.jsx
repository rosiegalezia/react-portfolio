import "./Components.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className=" my-5">
            <footer className="">
                <div className="text-center">
                    <a href='mailto:rosiegalezia@gmail.com' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>

                    <a href='https://www.linkedin.com/in/rosiegalezia/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>

                    <a href='https://github.com/rosiegalezia' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                </div>

                <div className="footer-copyright text-center py-3">© 2024 Copyright: Rosie Galezia
                </div>
            </footer>

        </div>

    )
}

export default Footer