import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap justify-between">
      {/* Left Section - Contact Info */}
      <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl font-semibold text-rose-500 mb-4">Contact Info</h3>
        <p className="text-lg mb-2">
          <strong>Email:</strong> girisijan346@gmail.com
        </p>
        <p className="text-lg mb-2">
          <strong>Phone:</strong> (+977) 9865373523
        </p>
        <p className="text-lg mb-2">
          <strong>Location:</strong> Kathmandu, Nepal
        </p>
      </div>

      {/* Center Section - Social Media Links */}
      <div className="w-full sm:w-1/2 md:w-1/3 text-center mb-6 md:mb-0">
        <h3 className="text-2xl font-semibold text-rose-500 mb-4">Follow Me</h3>
        <div className="flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/sijan-giri-a43882335/" target="_blank" rel="noopener noreferrer">
  <svg className="w-8 h-8 text-blue-500 hover:text-blue-400 transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 0H5C3.9 0 3 .9 3 2v20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM8 20H5v-7h3v7zm-1.5-8.4C6.1 11.6 7 10.5 7 9s-.9-2.6-2.5-2.6C3.1 6.4 2 7.5 2 9s.9 2.6 2.5 2.6C6.1 11.4 7 10.3 7 9zm13.5 8.4h-3v-4.8c0-1.1-.9-2-2-2s-2 .9-2 2v4.8h-3v-7h3v1.5c1-.5 2.2-.5 3-.5 1.8 0 3 1.2 3 3v3.5z"></path>
  </svg>
</a>

          <a href="https://github.com/Sijan-Giri" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 text-gray-300 hover:text-gray-200 transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.27 3.44 9.72 8.2 11.3.6.1.8-.26.8-.57v-2.17c-3.32.72-4.01-1.6-4.01-1.6-.54-1.35-1.32-1.7-1.32-1.7-1.08-.74.08-.73.08-.73 1.19.08 1.81 1.22 1.81 1.22 1.06 1.81 2.78 1.29 3.46 1.02.11-.77.42-1.29.77-1.59-2.66-.3-5.45-1.33-5.45-5.92 0-1.3.46-2.37 1.22-3.2-.12-.3-.53-1.51.1-3.14 0 0 1-.33 3.28 1.24 1.39-.39 2.87-.58 4.34-.58s2.95.19 4.34.58c2.29-1.58 3.28-1.24 3.28-1.24.64 1.63.23 2.84.1 3.14.75.83 1.22 1.9 1.22 3.2 0 4.59-2.79 5.62-5.45 5.92.36.3.66.89.66 1.79v2.66c0 .31.2.68.8.57C20.56 21.72 24 17.27 24 12c0-6.63-5.37-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Right Section - Quick Links */}
      <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-right">
        <h3 className="text-2xl font-semibold text-rose-500 mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-lg text-gray-300 hover:text-gray-200 transition duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-lg text-gray-300 hover:text-gray-200 transition duration-300">About Me</a>
          </li>
          <li>
            <a href="/projects" className="text-lg text-gray-300 hover:text-gray-200 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="/contact" className="text-lg text-gray-300 hover:text-gray-200 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Section - Copyright */}
    <div className="text-center mt-12">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sijan Giri. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer