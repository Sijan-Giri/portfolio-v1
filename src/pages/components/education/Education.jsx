import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Education = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-800 text-white py-12 pt-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-rose-500">My Education</h2>
            <p className="text-lg text-gray-300 mt-2">Here's a glimpse of my academic journey and the skills I've acquired over the years.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <a href="https://kcc.edu.np/" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">Bachelor of Computer Application</h3>
              <p className="text-gray-400 text-lg mt-2">Purbanchal University, Kantipur City College</p>
              <p className="text-gray-400 text-sm mt-1">2022 - 2026</p>
              <p className="text-gray-300 mt-4">
                Gained deep knowledge in computer science fundamentals, programming languages, databases, and web development.
                Developed a passion for full-stack development, particularly with the MERN stack (MongoDB, Express.js, React, Node.js).
              </p>
            </div>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">Full Stack Web Development</h3>
              <p className="text-gray-400 text-lg mt-2">Self Learning</p>
              <p className="text-gray-400 text-sm mt-1">Completed in 2024</p>
              <p className="text-gray-300 mt-4">
                Completed a comprehensive course focusing on front-end and back-end technologies, including React.js, Node.js, MongoDB, and Express.js. 
                Gained practical experience in building full-fledged applications and contributing to real-world projects.
              </p>
            </div>
          </a>
          <a href="https://www.mongodb.com/resources/languages/mern-stack-tutorial" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-rose-500">MERN Stack Mastery</h3>
              <p className="text-gray-400 text-lg mt-2">Self Learning</p>
              <p className="text-gray-400 text-sm mt-1">In Progress</p>
              <p className="text-gray-300 mt-4">
                Currently deepening my expertise in the MERN stack, learning advanced concepts like TypeScript integration, Redux, web sockets, 
                and cloud deployment. This course equips me with the skills to build sophisticated, scalable web applications.
              </p>
            </div>
          </a>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-700 my-1"></div>
      <Footer />
    </>
  );
};

export default Education;
