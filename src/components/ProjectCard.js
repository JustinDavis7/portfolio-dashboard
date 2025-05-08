// src/components/ProjectCard.js
import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, imageUrl, githubLink, moreInfoLink, features }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={imageUrl}
        alt={`${title} Thumbnail`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View More
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="relative p-6 bg-white rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">{title} - Details</h3>
          
          <div className="flex justify-center items-center mb-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-96 h-64 object-cover"
            />
          </div>
          
          <p className="text-gray-700 mb-4">{description}</p>

          {/* Restore the List Style */}
          <ul className="text-gray-700 mb-4 text-left list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View on GitHub
            </a>

            <Link
              to={moreInfoLink}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              onClick={closeModal}
            >
              More Info
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectCard;
