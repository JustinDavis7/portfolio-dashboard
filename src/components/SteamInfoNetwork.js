// src/components/SteamInfoNetwork.js
import React from 'react';
import ListSection from './ListSection';
import { Link } from 'react-router-dom';

function SteamInfoNetwork() {
  const developmentDetails = [
    "Developed over six 2-week sprints as part of the Senior Sequence at Western Oregon University, with a team of four cross-functional developers.",
    "Built with C#, .Net, JavaScript, and AJAX, and hosted on Azure.",
    "Presented at the Academic Excellence Showcase in June 2023."
  ];

  const apisIntegrations = [
    "Leveraged the Steam API for player statistics and game data.",
    "Integrated the IGDB API to supplement missing data and bypass Steam's rate limitations.",
    "Faced challenges with Steam API's outdated documentation and vague rate limits, resulting in temporary mutes. IGDB filled these gaps with clearer documentation and robust features."
  ];

  const additionalTools = [
    "ChatGPT was used for summarizing lengthy game update logs, making them easier to understand and follow."
  ];

  const screenshots = [
    "/images/Project Team++ - 1.png",
    "/images/Project Team++ - 2.png",
    "/images/Project Team++ - 3.png",
    "/images/Project Team++ - 4.png",
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

        <h1 className="text-4xl font-bold mb-4 text-gray-800">Steam Info Network</h1>
        
        <img 
          src="/images/TeamLogo.png" 
          alt="Steam Info Network" 
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />

        <p className="text-gray-600 mb-6 text-center leading-relaxed">
          Steam Info Network is a competitive platform designed for gamers to challenge friends on Steam through 
          achievement competitions, races, and receive concise update logs that make game news more digestible.
        </p>

        <ListSection title="Development Details:" items={developmentDetails} />
        <ListSection title="APIs & Integrations:" items={apisIntegrations} />
        <ListSection title="Additional Tools:" items={additionalTools} />

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

export default SteamInfoNetwork;
