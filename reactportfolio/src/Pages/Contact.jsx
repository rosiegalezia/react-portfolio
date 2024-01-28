import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'


function Contact() {
    return <div>
        <h2 className="p-3">Contact me:</h2>
        <div className="p-3">
            <p> <a href='mailto:rosiegalezia@gmail.com'>
                <div className='email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </a>
            </p>

            {/* <div className='linkedin'>
            <FontAwesomeIcon icon={faLinkedin} />
        </div> */}
            {/* <div className='github'>
        <FontAwesomeIcon icon={faGithub} />
        </div> */}
        </div>

    </div>
}
export default Contact



// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

