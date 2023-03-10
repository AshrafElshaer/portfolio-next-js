import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, PageTransition } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </Layout>
  );
}
