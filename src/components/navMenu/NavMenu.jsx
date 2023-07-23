import React from "react"
import { NavLink } from "react-router-dom"

import './styles.css'
// Массив элементов меню
import { menuList } from "../../helpers/menuList"

/* В пропсах компонента передается обязательный атрибут ориентации меню orientation: 'horizontal' | 'vertical'
Также есть необязательный атрибут - ф-ция onLinkClick - для Navlink (в выпадающем меню при клике на link будет
  закрыто меню, в горизонтельном меню этот параметр будет отсутствовать)
*/
const NavMenu = ({ orientation, onLinkClick }) => {
  /* Определение класса (стиля) для линка меню. Navlink имеет св-во isActive - true при активном линке (false в прот. сл.).
   Оно доступно внутри Navlink из контекста через декомпозицию { isActive }, поэтому внутри Navlink можем взять его 
   в качестве аргумента для функции определения активного линка - в зависимости от активности задаем класс линка
   (внешний вид - активный линк подчеркивается)
   */

  // type orientation = 'horizontal' | 'vertical'

  // Задаем необходимые классы в зависимости от ориентации меню и активного линка
  const activeLinkClassName = `nav__link nav__link_active nav__link_${orientation}`
  const normalLinkClassName = `nav__link nav__link_${orientation}`

  const listClassName = `nav__list nav__list_${orientation}`

  const linkClassNameDefinition = ({ isActive }) => isActive ? activeLinkClassName : normalLinkClassName

  return (
    <nav className="nav">
      <ul className={listClassName}>
        {menuList.map((item) => {
          return (
            <li className="nav__item" key={item.id}>
              {onLinkClick
                ? <NavLink to={item.link} className={linkClassNameDefinition} onClick={onLinkClick}>{item.name}</NavLink>
                : <NavLink to={item.link} className={linkClassNameDefinition}>{item.name}</NavLink>
              }
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMenu