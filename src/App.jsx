import React from "react"

import { HashRouter, Routes, Route } from "react-router-dom"

import "./css/main.css"

import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Projects from "./pages/projects/Projects"
import Contacts from "./pages/contacts/Contacts"
import Project from "./pages/project/Project"
import NotFound from "./components/notFound/NotFound"

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;