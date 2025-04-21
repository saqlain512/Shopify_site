import React from "react";

const Image_Video = ({ video }) => {
  return (
    <div className="px-3">
      <div className="relative  h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover px-2"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-2 py-4">
        <h3 className="text-base mt-3">Andrea Maack</h3>
        <p className="text-xs text-[#A3A3A3]">Design & Development</p>
      </div>
    </div>
  );
};

export default Image_Video;
