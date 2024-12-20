import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({
        ...formData,
        [name] : value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-800 text-white py-12 pt-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-rose-500">Contact Me</h2>
            <p className="text-lg text-gray-300 mt-2">I'd love to hear from you! Feel free to reach out for collaborations, inquiries, or just to connect.</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-full md:w-8/12 lg:w-6/12">
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg text-gray-300">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <button type="submit" className="w-full py-3 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-rose-500">Other Ways to Reach Me</h3>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="mailto:girisijan346@gmail.com" className="text-rose-500 hover:text-rose-600 transition duration-300">Email</a>
              <a href="https://www.linkedin.com/in/sijan-giri-a43882335/" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:text-rose-600 transition duration-300">LinkedIn</a>
              <a href="https://github.com/Sijan-Giri" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:text-rose-600 transition duration-300">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-700 my-1"></div>
      <Footer />
    </>
  );
};

export default Contact;
