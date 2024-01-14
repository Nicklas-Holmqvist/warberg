import React from 'react';

interface TimelineCircleProps {
  side: boolean;
}

const TimelineCircle: React.FC<TimelineCircleProps> = ({ side }) => {
  return (
    <span
      className={`absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white 
          ${side ? 'bottom-[-6px] left-[-6px]' : 'bottom-[-6px] right-[-6px]'}
           text-black dark:text-white border-black dark:border-white`}></span>
  );
};

export default TimelineCircle;
