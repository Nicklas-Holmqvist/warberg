import Link from 'next/link';
import React from 'react';
import { LuChevronDown } from '@metamist/lucide-react';

const ScrollDownIcon = () => {
  return (
    <Link
      className="absolute w-10 h-10 bottom-[10rem] md:bottom-10 left-0 right-0 m-auto text-black dark:text-white animate-bouncing hover:animate-none"
      href={'#explore'}>
      <LuChevronDown
        className="m-auto border-[0.2rem] rounded-full"
        size={24}
      />
    </Link>
  );
};

export default ScrollDownIcon;
