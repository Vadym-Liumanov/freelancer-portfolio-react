// Компонент кнопки переключения темы 'dark' - 'light'
import React, { useEffect } from "react"

import { useLocalStorage } from "../../utils/useLocalStorage"

import "./styles.css"

import sun from "./sun.svg"
import moon from "./moon.svg"
import detectDarkMode from "../../utils/detectDarkMode"

const BtnDarkMode = () => {
  // Запишем в переменную значение темы в Windows (если таковое имеется)
  const initialModeValue = detectDarkMode()
  // Зададим значение темы в состоянии компонента
  const [mode, setMode] = useLocalStorage('darkMode', initialModeValue)
  // Ф-ция переключения значения темы - в зависимости от предыдущего состояния prevValue
  const toggleDarkMode = () => {
    setMode((prevValue) => prevValue === 'light' ? 'dark' : 'light')
  }

  // При каждой смене значения темы (dark / light) к классам body будет добавлен/удален класс 'dark'
  // В этом классе будут переопределены значения переменных для фона контента и цвета текста
  // Темный фон и светлый текст переопределятся на светлый фон и темный текст
  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [mode])

  /* Следующий useEffect будет выполнен единожды.
  Он повесит прослушку на динамическое изменение темы в системе - как только 
  в системе поменяется тема, она автоматически сменится в приложении.

  Через return подчищаем мусор в виде removeEventListener при анмаунте компонента (избегаем memory leaks).
  Для этого обработчик события вынесем в отдельную ф-цию (иначе работать не будет, т.к. ф-ция - списочный объект)
  !Переделать анмаунт - надо ф-цию обработчика события выносить
  */

  const onChangeColorSchemeHandler = (event) => {
    const newColorScheme = event.matches ? "dark" : "light"
    setMode(newColorScheme)
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onChangeColorSchemeHandler)

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", onChangeColorSchemeHandler)
  }, [setMode])

  const normalStyle = "dark-mode-btn"
  const activeStyle = "dark-mode-btn dark-mode-btn_active"

  return (
    <button className={(mode === 'dark') ? activeStyle : normalStyle} onClick={toggleDarkMode} >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode