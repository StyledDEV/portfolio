import React, { useContext } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { DataContext } from '../context/DataContext';
import SectionMain from '../components/sections/Main';
import SectionSkills from '../components/sections/Skills';
import SectionAbout from '../components/sections/About';
import SectionContact from '../components/sections/Contact';

export default function Home() {
  const { skills } = useContext(DataContext);
  useDocumentTitle('Inicio');
  return (
    <>
      <SectionMain />

      {skills.length > 0 && <SectionSkills skills={skills} />}
      <SectionAbout />
      <SectionContact />
    </>
  );
}
