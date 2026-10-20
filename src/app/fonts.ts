import localFont from 'next/font/local'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const drukwidebold = localFont({
  src: './Druk-Wide-Bold.ttf',
  display: 'swap',
  variable: '--font-drukwidebold',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // only weights used (normal/medium/bold)
  display: 'swap',
  variable: '--font-poppins',
})