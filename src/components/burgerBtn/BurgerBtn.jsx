import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import Modal from "../modal/Modal"

import './styles.css'

const BurgerBtn = () => {
  /* Логика работы бургера
  Кликаем по бургеру -> меняется вн. вид бургера + откпывается модальное окно: в модальное окно передаем ф-цию закрытия
  модального окна - в ней непосредственно закрытие мод. окна + переключение вида бургера.
  Т.к. в мод. окне - меню, надо, чтобы при клике по ссылке тоже закрывалась модалка и бургер. (?) Повесить на 
  каждый линк onClick  с закрытием модалки и бургера
  */

  // Состояние активности модального окна. isModal = true - модалка открыта.
  const [isModal, setIsModal] = useState(false)
  // Состояние бургера. burgerOn = true - раскрыт.
  const [burgerOn, setBurgerOn] = useState(false)

  /* Открываем бургер и модальное окно.
  После открытия кнопка бургера недоступна из-за модалки.
  */
  const onBurgerClick = () => {
    setBurgerOn(true)
    setIsModal(true)
  }
  // ф-ция закрытия модального окна - закрываем модалку и бургер
  const onCloseModal = () => {
    setIsModal(false)
    setBurgerOn(false)
  }

  // Определение класса в компонент бургер (стиль)
  const burgerStyle = burgerOn ? 'burger_active burger' : 'burger'

  // Определение класса (стиль) для линка меню. Navlink имеет св-во isActive (доступно внутри него),
  // поэтому внутри Navlink через замыкание обращаемся к нему для определения активного линка - в зависимости
  // от значения определяем класс (стиль)
  const activeLink = "nav__link nav__link_active"
  const normalLink = "nav__link"

  const linkClassNameDefinition = ({ isActive }) => isActive ? activeLink : normalLink

  return (
    <>
      <button onClick={onBurgerClick}>
        <div className={burgerStyle}>
          <span></span>
        </div>
      </button>
      {/* Разместим в модалке нав-меню. Надо будет вынести меню в отдельный переиспользуемый компонент (!!!)
      Пока меню находится в коде Header.
      */}
      <Modal active={isModal} onClose={onCloseModal}>
        {/* Navbar */}
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
      </Modal>
    </>
  )
}

export default BurgerBtn