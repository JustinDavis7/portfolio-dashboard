// src/components/MaintenanceTracker.js
import React from 'react';
import ListSection from './ListSection';
import { Link } from 'react-router-dom';

function MaintenanceTracker() {
  const developmentDetails = [
    "Built with .NET MVC Framework and Entity Framework Core.",
    "Role-based access for Admin, Maintenance, and MaintenanceLead.",
    "Secure user authentication with ASP.NET Identity.",
    "Interactive Kanban board and calendar for ticket management.",
    "Designed with Bootstrap for responsive UI."
  ];

  const features = [
    "🛠️ Equipment Management with Bootstrap cards.",
    "📌 Kanban-style ticket management with drag-and-drop.",
    "📅 Calendar integration for scheduling and PM tickets.",
    "🔒 Role-based access control with Admin, Maintenance, and MaintenanceLead roles.",
    "📊 Visual metrics and future dashboard enhancements."
  ];

  const screenshots = [
    "/images/home_view.png",
    "/images/equipment_page.png",
    "/images/equipment_details.png",
    "/images/kanban_board.png",
    "/images/ticket_details.png",
    "/images/calendar_view.png",
    "/images/pm_view.png",
    "/images/admin_management_dashboard.png"
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

        <h1 className="text-3xl font-bold mb-4">Maintenance Tracker</h1>

        <img 
          src="/images/Project Maintenance Picture.png" 
          alt="Maintenance Tracker" 
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />

        <p className="text-gray-700 mb-4 text-center">
          Maintenance Tracker is a robust solution for managing equipment, tickets, and preventive maintenance 
          schedules. With role-based access, streamlined ticket views, and a calendar integration, it empowers 
          organizations to keep their assets running smoothly.
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

export default MaintenanceTracker;
