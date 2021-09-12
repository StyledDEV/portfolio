import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Página no encontrada');
  return (
    <section className="section">
      <h4 className="section-title">Página no encontrada</h4>
      <p>
        La dirección que ingresaste no coincide con ningún contenido en el
        sitio.
      </p>
    </section>
  );
}
