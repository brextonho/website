import '@/styles/globals.css';
import Head from 'next/head';
import Provider from "@/app/components/theme-provider";
import { poppins, drukwidebold } from './fonts';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return (
      <div className={`${poppins.variable} ${drukwidebold.variable} bg-background-100 dark:bg-background-950`}>
        <Head>
          <title>BREXTONHO</title>
          <meta name='description' content='the future' />
          <link rel="icon" href="./favicon.ico"></link>
        </Head>

        <Provider>
          <main>{children}</main>
        </Provider>
      </div>
    )

}
