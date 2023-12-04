import React from 'react';
import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className="relative h-screen">
      <Image
        className="z--10"
        src="/img/hero.jpg"
        fill
        style={{ objectFit: 'cover', objectPosition: '18% 100%' }}
        alt="Picture of the author"
      />
      <div className="absolute inset-0 max-w-[20rem] h-[8rem] mx-auto my-auto z-100">
        <h1>Warberg</h1>
        <h5 className="text-center text-white">Fästningen på berget</h5>
      </div>
    </section>
  );
};

export default Hero;
