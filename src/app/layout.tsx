import '@/styles/globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { poppins, drukwidebold, ltunivers } from './fonts'
import Head from 'next/head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  /*const isDarkMode =  Logic to determine dark mode ;*/

  return (
    <div className={`${poppins.variable} ${ltunivers.variable} ${drukwidebold.variable}`}>
      <Head>
        <title>BREXTONHO</title>
        <meta name='description' content='brexton ho' />
      </Head>
      <main>{children}</main>
    </div>
  )
}
