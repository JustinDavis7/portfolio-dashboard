// src/components/HeroSection.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles.css';

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Portfolio Dashboard
        </h1>
        <p className="text-lg mb-8">
          Discover my work and experience in software development.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Smooth scroll to the Contact section */}
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={500}
            offset={-50}  // adjusts for header height
            className="button-contact cursor-pointer"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
