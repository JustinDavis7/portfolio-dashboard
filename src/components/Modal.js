import React, { useEffect } from 'react';
import '../styles.css'

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
        <div className="modal-overlay">
        <div id="modal-content" className="modal-content">
            {/* Close Button */}
            <button onClick={onClose} className="modal-close">×</button>

            {/* Modal Body */}
            {children}
        </div>
        </div>
    );
}
  

export default Modal;
