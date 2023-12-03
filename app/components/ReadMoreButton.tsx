import React from 'react';
import { LuChevronDown } from '@metamist/lucide-react';

interface ReadMoreButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="flex flex-col justify-center pb-4 pt-2 m-auto"
      {...props}>
      <span>{text}</span>
      <LuChevronDown className="self-center" size={18} />
    </button>
  );
};

export default ReadMoreButton;
