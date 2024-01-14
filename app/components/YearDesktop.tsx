import React from 'react';

import { Year } from './CenturyContent';
import YearContent from './YearContent';
import TimelineYear from './desktopComponents/TimelineYear';
import ImageComponent from './ImageComponent';

interface YearLeftProps {
  data: Year;
  index: number;
}

const YearLeft: React.FC<YearLeftProps> = ({ data, index }) => {
  const side = index % 2 !== 1;

  return (
    <article className="grid grid-cols-2 flex">
      <div
        className={`${
          side
            ? 'order-last justify-self-start'
            : 'border-r-2 order-first justify-self-end border-black dark:border-white'
        }`}>
        <TimelineYear year={data.year} side={side} />
      </div>
      <div
        className={`${
          side ? 'border-r-2 border-black dark:border-white' : ''
        }`}>
        <div className="p-10 pl-[2.75rem] pt-14 max-w-[50rem] leading-5 text-black dark:text-white">
          {data.image ? (
            <>
              {data.title ? (
                <h5 className="pb-6 leading-10">{data.title}</h5>
              ) : null}
              <ImageComponent data={data.image} />
              {data.content ? <YearContent data={data.content} /> : null}
            </>
          ) : (
            <>
              <h5 className="pb-6 leading-10">{data.title}</h5>
              <YearContent data={data.content} />
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default YearLeft;
