import RootLayout from '@/app/layout';
import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import your global styles


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          overflow: hidden;
          height: 100%;
          margin: 0; /* Remove default margin to ensure full viewport usage */
        }
      `}</style>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
