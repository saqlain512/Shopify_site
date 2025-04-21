import React from "react";
import { TypeAnimation } from "react-type-animation";
import Bg_video from "../assets/bg-video.mp4";
const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto mt-6">
        <h1 className="text-8xl text-[#A3A3A3] ">Redefining Ecommerce for</h1>
        <h1 className="text-8xl  my-6">
          Leading{" "}
          <span className="typed-wrapper text-8xl text-black">
            <TypeAnimation
              sequence={[
                "Brands",
                1000, // pause
                "Business",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              speed={70}
              deletionSpeed={50}
            />
          </span>
        </h1>
      </div>
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover px-2"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-end  h-full text-white text-2xl font-bold ">
          <div className="bg-white/20 font-semibold w-full py-5 flex justify-center items-center text-[14px]  border border-white">
            SHOPIFY E-COMMERCE
          </div>
          <div className="bg-white/20 font-semibold w-full py-5 flex justify-center items-center text-[14px]  border border-white">
            RETENTION MARKETING
          </div>
          <div className="bg-white/20 font-semibold w-full py-5 flex justify-center items-center text-[14px]  border border-white">
            STRATEGY
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
