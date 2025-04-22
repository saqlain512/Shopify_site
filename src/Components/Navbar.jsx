import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white z-50 shadow-sm sticky top-0">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="md:h-10 sm:h-6 h-6" />

          <div className="gap-6 items-center sm:flex hidden">
            <Link to="/work" className="text-[14px]">Work</Link>
            <Link to="/service" className="text-[14px]">Services</Link>
            <Link to="/about" className="text-[14px]">About</Link>
            <Link to="/Insights" className="text-[14px]">Insights</Link>
            <a href="#GetInTouch" className="bg-black text-white text-[15px] py-2 px-4 rounded-full ml-4">Get In Touch</a>
          </div>

          <div className="sm:hidden block">
              <button onClick={() => setMenuOpen(true)} className="border-b border-black  py-1 ">
              Menu
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed bg-black inset-0 z-50 transition-transform duration-500 ease-in-out transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'black'}}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="w-full h-full bg-black p-6 flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-white text-right mb-4 self-end text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <Link to="/work" className="text-[18px] text-white" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link to="/service" className="text-[18px] text-white" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="text-[18px] text-white" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Insights" className="text-[18px] text-white" onClick={() => setMenuOpen(false)}>Insights</Link>
          <a href="#GetInTouch" className="bg-white text-black text-center text-[16px] py-2 px-4 rounded-full" onClick={() => setMenuOpen(false)}>Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;