import React from 'react';
import Image from 'next/image';
import { StructuredText } from 'react-datocms';

interface YearLeftProps {
  data: any;
}

const YearLeft: React.FC<YearLeftProps> = ({ data }) => {
  return (
    <article className="grid grid-cols-2">
      <div className="justify-self-end border-r-2 border-black dark:border-white">
        <h3 className="relative w-[13rem] border-0 border-b-2 border-solid text-black dark:text-white border-black dark:border-white">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] right-[-6px] text-black dark:text-white border-black dark:border-white"></span>
        </h3>
      </div>
      <div className="">
        <div className="p-10 pl-[2.75rem] pt-14 max-w-[50rem] leading-5 text-black dark:text-white">
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
              <p className="pt-1 text-xs italic">Källa: {data.image.notes}</p>
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

export default YearLeft;
