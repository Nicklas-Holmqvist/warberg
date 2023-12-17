import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { performRequest } from '@/lib/apollo';

async function fetchAbout() {
  const ABOUT = `
    query About {
        about {
          title
          content
        }
      }`;
  const data = await performRequest({ query: ABOUT });

  if (data.errors) return notFound();

  return data;
}

interface AboutProps {}

interface DataType {
  data: {
    about: {
      title: string;
      content: string;
    };
  };
}

async function About({}: AboutProps): Promise<React.JSX.Element> {
  const { data }: DataType = await fetchAbout();

  return (
    <article className="whitespace-break-spaces bg-white dark:bg-black text-black dark:text-white min-h-screen py-10 px-10">
      <div className="max-w-[72ch] m-auto">
        <Link className="hover:border-b-2" href={'./'}>
          Gå tillbaka
        </Link>
        <div className="pb-4 pt-2">
          <h3 className="pb-4">{data.about.title}</h3>
          <ReactMarkdown>{data.about.content}</ReactMarkdown>
        </div>
        <Link className="hover:border-b-2" href={'./'}>
          Gå tillbaka
        </Link>
      </div>
    </article>
  );
}

export default About;
