import React from 'react';

export default function Skills({ skills }) {
  return (
    <section className="section section-skills">
      <h2 className="section-title">Habilidades</h2>
      <ul className="section-skills-list">
        {skills.map((skill) => {
          const { id, url, name } = skill;
          const skillClass = 'section-skills-list-item';

          return (
            <li
              key={id}
              className={!url ? skillClass : `${skillClass}-container`}
            >
              {url ? (
                <a
                  className={skillClass}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={`Más información de ${name}`}
                >
                  {name}
                </a>
              ) : (
                name
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
