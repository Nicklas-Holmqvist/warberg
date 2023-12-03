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
    image: any;
  }[];
}

export default async function TimeLine({}: TimeLineProps): Promise<React.JSX.Element> {
  const { data }: any = await fetchCentury();

  return (
    <div>
      <h4>Läs historien om vad som kom att blir Varbergs största besöksmål</h4>
      {data.allCenturies.map((century: CenturyType) => (
        <Century key={century.id} data={century} />
      ))}
    </div>
  );
}
