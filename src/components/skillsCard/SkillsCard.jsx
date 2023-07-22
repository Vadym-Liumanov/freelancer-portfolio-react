import React from "react"

import './styles.css'

const SkillsCard = ({ title, description }) => {
  return (
    <li className="skills__item skills-item">
      <h2 className="skills-item__title">{title}</h2>
      <p className="skills-item__description">{description}</p>
    </li>
  )
}

export default SkillsCard