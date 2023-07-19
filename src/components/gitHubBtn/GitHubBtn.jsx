import React from "react"

import "./styles.css"

import gitHubBlack from "./gitHub-black.svg"

const GitHubBtn = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  )
}

export default GitHubBtn