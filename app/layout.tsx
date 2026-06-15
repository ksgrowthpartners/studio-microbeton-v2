import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { GoogleTag } from './GoogleTag';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.studiomicrobeton.nl'),
  title: 'Studio Microbeton — Mortex, microcement & gietvloeren',
  description:
    'Naadloze wanden, vloeren, trappen en meubels in Mortex, microcement en gietvloer. Voor woningen en zakelijke ruimtes.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Big+Shoulders+Display:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GoogleTag />
        {children}
      </body>
    </html>
  );
}
