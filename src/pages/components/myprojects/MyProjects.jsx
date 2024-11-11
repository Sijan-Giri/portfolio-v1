import React from 'react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
  return (
    <>
      <div className="py-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-10">Top Projects</h2>
        <div className="flex flex-wrap justify-between gap-8 px-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <a target="_blank" rel="noopener noreferrer">
              <img className="rounded-t-lg w-full h-56 object-cover" src="https://sijangiri.com.np/public/images/Screenshot%202024-11-09%20162049.png" alt="project-1" />
            </a>
            <div className="p-6">
              <a target="_blank" rel="noopener noreferrer">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Food Management System (User)</h5>
              </a>
              <p className="text-gray-700 dark:text-gray-400 mb-4">Food Management System (User) is an intuitive web app that lets users easily browse and order meals. It offers a seamless and engaging food ordering experience.</p>
              <Link to="/project/1"><a 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-600 rounded-lg hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-500 dark:hover:bg-rose-600 dark:focus:ring-rose-800 transition duration-300"
              >
                Read More
                <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a></Link>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <a target="_blank" rel="noopener noreferrer">
              <img className="rounded-t-lg w-full h-56 object-cover" src="https://sijangiri.com.np/public/images/Screenshot%202024-11-09%20162349.png" alt="project-2" />
            </a>
            <div className="p-6">
              <a target="_blank" rel="noopener noreferrer">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Food Management System (Admin)</h5>
              </a>
              <p className="text-gray-700 dark:text-gray-400 mb-4">Food Management System (Admin) is a powerful admin panel that enables efficient management of food categories, items, and orders. It streamlines the backend operations for food service businesses.</p>
              <Link to="/project/2"><a
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-600 rounded-lg hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-500 dark:hover:bg-rose-600 dark:focus:ring-rose-800 transition duration-300"
              >
                Read More
                <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a></Link>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <a target="_blank" rel="noopener noreferrer">
              <img className="rounded-t-lg w-full h-56 object-cover" src="https://sijangiri.com.np/public/images/Screenshot%202024-11-09%20162426.png" alt="project-3" />
            </a>
            <div className="p-6">
              <a target="_blank" rel="noopener noreferrer">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Food Management System (Backend)</h5>
              </a>
              <p className="text-gray-700 dark:text-gray-400 mb-4">Food Management System (Backend) streamlines food order and inventory management. The backend, built with Node.js and MongoDB, ensures efficient data handling and seamless integration with the frontend.</p>
              <Link to="/project/3"><a 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-600 rounded-lg hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-500 dark:hover:bg-rose-600 dark:focus:ring-rose-800 transition duration-300"
              >
                Read More
                <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
