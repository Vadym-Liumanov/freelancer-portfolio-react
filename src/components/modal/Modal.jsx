import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
/* Компонент модального окна. В теле окна будет выводить {children}. 
В данном проекте будем использовать для вывода выпадающего бокового меню при нажатии кнопки бургер.
Вывод модального окна реализуем через portal.
*/

import './styles.css'

const Modal = ({ active, onClose, children }) => {
  /* через useEffect будем обращаться к элементу body для блокировки скроллинга при открытом модальном окне
  путем добавления класса "_blocked". Будет синхронизировано со значением открытого модального окна "active"
  */

  useEffect(() => {
    const bodyElement = document.body
    if (active) {
      bodyElement.classList.add('_blocked')
    } else {
      bodyElement.classList.remove('_blocked')
    }
  }, [active])

  if (!active) {
    return null
  }

  // Реализуем вывод Modal не в DOM непосредственно, а через portal. Задаем точку монтирования для портала.
  const portalElement = document.getElementById('root')
  // Проверяем, есть ли искомый элемент, и при его наличии реализуем вывод элемента через portal
  if (portalElement) {
    return ReactDOM.createPortal(
      <>
        {/* Навесим на onClick фона модального окна onClose, чтобы на клик вне тела окна модалка закрывалась */}
        <div className="modal" onClick={onClose}>
          {/* Чтобы при клике внутри тела модального окна модалка не закрывалась (всплывающее событие срабатывает на детях)
          блокируем это событие на дочернем элементе через e.stopPropagation() */}
          <div className="modal__body" onClick={(e) => { e.stopPropagation() }}>
            <button className="modal__close-btn" onClick={onClose}>
              <div className="modal__cross-wrapper">
                <div className="modal__cross"></div>
              </div>
            </button>
            <div className="modal__content">
              {children}
            </div>
          </div>
        </div>
      </>,
      portalElement
    )
  }

}

export default Modal