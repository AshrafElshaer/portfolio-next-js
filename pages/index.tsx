import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashraf Elshaer</title>
        <meta name='description' content='Front End Wrb Developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-light dark:bg-darkBg text-theme-lgith dark:text-theme-dark transition-all duration-300'>
        <Navbar />
      </main>
    </>
  );
}
