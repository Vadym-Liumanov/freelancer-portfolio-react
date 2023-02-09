import React from "react"
import ProjectCard from "../../components/projectCard/ProjectCard"

import { img01, img02, img03, img04, img05, img06 } from "../../img/projects"

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">

            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}

            <li className="project">
              <a href="./project-page.html">
                <img src={img01} alt="Project img" className="project__img" />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-page.html">
                <img src={img02} alt="Project img" className="project__img" />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={img03} alt="Project img" className="project__img" />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <img src={img04} alt="Project img" className="project__img" />
              <h3 className="project__title">Dating app</h3>
            </li>
            <li className="project">
              <img src={img05} alt="Project img" className="project__img" />
              <h3 className="project__title">Landing</h3>
            </li>
            <li className="project">
              <img src={img06} alt="Project img" className="project__img" />
              <h3 className="project__title">Gaming community</h3>
            </li>

          </ul>
        </div>
      </main>
    </>
  )
}

export default Projects