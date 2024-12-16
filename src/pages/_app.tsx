import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Agdasima, Offside } from "next/font/google";
import "../app/globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({ subsets: ["latin"] });

const agdasima = Agdasima({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const offside = Offside({
  weight: ["400"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Nav className={offside.className} />
      <main className={agdasima.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
      {/* <Footer /> */}
    </>
  );
}
