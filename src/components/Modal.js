// src/components/Modal.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Modal({ isOpen, onClose, children }) {
  // Close the modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modalContent = document.getElementById('modal-content');
      if (modalContent && !modalContent.contains(event.target)) {
        onClose(); // Close the modal if click is outside the content
      }
    };

    if (isOpen) {
      // Add event listener on mount
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      // Cleanup on unmount or modal close
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Cleanup on component unmount
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <motion.div
        id="modal-content"
        className="relative p-6 bg-white rounded-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 font-bold text-xl"
        >
          ×
        </button>

        {/* Modal Body */}
        {children}
      </motion.div>
    </div>
  );
}

export default Modal;
