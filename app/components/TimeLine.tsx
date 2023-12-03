import React from 'react';
import Century from './Century';
import { notFound } from 'next/navigation';
import { performRequest } from '@/lib/apollo';

interface TimeLineProps {}

async function fetchCentury() {
  const PAGE_CONTENT_QUERY = `
  query centruis {
    allCenturies(orderBy:century_ASC) {
    id
    century
    summary 
  }
  }`;
  const data = await performRequest({ query: PAGE_CONTENT_QUERY });

  if (data.errors) return notFound();

  return data;
}
export interface CenturyType {
  id: string;
  century: string;
  summary: string;
  buttonText: string;
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
