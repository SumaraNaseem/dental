import React from 'react'
import icon8 from "../../assets/icon8.jpg";

function RequestSurgicalGuide() {
  return (
    <div className="bg-white  ">
        <div className="font-afacad pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-24 2xl:pl-52">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            {/* Left Section - Text Content */}
            <div className=" space-y-6">
              <h2 className="lg:text-[50px] text-2xl  mt-3 font-bold text-[#0C1152] !leading-tight">
                Request Surgical Guide Design Consultation or Order Custom
                Dental Surgical Guide
              </h2>
              <p className="text-[20px] font-regular text-gray-700 leading-relaxed max-w-[753px] ">
                Are you ready to optimize your surgical implant workflow? You
                can request a surgical guide design consultation or order a
                custom dental surgical guide with ease. Whether you need a
                single-unit guide or require complex, multi-site solutions, our
                implant surgical guide lab is ready to partner with your
                practice.
                <br />
                We're committed to being the most responsive partner dental lab
                for surgical guide design, delivering on every aspect of dental
                lab digital implant guide services.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-[#0C1152] text-white text-sm md:text-base xl:text-[20px] font-bold rounded-full hover:bg-[#0a0e42] transition-colors uppercase">
                  SUBMIT YOUR CASE
                </button>
                <button className="px-8 py-3 bg-white border-2 border-[#0C1152] text-[#0C1152] text-sm md:text-base xl:text-[20px] font-bold rounded-full hover:bg-gray-50 transition-colors uppercase">
                  BOOK A FREE CONSULT
                </button>
              </div>
            </div>

            {/* Right Section - Dental Implants Image */}
            <div className=" flex justify-center lg:justify-end">
              <div className="w-full h-auto">
                <img
                  src={icon8}
                  alt="Dental Implants"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default RequestSurgicalGuide