'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const links: { href: string; text: string }[] = [
  {
    href: 'https://museumhalland.se/varbergs-fastning/',
    text: 'MuseumHalland.se',
  },
  {
    href: 'https://www.sfv.se/vara-fastigheter/sok/sverige/hallands-lan/varbergs-fastning/',
    text: 'Statens fastighetsverk',
  },
  {
    href: 'https://digitaltmuseum.se/s-hkm',
    text: 'Digital Museum - Hallands kultuhistoriska museum',
  },
  {
    href: 'https://sok.riksarkivet.se/?Sokord=varbergs+f%C3%A4stning&f=True&EndastDigitaliserat=false&Fritext=&Namn=&Ort=&DatumFran=&DatumTill=&AvanceradSok=False',
    text: 'Riksarkivet',
  },
  {
    href: 'https://arkeologerna.com/tag/varberg/',
    text: 'Arkeologerna',
  },
  {
    href: 'https://www.diva-portal.org/smash/get/diva2:1244170/FULLTEXT01.pdf',
    text: 'Kyrkorna i Varberg (PDF)',
  },
  {
    href: 'https://www.diva-portal.org/smash/get/diva2:1224896/FULLTEXT01.pdf?fbclid=IwAR0ht18VzNSe6MXxTfN3MbZLb4MGGR4DZdeK1sDvgTX3R9SBHoP6M-iFzUA',
    text: 'Den dolda källan i Varbergs fästning (PDF)',
  },
  {
    href: 'https://www.visitvarberg.se/arkiv/uppleva/varbergs-fastning.html',
    text: 'Visit Varberg',
  },
  {
    href: 'https://www.slottsguiden.info/slottdetalj.asp?id=56',
    text: 'Slottsguiden',
  },
  {
    href: 'https://fastningens.se/',
    text: 'Fästningens rum vid havet',
  },
  {
    href: 'https://www.fastningsterrassen.se/',
    text: 'Fästningsterrassen',
  },
];

const books: {
  title: string;
  author: string;
  published: string;
  href: string;
}[] = [
  {
    title: 'Anteckningar till Warbergs fästnings historia',
    author: 'Jönsson Johan Eberhard',
    published: '1872',
    href: 'https://libris.kb.se/bib/1973887',
  },
  {
    title: 'Varbergs fästning',
    author: 'Sandklef Albert',
    published: '1923',
    href: 'https://libris.kb.se/bib/1469498',
  },
  {
    title: 'Fynd och fakta kring restaureringen av Varbergs slott',
    author: 'Person Bengt-Arne',
    published: '1962',
    href: 'https://libris.kb.se/bib/19511328',
  },
  {
    title: 'Den dolda källan i Varbergs fästning',
    author: 'Hähnel Märta',
    published: '1966',
    href: 'https://libris.kb.se/bib/r4fc0tbxpn5d737d',
  },
  {
    title: 'Varbergs slott och fästning',
    author: 'Sandklef Albert',
    published: '1966',
    href: 'https://libris.kb.se/bib/938669',
  },
  {
    title: 'Då muren rasade i vallgraven',
    author: 'Person Bengt-Arne',
    published: '1980',
    href: 'https://libris.kb.se/bib/19529983',
  },
  {
    title: 'Varbergs fästning under 1700-talet',
    author: 'Cassel Jan',
    published: '1995',
    href: 'https://libris.kb.se/bib/2261777',
  },
  {
    title: 'Varbergs fästning, arkeologiska undersökningar 1992 och 1994',
    author: 'Stibéus Magnus',
    published: '1998',
    href: 'https://libris.kb.se/bib/2261777',
  },
  {
    title: 'Varbergs fästning 1612',
    author: 'Karlsson Anna, Karlsson Andreas, Alebo Inger',
    published: '2012',
    href: 'https://libris.kb.se/bib/14559114',
  },
  {
    title: 'Varbergs fästning : och dess roll i Hallands historia',
    author: 'Wiking-Faria, Pablo',
    published: '2012',
    href: 'https://libris.kb.se/bib/14087973',
  },
  {
    title: 'Vi byggde Varbergs fæstning',
    author: 'Alebo Inger, Sandelin Charlotta, Brandqvist Jakob',
    published: '2019',
    href: 'https://libris.kb.se/bib/t50rmrmzrmcsbp0k',
  },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const year = new Date().getFullYear();
  return (
    <footer className="px-8 md:px10 flex flex-col max-w-[1600px] pt-2 pb-12 m-auto text-black dark:text-white">
      <div className="flex w-full flex-wrap flex-col md:flex-row ">
        <motion.div
          className="flex-1 max-w-full md:w-[800px] pb-8 md:pb-0 pt-10 border-t-2"
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : ''}>
          <h5 className="text-start pb-1">Relaterade länkar</h5>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="hover:border-b text-sm"
                  target="_blank"
                  href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex-1 md:w-[800px] pt-0 md:pt-10 md:border-t-2"
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : ''}>
          <h5 className="text-start pb-1">Urval på biblioteket</h5>
          <ul>
            {books.map((book, index) => (
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
        </motion.div>
      </div>
      <motion.div
        className="flex flex-row w-full md:w-[20rem] mt-10 md:mt-4 pt-4 justify-between border-t-2 md:border-none"
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : ''}>
        <Link
          className="border-b-2"
          href={'https://maps.app.goo.gl/tFcFZpszgBnS2YJg8'}
          target="_blank">
          Hitta hit
        </Link>
        <Link className="border-b-2" href={'./about'}>
          Om sidan
        </Link>
        <p className="">&copy; Nicklas Holmqvist {year}</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
