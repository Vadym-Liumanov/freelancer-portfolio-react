import React from "react"

import "./styles.css"

const HeadBlock = () => {
  return (
    <section className="head-block">
      <div className="head-block__wrapper">
        <h1 className="head-block__title">
          <strong>Hi, my name is <em>Vadym</em></strong><br />
          a frontend developer
        </h1>
        <div className="head-block__text">
          <p>programming is my hobby and work at the same time</p>
        </div>
        <a href="#!" target="_blank" className="head-block__btn" style={{ display: "none" }}>Download CV</a>
      </div>
    </section>
  )
}

export default HeadBlock