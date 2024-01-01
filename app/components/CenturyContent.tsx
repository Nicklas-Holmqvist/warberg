'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import YearMobile from './YearMobile';
import YearDesktop from './YearDesktop';

interface CenturyContentProps {
  data: Year[];
}

export type Year = {
  title: string;
  year: string;
  content: string;
  image: ImageData | null;
};

export type ImageData = {
  url: string;
  alt: string;
  notes: string;
  title: string;
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
            <YearDesktop data={year} index={index} />
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
