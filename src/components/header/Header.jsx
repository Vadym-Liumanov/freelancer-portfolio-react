import React from "react"
import { NavLink } from "react-router-dom"

import "./styles.css"

import DarkModeBtn from "../darkModeBtn/DarkModeBtn"
import BurgerBtn from "../burgerBtn/BurgerBtn"
import NavMenu from "../navMenu/NavMenu"

const Header = () => {

  return (
    <header className="header">
      <div className="container">

        <div className="header__row">

          {/* Burger menu */}
          <div className="header__burger-btn">
            <BurgerBtn />
          </div>

          {/* Logo */}
          <div className="header__logo logo">
            <NavLink to="/" className="logo__link">
              <strong>Freelancer</strong> portfolio
            </NavLink>
          </div>

          {/* Navbar */}
          <div className="header__nav">
            <NavMenu orientation="horizontal" />
          </div>

          {/* Dark-mode button */}
          <div className="header__theme-btn">
            <DarkModeBtn />
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header