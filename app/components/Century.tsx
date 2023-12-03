'use client';

import React, { useState } from 'react';

import ReadMoreButton from './ReadMoreButton';
import CenturyContent from './CenturyContent';
import { CenturyType } from './TimeLine';

interface CenturyProps {
  data: CenturyType;
}

const Century: React.FC<CenturyProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-10">
      <h2 className="">{data.century}</h2>
      <h5 className="text-center">{data.summary}</h5>
      <ReadMoreButton text={data.buttonText} onClick={() => setOpen(!open)} />
      {open ? <CenturyContent /> : null}
    </section>
  );
};

export default Century;
