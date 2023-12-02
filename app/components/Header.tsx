import React from 'react';
import Hero from './Hero';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="h-screen w-full">
      <Hero />
    </header>
  );
};

export default Header;
