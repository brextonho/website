import '@/styles/globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { poppins, drukwidebold, ltunivers } from './fonts'


export const metadata: Metadata = {
  title: 'BREXTONHO',
  description: 'a website',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  /*const isDarkMode =  Logic to determine dark mode ;*/

  return (
    <div className={`${poppins.variable} ${ltunivers.variable} ${drukwidebold.variable}`}>
      <main>{children}</main>
    </div>
  )
}
