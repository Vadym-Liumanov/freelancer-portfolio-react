import React from "react"

import "./styles.css"

import projectImage01 from "./../../img/projects/01.jpg"

const ProjectCard = () => {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={projectImage01} alt="Project img" className="project__img" />
          <h3 className="project__title">Gaming streaming portal</h3>
        </a>
      </li>
    </>
  )
}

export default ProjectCard