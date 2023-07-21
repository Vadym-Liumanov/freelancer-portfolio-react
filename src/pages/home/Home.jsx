import React from "react"

import HeadBlock from "../../components/HeadBlock/HeadBlock"
import SkillsCard from "../../components/skillsCard/SkillsCard"

import { skillsList } from "../../helpers/skillsList"

const Home = () => {

  const skills = skillsList.map((skill) => {
    return <SkillsCard key={skill.id} title={skill.title} description={skill.description} />
  })

  return (
    <>
      <HeadBlock />
      
      <section className="skills">
          <ul className="skills__list">
            {skills}
          </ul>
      </section>
    </>
  )
}

export default Home