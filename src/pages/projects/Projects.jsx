import React from "react"
import ProjectCard from "../../components/projectCard/ProjectCard"
import { projectsList } from './../../helpers/projectsList'

const Projects = () => {

  const coupleOfProjects = projectsList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        link={`/projects/${project.id}`}
        imgSrc={project["img"]["small"]}
        title={project.title}
      />
    )
  })

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {coupleOfProjects}
        </ul>
      </div>
    </main>
  )
}

export default Projects