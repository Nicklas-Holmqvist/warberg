import React from 'react';
import YearLeft from './YearLeft';
import YearRight from './YearRight';

interface YearContentProps {}

const YearContent: React.FC<YearContentProps> = ({}) => {
  return (
    <>
      <YearLeft />
      <YearRight />
    </>
  );
};

export default YearContent;
