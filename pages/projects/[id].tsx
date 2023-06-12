import { useRouter } from "next/router";

import { ProjectDetails } from "../../components";
import { projects } from "../../constans";

const ProjectDetailsPage = () => {
  const router = useRouter();
  const projectId = router.query.id;
  const project = projects.find((project) => project.id === Number(projectId));

  if (!project) return;

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
