import React from "react"

import Header from "../../components/header/Header"
import SkillsCard from "../../components/skillsCard/SkillsCard"

import { skillsList } from "../../helpers/skillsList"

const Home = () => {

  const skills = skillsList.map((skill) => {
    return <SkillsCard key={skill.id} title={skill.title} description={skill.description} />
  })

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            {skills}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home