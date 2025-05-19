"use client"

import { useState } from "react"
import { Menu, ChevronDown } from "./icons"
import Verma from './assets/verma.jpg'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import Page4 from './component/Page4'
import Page5 from './component/Page5'
import Page6 from './component/Page6'
import Page7 from './component/Page7'
import Page8 from './component/Page8'
import Page9 from './component/Page9'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen -scroll-mt-6">
      {/* Navigation Bar */}
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="mr-2 sm:mr-4">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-amber-400 font-bold text-sm sm:text-xl">PV</div>
                </div>
                <svg
                  className="w-full h-full text-amber-400"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 5L61.7 30.3L89.4 34.5L69.7 54.7L74.4 82.3L50 69.3L25.6 82.3L30.3 54.7L10.6 34.5L38.3 30.3L50 5Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path d="M35 15L40 5L45 15L55 17L47 25L49 35L40 30L31 35L33 25L25 17L35 15Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-amber-400">PAWAN VERMA</h1>
              <p className="text-[10px] sm:text-xs">Author | Speaker | Management Consultant</p>
              <p className="text-[10px] sm:text-xs italic">Igniting <span className="text-amber-400">Minds</span>| Inspiring <span className="text-amber-400">Hearts</span></p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-amber-400 border-b-2 border-amber-400 pb-1">
              Home
            </a>
            <a href="#" className="hover:text-amber-400">
              About
            </a>
            <a href="#" className="hover:text-amber-400">
              Speaking
            </a>
            <a href="#" className="hover:text-amber-400">
              Consulting
            </a>
            <a href="#" className="hover:text-amber-400">
              Publishing
            </a>
            <div className="relative group">
              <button className="flex items-center hover:text-amber-400">
                More
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 py-2">
            <div className="container mx-auto px-4">
              <a href="#" className="block py-2 text-amber-400 border-b border-gray-800">
                Home
              </a>
              <a href="#" className="block py-2 hover:text-amber-400 border-b border-gray-800">
                About
              </a>
              <a href="#" className="block py-2 hover:text-amber-400 border-b border-gray-800">
                Speaking
              </a>
              <a href="#" className="block py-2 hover:text-amber-400 border-b border-gray-800">
                Consulting
              </a>
              <a href="#" className="block py-2 hover:text-amber-400 border-b border-gray-800">
                Publishing
              </a>
              <a href="#" className="block py-2 hover:text-amber-400">
                More
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-amber-500 mb-8 sm:mb-12 ml-72">
            DR. PAWAN VERMA
          </h2>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center ml-16">
            {/* Image Section */}
           <div className="w-[561px] h-[282px] relative">
  <div className="border-2 border-amber-400 absolute -top-4 -left-4 w-full h-full"></div>
  <div className="relative z-10">
  <img
    src={Verma}
    alt="Professional portrait"
    className="w-[561px] h-[282px] object-cover rounded-lg"
  />
</div>


</div>


            {/* Quote Section */}
            <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
              <div className="text-amber-500 text-4xl sm:text-6xl font-serif mb-2 sm:mb-4">"</div>
       <blockquote className="relative pl-10 text-xl sm:text-2xl md:text-3xl italic text-gray-700 font-serif leading-relaxed">
  <span className="absolute left-0 top-0 text-6xl text-amber-100 font-serif select-none">“</span>
  If you continue leading today with the methods of yesterday, you are bound to go out of leadership tomorrow.
</blockquote>



              {/* Navigation Dots */}
  <div className="h-[90px] flex flex-col justify-end">
  <div className="flex justify-center space-x-2 mb-6 sm:mb-8"> 
    <div className="h-[12px] w-[13px] rounded-full bg-gray-300"></div>
    <div className="h-[12px] w-[13px] rounded-full bg-amber-500"></div>
    <div className="h-[12px] w-[13px] rounded-full bg-gray-300"></div>
  </div>
</div>

``

            

            </div>
            
          </div>

          {/* Description Section */}
<div className="w-full max-w-6xl mt-1 sm:mt-4 flex items-start ml-8">
  {/* Left Text Section */}
  <div className="max-w-xl ml-11">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">
      Author, Thought Leader, Professional Speaker, and Management <br/> Consultant
    </h3>
    <p className="text-xs text-gray-600">
      Empowering organizations and leaders to achieve extraordinary results through <br/> visionary leadership and strategic transformation.
    </p>
  </div>

  {/* Right Buttons Section */}
  <div className="flex gap-4 ml-auto mt-4 sm:mt-0">
    <a
      href="#"
      className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 sm:px-8 rounded-md text-center text-sm sm:text-base"
    >
      Learn More
    </a>
    <a
      href="#"
      className="border border-amber-500 text-amber-500 hover:bg-amber-50 py-2 px-6 sm:px-8 rounded-md text-center text-sm sm:text-base"
    >
      Contact Now
    </a>
  </div>
</div>




        </div>
      </main>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>
      <Page9/>
    </div>
  )
}

export default App
