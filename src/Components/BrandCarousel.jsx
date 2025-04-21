import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "https://100xelevate.com/wp-content/uploads/2025/02/Calvin-Klein-logo-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/Logo-AriZona-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/Logo-Edikted-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/Logo-HillHouseHome-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/Logo-Khaite-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/Logo-Quip-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/modelez-logo-1.png-1.png",
  "https://100xelevate.com/wp-content/uploads/2025/02/schutz-logo-1.png-1.png",
];

const BrandCarousel = () => {
  return (
    <div className="py-10 px-4 bg-[#F7F7F7]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={5}
        freeMode={true}
        allowTouchMove={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {logos.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="flex justify-center items-center cursor-pointer"
          >
            <img
              src={src}
              alt={`Logo ${idx}`}
              className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
