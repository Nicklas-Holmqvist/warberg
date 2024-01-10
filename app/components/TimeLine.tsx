import React from 'react';
import { notFound } from 'next/navigation';

import Century from './Century';
import { performRequest } from '@/lib/apollo';

interface TimeLineProps {}

async function fetchCentury() {
  const CENTURIES = `
  query centruis {
    allCenturies(orderBy:century_ASC) {
      century
      summary
      buttonText
      years {
        year
        title
        content(markdown: false)
        image {
          url
          alt
          title
          notes
        }
      }
    }
  }`;
  const data = await performRequest({ query: CENTURIES });

  if (data.errors) return notFound();

  return data;
}
export interface CenturyType {
  id: string;
  century: string;
  summary: string;
  buttonText: string;
  years: {
    year: string;
    title: string;
    content: string;
    image: {
      url: string;
      alt: string;
      title: string;
      notes: string;
    };
  }[];
}

type DataType = {
  data: {
    allCenturies: CenturyType[];
  };
};

export default async function TimeLine({}: TimeLineProps): Promise<React.JSX.Element> {
  const { data }: DataType = await fetchCentury();

  return (
    <div id="explore" className="bg-white dark:bg-black">
      <h2 className="text-black dark:text-white max-sm:px-2">
        Läs historien om vad som kom att blir Varbergs största besöksmål
      </h2>
      {data.allCenturies.map((century: CenturyType) => (
        <Century key={century.id} data={century} />
      ))}
    </div>
  );
}
