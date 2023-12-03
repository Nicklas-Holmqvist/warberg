import React from 'react';
import { StructuredText } from 'react-datocms';

interface YearRightProps {
  data: any;
}

const YearRight: React.FC<YearRightProps> = ({ data }) => {
  return (
    <article className="grid grid-cols-2">
      <div className="border-r-2 justify-self-end">
        <div className="p-10 pr[2.75rem] pt-14 max-w-[50rem] leading-5 year-content">
          <StructuredText data={data.content} />
        </div>
      </div>
      <div className="">
        <h3 className="relative w-[13rem] text-right border-0 border-b-2 border-solid">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] left-[-6px]"></span>
        </h3>
      </div>
    </article>
  );
};

export default YearRight;
