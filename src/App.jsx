import React from "react"

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

function App() {

  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/:id" element={<Project />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;