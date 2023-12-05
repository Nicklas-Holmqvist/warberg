import type { Metadata } from 'next';
import { Noto_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-notoSans',
});
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Warberg - en 800 år historia',
  description:
    'Varbergs fästning var i början en av flera vaktberg längst med Hallands kust. Idag står där en fästning som har utvecklats under 800 år och är Varbergs mest besökta turistmål. Läs om de viktiga händelserna som nämns i böcker, tidningar och se gamla kartor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
