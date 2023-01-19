import React from "react";
import { ProjectDetails } from "../../components";
import { projects } from "../../constans";

type Props = {};

function index({}: Props) {
  return <ProjectDetails project={projects[1]} />;
}

export default index;
