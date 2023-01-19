import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { projects } from "../../../constans";
import { Button, Card, Carousel, HEAD, Main } from "../../../components";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLessThan } from "react-icons/fa";

type Props = {};

function index({}: Props) {
  const {
    query: { projuctId },
    push: navigate,
  } = useRouter();

  const [project, _] = useState(projects.find((item) => item.id === Number(projuctId)));


  useEffect(() => {}, []);
  return (
    <>
      <HEAD
        description={`${project?.name} , ${project?.subTitle}`}
        path={project?.name}
      />
      <Main styles='flex flex-col gap-8'>
        <Link href='/projects' className=' flex items-center gap-4'>
          <FaLessThan size='1rem' />
          Back
        </Link>
        <Card styles='text-center '>
          <h2 className='text-3xl text-gradient mb-2'>{project?.name}</h2>
          <p className='text-xl'>{project?.subTitle}</p>
        </Card>
        <div className='flex flex-col md:flex-row gap-8 '>
          <Card styles=' h-96 py-0 px-0 md:flex-[3] flex-grow'>
            <Carousel
              gallery={project?.gallery as string[]}
              name={project?.name as string}
            />
          </Card>
          <div className='flex flex-col gap-4 md:flex-[2]'>
            <Card styles='flex flex-wrap justify-center gap-4 '>
              {project?.techStack.map((tech, idx) => (
                <div key={idx} className='text-2xl'>
                  {tech}
                </div>
              ))}
            </Card>
            <Card styles='flex-grow'>
              <motion.ul className='list-disc flex flex-col gap-4'>
                {project?.description?.map((text, idx) => (
                  <motion.li key={idx}>{text}</motion.li>
                ))}
              </motion.ul>
            </Card>
            <Card styles='flex justify-center gap-4 py-3'>
              <Link href={project?.livePath as string} target='_blank'>
                <Button buttonType='primary'>Live Preview</Button>
              </Link>
              <Link href={project?.githubPath as string} target='_blank'>
                <Button buttonType='secondary'>GitHub Repo</Button>
              </Link>
            </Card>
          </div>
        </div>
      </Main>
    </>
  );
}

export default index;
