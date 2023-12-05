import React from 'react';
import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
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
      </div>
    </section>
  );
};

export default Hero;
