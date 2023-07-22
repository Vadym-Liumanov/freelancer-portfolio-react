import React from "react"
import { NavLink } from "react-router-dom"

import "./styles.css"

const ProjectCard = ({ link, imgSrc, title }) => {
  return (
    <li className="projects__item project">
      <NavLink to={link} alt="Project img" className="project__link">
        <img src={imgSrc} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  )
}

export default ProjectCard