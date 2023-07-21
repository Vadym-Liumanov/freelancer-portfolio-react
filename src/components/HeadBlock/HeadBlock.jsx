import React from "react"

import "./styles.css"

const HeadBlock = () => {
  return (
    <section className="head-block">
      <div className="head-block__title">
        <h1 className="head-block__header">
          <strong>
            Hi, my name is <br /><em>Vadym</em>
          </strong>
        </h1>
        <h2 className="head-block__subheader">
          a frontend developer
        </h2>
      </div>
      <div className="head-block__text">
        <p>programming is my hobby and work at the same time</p>
      </div>
      {/* Не отображается */}
      <a href="#!" target="_blank" className="head-block__btn" style={{ display: "none" }}>Download CV</a>
    </section>
  )
}

export default HeadBlock