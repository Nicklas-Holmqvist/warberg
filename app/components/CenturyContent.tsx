import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <>
      {data.map((year, index) => (
        <motion.article
          key={index}
          variants={motionArticle}
          initial="hidden"
          animate="show"
          custom={index}>
          {index % 2 === 0 ? (
            <YearLeft data={year} />
          ) : (
            <YearRight data={year} />
          )}
        </motion.article>
      ))}
    </>
  );
};

export default CenturyContent;

const motionArticle = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.2,
    },
  }),
};
