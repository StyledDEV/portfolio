import React from 'react';
import SingleSkill from '../SingleSkill';

export default function Skills({ skills }) {
  return (
    <section className="section section-skills">
      <h2 className="section-title">Habilidades</h2>
      <ul className="section-skills-list">
        {skills.map((skill) => (
          <SingleSkill key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
}
