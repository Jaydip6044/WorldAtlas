import React from 'react';
import About from './About';
import Contact from './Contact';
// import Footer from '../Components/UI/Footer';

function Home() {
  return (
    <>
    <div className="w-full min-h-[420px]  bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 ">
        
        {/* Left Side - Text Section */}
        <div className="hero-text text-center md:pl-20 pt-26 md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Explore the World, One 
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">Country at a Time.</h1>
         
          <p className="mt-4 text-md md:text-base text-gray-300">
            Discover the history, culture, and beauty of every nation. Sort, search, 
            and filter through countries to find the details you need.
          </p>
          <button className='bg-gray-700 rounded m-2 p-1 border border-white font-medium hover:scale-105'>Start Exploring ➔ </button>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full flex justify-center mt-8 mb-10">
          <img
            className="w-full max-w-lg md:max-w-xl h-auto "
            src="world.png"
            alt="World Map"
          />
        </div>

      </div>
    </div>
   <About/>
   <Contact/>
   
    </>
  );
}

export default Home;
