import React from 'react';

import YearLeft from './YearLeft';
import YearRight from './YearRight';

interface CenturyContentProps {
  data: {
    year: string;
    content: any;
    image: {
      url: string;
      alt: string;
    } | null;
  }[];
}

const CenturyContent: React.FC<CenturyContentProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((year, id) =>
        id % 2 === 0 ? (
          <YearLeft key={id} data={year} />
        ) : (
          <YearRight key={id} data={year} />
        )
      )}
    </>
  );
};

export default CenturyContent;
