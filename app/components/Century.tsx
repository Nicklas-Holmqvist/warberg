import React from 'react';
import ReadMoreButton from './ReadMoreButton';
import CenturyContent from './CenturyContent';

interface CenturyProps {}

const Century: React.FC<CenturyProps> = ({}) => {
  return (
    <section className="py-10">
      <h2 className="">1200-talet</h2>
      <h5 className="text-center">Sammanfattning om århundandet</h5>
      <ReadMoreButton />
      <CenturyContent />
    </section>
  );
};

export default Century;
