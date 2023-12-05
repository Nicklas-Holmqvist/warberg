'use client';

import React, { Suspense, useRef, useState } from 'react';

import { CenturyType } from './TimeLine';
import ReadMoreButton from './ReadMoreButton';
import CenturyContent from './CenturyContent';
import { motion, useInView } from 'framer-motion';

interface CenturyProps {
  data: CenturyType;
}

const Century: React.FC<CenturyProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="pb-10" ref={ref}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : ''}>
        <h2 className="text-black dark:text-white">{data.century}</h2>
        <h5 className="text-black dark:text-white">{data.summary}</h5>
        <ReadMoreButton
          text={data.buttonText}
          open={open}
          onClick={() => setOpen(!open)}
        />
        <Suspense fallback={'loading...'}>
          {open ? <CenturyContent data={data.years} /> : null}
        </Suspense>
      </motion.div>
    </section>
  );
};

export default Century;
