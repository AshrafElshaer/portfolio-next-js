import Head from "next/head";
import Link from "next/link";
import { Button, Card, Map } from "../components";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashraf Elshaer</title>
        <meta name='description' content='Front End Wrb Developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container pt-4 grid grid-rows-2 gap-4'>
        <Card styles='text-left sm:text-center flex flex-col gap-4'>
          <h1 className=' text-4xl text-gradient '>Ashraf Elshaer</h1>
          <p> Self-taught front-end developer in London</p>
          <p>
            Hey! I'm Ash, and my goal is to work at a company where I can
            deliver business value while levelling up my skills as a developer.
          </p>
          <div className='flex justify-center items-center gap-4 mt-6'>
            <Button buttonType='primary'>
              <Link href='/projects'>See My Work</Link>
            </Button>
            <Button buttonType='secondary'>Learn More</Button>
          </div>
        </Card>
        <Card styles="py-0 px-0">
          <Map />
        </Card>
      </main>
    </>
  );
}
