'use strict';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Mechwarrior Test',
  description: 'Pet Mechwarrior Project',
};

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} antialiased`}>
      <Analytics />
      <SpeedInsights />
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
