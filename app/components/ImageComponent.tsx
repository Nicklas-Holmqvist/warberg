'use react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';

import { ImageData } from './CenturyContent';

interface ImageComponentProps {
  data: ImageData;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ data }) => {
  const smallScreen = useMediaQuery({
    query: '(max-width: 900px)',
  });
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [activatedMagnifier, setActivatedMagnifier] = useState(false);
  const magnifierSize = 150;
  const zoomLevel = 2.5;

  return (
    <div className="relative">
      <Image
        src={`${data.url}`}
        alt={data.alt}
        title={data.title}
        height={300}
        width={800}
        className={`${
          smallScreen ? '' : showMagnifier ? 'cursor-zoom-in' : 'cursor-none'
        }`}
        onClick={(e) => {
          if (smallScreen) return null;
          else {
            const element = e.currentTarget;
            const { width, height } = element.getBoundingClientRect();
            setSize([width, height]);
            setActivatedMagnifier(!activatedMagnifier);
            setShowMagnifier(!showMagnifier);
          }
        }}
        onMouseEnter={() => {
          if (smallScreen) return null;
          else {
            setShowMagnifier(!showMagnifier);
          }
        }}
        onMouseMove={(e) => {
          if (smallScreen) return null;
          else {
            const element = e.currentTarget;
            const { top, left } = element.getBoundingClientRect();
            const x = e.pageX - left - window.scrollX;
            const y = e.pageY - top - window.scrollY;
            setXY([x, y]);
          }
        }}
        onMouseLeave={() => {
          if (smallScreen) return null;
          else {
            setShowMagnifier(false);
            setActivatedMagnifier(false);
          }
        }}
      />
      <p aria-hidden="true" className="pt-2 leading-4">
        {data.title}
      </p>
      <p
        aria-label="Källa till bilden"
        className="pt-[0.2rem] pb-6 text-xs italic">
        Bild: {data.notes}
      </p>
      <motion.div
        variants={activatedMagnifier ? motionMagnifier : undefined}
        initial="hidden"
        animate="show"
        style={{
          display: activatedMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          top: `${y - magnifierSize / 2}px`,
          left: `${x - magnifierSize / 2}px`,
          border: '1px solid black',
          backgroundColor: 'black',
          backgroundImage: `url('${data.url}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierSize / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierSize / 2}px`,
          borderRadius: '100%',
        }}></motion.div>
    </div>
  );
};

export default ImageComponent;

const motionMagnifier = {
  hidden: { width: 0, height: 0, opacity: 0 },
  show: {
    width: 150,
    height: 150,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
