import React from "react"

const SkillsCard = ({ title, description }) => {
  return (
    <li className="skills__item">
      <h2 className="title-2">{title}</h2>
      <p>{description}</p>
    </li>
  )
}

export default SkillsCard