'use client';

import React, { useState } from 'react';
import ReadMoreButton from './ReadMoreButton';
import CenturyContent from './CenturyContent';

interface CenturyProps {
  data: {
    id: string;
    century: string;
    summary: string;
  };
}

const Century: React.FC<CenturyProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-10">
      <h2 className="">{data.century}</h2>
      <h5 className="text-center">{data.summary}</h5>
      <ReadMoreButton onClick={() => setOpen(!open)} />
      {open ? <CenturyContent /> : null}
    </section>
  );
};

export default Century;
