import React from "react";
import ReactDOM from 'react-dom';
/* Компонент модального окна. В теле окна будет выводить {children}. 
В данном проекте будем использовать для вывода меню бургер.
Реализуем через portal.
*/

import './styles.css'

const Modal = ({ active, onClose, children }) => {
  if (!active) {
    return null
  }

  // Реализуем вывод Modal не в DOM непосредственно, а через portal
  const portalElement = document.getElementById('root')
  // Проверяем, есть ли искомый элемент, и при его наличии реализуем вывод элемента через portal
  if (portalElement) {
    return ReactDOM.createPortal(
      <>
        {/* Навесим на onClick фона модального окна onClose - чтобы на клик вне тела окна модалка закрывалась */}
        <div className="modal" onClick={onClose}>
          {/* Чтобы при клике внутри тела модального окна модалка не закрывалась (всплывающее событие срабатывает на детях)
          блокируем это событие на дочернем элементе через e.stopPropagation() */}
          <div className="modal__body" onClick={(e) => { e.stopPropagation() }}>
            <button className="modal__close-btn" onClick={onClose}>[x]</button>
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