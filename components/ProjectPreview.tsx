import React, { ReactNode } from "react";
import { Card, Button } from "../components";
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

function ProjectPreview({project}: Props) {
  return (
    <Card styles=''>
      {/* HEADER */}
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
        <h2 className='text-xl'>{}</h2>
        <div>techStack</div>
      </div>
      {/* GALLERY */}
      <div className='w-full rounded-lg h-44'></div>
      <div className='flex justify-center items-center gap-4'>
        <Button buttonType='primary'>Live Preview</Button>
        <Button buttonType='secondary'>Learn More</Button>
      </div>
    </Card>
  );
}

export default ProjectPreview;
