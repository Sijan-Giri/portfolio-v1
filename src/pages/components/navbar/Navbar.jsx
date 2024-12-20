import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 flex justify-between items-center py-4 bg-gray-900 dark:bg-gray-800 bg-opacity-90 shadow-lg z-50 h-16">
      <div className="flex items-center pl-6">
        <Link to="/">
          <div className="flex items-center justify-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src= "https://sijangiri.com.np/public/images/Sijan-Logo.png" />
        </div>
          </div>
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        className="pointer-cursor md:hidden block mr-4 p-1 rounded-full bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-800 transition duration-300 z-50"
        style={{ zIndex: 1000 }}
      >
        <i className="fa-solid fa-bars text-gray-700 text-3xl"></i>
      </button>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-gray-900 dark:bg-gray-800 md:relative md:top-auto md:left-auto md:flex md:items-center md:w-auto pr-4 transition duration-300 ease-in-out`}
        id="menu"
      >
        <nav>
          <ul className="flex flex-col md:flex-row items-center text-base text-gray-100 dark:text-gray-100 pt-4 md:pt-0 space-y-4 md:space-y-0 md:space-x-8 px-4 md:px-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500' 
                    : 'text-rose-500 hover:text-rose-400 hover:bg-gray-800'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500'
                    : 'text-rose-500 hover:text-rose-400 hover:bg-gray-800'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500'
                    : 'text-rose-500 hover:text-rose-400 hover:bg-gray-800'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500'
                    : 'text-rose-500 hover:text-rose-400 hover:bg-gray-800'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500'
                    : 'text-rose-500 hover:text-rose-400 hover:bg-gray-800'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
