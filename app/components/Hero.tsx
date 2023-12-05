'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
    if (localStorage.theme === 'light') {
      localStorage.theme = 'light';
    }
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
    if (!localStorage.theme) localStorage.theme = 'light';
  }, []);

  function changeTheme() {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  function removeTheme() {
    localStorage.removeItem('theme');
  }

  return (
    <section className="relative h-screen">
      <Image
        className="z--10 opacity-30 dark:opacity-100"
        src="/img/hero.jpg"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: '18% 100%',
        }}
        alt="Picture of the author"
      />
      <div className="absolute inset-0 max-w-[20rem] h-[8rem] mx-auto my-auto z-100">
        <h1 className="text-black dark:text-white">Warberg</h1>
        <h5 className="text-center text-black dark:text-white">
          Fästningen på berget
        </h5>
        <button onClick={changeTheme}>BYT TEMA</button>
      </div>
    </section>
  );
};

export default Hero;
