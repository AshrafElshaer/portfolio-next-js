import Head from "next/head";
import Image from "next/image";
import { Card, Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashraf Elshaer</title>
        <meta name='description' content='Front End Wrb Developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <Card>
          <h1 className=''>Home</h1>
          <h1 className=''>Home</h1>
          <h1 className=''>Home</h1>
          <h1 className=''>Home</h1>
          <h1 className=''>Home</h1>
          <h1 className=''>Home</h1>
        </Card>
      </main>
    </>
  );
}
