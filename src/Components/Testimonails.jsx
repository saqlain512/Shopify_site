import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "../assets/LogoTestimonail.png";
const Testimonails = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
   <div className="bg-black   py-32 overflow-hidden">
     <div className="container mx-auto   grid grid-cols-5 gap-36">
      <div className="col-span-2">
        <h4 className="text-1xl font-normal mb-5 tracking-tight text-white">
          TRUSTED PARTNERS
        </h4>
        <h2 className="text-white  text-5xl"> From our clients </h2>
      </div>
      <div className="col-span-3 relative">
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <div key={idx}>
              <div className="mx-2">
                <div>
                  <img src={Image} alt="Logo Pics" className="h-[30px] mb-5" />
                  <p className="text-white text-2xl max-w-[650px]">
                    “We’ve Increased Our Revenue By 35-40% By Working With
                    100xelevate. They can do things with Shopify that even
                    Shopify thinks are impossible.“
                  </p>

                  <p className="text-white text-1xl mt-6">
                    ~ <span data-sheets-root="1">David Foley</span> –
                    <span data-sheets-root="1">Cambie</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-end gap-4  absolute right-[20px] top-[-20px]">
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2"
          >
            <svg
            
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              className="w-5 h-5 text-white"
            >
              <path
                fill-rule="evenodd"
                fill="white"
                clip-rule="evenodd"
                d="M19.53 7.46994C19.6705 7.61057 19.7493 7.80119 19.7493 7.99994C19.7493 8.19869 19.6705 8.38931 19.53 8.52994L12.543 15.5299C12.4739 15.6016 12.3911 15.6588 12.2996 15.6981C12.2082 15.7375 12.1097 15.7582 12.0102 15.7591C11.9106 15.76 11.8118 15.7411 11.7196 15.7034C11.6274 15.6658 11.5437 15.6101 11.4732 15.5397C11.4028 15.4694 11.347 15.3856 11.3093 15.2935C11.2715 15.2013 11.2525 15.1026 11.2533 15.003C11.2541 14.9034 11.2748 14.805 11.314 14.7135C11.3533 14.6219 11.4104 14.5392 11.482 14.4699L17.19 8.75094L1 8.76194C0.801092 8.7622 0.610221 8.68344 0.469381 8.54298C0.32854 8.40251 0.249269 8.21185 0.249004 8.01294C0.248739 7.81403 0.327501 7.62316 0.467966 7.48232C0.608431 7.34148 0.799091 7.2622 0.998003 7.26194L17.192 7.25194L11.481 1.52994C11.4094 1.46072 11.3523 1.37794 11.313 1.28641C11.2738 1.19489 11.2531 1.09647 11.2523 0.996883C11.2515 0.897299 11.2705 0.798549 11.3083 0.706395C11.346 0.614241 11.4018 0.530528 11.4722 0.460142C11.5427 0.389756 11.6264 0.334106 11.7186 0.296439C11.8108 0.258772 11.9096 0.239842 12.0092 0.240754C12.1087 0.241666 12.2072 0.262401 12.2986 0.301751C12.3901 0.3411 12.4729 0.398275 12.542 0.469939L19.53 7.46994Z"
                
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Testimonails;
