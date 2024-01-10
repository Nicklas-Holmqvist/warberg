'use client';

import { motion, useInView } from 'framer-motion';
import React, { Suspense, useRef, useState } from 'react';

import { CenturyType } from './TimeLine';
import ReadMoreButton from './ReadMoreButton';
import CenturyContent from './CenturyContent';

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
        <h3 className="text-black dark:text-white text-center">
          {data.century}
        </h3>
        <p className="text-black dark:text-white text-center font-fair">
          {data.summary}
        </p>
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
