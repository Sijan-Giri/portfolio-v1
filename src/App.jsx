import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./pages/components/hero/Hero"
import About from "./pages/components/about/About"
import Education from "./pages/components/education/Education"
import Projects from "./pages/components/project/Projects"
import Contact from "./pages/components/contact/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
