import React from 'react';
import Image from 'next/image';
import { StructuredText } from 'react-datocms';

interface YearLeftProps {
  data: any;
}

const YearLeft: React.FC<YearLeftProps> = ({ data }) => {
  return (
    <article className="grid grid-cols-2">
      <div className="justify-self-end border-r-2">
        <h3 className="relative w-[13rem] border-0 border-b-2 border-solid">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] right-[-6px]"></span>
        </h3>
      </div>
      <div className="">
        <div className="p-10 pl-[2.75rem] pt-14 max-w-[50rem] leading-5 year-content">
          {data.image ? (
            <Image
              src={`${data.image.url}`}
              alt={data.image.alt}
              height={300}
              width={500}
            />
          ) : (
            <StructuredText data={data.content} />
          )}
        </div>
      </div>
    </article>
  );
};

export default YearLeft;
