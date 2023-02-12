import React, { useEffect, useRef } from "react"

import { useLocalStorage } from "../../utils/useLocalStorage"

import "./styles.css"

import sun from "./sun.svg"
import moon from "./moon.svg"
import detectDarkMode from "../../utils/detectDarkMode"

const BtnDarkMode = () => {
  // const [mode, setMode] = useState('light')

  const initialModeValue = detectDarkMode()

  const [mode, setMode] = useLocalStorage('darkMode', initialModeValue)
  const btnRef = useRef(null)

  const toggleDarkMode = () => {
    setMode((prevValue) => prevValue === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [mode])

  /* Этот useEffect будет выполнен единожды.
  Он повесит прослушку на динамическое изменение темы в системе - как только 
  в системе поменяется тема, она автоматически сменится в приложении 
  
  TODO
  Убрать мусор в виде прослушки при анмаунте приложения 
  */

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light"
        setMode(newColorScheme)
      })
  }, [setMode])

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode} ref={btnRef}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode