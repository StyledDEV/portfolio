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
        {img && (
          <a href={`${img.src}`} target="_blank" rel="noreferrer">
            <img className="modal-img" {...img} alt={img.alt} />
          </a>
        )}
      </div>
    </>
  );
}
