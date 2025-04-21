import React from "react";
import Image_Video from "../Components/Image_Video/Image_Video";
import RichText from "../Components/RichText/RichText";
import ContactFrom from "../Components/ContactFrom";
import Image from "../assets/Siders images/SliderSecimage.png";
import BrandCarousel from "../Components/BrandCarousel";

const Work = () => {
  return (
    <div>
      <RichText />
      <Image_Video
        video={
          "https://cdn.shopify.com/videos/c/o/v/b655c6f59ea64792b9ada277bbf19504.mp4"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container py-[86px]">
        {[1, 2, 3].map((item, index) => (
          <ServiceItem key={index} index={index} />
        ))}
      </div>
      <BrandCarousel/>
      <Image_Video
        video={
          "https://100xelevate.com/wp-content/uploads/2025/02/4c10-4a52-a2d2-4cd46daabb3f.mp4"
        }
      />
      <ContactFrom />
    </div>
  );
};

const ServiceItem = ({ index }) => {
  return (
    <div className={`hover:bg-[#F7F7F7]`}>
      <div>
        <img src={Image} alt="Service" className="w-full object-cover" />
      </div>
      <div className="px-4 py-6">
        <h3 className="text-base font-semibold mb-2">Andrea Maack</h3>
        <p className="text-sm text-[#A3A3A3]">Design & Development</p>
      </div>
    </div>
  );
};

export default Work;
