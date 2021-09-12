import React from 'react';
import SectionAbout from '../components/sections/About';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('Conoceme');
  return (
    <div>
      <SectionAbout isAboutPage={true} />
    </div>
  );
}
