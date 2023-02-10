import React from "react"

import "./styles.css"

const ProjectCard = ({ link, imgSrc, title }) => {
  return (
    <>
      <li className="project">
        <a href={link}>
          <img src={imgSrc} alt="Project img" className="project__img" />
          <h3 className="project__title">{title}</h3>
        </a>
      </li>
    </>
  )
}

export default ProjectCard