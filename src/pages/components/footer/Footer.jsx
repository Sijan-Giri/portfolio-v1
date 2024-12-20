import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 h-full">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-rose-500 mb-4">Contact Info</h3>
            <p className="text-xl mb-2">
              <strong>Email:-</strong> girisijan346@gmail.com
            </p>
            <p className="text-xl mb-2">
              <strong>Phone:-</strong> (+977) 9865373523
            </p>
            <p className="text-xl mb-2">
              <strong>Location:-</strong> Kathmandu, Nepal
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 text-center mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-rose-500 mb-4">Follow Me</h3>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/sijan-giri-a43882335/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-blue-500 hover:text-blue-400 transition duration-300 w-10 h-14 text-4xl"></i>
              </a>
              <a href="https://github.com/Sijan-Giri" target="_blank" rel="noopener noreferrer">
                <svg className="w-10 h-10 text-gray-300 hover:text-gray-200 transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.27 3.44 9.72 8.2 11.3.6.1.8-.26.8-.57v-2.17c-3.32.72-4.01-1.6-4.01-1.6-.54-1.35-1.32-1.7-1.32-1.7-1.08-.74.08-.73.08-.73 1.19.08 1.81 1.22 1.81 1.22 1.06 1.81 2.78 1.29 3.46 1.02.11-.77.42-1.29.77-1.59-2.66-.3-5.45-1.33-5.45-5.92 0-1.3.46-2.37 1.22-3.2-.12-.3-.53-1.51.1-3.14 0 0 1-.33 3.28 1.24 1.39-.39 2.87-.58 4.34-.58s2.95.19 4.34.58c2.29-1.58 3.28-1.24 3.28-1.24.64 1.63.23 2.84.1 3.14.75.83 1.22 1.9 1.22 3.2 0 4.59-2.79 5.62-5.45 5.92.36.3.66.89.66 1.79v2.66c0 .31.2.68.8.57C20.56 21.72 24 17.27 24 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-right">
            <h3 className="text-3xl font-semibold text-rose-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <Link to="/"><li>
                <a className="text-xl text-gray-300 hover:text-gray-200 transition duration-300">Home</a>
              </li></Link> 
              <Link to="/about"><li>
                <a className="text-xl text-gray-300 hover:text-gray-200 transition duration-300">About Me</a>
              </li></Link>
              <Link to="/education"><li>
                <a className="text-xl text-gray-300 hover:text-gray-200 transition duration-300">Education</a>
              </li></Link>
              <Link to="/projects"><li>
                <a className="text-xl text-gray-300 hover:text-gray-200 transition duration-300">Projects</a>
              </li></Link>
              <Link to="/contact"><li>
                <a className="text-xl text-gray-300 hover:text-gray-200 transition duration-300">Contact</a>
              </li></Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-rose-600/20 text-center py-4 m-0">
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Sijan Giri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
