import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import SingleWork from '../../components/SingleWork';

export default function Work() {
  const { works } = useContext(DataContext);
  return (
    <section className="section work">
      <h2 className="section-title">Trabajos realizados</h2>
      <div className="section-work-list">
        {works.map((work) => (
          <SingleWork key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}
