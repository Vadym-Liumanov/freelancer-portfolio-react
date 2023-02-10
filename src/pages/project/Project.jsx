import React from "react"

import { imgBig02 } from "./../../img/projects"

import BtnGitHub from "../../components/btnGitHub/BtnGitHub"

import "./styles.css"

const Project = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">Video service</h1>

          <img src={imgBig02} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <BtnGitHub link={"htpps:/github.com"} />

        </div>
      </div>
    </main>
  )
}

export default Project