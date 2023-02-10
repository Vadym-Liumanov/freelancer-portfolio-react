import React from "react"
import { NavLink } from "react-router-dom"

import "./styles.css"

import { sun, moon } from "../../img/icons"

const Navbar = () => {

  const activeLink = "nav-list__link nav-list__link--active"
  const normalLink = "nav-list__link"

  const linkClassNameDefinition = ({ isActive }) => isActive ? activeLink : normalLink

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={linkClassNameDefinition}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={linkClassNameDefinition}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={linkClassNameDefinition}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar