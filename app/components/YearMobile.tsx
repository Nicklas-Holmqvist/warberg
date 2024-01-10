import React from 'react';

import { Year } from './CenturyContent';
import ImageComponent from './ImageComponent';
import YearContent from './YearContent';

interface YearMobileProps {
  data: Year;
}

const YearMobile: React.FC<YearMobileProps> = ({ data }) => {
  return (
    <article className="grid grid-row-1 pl-8">
      <div className="border-l-2 border-black dark:border-white">
        <h4 className="relative max-w-[11rem] sm:max-w-[13rem] pl-10 max-sm:pl-6 border-0 border-b-2 border-solid text-black dark:text-white">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] left-[-6px] text-black dark:text-white"></span>
        </h4>
      </div>
      <div className="border-0 border-l-2 border-solid border-black dark:border-white">
        <div className="p-10 pl-[2.75rem] max-sm:pl-6 max-sm:pt-6 max-md:pt-8 max-w-[50rem] leading-5 text-black dark:text-white">
          <>
            {data.title ? (
              <h5 className="pb-6 max-md:leading-8 leading-10">{data.title}</h5>
            ) : null}
            {data.image ? <ImageComponent data={data.image} /> : null}
            {data.content ? <YearContent data={data.content} /> : null}
          </>
        </div>
      </div>
    </article>
  );
};

export default YearMobile;
