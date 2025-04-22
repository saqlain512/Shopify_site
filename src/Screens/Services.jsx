import React from "react";
import RichText from "../Components/RichText/RichText";
import ContactFrom from "../Components/ContactFrom";
import Image from "../assets/Logo.png";
import BrandCarousel from "../Components/BrandCarousel";
const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and scalable web applications.",
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing website visibility and improving search engine rankings.",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating native and cross-platform mobile apps for iOS and Android.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing beautiful and user-friendly interfaces for web and mobile.",
    },
  ];

  return (
    <div>
      <RichText />
      {services.map((service, index) => (
        <ServiceItem
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
      <BrandCarousel/>
      <Process />
      <ContactFrom />
    </div>
  );
};

const ServiceItem = ({ title, description, index }) => {
  return (
    <div
      className={`xl:py-[86px] lg:py-[42px] py-[30px] ${index % 2 != 0 ? "bg-[#F7F7F7]" : ""}`}
      key={index}
    >
      <div className="container grid lg:grid-cols-2">
        <div className="service-item flex flex-col md:gap-5 gap-2">
          <h2
            className="text-4xl font-medium leading-tight text-white"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000",
              strokeWidth: "1px",
              strokeColor: "#000",
            }}
          >
            0{index + 1}
          </h2>
          <h2 className="xl:text-5xl lg:text-4xl text-black font-medium">{title}</h2>
          <p className="text-[14px] text-[#707070]">{description}</p>
          <a
            href="#"
            className="bg-black text-white px-5 py-2 block w-fit rounded-full my-4"
          >
            Learn more
          </a>
        </div>
        <div className="">
          {[1, 1, 1].map((service, index) => (
            <div className="lg:py-8 py-6 lg:px-4 px-0 border-b border-[#CCCCCC]">
              <h2 className="text-2xl text-black font-semibold mb-4">
                Email Marketing
              </h2>
              <p className="text-[14px] text-[#707070]">
                Targeted email campaigns designed to engage customers, promote
                products, and drive conversions with personalized content and
                automated workflows.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className={`xl:py-[86px] lg:py-[42px] py-[30px]  bg-[#F7F7F7] `}>
      <div className="container max-w-6xl">
        <div className="service-item flex flex-col gap-5 text-center mb-10">
          <h2 className="lg:text-5xl text-4xl text-black font-medium ">Our Process</h2>
          <p className="text-[14px] text-[#707070]">
            We don’t make websites. We produce business results.
          </p>
        </div>
       <div className="grid lg:grid-cols-2  xl:gap-x-40 gap-x-10 xl:gap-y-20 gap-y-10">
       {[1,1,1,1].map((service, index) => (
        <div className="lg:flex-row  flex flex-col justify-start lg:gap-0 gap-5">
        <div className="border h-fit rounded-full max-w-16">
          <img src={Image} alt="" className="max-w-16 min-w-full  h-16 object-contain " />
        </div>
        <div className="lg:px-4 px-0">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Email Marketing
            </h2>
            <p className="text-[14px] text-[#707070] mb-7">
              Targeted email campaigns designed to engage customers, promote
              products, and drive conversions with personalized content and
              automated workflows.
            </p>
            <p className="text-[14px] text-[#707070]">
              Targeted email campaigns designed to engage customers, promote
              products, and drive conversions with personalized content and
              automated workflows.
            </p>
          </div>
      </div>
      ))}
      
       </div>
      </div>
    </div>
  );
};
export default Services;
