// src/components/ProjectsSection.js
import React from 'react';
import ProjectCard from './ProjectCard';

// Array of project data
const projects = [
  {
    title: "Steam Info Network",
    description: "A platform for tracking progress and competing with friends in Steam games, with an option for SMS updates.",
    imageUrl: "/images/TeamLogo.png",
    githubLink: "https://github.com/SWoinowsky/ProjectTeamPlus",
    moreInfoLink: "/steam-info-network",
    features: [
      "🗞️ Stay up to date on your favorite Steam games",
      "⚖️ Track other players' progress and compete",
      "🏁 Compete in organized races",
      "🏅 Earn and show off badges",
      "📲 Get real-time updates via SMS"
    ]
  },
  {
    title: "Maintenance Tracker",
    description: "Streamline equipment and maintenance management with role-based access and interactive dashboards.",
    imageUrl: "/images/Project Maintenance Picture.png",
    githubLink: "https://github.com/JustinDavis7/MaintenanceTracker",
    moreInfoLink: "/maintenance-tracker",
    features: [
      "🛠️ Equipment Management with Bootstrap cards.",
      "📌 Kanban-style ticket management with drag-and-drop.",
      "📅 Calendar integration for scheduling and PM tickets.",
      "🔒 Role-based access control with Admin, Maintenance, and MaintenanceLead roles.",
      "📊 Visual metrics and future dashboard enhancements."
    ]
  },
  {
    title: "Raffler",
    description: "A custom-made random name picker for reliable raffles and screenings.",
    imageUrl: "/images/Raffler Logo.png",
    githubLink: "https://github.com/JustinDavis7/my-code-playground/tree/main/Demos/Raffle%20C%23%20Desktop%20Application/Raffler",
    moreInfoLink: "/raffler",
    features: [
      "🎲 Truly random name selection every time.",
      "🖥️ Easy-to-use GUI with customizable name entries.",
      "🔒 Locally run for complete privacy—no data harvesting.",
      "🖨️ Printable results through dynamic HTML generation.",
      "🔄 Automatically clears old results to avoid clutter."
    ]
  }
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-500 mb-10">My Projects</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
