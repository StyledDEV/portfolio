import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <Sidebar />
      <Navbar />
    </header>
  );
}
