import React from 'react';

import TimelineCircle from './TimelineCircle';

interface TimelineYearProps {
  year: string;
  side: boolean;
}

const TimelineYear: React.FC<TimelineYearProps> = ({ year, side }) => {
  return (
    <h4
      className={`relative w-[13rem] 
        ${side ? 'text-end' : 'text-start'}
        border-0 border-b-2 border-solid text-black dark:text-white border-black dark:border-white`}>
      {year}
      <TimelineCircle side={side} />
    </h4>
  );
};

export default TimelineYear;
