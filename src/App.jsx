import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
 

  return (
    <>
      <div>
      <Navbar />
   
      <Outlet />
      
        <Footer/>
      </div>


    </>
  );
}

export default App;
