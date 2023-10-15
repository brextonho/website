import '@/styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from "@/app/components/theme-provider";
import { poppins, drukwidebold, ltunivers } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return (
      <div className={`${poppins.variable} ${ltunivers.variable} ${drukwidebold.variable}`}>
        <Head>
          <title>BREXTONHO</title>
          <meta name='description' content='the future' />
          <link rel="icon" href="@/app/favicon.ico" />
        </Head>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
          </ThemeProvider>
      </div>
    )

}
