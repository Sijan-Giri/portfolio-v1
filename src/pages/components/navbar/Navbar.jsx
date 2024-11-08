import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header className="w-full fixed top-0 left-0 flex justify-between items-center py-4 bg-gray-900 dark:bg-gray-800 bg-opacity-90 shadow-lg z-50">
  <div className="flex items-center pl-6">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <Link to="/"><div className="flex items-center justify-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-dancing-script text-blue-400 dark:text-blue-500 transform transition-all duration-300 hover:scale-110 hover:text-blue-500 tracking-wide shadow-lg">
        Sijan
      </h1>
    </div></Link>
  </div>

  {/* Mobile Menu Toggle */}
  <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block mr-4">
    <svg
      className="fill-current text-gray-200"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  </label>
  <input className="hidden" type="checkbox" id="menu-toggle" />

  {/* Navbar Menu */}
  <div className="hidden md:flex md:items-center md:w-auto w-full pr-4" id="menu">
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-100 pt-4 md:pt-0">
        <Link to="/"><li><a className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-400 transition duration-300">Home</a></li></Link>
        <Link to="/about"><li><a className="md:p-4 py-3 px-0 block hover:text-gray-300 transition duration-300">About Me</a></li></Link>
        <Link to="/education"><li><a className="md:p-4 py-3 px-0 block hover:text-gray-300 transition duration-300">Education</a></li></Link>
        <Link to="/projects"><li><a className="md:p-4 py-3 px-0 block hover:text-gray-300 transition duration-300">Projects</a></li></Link>
        <Link to="/contact"><li><a className="md:p-4 py-3 px-0 block hover:text-gray-300 transition duration-300">Contact</a></li></Link>
      </ul>
    </nav>
  </div>
</header>
    </>
  )
}

export default Navbar