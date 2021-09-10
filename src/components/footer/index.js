import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import SingleIcon from '../SingleIcon';

export default function Footer() {
  const { icons, siteName } = useContext(DataContext);
  return (
    <footer>
      <div className="footer-icons">
        {icons.map((icon) => (
          <SingleIcon key={icon.id} icon={icon} siteName={siteName} />
        ))}
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Copyright {siteName}. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}
