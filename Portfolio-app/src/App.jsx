import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Error from './Components/Error/Error'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
