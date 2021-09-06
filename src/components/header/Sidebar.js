import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

export default function Sidebar() {
  const { icons, siteName, logo } = useContext(DataContext);
  return (
    <aside className="sidebar">
      <Link to="/">
        <img className="sidebar-img" src={logo} alt="Logo" draggable="false" />
      </Link>
      <div>
        {icons &&
          icons.map((icon) => {
            const { id, img, url, name, type } = icon;
            const isEmail = type === 'email';
            const linkUrl = isEmail ? `mailto:${url}` : url;
            const linkTarget = !isEmail ? '_blank' : null;
            const linkTitle = isEmail
              ? `Enviar correo a ${url}`
              : `Ir al ${name} de ${siteName}`;

            return (
              <a
                key={id}
                className="sidebar-icon"
                href={linkUrl}
                target={linkTarget}
                rel="noreferrer"
                title={linkTitle}
              >
                <img
                  draggable="false"
                  className="sidebar-icon-img"
                  src={`../images/icons/${img}`}
                  alt={name}
                />
              </a>
            );
          })}
      </div>
    </aside>
  );
}
