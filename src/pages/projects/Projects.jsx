import React from "react"
import ProjectCard from "../../components/projectCard/ProjectCard"
import { projectsList } from './../../helpers/projectsList'

const Projects = () => {

  const coupleOfProjects = projectsList.map((project) => {
    return (
      <div key={project.id}>
        <ProjectCard link={'#!'} imgSrc={project["img"]["small"]} title={project.title} />
      </div>
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