import React, { useState } from "react";
import howToWorkImage from "../../assets/Howtowork.png";

function HeroWithForm({
  backgroundImage = howToWorkImage,
  title = "Precision Dental Care with Printed Surgical Guides",
  description = "Dental implant procedures demand precision, accuracy, and predictability. At Guided Excellence, our 3D surgery implant guides provide dentists with the ultimate tool to achieve seamless implant placement while enhancing patient safety and clinical outcomes. Using state-of-the-art 3D printed surgical guides, we transform complex procedures into highly predictable and efficient workflows.",
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    recaptcha: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.recaptcha) {
      newErrors.recaptcha = "Please verify you're not a robot";
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
        phone: "",
        message: "",
        recaptcha: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { name: "firstName", label: "First Name", type: "text", placeholder: "Enter First Name" },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter Last Name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter Email Address" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter Phone Number" },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16  py-4 ">
          {/* Left Content */}
          <div className="lg:col-span-6 flex justify-center items-center   ">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-[50px] font-regular mb-4 md:mb-6 text-white !leading-tight">
                {title}
              </h1>
              <p className="text-white text-base md:text-lg 2xl:max-w-[600px] !leading-relaxed lg:text-[20px] font-regular font-afacad mb-6 md:mb-10 ">
                {description}
              </p>
              <button className="bg-white text-black px-4 md:px-6 py-4 md:py-3 rounded-full text-sm md:text-base xl:text-[20px] font-bold hover:bg-gray-100 transition-colors">
                SUBMIT YOUR CASE
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="bg-white rounded-lg shadow-lg px-6 md:px-8 py-8 md:py-10 w-full">
              <h2 className="text-2xl md:text-[30px] font-bold text-[#0c1152] mb-4 md:mb-6">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label className="text-[#0c1152] text-sm md:text-[14px] font-regular mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-[12px] font-regular ${
                        errors[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-gray-400"
                      }`}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="text-[#0c1152] text-sm md:text-[14px] font-regular mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-[12px] font-regular resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-gray-400"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <div>
                  <div className={`flex items-center space-x-3 p-2 w-fit border rounded-md bg-white ${
                    errors.recaptcha ? "border-red-500" : "border-gray-300"
                  }`}>
                    <input
                      type="checkbox"
                      name="recaptcha"
                      checked={formData.recaptcha}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-[#0c1152] text-xs md:text-[14px] font-regular">
                      I'm not a robot
                    </span>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-7 h-7 flex items-center justify-center">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Circular refresh icon with curved arrows */}
                          <path d="M8 4C9.5 3 11.2 2.5 13 2.5C18.5 2.5 23 7 23 12.5C23 15.5 21.8 18.2 19.9 20" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <path d="M16 20C14.5 21 12.8 21.5 11 21.5C5.5 21.5 1 17 1 11.5C1 8.5 2.2 5.8 4.1 4" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          {/* Arrow heads */}
                          <path d="M23 12.5L20 9.5M23 12.5L20 15.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 11.5L4 8.5M1 11.5L4 14.5" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[10px] text-gray-500 mt-0.5">reCAPTCHA</span>
                    </div>
                  </div>
                  {errors.recaptcha && (
                    <p className="text-red-500 text-xs mt-1">{errors.recaptcha}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-fit px-6 py-3 bg-[#0c1152] text-white font-bold rounded-full transition-colors uppercase text-sm md:text-[18px] ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#0a0e42]"
                  }`}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT YOUR CASE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroWithForm;

