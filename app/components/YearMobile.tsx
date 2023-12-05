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
        <h3 className="relative max-w-[13rem] pl-10 border-0 border-b-2 border-solid text-black dark:text-white">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] left-[-6px] text-black dark:text-white"></span>
        </h3>
      </div>
      <div className="border-0 border-l-2 border-solid border-black dark:border-white">
        <div className="p-10 pl-[2.75rem] pt-14 max-w-[50rem] leading-5 year-content text-black dark:text-white">
          {data.image ? (
            <Image
              src={`${data.image.url}`}
              alt={data.image.alt}
              height={300}
              width={700}
            />
          ) : (
            <StructuredText data={data.content} />
          )}
        </div>
      </div>
    </article>
  );
};

export default YearMobile;
