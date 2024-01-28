import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS

// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavTabs';
import Home from './Pages/Home';
import ProjectsGallery from './Pages/Projects-gallery';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="projects-gallery" element={<ProjectsGallery />} />
        </Routes>
    </Router>;
}

export default App
