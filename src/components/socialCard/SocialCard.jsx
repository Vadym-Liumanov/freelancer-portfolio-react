import React from "react"

const SocialCard = ({ link, icon }) => {
  return (
    <li className="social__item">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icon} alt="Link" />
      </a>
    </li>
  )
}

export default SocialCard