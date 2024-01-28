import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="blog" element={<Projects />} /> */}
        {/* Define a route that will have descendant routes */}
        {/* <Route path="contact/*" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App
