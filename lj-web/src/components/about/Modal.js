// Modal.js
import React from 'react';
import './modal.css'; // Include some basic CSS for the modal

const Modal = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
