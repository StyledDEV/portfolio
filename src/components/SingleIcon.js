import React from 'react';

export default function SingleIcon({ icon, siteName }) {
  const { img, url, name, type } = icon;
  const isEmail = type === 'email';
  const linkUrl = isEmail ? `mailto:${url}` : url;
  const linkTarget = !isEmail ? '_blank' : null;
  const linkTitle = isEmail
    ? `Enviar correo a ${url}`
    : `Ir al ${name} de ${siteName}`;

  return (
    <a
      className="icon"
      href={linkUrl}
      target={linkTarget}
      rel="noreferrer"
      title={linkTitle}
    >
      <img
        draggable="false"
        className="icon-img"
        src={`../images/icons/${img}`}
        alt={name}
      />
    </a>
  );
}
