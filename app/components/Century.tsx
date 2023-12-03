'use client';

import React, { Suspense, useState } from 'react';

import { CenturyType } from './TimeLine';
import ReadMoreButton from './ReadMoreButton';
import CenturyContent from './CenturyContent';

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
      <Suspense fallback={'loading...'}>
        {open ? <CenturyContent data={data.years} /> : null}
      </Suspense>
    </section>
  );
};

export default Century;
