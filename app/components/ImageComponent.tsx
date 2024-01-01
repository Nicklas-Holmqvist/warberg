import React from 'react';
import Image from 'next/image';

import { ImageData } from './CenturyContent';

interface ImageComponentProps {
  data: ImageData;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ data }) => {
  return (
    <>
      <Image
        src={`${data.url}`}
        alt={data.alt}
        title={data.title}
        height={300}
        width={800}
      />
      <p className="pt-2 leading-4">{data.title}</p>
      <p className="pt-[0.2rem] text-xs italic">Bild: {data.notes}</p>
    </>
  );
};

export default ImageComponent;
