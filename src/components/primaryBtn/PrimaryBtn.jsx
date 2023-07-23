import React from "react"
import { NavLink } from "react-router-dom"

import './styles.css'

// Компонент кнопки для переходов, например, к предыдущей или какой-то другой странице
// Принимает children, строку ссылки перехода link и className
const PrimaryBtn = ({ children, link, className }) => {
  return (
    <NavLink to={link} className={`primary-btn ${className}`} >{children}</NavLink>
  )
}

export default PrimaryBtn