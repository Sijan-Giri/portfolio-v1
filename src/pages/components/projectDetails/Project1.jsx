import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Project1 = () => {
  return ( 
    <>
    <Navbar />
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Food Management System (User)
            </h1>
            <br />
            <p class="mb-8 leading-relaxed">The Food Management Frontend is a user-friendly web application designed to simplify the food ordering experience. It allows customers to browse through a variety of meals, view detailed descriptions and high-quality images, and filter options based on categories such as cuisine, price, and dietary preferences. This seamless browsing experience helps users make informed decisions and find meals that match their tastes and dietary needs.
            <br /><br />
            The app features an interactive menu, where users can customize their orders by selecting portion sizes or add-ons. Once meals are selected, they can be easily added to a shopping cart, where users can view and manage their orders before proceeding to checkout. The secure checkout process supports multiple payment methods and allows customers to input delivery details, ensuring a smooth and efficient transaction.
            <br /><br />
            For customers who create accounts, the app offers additional features like order history, saved favorites, and the ability to track the status of their orders in real time. The design is responsive, ensuring a consistent and mobile-friendly experience across various devices. With a clean and intuitive interface, the Food Management Frontend makes ordering food an engaging and hassle-free experience.</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://sijangiri.com.np/public/images/Screenshot%202024-11-09%20162049.png" />
        </div>
    </div>
</section>
    <Footer />
    </>
  )
}

export default Project1