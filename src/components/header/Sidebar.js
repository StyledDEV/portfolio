import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import SingleIcon from '../SingleIcon';

export default function Sidebar() {
  const { icons, siteName, logo } = useContext(DataContext);
  return (
    <aside className="sidebar">
      <Link to="/">
        <img className="sidebar-img" src={logo} alt="Logo" draggable="false" />
      </Link>
      <div>
        {icons &&
          icons.map((icon) => (
            <SingleIcon key={icon.id} icon={icon} siteName={siteName} />
          ))}
      </div>
    </aside>
  );
}
