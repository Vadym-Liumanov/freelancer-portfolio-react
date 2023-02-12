import React, { useEffect } from "react"

import { useLocalStorage } from "../../utils/useLocalStorage"

import "./styles.css"

import sun from "./sun.svg"
import moon from "./moon.svg"
import detectDarkMode from "../../utils/detectDarkMode"

const BtnDarkMode = () => {

  const initialModeValue = detectDarkMode()

  const [mode, setMode] = useLocalStorage('darkMode', initialModeValue)

  const toggleDarkMode = () => {
    setMode((prevValue) => prevValue === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [mode])

  /* Этот useEffect будет выполнен единожды.
  Он повесит прослушку на динамическое изменение темы в системе - как только 
  в системе поменяется тема, она автоматически сменится в приложении.

  Через return подчищаем мусор в виде removeEventListener при анмаунте компонента
  */

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light"
        setMode(newColorScheme)
      })

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light"
        setMode(newColorScheme)
      })
  }, [setMode])

  const normalStyle = "dark-mode-btn"
  const activeStyle = "dark-mode-btn dark-mode-btn--active"

  return (
    <button className={(mode === 'dark') ? activeStyle : normalStyle} onClick={toggleDarkMode} >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode