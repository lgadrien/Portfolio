import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";
import Error from "./Components/Error/Error";
import { NavigationProvider } from "./context/NavigationContext";

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </NavigationProvider>
    </Router>
  );
};

export default App;
