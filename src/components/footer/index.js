import React from 'react';

export default function Footer({ siteName }) {
  return (
    <footer>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Copyright {siteName}. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}
