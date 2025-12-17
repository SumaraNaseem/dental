import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbarlogo.png";
import phoneIcon from "../assets/Phone.png";
import emailIcon from "../assets/email.png";

function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navLinks = [
    { to: "/how-it-works", label: "How It Works" },
    { to: "/surgical-guides", label: "Surgical Guides" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const formFields = [
    {
      type: "text",
      name: "firstName",
      placeholder: "First Name",
    },
    {
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email Address",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // For now, just log the data
      console.log("Form submitted:", formData);
      
      // Show success message (you can replace this with a toast notification)
      alert("Thank you! Your message has been submitted successfully.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#f5f5f5] py-10 md:py-12">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start lg:col-span-2 h-[55px] sm:h-[60px] md:h-[127px]">
            <Link to="/" className="h-full">
              <img
                src='https://res.cloudinary.com/djlpb1ld5/image/upload/v1765973864/logo-BRhPTYdU_yq6zyn.png'
                alt="Guided Excellence Logo"
                className="h-full w-auto object-contain max-w-full"
              />
            </Link>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-4 text-[18px] sm:text-[20px] font-afacad font-regular">
            <form onSubmit={handleSubmit} className="space-y-5">
              {formFields.map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-md bg-white focus:outline-none focus:ring-1 placeholder:text-[#0C1152] ${
                      errors[field.name]
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#0C1152] focus:ring-[#0C1152]"
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="1"
                  className={`w-full px-4 py-3 border-2 rounded-md bg-white focus:outline-none focus:ring-1 placeholder:text-[#0C1152] resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[#0C1152] focus:ring-[#0C1152]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit px-10 sm:px-16 md:px-24 py-4 sm:py-4 bg-[#0c1152] text-white font-bold rounded-full transition-colors uppercase text-sm md:text-[20px] ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#0a0e42]"
                }`}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>

          {/* Navigation + Contact (responsive) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Navigation Links */}
              <div className="w-full flex justify-start text-[18px] sm:text-[20px] font-regular font-afacad">
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link key={link.to} to={link.to} className="">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex justify-start sm:justify-end">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={phoneIcon}
                      alt="Phone"
                      className="w-[22px] sm:w-[24px] md:w-[26px] h-auto"
                    />
                    <span className="text-[18px] sm:text-[20px] font-regular font-afacad">
                      626 604 6504
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img
                      src={emailIcon}
                      alt="Email"
                      className="w-[22px] sm:w-[24px] md:w-[26px] h-auto"
                    />
                    <span className="text-[18px] sm:text-[20px] font-regular font-afacad">
                      info@guided4excellence.com
                    </span>
                  </div>

                  <button className="mt-2 w-fit px-6 py-3 text-[#0c1152] font-bold rounded-full border-2 border-[#0c1152] transition-colors uppercase text-sm md:text-[20px]">
                    BOOK A CALL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;