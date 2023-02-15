import React from "react"

import "./styles.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Vadym</em></strong><br />
          a frontend developer
        </h1>
        <div className="header__text">
          <p>programming is my hobby and work at the same time</p>
        </div>
        <a href="#!" className="btn" style={{display: "none"}}>Download CV</a>
      </div>
    </header>
  )
}

export default Header