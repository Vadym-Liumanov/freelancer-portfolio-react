import React from "react"
import { useParams } from "react-router-dom"

import NotFound from "../notFound/NotFound"
import GitHubBtn from "../../components/gitHubBtn/GitHubBtn"

import "./styles.css"
import { projectsList } from "../../helpers/projectsList"

const Project = () => {
  // Берем из параметров URL id запрашиваемого проекта
  const { id } = useParams()
  // Смотрим, есть ли в массиве проектов проект с текущим id
  const currentProject = projectsList.find(element => element.id === id)

  // Если такого проекта нет - покажем 404
  if (!currentProject) {
    return (
      <>
        <NotFound />
      </>
    )
  }
  // Если есть - выводим страничку проекта
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{currentProject.title}</h1>
          <img src={currentProject['img']['big']} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{currentProject['skills']}</p>
          </div>
          <GitHubBtn link={currentProject['gitHubLink']} />
        </div>
      </div>
    </main>
  )
}

export default Project