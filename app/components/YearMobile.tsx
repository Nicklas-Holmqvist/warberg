import React from 'react';
import Image from 'next/image';
import { StructuredText } from 'react-datocms';

interface YearMobileProps {
  data: any;
}

const YearMobile: React.FC<YearMobileProps> = ({ data }) => {
  return (
    <article className="grid grid-row-1 pl-4">
      <div className="border-l-2 border-black dark:border-white">
        <h3 className="relative max-w-[11rem] sm:max-w-[13rem] pl-10 max-sm:pl-6 border-0 border-b-2 border-solid text-black dark:text-white">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] left-[-6px] text-black dark:text-white"></span>
        </h3>
      </div>
      <div className="border-0 border-l-2 border-solid border-black dark:border-white">
        <div className="p-10 pl-[2.75rem] max-sm:pl-6 max-sm:pt-4 pt-14 max-w-[50rem] leading-5 text-black dark:text-white">
          {data.image ? (
            <>
              <Image
                src={`${data.image.url}`}
                alt={data.image.alt}
                title={data.image.title}
                height={300}
                width={800}
              />
              <p className="pt-2">{data.image.title}</p>
              <p className="pt-1 text-xs italic">Bild: {data.image.notes}</p>
            </>
          ) : (
            <div className="year-content">
              <StructuredText data={data.content} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default YearMobile;
