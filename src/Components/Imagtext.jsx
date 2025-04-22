import React from "react";
import image from "../assets/ImageText/ImageText.png";
const Imagtext = () => {
  return (
    <div className="container mx-auto md:py-16 sm:py-10 py-4 px-4">
      <div className="flex flex-col md:flex-row items-center md:gap-20 sm:gap-10 gap-8">
        <div className="md:w-2/5 w-full">
          <img
            src={image}
            alt="Filtered"
            style={{
              filter:
                "brightness(1) contrast(1) saturate(0) blur(0px) hue-rotate(0deg)",
            }}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full text-black">
          <h5 className="text-sm font-normal md:mb-10 sm:mb-6 mb-6">
            WHO ARE WE
          </h5>
          <h2 className=" md:text-5xl sm:text-4xl text-3xl font-semibold text-black sm:mb-10 mb-5">
            High-quality design that makes your brand impossible to ignore.
          </h2>
          <p className="mb-2 text-[14px] text-gray-500">
            We create designs that help your business grow and flourish like a
            well-nurtured plant. At oldCreatives, our senior-level designers and
            developers are detail-obsessed experts. We don’t just work on your
            project; we partner with you, putting your goals front and center
            from day one. Every step of the way, we’re here with sharp insights
            and strategic guidance to ensure you thrive.
          </p>
          <p className="mb-10 text-[14px] text-gray-500">
            Choosing 100xelevate means choosing a partner committed to your
            success. We’re here to bring your vision to life with unmatched
            creativity and precision.
          </p>
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            View Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagtext;
