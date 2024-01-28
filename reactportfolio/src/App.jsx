import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="projects" element={<Projects />} />
        </Routes>
    </Router>;
}
export default App
