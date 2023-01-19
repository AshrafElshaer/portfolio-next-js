import Image from "next/image";
import { HEAD, Main, Card, Button, ProjectPreview } from "../../components";
import { projects } from "../../constans";

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

const Projects = () => {
  return (
    // md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3
    <>
      <HEAD path='Projects' description='Latest Projects' />
      <Main styles=''>
        <div className='grid grid-rows-fit md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project, idx) => (
            <ProjectPreview key={idx} project={project} variants={cardVariant} />
          ))}
        </div>
      </Main>
    </>
  );
};

export default Projects;
