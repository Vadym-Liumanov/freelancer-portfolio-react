import React from "react"
import { NavLink } from "react-router-dom"

import "./styles.css"

import DarkModeBtn from "../darkModeBtn/DarkModeBtn"

const Header = () => {

  const activeLink = "nav__link nav__link_active"
  const normalLink = "nav__link"

  const linkClassNameDefinition = ({ isActive }) => isActive ? activeLink : normalLink

  return (
    <header className="header">
      <div className="container">

        <div className="header__row">

          <div className="header__logo">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>
          </div>

          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
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
          </nav>

          <div className="header__btn">
            <DarkModeBtn />
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header