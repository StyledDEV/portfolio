import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionContact from '../components/sections/Contact';

export default function Contact() {
  useDocumentTitle('Contacto');
  return <SectionContact />;
}
