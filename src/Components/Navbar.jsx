import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto py-6">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <Link to="/work" className="text-[14px]">Work</Link>
              <Link to="/service" className="text-[14px]">Services</Link>
              <Link to="/about" className="text-[14px]">About</Link>
              <Link to="/Insights" className="text-[14px]">Insights</Link>
              <a href="#GetInTouch" className="bg-black text-white text-[15px] py-2 px-4 rounded-full ml-4">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
