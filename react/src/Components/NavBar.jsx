import "./Components.css"
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-5 py-3 align-items-baseline">
                <a className="navbar-brand title" href="#">
                    Rosie Galezia
                </a>

                <div className="">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active p-3"
                                aria-current="page"
                                to="/"
                                end
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link active p-3"
                                aria-current="page"
                                to="/projects"
                                end
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active p-3"
                                aria-current="page"
                                to="/contact"
                                end
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;