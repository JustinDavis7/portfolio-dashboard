// src/components/ContactSection.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>

        <div className="space-y-4 text-center">
          <p className="text-gray-700 text-lg">
            Feel free to reach out to me through any of the following methods:
          </p>

          <div className="flex justify-center items-center space-x-8">
            <div>
              <p className="font-semibold text-gray-800 flex items-center justify-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <span>Email:</span>
              </p>
              <a 
                href="mailto:justindavis1177@gmail.com"
                className="text-blue-500 hover:underline"
              >
                justindavis1177@gmail.com
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-800 flex items-center justify-center space-x-2">
                <FaLinkedin className="text-blue-500" />
                <span>LinkedIn:</span>
              </p>
              <a 
                href="https://www.linkedin.com/in/justin-davis-177060291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-800 flex items-center justify-center space-x-2">
                <FaGithub className="text-gray-800" />
                <span>GitHub:</span>
              </p>
              <a 
                href="https://github.com/JustinDavis7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
