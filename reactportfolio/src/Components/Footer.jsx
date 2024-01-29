import "./Components.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className=" my-5">

            <footer className="text-center text-lg-start">
                <div className="container d-flex justify-content-center py-5">

                    <button type="button" className="btn footerBtn btn-lg btn-floating mx-2" style="background-color: #54456b;">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn footerBtn btn-lg btn-floating mx-2" style="background-color: #54456b;">
                        <i className="fab fa-youtube"></i>
                    </button>

                    <button type="button" className="btn footerBtn btn-lg btn-floating mx-2" style="background-color: #54456b;">
                        <i className="fab fa-instagram"></i>
                    </button>

                    <button type="button" className="btn footerBtn btn-lg btn-floating mx-2" style="background-color: #54456b;">
                        <i className="fab fa-twitter"></i>
                    </button>

                </div>


                <div className="text-center text-white p-3">
                    © 2024 Copyright:
                    <a className="text-white">Rosie Galezia</a>
                </div>

            </footer>

        </div>

    )
}

export default Footer