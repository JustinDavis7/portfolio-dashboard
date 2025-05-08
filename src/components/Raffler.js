// src/components/Raffler.js
import React from 'react';
import ListSection from './ListSection';
import { Link } from 'react-router-dom';

function Raffler() {
  const developmentDetails = [
    "Developed to solve real-world issues with unreliable name pickers.",
    "Designed for local use to maintain complete privacy—no external data storage.",
    "Built with Windows Form Applications to learn GUI development independently."
  ];

  const features = [
    "🎲 Truly random name selection every time.",
    "🖥️ Easy-to-use GUI with customizable name entries.",
    "🔒 Locally run for complete privacy—no data harvesting.",
    "🖨️ Printable results through dynamic HTML generation.",
    "🔄 Automatically clears old results to avoid clutter."
  ];

  const screenshots = [
    "/images/Raffler 1.png",
    "/images/Raffler 2.png",
  ];

  return (
    <div className="bg-gray-400 min-h-screen py-10">
      {/* Card Layout */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto relative">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl font-bold mb-4">Raffler</h1>

        <img 
          src="/images/Raffler Logo.png" 
          alt="Raffler" 
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />

        <p className="text-gray-700 mb-4 text-center">
          Raffler is a custom-made random name picker designed to solve real-world issues with online name pickers.
          Locally run for privacy, it generates truly random selections every time, with easily printable results.
        </p>

        <ListSection title="Development Details:" items={developmentDetails} />
        <ListSection title="Features:" items={features} />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Screenshots:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screenshots.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Screenshot ${index + 1}`} 
              className="rounded-lg shadow-md hover:shadow-lg transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Raffler;
