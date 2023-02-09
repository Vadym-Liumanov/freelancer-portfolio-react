import React from "react"
import "./css/main.css"

import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Projects from "./pages/projects/Projects"
import Contacts from "./pages/contacts/Contacts"

function App() {
  return (
    <div className="App">

      <Navbar />
      
      {/* <Contacts /> */}
      <Projects />
      {/* <Home /> */}

      <Footer />

      {/* <script src="./js/main.js"></script> */}

    </div>
  )
}

export default App;