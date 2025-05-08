// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SteamInfoNetwork from './components/SteamInfoNetwork';
import Raffler from './components/Raffler';
import MaintenanceTracker from './components/MaintenanceTracker';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProjectsSection />
              <ContactSection />
            </>
          }
        />
        <Route path="/steam-info-network" element={<SteamInfoNetwork />} />
        <Route path="/raffler" element={<Raffler />} />
        <Route path="/maintenance-tracker" element={<MaintenanceTracker />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
