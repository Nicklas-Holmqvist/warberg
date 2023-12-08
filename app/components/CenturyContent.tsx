'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import YearLeft from './YearLeft';
import YearRight from './YearRight';
import YearMobile from './YearMobile';

interface CenturyContentProps {
  data: YearContent[];
}

export type YearContent = {
  title: string;
  year: string;
  content: string;
  image: {
    url: string;
    alt: string;
    notes: string;
    title: string;
  } | null;
};

const CenturyContent: React.FC<CenturyContentProps> = ({ data }) => {
  const smallScreen = useMediaQuery({
    query: '(max-width: 900px)',
  });

  return (
    <>
      {data.map((year, index) => (
        <motion.article
          key={index}
          variants={smallScreen ? motionArticleUp : motionArticleScale}
          initial="hidden"
          animate="show"
          custom={index}>
          {smallScreen ? (
            <YearMobile data={year} />
          ) : (
            <>
              {index % 2 !== 0 ? (
                <YearLeft data={year} />
              ) : (
                <YearRight data={year} />
              )}
            </>
          )}
        </motion.article>
      ))}
    </>
  );
};

export default CenturyContent;

const motionArticleScale = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.2,
      stiffness: 100,
    },
  }),
};

const motionArticleUp = {
  hidden: { opacity: 0, y: 50 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.2,
      stiffness: 100,
    },
  }),
};
