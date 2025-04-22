import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    detail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTemplateParams = {
      name: formData.name,
      time: new Date().toLocaleString(),
      message: formData.detail,
    };

   
    emailjs
      .send(
        'service_vdvyib8',  
        'template_0wxt6ai',  
        emailTemplateParams,  
        'LOhLrZywV3eROHCoJ'   
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      detail: ''
    });
  };

  return (
    <div id='GetInTouch' className="container mx-auto">
      <div className="md:my-12 my-9  max-w-[1200px] mx-auto">
        <h3 className="font-normal md:text-5xl sm:text-4xl text-3xl mb-4 ">Let’s work together</h3>
        <p className="text-gray-500 text-sm">
          Tell us your business goals and we’ll see how we can create something amazing together.
        </p>
        <form onSubmit={handleSubmit} className="sm:mt-16 mt-9">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="w-full text-[15px] font-medium mb-3">
              What is your name?
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="text"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jane Smith"
            />
          </div>

         
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="w-full text-[15px] font-medium mb-3">
              Your email address
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="email"
              id="email"
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jane.smith@email.com"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="company" className="w-full text-[15px] font-medium mb-3">
              Company name
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="text"
              id="company"
              name="company" 
              value={formData.company}
              onChange={handleInputChange}
              placeholder="ABC Company"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="website" className="w-full text-[15px] font-medium mb-3">
              Website URL
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="text"
              id="website"
              name="website" 
              value={formData.website}
              onChange={handleInputChange}
              placeholder="www.yourwebsite.com"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="detail" className="w-full text-[15px] font-medium mb-3">
              Project details
            </label>
            <textarea
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              name="detail" 
              id="detail"
              value={formData.detail}
              onChange={handleInputChange}
              placeholder="Looking to build the next game-changer. Let’s make magic happen!"
            ></textarea>
          </div>

      
          <button type="submit" className="px-4 py-2 block bg-black text-white rounded-full mb-16">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
