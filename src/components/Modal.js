import React from 'react';

export default function Modal({ img, setShowModal }) {
  const closeModal = () => {
    document.documentElement.style.overflowY = 'auto';
    setShowModal(false);
  };
  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        {img && <img className="modal-img" {...img} alt={img.alt} />}
      </div>
    </>
  );
}
