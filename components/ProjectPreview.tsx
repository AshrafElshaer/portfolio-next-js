import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { Card, Button, Carousel } from "../components";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { MotionProps } from "framer-motion";

export type Props = {
  project: {
    id: number;
    name: string;
    description?: string[];
    subTitle: string;
    techStack: ReactNode[];
    gallery: string[];
    livePath: string;
    githubPath: string;
  };
} & MotionProps;

function ProjectPreview({ project, ...motionProps }: Props) {
  const { id, name, subTitle, gallery, githubPath, livePath, techStack } =
    project;

  return (
    <Card styles='max-w-md min-w-[22rem]  mx-auto md:mx-0' {...motionProps}>
      {/* HEADER */}
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
        <div>
          <h2 className='text-xl'>{name}</h2>
          <p>{subTitle}</p>
        </div>
        <div className='flex gap-2'>
          {techStack.map((tech, idx) => (
            <div key={idx}>{tech}</div>
          ))}
        </div>
      </div>
      {/* GALLERY */}
      <div className='rounded-lg h-44 my-6'>
        <Carousel gallery={gallery} name={name} />
      </div>
      <div className='flex justify-center items-center gap-4'>
        <Link href={livePath} target='_blank'>
          <Button buttonType='primary'>Live Preview</Button>
        </Link>
        <Link href={`/projects/${id}`}>
          <Button buttonType='secondary'>Learn More</Button>
        </Link>
      </div>
    </Card>
  );
}

export default ProjectPreview;
