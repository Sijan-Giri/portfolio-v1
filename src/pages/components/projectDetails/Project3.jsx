import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Project3 = () => {
  return (
    <>
    <Navbar />
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Food Management System (Backend)
            </h1>
            <br />
            <p class="mb-8 leading-relaxed">The Food Management System (Backend) is the core of the platform, handling the critical processes of food order and inventory management. Built using Node.js, it leverages the speed and scalability of JavaScript for efficient request handling. This backend system ensures that every action, from order creation to inventory updates, is processed quickly and reliably, providing a seamless user experience for both customers and admins.
            <br /><br />
            The MongoDB database is used for data storage, providing a flexible and scalable solution to store food item details, order histories, and customer information. MongoDB's document-oriented structure allows for easy and efficient storage of various data types, supporting the dynamic nature of food service operations. This enables the system to handle complex data relationships, such as inventory management and order tracking, while maintaining performance.
            <br /><br />
            The backend is also responsible for integrating the frontend with the necessary APIs and logic to create a smooth interaction between users and the platform. Whether it's fetching available food items, managing user authentication, or processing orders, the backend ensures all data is synchronized between the frontend and database. This robust backend setup guarantees efficient data handling, real-time order processing, and overall operational efficiency, making the Food Management System (Backend) an essential component of the food ordering process.</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://sijangiri.com.np/public/images/Screenshot%202024-11-09%20162426.png" />
        </div>
    </div>
</section>
    <Footer />
    </>
  )
}

export default Project3