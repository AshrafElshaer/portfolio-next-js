import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import Link from "next/link";
import { socialMediaLinks, technologies } from "../constans";
import {
  HEAD,
  Main,
  TechPreview,
  SocialMediaCard,
  Button,
  Card,
  Map,
} from "../components";

const cardVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export default function Home() {
  return (
    <>
      <HEAD description='Front End Wrb Developer' />

      <Main styles='grid grid-rows-homeMobile gap-4 md:grid-cols-2 md:grid-rows-homeTablet lg:grid-cols-3 lg:grid-rows-homeDesktop '>
        <Card
          variants={cardVariant}
          styles='text-left md:text-center flex flex-col gap-4 md:col-start-1 md:col-end-3 '>
          <h1 className=' text-4xl text-gradient '>Ashraf Elshaer</h1>
          <p> Self-taught front-end developer in The United States</p>
          <p>
            Hey! I'm Ash, and my goal is to work at a company where I can
            deliver business value while leveling up my skills as a developer.
          </p>
          <div className='flex justify-center items-center mt-auto'>
            <Button buttonType='primary'>
              <Link href='/projects'>See My Work</Link>
            </Button>
          </div>
        </Card>
        <Card styles='py-0 px-0' variants={cardVariant}>
          <Map />
        </Card>
        <Card
          styles='md:row-span-2 lg:row-span-1 lg:col-start-2 lg:col-end-4'
          variants={cardVariant}>
          <h2 className='text-center text-2xl'>Techs & Languages</h2>
          <div className='grid grid-cols-3 gap-8 my-6 lg:flex lg:flex-wrap  '>
            {technologies.map((tech) => (
              <TechPreview key={tech.name} tech={tech} />
            ))}
          </div>
        </Card>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3'>
          <SocialMediaCard
            socialMedia={socialMediaLinks.gitHub}
            backGround='bg-gray-dark'
            styles='col-start-1 col-end-3'
            variants={cardVariant}
          />
          <SocialMediaCard
            socialMedia={socialMediaLinks.linkedIn}
            backGround='bg-[#0072b1]'
            variants={cardVariant}
          />
          <SocialMediaCard
            socialMedia={socialMediaLinks.instagram}
            backGround='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            variants={cardVariant}
          />
        </div>
      </Main>
    </>
  );
}
