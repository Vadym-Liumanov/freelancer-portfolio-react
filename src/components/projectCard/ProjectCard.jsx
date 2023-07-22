import React from "react"
import { NavLink } from "react-router-dom"

import "./styles.css"

const ProjectCard = ({ link, imgSrc, title }) => {
  return (
    <li className="projects__item project-card">
      <NavLink to={link} alt="Project img" className="project-card__link">
        <img src={imgSrc} alt="Project img" className="project-card__img" />
        <h3 className="project-card__title">{title}</h3>
      </NavLink>
    </li>
  )
}

export default ProjectCard