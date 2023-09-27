import localFont from 'next/font/local'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const drukwidebold = localFont({
  src: './Druk-Wide-Bold.ttf',
  display: 'swap',
  variable: '--font-drukwidebold',
})

export const ltunivers = localFont({
  src: './ltunivers-940-extdxblack.otf',
  display: 'swap',
  variable: '--font-ltunivers',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})