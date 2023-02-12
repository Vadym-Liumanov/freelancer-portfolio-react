import React, { useEffect, useRef } from "react"

import { useLocalStorage } from "../../helpers/useLocalStorage"

import "./styles.css"

import sun from "./sun.svg"
import moon from "./moon.svg"

const BtnDarkMode = () => {
  // const [mode, setMode] = useState('light')
  const [mode, setMode] = useLocalStorage('darkMode', 'light')
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

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode} ref={btnRef}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode