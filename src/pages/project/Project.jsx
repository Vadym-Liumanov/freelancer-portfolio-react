import React from "react"
import { useParams } from "react-router-dom"

import NotFound from "../../components/notFound/NotFound"

import BtnGitHub from "../../components/btnGitHub/BtnGitHub"

import "./styles.css"

import { projectsList } from "../../helpers/projectsList"

const Project = () => {

  const { id } = useParams()

  const currentProject = projectsList.find(element => element.id === id)

  if (!currentProject) {
    return (
      <>
        <NotFound />
      </>
    )
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{currentProject.title}</h1>
          <img src={currentProject['img']['big']} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{currentProject['skills']}</p>
          </div>
          <BtnGitHub link={currentProject['gitHubLink']} />
        </div>
      </div>
    </main>
  )
}

export default Project