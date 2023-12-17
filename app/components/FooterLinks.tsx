'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

import { RelatedLink, Litterature } from './Footer';

interface FooterLinksProps {
  data: {
    relatedLinks: RelatedLink[];
    litteratures: Litterature[];
  };
}

const FooterLinks: React.FC<FooterLinksProps> = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className="flex w-full flex-wrap flex-col md:flex-row"
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : ''}>
      <div className="flex-1 max-w-full md:w-[800px] pb-8 md:pb-0 pt-10 border-t-2">
        <h5 className="text-start pb-1">Relaterade länkar</h5>
        <ul>
          {data.relatedLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="hover:border-b text-sm"
                target="_blank"
                href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 md:w-[800px] pt-0 md:pt-10 md:border-t-2">
        <h5 className="text-start pb-1">Urval på biblioteket</h5>
        <ul>
          {data.litteratures.map((book, index) => (
            <li key={index}>
              <Link
                className="hover:border-b text-sm"
                target="_blank"
                href={book.href}>
                {book.title}
                <span> - {book.published}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FooterLinks;
