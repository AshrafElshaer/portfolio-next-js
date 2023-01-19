import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { Card, Button } from "../components";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

type Props = {
  project: {
    name: string;
    subTitle: string;
    techStack: ReactNode[];
    gallery: string[];
    livePath: string;
    githubPath: string;
  };
};

function ProjectPreview({ project }: Props) {
  const { name, subTitle, gallery, githubPath, livePath, techStack } = project;
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  function handlePrevious() {
    setCurrentIdx((prev) => (prev === 0 ? prev : prev - 1));
  }
  function handleNext() {
    setCurrentIdx((prev) => (prev !== gallery.length - 1 ? prev + 1 : prev));
  }
  return (
    <Card styles='max-w-md mx-auto md:mx-0'>
      {/* HEADER */}
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
        <div>
          <h2 className='text-xl'>{name}</h2>
          <p>{subTitle}</p>
        </div>
        <div className='flex gap-2'>{techStack.map((tech) => tech)}</div>
      </div>
      {/* GALLERY */}
      <div className='w-full rounded-lg h-44 my-6 relative flex overflow-hidden'>
        {gallery.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={name}
            className={`imgPreview rounded-xl absolute top-0 left-0 transition-transform duration-300  ${
              idx !== currentIdx ? "translate-x-full" : ""
            } `}
            width={0}
            height={0}
            sizes='100%'
          />
        ))}
        <button
          className='absolute top-1/2 -translate-y-1/2 right-1 z-20 bg-black/40 rounded-full text-white p-2'
          onClick={handleNext}>
          <FaGreaterThan size='0.75rem' />
        </button>
        <button
          className='absolute top-1/2 -translate-y-1/2 left-1 z-20 bg-black/40 rounded-full text-white p-2'
          onClick={handlePrevious}>
          <FaLessThan size='0.75rem' />
        </button>
      </div>
      <div className='flex justify-center items-center gap-4'>
        <Button buttonType='primary'>
          <Link href={livePath} target='_blank'>
            Live Preview
          </Link>
        </Button>
        <Button buttonType='secondary'>Learn More</Button>
      </div>
    </Card>
  );
}

export default ProjectPreview;
