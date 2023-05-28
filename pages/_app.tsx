import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, PageTransition } from "../components";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PageTransition>
        <Component {...pageProps} />
        <Analytics />
      </PageTransition>
    </Layout>
  );
}
