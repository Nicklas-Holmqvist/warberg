'use react';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';

import { YearContent } from './CenturyContent';

interface YearMobileProps {
  data: YearContent;
}

const YearMobile: React.FC<YearMobileProps> = ({ data }) => {
  const maxLength: number = 500;
  const textLength: number = data.content.length;
  const shortenText: string = data.content.slice(0, maxLength) + '...';

  const [showAllText, setShowAllText] = useState<boolean>(false);

  return (
    <article className="grid grid-row-1 pl-8">
      <div className="border-l-2 border-black dark:border-white">
        <h3 className="relative max-w-[11rem] sm:max-w-[13rem] pl-10 max-sm:pl-6 border-0 border-b-2 border-solid text-black dark:text-white">
          {data.year}
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] left-[-6px] text-black dark:text-white"></span>
        </h3>
      </div>
      <div className="border-0 border-l-2 border-solid border-black dark:border-white">
        <div className="p-10 pl-[2.75rem] max-sm:pl-6 max-sm:pt-6 max-md:pt-8 pt-14 max-w-[50rem] leading-5 text-black dark:text-white">
          {data.image ? (
            <>
              {data.title ? <h3>{data.title}</h3> : null}
              <Image
                src={`${data.image.url}`}
                alt={data.image.alt}
                title={data.image.title}
                height={300}
                width={800}
              />
              <p className="pt-2 leading-4">{data.image.title}</p>
              <p className="pt-[0.2rem] text-xs italic">
                Bild: {data.image.notes}
              </p>
              {data.content ? (
                <div className="year-content">
                  {textLength >= maxLength && !showAllText ? (
                    <ReactMarkdown>{shortenText}</ReactMarkdown>
                  ) : null}
                  {showAllText ? (
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                  ) : null}
                  {textLength <= maxLength ? (
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                  ) : null}
                  {textLength >= maxLength ? (
                    <button
                      className="pt-2 font-bold hover:border-b-2"
                      onClick={() => setShowAllText(!showAllText)}>
                      {showAllText ? 'Dölj text' : 'Läs mer'}
                    </button>
                  ) : null}
                </div>
              ) : null}
            </>
          ) : (
            <div className="year-content">
              <h3>{data.title}</h3>
              {textLength >= maxLength && !showAllText ? (
                <ReactMarkdown>{shortenText}</ReactMarkdown>
              ) : null}
              {showAllText ? (
                <ReactMarkdown>{data.content}</ReactMarkdown>
              ) : null}
              {textLength <= maxLength ? (
                <ReactMarkdown>{data.content}</ReactMarkdown>
              ) : null}
              {textLength >= maxLength ? (
                <button
                  className="pt-2 font-bold hover:border-b-2"
                  onClick={() => setShowAllText(!showAllText)}>
                  {showAllText ? 'Dölj text' : 'Läs mer'}
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default YearMobile;
