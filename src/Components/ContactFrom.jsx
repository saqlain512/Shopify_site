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

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email template parameters
    const emailTemplateParams = {
      name: formData.name,
      time: new Date().toLocaleString(), // Capture the current date and time
      message: formData.detail,
    };

    // Send the form data to EmailJS
    emailjs
      .send(
        'service_vdvyib8',  // Your EmailJS service ID
        'template_0wxt6ai',  // Your EmailJS template ID
        emailTemplateParams,  // Pass the form data to the template
        'LOhLrZywV3eROHCoJ'   // Your EmailJS user ID
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

    // Reset form data after submission
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
      <div className="my-12 max-w-[1200px] mx-auto">
        <h3 className="font-normal text-5xl mb-4 ">Let’s work together</h3>
        <p className="text-gray-500 text-sm">
          Tell us your business goals and we’ll see how we can create something amazing together.
        </p>
        <form onSubmit={handleSubmit} className="mt-16">
          {/* Name Input */}
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="w-full text-[15px] font-medium mb-3">
              What is your name?
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="text"
              id="name"
              name="name"  // This matches {{name}} in the EmailJS template
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jane Smith"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="w-full text-[15px] font-medium mb-3">
              Your email address
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="email"
              id="email"
              name="email"  // This matches {{email}} in the EmailJS template
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jane.smith@email.com"
            />
          </div>

          {/* Company Input */}
          <div className="flex flex-col mb-5">
            <label htmlFor="company" className="w-full text-[15px] font-medium mb-3">
              Company name
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="text"
              id="company"
              name="company"  // This matches {{company}} in the EmailJS template
              value={formData.company}
              onChange={handleInputChange}
              placeholder="ABC Company"
            />
          </div>

          {/* Website Input */}
          <div className="flex flex-col mb-5">
            <label htmlFor="website" className="w-full text-[15px] font-medium mb-3">
              Website URL
            </label>
            <input
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              type="text"
              id="website"
              name="website"  // This matches {{website}} in the EmailJS template
              value={formData.website}
              onChange={handleInputChange}
              placeholder="www.yourwebsite.com"
            />
          </div>

          {/* Project Details Input */}
          <div className="flex flex-col mb-5">
            <label htmlFor="detail" className="w-full text-[15px] font-medium mb-3">
              Project details
            </label>
            <textarea
              className="w-full border-b border-black py-3 px-3 placeholder:text-[14px]"
              name="detail"  // This matches {{detail}} in the EmailJS template
              id="detail"
              value={formData.detail}
              onChange={handleInputChange}
              placeholder="Looking to build the next game-changer. Let’s make magic happen!"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="px-4 py-2 block bg-black text-white rounded-full mb-16">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
