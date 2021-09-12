import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Loading() {
  useDocumentTitle('Cargando...');
  return (
    <section className="section">
      <h4 className="section-title">Cargando...</h4>
    </section>
  );
}
