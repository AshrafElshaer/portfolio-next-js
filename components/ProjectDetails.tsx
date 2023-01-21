import { Button, Card, Carousel, HEAD, Main } from "../components";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLessThan } from "react-icons/fa";
import type { Props } from "./ProjectPreview";

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

function ProjectDetails({ project }: Props) {
  return (
    <>
      <HEAD
        description={`${project?.name} , ${project?.subTitle}`}
        path={project?.name}
      />
      <Main styles='flex flex-col gap-4'>
        <motion.div variants={cardVariant}>
          <Link href='/projects'>Back</Link>
        </motion.div>
        <Card styles='text-center md:flex items-center justify-between ' variants={cardVariant}>
          <h2 className='text-3xl text-gradient mb-2 md:mb-0'>{project?.name}</h2>
          <p className='text-lg'>{project?.subTitle}</p>
        </Card>
        <div className='flex flex-col md:flex-row gap-4 '>
          <Card
            styles='  h-48 sm:h-72 md:h-auto py-0 px-0 md:flex-[3] flex-grow'
            variants={cardVariant}>
            <Carousel
              gallery={project?.gallery as string[]}
              name={project?.name as string}
            />
          </Card>

          {/* SIDE INFO  */}
          <div className='flex flex-col gap-4 md:flex-[2]'>
            <Card
              styles='flex flex-wrap justify-center gap-4 '
              variants={cardVariant}>
              {project?.techStack.map((tech, idx) => (
                <div key={idx} className='text-2xl'>
                  {tech}
                </div>
              ))}
            </Card>
            <Card styles='flex-grow' variants={cardVariant}>
              <motion.ul
                className='list-disc flex flex-col gap-4 p-2 text-md'
                variants={cardVariant}>
                {project?.description?.map((text, idx) => (
                  <motion.li key={idx}>{text}</motion.li>
                ))}
              </motion.ul>
            </Card>
            <Card
              styles='flex justify-center gap-4 p-4 py-3 '
              variants={cardVariant}>
              <Link href={project?.livePath as string} target='_blank'>
                <Button buttonType='primary'>Live Preview</Button>
              </Link>
              <Link href={project?.githubPath as string} target='_blank'>
                <Button buttonType='secondary'> &#60;Code /&#62; </Button>
              </Link>
            </Card>
          </div>
        </div>
      </Main>
    </>
  );
}

export default ProjectDetails;
