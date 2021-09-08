import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

export default function Work() {
  const { works } = useContext(DataContext);
  return (
    <section className="section work">
      <h2 className="section-title">Trabajos realizados</h2>
      <div className="section-work-list">
        {works.map((work) => {
          const {
            id,
            name,
            img: { single: singleImg },
          } = work;
          const formattedName = name.toLowerCase().replaceAll(' ', '-');
          return (
            <Link key={id} to={`/work/${formattedName}`}>
              <div className="section-work-list-item">
                <img
                  className="section-work-list-item-img"
                  src={`../images/work/${singleImg}`}
                  alt={`preview of ${name}`}
                />
                <div>
                  <h4 className="section-work-list-item-name">{name}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
