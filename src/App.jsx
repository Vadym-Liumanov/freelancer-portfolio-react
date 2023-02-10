import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./css/main.css"

import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Projects from "./pages/projects/Projects"
import Contacts from "./pages/contacts/Contacts"
import Project from "./pages/project/Project"

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <script src="./js/main.js"></script> */}

    </div>
  )
}

export default App;