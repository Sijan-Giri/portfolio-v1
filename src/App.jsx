import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./pages/components/hero/Hero"
import About from "./pages/components/about/About"
import Education from "./pages/components/education/Education"
import Projects from "./pages/components/project/Projects"
import Contact from "./pages/components/contact/Contact"
import Project1 from "./pages/components/projectDetails/Project1"
import Project2 from "./pages/components/projectDetails/Project2"
import Project3 from "./pages/components/projectDetails/Project3"

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
        <Route path="/project/1" element={<Project1 />}/>
        <Route path="/project/2" element={<Project2 />}/>
        <Route path="/project/3" element={<Project3 />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
