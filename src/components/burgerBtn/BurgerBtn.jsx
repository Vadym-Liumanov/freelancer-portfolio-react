import React, { useState } from "react"

import Modal from "../modal/Modal"

import './styles.css'
import NavMenu from "../navMenu/NavMenu"

const BurgerBtn = () => {
  /* Логика работы бургера
  Кликаем по бургеру -> меняется вн. вид бургера + откпывается модальное окно: в модальное окно передаем ф-цию закрытия
  модального окна - в ней непосредственно закрытие мод. окна + переключение вида бургера.
  Т.к. в мод. окне - меню, надо, чтобы при клике по ссылке тоже закрывалась модалка и бургер. Повесим на 
  каждый линк onClick с закрытием модалки и бургера - передадим в качестве пропсов в компонент NavMemu
  */

  // Состояние активности модального окна. isModal = true - модалка открыта.
  const [isModal, setIsModal] = useState(false)
  // Состояние бургера. burgerOn = true - бургер раскрыт.
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

  return (
    <>
      <button onClick={onBurgerClick}>
        {/* Отрисовка значка бургера */}
        <div className={burgerStyle}>
          <span></span>
        </div>
      </button>
      {/* Разместим в модалке компонент навигационного меню NavMenu.
      В пропсах передадим ориентацию меню и ф-цию клика по линку меню
      */}
      <Modal active={isModal} onClose={onCloseModal}>
        <NavMenu orientation="vertical" onLinkClick={onCloseModal} />
      </Modal>
    </>
  )
}

export default BurgerBtn