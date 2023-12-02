import React from 'react';
import Century from './Century';

interface TimeLineProps {}

const TimeLine: React.FC<TimeLineProps> = ({}) => {
  return (
    <div>
      <h4>Läs historien om vad som kom att blir Varbergs största besöksmål</h4>
      <Century />
    </div>
  );
};

export default TimeLine;
