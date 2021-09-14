import React from 'react';

export default function SingleSkill({ skill }) {
  const { url, name } = skill;
  const skillClass = 'section-skills-list-item';

  return (
    <li className={!url ? skillClass : `${skillClass}-container`}>
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
}
