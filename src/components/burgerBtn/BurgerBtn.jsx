import React, { useState } from "react";

import './styles.css'

// надо в props передать callback, по которому откроется модальное окно с меню
const BurgerBtn = () => {
  const [burgerOn, setBurgerOn] = useState(false)

  const onBurgerClick = () => {
    // пока в обработчике будем менять состояние бургера - внешний вид
    setBurgerOn((prevState) => prevState ? false : true)
  }

  const burgerStyle = burgerOn ? 'burger_active burger' : 'burger'

  return (
    <button onClick={onBurgerClick}>
      <div className={burgerStyle}> 
        <span></span>
      </div>
    </button>
  )
}

export default BurgerBtn