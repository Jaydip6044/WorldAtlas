import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Fixed import path

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar w-full flex justify-between items-center font-medium bg-[#202020] h-16 text-white p-4">
      {/* Logo */}
      <div className="logo ml-[100px]">
        <h1 className="text-xl font-bold">WorldAtlas</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden mr-[10px]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex flex-row gap-8 mr-[100px] ${isOpen ? 'flex-col text-center shadow-md bg-slate-600 p-2 ' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-[#202020] md:bg-transparent p-4 md:p-0`}>
        <NavLink to="/" className="block md:inline-block p-2 hover:text-gray-400 hover:border-b border-white">Home</NavLink>
        <NavLink to="/about" className="block md:inline-block p-2 hover:text-gray-400 hover:border-b border-white">About</NavLink>
        <NavLink to="/country" className="block md:inline-block p-2 hover:text-gray-400 hover:border-b border-white">Country</NavLink>
        <NavLink to="/contact" className="block md:inline-block p-2 hover:text-gray-400 hover:border-b border-white">Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;


