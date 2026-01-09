import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { NavigationProvider } from "./context/NavigationContext";

// Lazy loading des routes pour optimiser les performances
const Home = lazy(() => import("./pages/Home"));
const Stats = lazy(() => import("./pages/Stats"));
const Error = lazy(() => import("./Components/Error/Error"));

// Composant de chargement
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-dark-accent"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <NavBar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </NavigationProvider>
    </Router>
  );
};

export default App;
