import React from "react"

import ProjectCard from "../../components/projectCard/ProjectCard"
import { projectsList } from './../../helpers/projectsList'

import './styles.css'

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
    <section className="projects">
      <div className="container">
        <h2 className="projects__title title-1">Projects</h2>
        <ul className="projects__list">
          {coupleOfProjects}
        </ul>
      </div>
    </section>
  )
}

export default Projects