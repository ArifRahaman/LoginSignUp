import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Successfull checking of login  and signup

        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <title>Cool Home Page</title>
  {/* Navigation Bar */}
  <nav className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Cool Website</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/* Hero Section */}
  <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex items-center">
    <div className="container mx-auto text-center">
        <h1>Checking Successfull all are correct!!!</h1>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4">
        Welcome to our Cool Website
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        Discover amazing things with us!
      </p>
      <a
        href="#"
        className="bg-white text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-200 transition duration-300"
      >
        Get Started
      </a>
    </div>
  </header>
  {/* About Section */}
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        About Us
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </section>
  {/* Services Section */}
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Service 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Service 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Service 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section */}
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Contact Us
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
        Have questions or want to get in touch? Reach out to us!
      </p>
      <a
        href="#"
        className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 transition duration-300 mt-4"
      >
      Connect with us 
      </a>
    </div>
  </section>
  {/* Footer Section */}
  <footer className="bg-gray-800 text-white p-4 text-center">
    <div className="container mx-auto">
      © 2024 Cool Website. All rights reserved.
    </div>
  </footer>
</>

    </div>
  )
}

export default Home