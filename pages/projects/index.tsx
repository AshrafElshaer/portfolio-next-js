import Image from "next/image";
import { HEAD, Main, Card, Button, ProjectPreview } from "../../components";
import { projects } from "../../constans";

const Projects = () => {
  return (
    // md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3
    <>
      <HEAD path='Projects' description='Latest Projects' />
      <Main styles=''>
        <div className='flex flex-wrap justify-center gap-4'>
          {projects.map((project, idx) => (
            <ProjectPreview key={idx} project={project} />
          ))}
        
        </div>
      </Main>
    </>
  );
};

export default Projects;
