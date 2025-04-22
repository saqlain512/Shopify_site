import React from "react";

const RichText = () => {
  return (
    <div>
      <div className="container lg:py-16 md:py-12 py-9">
        <h5 className="lg:mb-0 mb-4">Services</h5>
        <h2 className="text-[#A3A3A3] md:text-[48px] sm:text-[32px] text-[25px] lg-leading-tight leading-snug">
          <span className="text-black font-medium "  >Accelerating business growth</span> {' '}
          through design, Shopify Plus e-commerce development &amp;
          optimization.
        </h2>
        <a href="#" className="bg-black text-white px-4 py-2 block  w-fit rounded-full my-4">Let's talk</a>
      </div>
    </div>
  );
};

export default RichText;
