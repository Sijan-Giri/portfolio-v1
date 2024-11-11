import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Project2 = () => {
  return (
    <>
    <Navbar />
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Food Management System (Admin)
            </h1>
            <br />
            <p class="mb-8 leading-relaxed">The Food Management System (Admin) is a robust admin panel designed to simplify the management of food service operations. It provides administrators with the ability to efficiently manage food categories, allowing them to add, edit, or remove different meal types based on their business needs. This helps maintain an organized menu structure, making it easy for both staff and customers to navigate and select items.
            <br /><br />
            In addition to managing food categories, the system also facilitates the management of individual food items. Admins can update food descriptions, prices, images, and availability, ensuring that the menu remains up-to-date and accurately reflects the offerings. This feature helps streamline inventory and pricing management, ensuring consistency across the entire platform.
            <br /><br />
            The admin panel also includes a comprehensive order management system, where admins can track and manage customer orders in real time. Admins can view order statuses, update order progress, and ensure timely fulfillment. This centralized control helps optimize the food service process, improves customer satisfaction, and supports effective backend operations, making the Food Management System (Admin) an essential tool for any food service business.</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://sijangiri.com.np/public/images/Screenshot%202024-11-09%20162349.png" />
        </div>
    </div>
</section>
    <Footer />
    </>
  )
}

export default Project2