import '@/assets/styles/globals.css';

import type {Metadata} from 'next';
import React, {type ReactNode} from 'react';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Next.js Context API',
  description: 'Next.js Context API example with TypeScript to manage state.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
