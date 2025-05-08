// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SteamInfoNetwork from './components/SteamInfoNetwork';
import Raffler from './components/Raffler';
import MaintenanceTracker from './components/MaintenanceTracker';

function App() {
  return (
    <Router>
      <Routes>
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
    </Router>
  );
}

export default App;
