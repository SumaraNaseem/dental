import React from 'react'
import Rectangle23 from "../../assets/Rectangle23.png";
import Rectangle24 from "../../assets/Rectangle24.png";
import Rectangle25 from "../../assets/Rectangle25.png";
import Rectangle26 from "../../assets/Rectangle26.png";

function TechDental() {
  return (
    <div className="bg-white py-16 font-inter">
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="lg:text-[50px] text-[20px] font-bold text-[#0C1152] mb-4 max-w-2xl mx-auto ">
          Technology Behind Dental Surgical Guide Design
        </h2>
        <p className="text-[20px] font-regular text-[#374151] ">
          Our dental guide design lab for implant surgery leverages
          state-of-the-art technologies for precision and reliability.
        </p>
      </div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
        {/* Card 1: 3D CBCT Scanning */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
          <div className="relative h-[395px] overflow-hidden">
            <img
              src={Rectangle23}
              alt="3D CBCT Scanning"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-[25px] font-samibold">
                3D CBCT Scanning
              </h3>
            </div>
          </div>
        </div>

        {/* Card 2: Digital Impressions */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
          <div className="relative  h-[395px] overflow-hidden">
            <img
              src={Rectangle24}
              alt="Digital Impressions"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white  text-[25px] font-samibold">
                Digital Impressions
              </h3>
            </div>
          </div>
        </div>

        {/* Card 3: CAD/CAM Design Software */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
          <div className="relative h-[395px] overflow-hidden">
            <img
              src={Rectangle25}
              alt="CAD/CAM Design Software"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white  text-[25px] font-samibold">
                CAD/CAM Design Software
              </h3>
            </div>
          </div>
        </div>

        {/* Card 4: High Precision 3D Printing */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
          <div className="relative  h-[395px] overflow-hidden">
            <img
              src={Rectangle26}
              alt="High Precision 3D Printing"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white  text-[25px] font-samibold">
                High Precision 3D Printing
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center">
        <button className="px-6 py-2 md:py-3  bg-[#0C1152] text-white font-bold rounded-full transition-colors uppercase text-sm md:text-base xl:text-[20px] ">
          SUBMIT YOUR CASE
        </button>
      </div>
    </div>
  </div>
  )
}

export default TechDental