import React from 'react'
import { ProjectDetails } from '../../components'
import { projects } from '../../constans'

type Props = {}

function index({}: Props) {
  return (
    <ProjectDetails project={projects[0]} />
  )
}

export default index