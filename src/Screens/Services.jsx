import React from "react";
import RichText from "../Components/RichText/RichText";
import ContactFrom from "../Components/ContactFrom";
import Image from "../assets/logo.png";
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
      <Process />
      <BrandCarousel/>
      <ContactFrom />
    </div>
  );
};

const ServiceItem = ({ title, description, index }) => {
  return (
    <div
      className={`py-[86px] ${index % 2 != 0 ? "bg-[#F7F7F7]" : ""}`}
      key={index}
    >
      <div className="container grid grid-cols-2">
        <div className="service-item flex flex-col gap-5">
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
          <h2 className="text-5xl text-black font-medium">{title}</h2>
          <p className="text-[14px] text-[#707070]">{description}</p>
          <a
            href="#"
            className="bg-black text-white px-5 py-2 block w-fit rounded-full my-4"
          >
            Learn more
          </a>
        </div>
        <div>
          {[1, 1, 1].map((service, index) => (
            <div className="py-8 px-4 border-b border-[#CCCCCC]">
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
    <div className={`py-[86px] bg-[#F7F7F7] `}>
      <div className="container max-w-6xl">
        <div className="service-item flex flex-col gap-5 text-center mb-10">
          <h2 className="text-5xl text-black font-medium ">Our Process</h2>
          <p className="text-[14px] text-[#707070]">
            We don’t make websites. We produce business results.
          </p>
        </div>
       <div className="grid grid-cols-2 gap-x-40 gap-y-20">
       {[1,1,1,1].map((service, index) => (
        <div className="flex">
        <div className="border h-fit rounded-full">
          <img src={Image} alt="" className=" max-w-16 min-w-full  h-16 object-contain " />
        </div>
        <div className="px-4">
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
