import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionWork from '../components/sections/Work';

export default function Work() {
  useDocumentTitle('Trabajos');
  return <SectionWork />;
}
