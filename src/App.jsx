import React, { useState } from "react"

import { HashRouter, Routes, Route } from "react-router-dom"

import "./css/main.css"

import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Projects from "./pages/projects/Projects"
import Contacts from "./pages/contacts/Contacts"
import Project from "./pages/project/Project"
import NotFound from "./pages/notFound/NotFound"

import ScrollToTop from "./utils/scrollToTop"
import Modal from "./components/modal/Modal"

function App() {
  // Состояние видимости модального окна. Все это потом перенесем в компонент Header, где будет кнопка бургер-меню
  const [isModal, setIsModal] = useState(false)
  // ф-ция закрытия модального окна
  const onClose = () => {
    setIsModal(false)
  }
  const onOpen = () => {
    setIsModal(true)
  }

  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Header onOpen={onOpen} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:id" element={<Project />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Реализовали через portal. Теперь вне зависимости от положения в DOM, Modal будет припортален к #root(наши настройки) элементу */}
        <Footer />
        <Modal active={isModal} onClose={onClose}>
          Модальное окно
        </Modal>
      </HashRouter>

    </div>
  )
}

export default App;