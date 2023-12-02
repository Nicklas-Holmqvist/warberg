import React from 'react';
import { LuChevronDown } from '@metamist/lucide-react';

interface ReadMoreButtonProps {}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center pb-4 pt-2">
      <button>Läs mer</button>
      <LuChevronDown className="self-center" size={18} />
    </div>
  );
};

export default ReadMoreButton;
