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
        content {
          value
        }
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
    content: any;
    image: {
      url: string;
      alt: string;
      title: string;
      notes: string;
    };
  }[];
}

export default async function TimeLine({}: TimeLineProps): Promise<React.JSX.Element> {
  const { data }: any = await fetchCentury();

  return (
    <div className="bg-white dark:bg-black">
      <h4 className="text-black dark:text-white">
        Läs historien om vad som kom att blir Varbergs största besöksmål
      </h4>
      {data.allCenturies.map((century: CenturyType) => (
        <Century key={century.id} data={century} />
      ))}
    </div>
  );
}
