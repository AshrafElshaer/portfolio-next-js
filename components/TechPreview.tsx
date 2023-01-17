import React ,{ReactNode} from 'react'
import {SiTypescript} from 'react-icons/si'

type Props = {
  tech: {
    name:string,
    icon:ReactNode;
    color?:string
    
  }
}

const TechPreview = ({tech}: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center min-w-[5rem]">
      <div className={tech.color}>
       {tech.icon}
      </div>
      <p>
       {tech.name}
      </p>
    </div>
  )
}

export default TechPreview