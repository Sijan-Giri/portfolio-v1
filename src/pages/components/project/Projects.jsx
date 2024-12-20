import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-800 text-white py-12 pt-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-rose-500">My Projects</h2>
            <p className="text-lg text-gray-300 mt-2">Here are some of the projects I have worked on, showcasing my skills in web development.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">E-commerce Platform (Backend)</h3>
              <p className="text-gray-400 text-lg mt-2">MERN Stack, MongoDB, React, Node.js</p>
              <p className="text-gray-300 mt-4">
                A full-stack web application for managing food orders, including features for user authentication, cart management, and order processing. 
                The system integrates with the backend to handle food item inventory and order history.
              </p>
              <a
                href="https://food-management-system-backend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg mt-4 hover:bg-rose-600 transition duration-300"
              >
                View on Website
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">E-commerce Platform (User)</h3>
              <p className="text-gray-400 text-lg mt-2">React, Node.js, MongoDB, Redux</p>
              <p className="text-gray-300 mt-4">
                A dynamic e-commerce platform built using the MERN stack, featuring user authentication, product listings, shopping cart functionality, 
                and a checkout system. Implements payment integration with payment gateways like Khalti.
              </p>
              <a
                href="https://food-management-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg mt-4 hover:bg-rose-600 transition duration-300"
              >
                View on Website
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">E-commerce Platform (Admin)</h3>
              <p className="text-gray-400 text-lg mt-2">React, Express, MongoDB</p>
              <p className="text-gray-300 mt-4">
                A restaurant billing system for managing customer orders, billing, and reservation information. 
                It allows admins to manage employees, categories, and sales data, and provides customers with real-time updates.
              </p>
              <a
                href="https://food-management-frontend-admin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg mt-4 hover:bg-rose-600 transition duration-300"
              >
                View on Website
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">Blog Management System</h3>
              <p className="text-gray-400 text-lg mt-2">React, Node.js, MongoDB</p>
              <p className="text-gray-300 mt-4">
                A system designed for managing blog posts with features like adding, editing, and deleting posts, user authentication, and blog categorization.
              </p>
              <a
                href="https://github.com/Sijan-Giri/React-BlogMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg mt-4 hover:bg-rose-600 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">Content Management System</h3>
              <p className="text-gray-400 text-lg mt-2">React, Node.js, MongoDB</p>
              <p className="text-gray-300 mt-4">
                A simple CMS to manage content dynamically. Admins can add, update, and delete content, and users can view and search through content items.
              </p>
              <a
                href="https://github.com/Sijan-Giri/Content-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg mt-4 hover:bg-rose-600 transition duration-300"
              >
                View on GitHub
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">Note Sharing Backend</h3>
              <p className="text-gray-400 text-lg mt-2">Node.js, Express, MongoDB</p>
              <p className="text-gray-300 mt-4">
                A backend for a note-sharing application where users can upload, manage, and share their notes with others. 
                Features include user authentication, note management, and secure note sharing through API endpoints.
              </p>
              <a
                href="https://github.com/Sijan-Giri/Note-Sharing-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg mt-4 hover:bg-rose-600 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-700 my-1"></div>
      <Footer />
    </>
  );
};

export default Projects;
