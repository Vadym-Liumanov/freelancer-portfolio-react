import React from "react"
import { useParams } from "react-router-dom"

import NotFound from "../notFound/NotFound"
import GitHubBtn from "../../components/gitHubBtn/GitHubBtn"

import "./styles.css"
import { projectsList } from "../../helpers/projectsList"
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn"

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
    <section className="project">
      <div className="container">
        <div className="project__wrapper">
          <h1 className="project__title title-1">{currentProject.title}</h1>
          <img src={currentProject['img']['big']} alt="" className="project__img" />
          <div className="project__description">
            <p>{currentProject['skills']}</p>
          </div>
          <GitHubBtn link={currentProject['gitHubLink']} />
          <PrimaryBtn link="/projects" className="project__back-btn">
            To Projects
          </PrimaryBtn>
        </div>
      </div>
    </section>
  )
}

export default Project