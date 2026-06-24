import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  Fraunces,
  Instrument_Sans,
  Fragment_Mono,
  Syne,
  Cormorant_Garamond,
  Archivo,
  Geist,
  Martian_Mono,
} from 'next/font/google';
import './base.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--f-serif',
  display: 'swap',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--f-sans',
  display: 'swap',
});

const fragment = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--f-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--f-syne',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--f-cormorant',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--f-archivo',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--f-geist',
  display: 'swap',
});

const martian = Martian_Mono({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--f-martian',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Studio Microbeton — nieuw ontwerp',
  description:
    'Naadloze vloeren, wanden, trappen en badkamers in microbeton. Drie nieuwe ontwerp-richtingen: Atelier, Nacht en Galerie.',
};

export default function NewLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${fraunces.variable} ${instrument.variable} ${fragment.variable} ${syne.variable} ${cormorant.variable} ${archivo.variable} ${geist.variable} ${martian.variable} new-root`}
    >
      {children}
    </div>
  );
}
