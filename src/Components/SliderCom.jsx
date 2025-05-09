import React, { useRef } from "react";
import Slider from "react-slick";
import imageOne from "../assets/Siders images/SliderFirst.png";

const SliderCom = ({heading,sliderNum, moreButton}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: sliderNum,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <div className="container mx-auto sm:my-10 my-5 md:mt-16 sm:mt-3 overflow-hidden">
      <div className="flex justify-between items-center mb-3 flex-wrap gap-y-3">
      <h3 className="md:text-5xl sm:text-4xl text-3xl font-normal  tracking-tight flex items-center">{heading}</h3>
       <a href="" className="bg-black text-white rounded-full px-6 py-2 flex items-center">{moreButton}</a>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div key={idx}>
            <div className="mx-2">
              <img src={imageOne} alt={`Slide ${idx + 1}`} />
              <div>
                <h2 className="text-1xl font-normal mt-3">Waterboy</h2>
                <p className="text-[13px] text-gray-400">Design</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-end sm:gap-4 gap-1 sm:mt-0 mt-3 ">
        <button onClick={() => sliderRef.current?.slickPrev()} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            className="w-8 sm:h-8  h-4"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.470012 8.53006C0.329561 8.38943 0.250671 8.19881 0.250671 8.00006C0.250671 7.80131 0.329561 7.61069 0.470012 7.47006L7.45701 0.470059C7.52616 0.398395 7.60889 0.341221 7.70038 0.301871C7.79186 0.262522 7.89027 0.241786 7.98985 0.240874C8.08944 0.239963 8.1882 0.258892 8.28039 0.296559C8.37258 0.334227 8.45635 0.389877 8.5268 0.460263C8.59725 0.530649 8.65298 0.614361 8.69074 0.706515C8.72849 0.79867 8.74751 0.89742 8.74669 0.997005C8.74588 1.09659 8.72523 1.19501 8.68597 1.28653C8.64671 1.37806 8.58961 1.46084 8.51801 1.53006L2.81001 7.24906L19 7.23806C19.1989 7.2378 19.3898 7.31656 19.5306 7.45702C19.6715 7.59749 19.7507 7.78815 19.751 7.98706C19.7513 8.18597 19.6725 8.37684 19.532 8.51768C19.3916 8.65852 19.2009 8.7378 19.002 8.73806L2.80801 8.74806L8.51901 14.4701C8.59061 14.5393 8.64771 14.6221 8.68697 14.7136C8.72623 14.8051 8.74688 14.9035 8.74769 15.0031C8.74851 15.1027 8.72949 15.2015 8.69174 15.2936C8.65398 15.3858 8.59825 15.4695 8.5278 15.5399C8.45735 15.6102 8.37358 15.6659 8.28139 15.7036C8.1892 15.7412 8.09044 15.7602 7.99085 15.7592C7.89127 15.7583 7.79286 15.7376 7.70138 15.6982C7.60989 15.6589 7.52716 15.6017 7.45801 15.5301L0.470012 8.53006Z"
              fill="black"
            ></path>
          </svg>
        </button>

        <button onClick={() => sliderRef.current?.slickNext()} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            className="w-8 sm:h-8  h-4"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.53 7.46994C19.6705 7.61057 19.7493 7.80119 19.7493 7.99994C19.7493 8.19869 19.6705 8.38931 19.53 8.52994L12.543 15.5299C12.4739 15.6016 12.3911 15.6588 12.2996 15.6981C12.2082 15.7375 12.1097 15.7582 12.0102 15.7591C11.9106 15.76 11.8118 15.7411 11.7196 15.7034C11.6274 15.6658 11.5437 15.6101 11.4732 15.5397C11.4028 15.4694 11.347 15.3856 11.3093 15.2935C11.2715 15.2013 11.2525 15.1026 11.2533 15.003C11.2541 14.9034 11.2748 14.805 11.314 14.7135C11.3533 14.6219 11.4104 14.5392 11.482 14.4699L17.19 8.75094L1 8.76194C0.801092 8.7622 0.610221 8.68344 0.469381 8.54298C0.32854 8.40251 0.249269 8.21185 0.249004 8.01294C0.248739 7.81403 0.327501 7.62316 0.467966 7.48232C0.608431 7.34148 0.799091 7.2622 0.998003 7.26194L17.192 7.25194L11.481 1.52994C11.4094 1.46072 11.3523 1.37794 11.313 1.28641C11.2738 1.19489 11.2531 1.09647 11.2523 0.996883C11.2515 0.897299 11.2705 0.798549 11.3083 0.706395C11.346 0.614241 11.4018 0.530528 11.4722 0.460142C11.5427 0.389756 11.6264 0.334106 11.7186 0.296439C11.8108 0.258772 11.9096 0.239842 12.0092 0.240754C12.1087 0.241666 12.2072 0.262401 12.2986 0.301751C12.3901 0.3411 12.4729 0.398275 12.542 0.469939L19.53 7.46994Z"
              fill="black"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SliderCom;
