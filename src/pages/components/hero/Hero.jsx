import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["a Fullstack Developer", "an Enthusiastic Learner", "a MERN Stack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-screen bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-300 flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <Navbar />
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left px-6 py-20 z-10">
          <div className="w-full md:w-1/2 animate-fade-in">
            <img
              className="rounded-full border-4 border-rose-500 shadow-lg transition duration-300 transform hover:scale-105 mx-auto w-72 sm:w-80 md:w-96"
              src="https://media.licdn.com/dms/image/v2/D5603AQHlaiZQXogtbg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730177635933?e=1736380800&v=beta&t=BkHtF0Dg3zYL_egWD8HyJevOz536mRIrA-raaWD2SNk"
              alt="My Image"
            />
          </div>
          <div className="w-full md:w-1/2 text-white dark:text-gray-800 flex flex-col gap-4 animate-slide-up">
            <h1 className="text-4xl font-bold font-serif transition duration-300 transform hover:scale-105">Hello, I'm Sijan Giri</h1>
            <h3 className="capitalize text-rose-400 text-2xl">
              I'm <span className="text-green-500 dark:text-green-700" ref={typingRef}></span>
            </h3>
            <p className="mt-4 text-gray-300 dark:text-gray-700">
              Experienced full-stack developer with hands-on expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), with additional experience in TypeScript and Redux. Skilled in building dynamic, user-friendly applications like eCommerce platforms and content management systems. Passionate about creating clean, efficient code and delivering robust solutions.
            </p>
            <Link to="https://www.linkedin.com/in/sijan-giri-a43882335/"><button className="mt-6 px-8 py-3 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition duration-300 transform hover:scale-105">
              Get In Touch
            </button></Link>
          </div>
        </div>
      </div>
<Footer />
    </>
  );
};

export default Hero;
