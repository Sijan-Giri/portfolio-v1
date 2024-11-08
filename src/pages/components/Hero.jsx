import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["a Fullstack Developer", "an Enthusiastic Learner", "a MERN Stack Developer"], // Add any strings you want
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
      <div className="w-full h-full bg-gray-900 dark:bg-gray-200">
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
          <div className="flex-1 flex justify-between items-center">
            <img
              className="sm:w-[10rem] xs:w-[7rem]"
              src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png"
              alt="Logo"
            />
          </div>
          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
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

          <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                <li><a className="md:p-4 py-3 px-0 block text-rose-500" href="#">Home</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">About Me</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Education</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Experience</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Projects</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="h-screen w-full mx-auto py-20 xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4">
          <div className="w-full animate-fade-in">
            <img
              className="rounded-full md:max-w-[70%] sm:max-w-[50%] xs:max-w-[60%] mx-auto"
              src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"
              alt="My Image"
            />
          </div>
          <div className="w-full flex flex-col justify-center gap-4 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4 animate-slide-up">
            <h1 className="text-4xl font-semibold font-serif">Hello, My name is Samuel Abera</h1>
            <h3 className="capitalize text-rose-400">
              I'm <span className="text-green-500 dark:text-green-700" ref={typingRef}></span>
            </h3>
            <p>Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.</p>
            <div className="sm:mt-4 xs:mt-2">
              <button className="px-6 py-1 bg-rose-500 text-white rounded-sm transition-transform transform hover:scale-105 duration-300">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
