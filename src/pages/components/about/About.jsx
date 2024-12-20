import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <>
<Navbar />
<section id="about" className="py-32 bg-gray-800 dark:bg-gray-900 text-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-semibold text-gray-100 dark:text-gray-200 mb-4">
        About Me
      </h2>
      <p className="text-lg text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
        I'm Sijan Giri, an experienced Full-stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). I am passionate about building high-quality, user-centric applications. Over the years, I have gained hands-on experience in both front-end and back-end development, and I’m always looking for new challenges to improve my skills.
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-10">
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-4 border-rose-500 mb-6">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEm4MYAY-OTDQ/profile-displayphoto-shrink_400_400/B56ZPQObwiGsAg-/0/1734365265818?e=1740009600&v=beta&t=PkHh6rpzS8-ksKnU-tRFclWUbsJsw8_0c73ZleZ6KEk"
          alt="Sijan Giri"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 text-center">
        <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-200 mb-4">Skills & Technologies</h3>
        <ul className="space-y-2 text-lg text-gray-300 dark:text-gray-400">
          <li>✔️ **Full-stack Development**</li>
          <li>✔️ **MERN Stack** (MongoDB, Express.js, React.js, Node.js)</li>
          <li>✔️ **TypeScript** & **JavaScript**</li>
          <li>✔️ **REST APIs** & **RESTFUL APIs**</li>
          <li>✔️ **Version Control (Git, GitHub)**</li>
          <li>✔️ **UI/UX Design** & **Responsive Web Design**</li>
          <li>✔️ **Cloud Platforms** (Render, Vercel, MongoDB Atlas)</li>
        </ul>
      </div>
    </div>
    <div className="mt-12 text-center">
      <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto mb-6">
        I started my journey as a web developer by mastering the basics of HTML, CSS, and JavaScript. As I advanced, I moved into full-stack development, specializing in MERN stack technologies. My work experience includes developing dynamic web applications, such as an eCommerce platform and content management systems, which were built to be scalable and maintainable.
      </p>
      <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto mb-6">
        Outside of work, I'm passionate about learning new frameworks, experimenting with cutting-edge technologies, and contributing to open-source projects. I'm excited to collaborate with teams on innovative projects that make a real-world impact.
      </p>
      <a
        href="https://www.linkedin.com/in/sijan-giri-a43882335/"
        className="inline-block px-8 py-3 text-white bg-rose-500 rounded-full hover:bg-rose-600 transition duration-300 transform hover:scale-105"
      >
        Get in Touch
      </a>
    </div>
  </div>
</section>
<Footer />
    </>
  );
};

export default About;
