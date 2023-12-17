import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';
import { performRequest } from '@/lib/apollo';

import FooterLinks from './FooterLinks';

async function fetchFooterLinks() {
  const LINKS = `
  query footerLinks {
    footer {
      relatedLinks {
        href
        title
      }
      litteratures {
        href
        title
        published
        author
      }
    }
  }`;
  const data = await performRequest({ query: LINKS });

  if (data.errors) return notFound();

  return data;
}

interface FooterProps {}

type DataType = {
  data: {
    footer: {
      relatedLinks: RelatedLink[];
      litteratures: Litterature[];
    };
  };
};

export interface RelatedLink {
  href: string;
  title: string;
}

export interface Litterature {
  href: string;
  title: string;
  published: string;
  author: string;
}

export default async function Footer({}: FooterProps): Promise<React.JSX.Element> {
  const { data }: DataType = await fetchFooterLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 md:px10 flex flex-col max-w-[1600px] pt-2 pb-12 m-auto text-black dark:text-white">
      <FooterLinks data={data.footer} />
      <div className="flex flex-row w-full md:w-[20rem] mt-10 md:mt-4 pt-4 justify-between border-t-2 md:border-none">
        <Link
          className="border-b-2"
          href={'https://maps.app.goo.gl/tFcFZpszgBnS2YJg8'}
          target="_blank">
          Hitta hit
        </Link>
        <Link className="border-b-2" href={'./about'}>
          Om sidan
        </Link>
        <p className="">&copy; Nicklas Holmqvist {year}</p>
      </div>
    </footer>
  );
}
