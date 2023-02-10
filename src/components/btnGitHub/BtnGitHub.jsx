import React from "react"

import "./styles.css"

import gitHubBlack from "./gitHub-black.svg"

const BtnGitHub = () => {
  return (
    <a href="#!" className="btn-outline">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  )
}

export default BtnGitHub