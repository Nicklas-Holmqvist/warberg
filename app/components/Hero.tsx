import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { LuChevronDown } from '@metamist/lucide-react';

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
      <Link
        className="absolute w-10 h-10 bottom-10 left-0 right-0 m-auto text-black dark:text-white animate-bounce hover:animate-none"
        href={'#explore'}>
        <LuChevronDown
          className="m-auto animate-ping border-[0.2rem] rounded-full"
          size={24}
        />
      </Link>
    </section>
  );
};

export default Hero;
