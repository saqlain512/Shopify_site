import React, { useState } from 'react';
import ImagText from "../Components/Imagtext";
import RichTexT from "../Components/RichText/RichText";
import ContactFrom from "../Components/ContactFrom";
import { motion } from "framer-motion";
import Image from "../assets/Siders images/SliderSecimage.png"


const Insights = () => {
  return (
    <div>
      <RichTexT />
      <BlogFilter />
      <ContactFrom />
    </div>
  );
};


const categories = [
    "All", "Business", "Content Marketing", "Conversions Rate Optimisation",
    "Design", "Development", "Ecommerce", "Growth Hacking",
    "Marketing Automation", "Paid Marketing", "Research",
  ];
  
  const posts = [
    {
      title: "Evolving your Shopify store with customer expectations",
      image:Image ,
      category: "Ecommerce",
    },
    {
      title: "Building Emotional Connections in E-commerce to Increase Retention Rate",
      image: Image,
      category: "Growth Hacking",
    },
    {
      title: "CRO strategies that help our client get $10.64k+ in just 1 month!",
      image: Image,
      category: "Conversions Rate Optimisation",
    },
    {
      title: "CRO strategies that help our client get $10.64k+ in just 1 month!",
      image: Image,
      category: "Conversions Rate Optimisation",
    },
    {
      title: "CRO strategies that help our client get $10.64k+ in just 1 month!",
      image: Image,
      category: "Conversions Rate Optimisation",
    },
    {
      title: "CRO strategies that help our client get $10.64k+ in just 1 month!",
      image: Image,
      category: "Conversions Rate Optimisation",
    },
  ];
  
  function BlogFilter() {
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    const filteredPosts = selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  
    return (
      <div className="p-6 container mx-auto">
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-3 overflow-x-auto scrollbar-hide mb-8 border-b pb-4 px-2"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((category) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex-shrink-0 px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 
              ${selectedCategory === category
                ? "bg-black text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}

          >
            {category}
          </motion.button>
        ))}
      </motion.div>

  
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white rounded-1xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <motion.img
                src={post.image}
                alt={post.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h2 className="text-1xl font-semibold text-gray-800 mb-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  In today’s competitive e-commerce landscape, having a Shopify store is not enough...
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }



export default Insights;