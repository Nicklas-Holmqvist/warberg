import React from 'react';

import YearLeft from './YearLeft';
import YearRight from './YearRight';

interface CenturyContentProps {
  data: {
    years: string;
    content: any;
  }[];
}

const CenturyContent: React.FC<CenturyContentProps> = ({ data }) => {
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
