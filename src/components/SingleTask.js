import React from 'react';

export default function SingleTask({ task }) {
  const { id, name, img, description } = task;
  return (
    <li className="section-single-work-item">
      <h4 className="section-tertiary-title section-single-work-item-name">
        {name}
      </h4>
      {img && (
        <img
          className="section-single-work-item-img"
          src={`../images/work/${img}`}
          alt={`Imagen del proceso ${id + 1}`}
        />
      )}
      {description && (
        <p className="section-single-work-item-desc">{description}</p>
      )}
    </li>
  );
}
