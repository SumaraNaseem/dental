import React from "react";
import surgicalimg2 from "../../assets/surgicalimg2.png";
import icon14 from "../../assets/icon14.png";
import icon13 from "../../assets/icon13.png";
import icon12 from "../../assets/icon12.png";
import icon11 from "../../assets/icon11.png";

function CustomDental() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 font-inter">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1152] mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            Who Can Benefit from Custom Dental Surgical Guides?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-regular text-[#0C1152] px-2 sm:px-0">
            Custom dental surgical guides are ideal for:
          </p>
        </div>

        {/* Main Content with Central Image and Benefit Categories */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-2 mb-8 sm:mb-12 md:mb-16 lg:mb-24 items-center relative z-10">

            <div className="flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">

              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">

                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-full border border-[#0C1152] flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                  <img
                    src={icon11}
                    alt="Dentists Performing Implants"
                    className="w-6 h-auto sm:w-7 md:w-8"
                  />
                </div>

                <div className="flex flex-col sm:ml-4 w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-samibold text-[#0C1152] mb-2 sm:mb-3">
                    Dentists Performing Implants
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-regular text-[#374151] w-full">
                    Ensure precise implant placement and reduced surgical risks.
                    </p>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[80px] rounded-full border border-[#0C1152] flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                  <img
                    src={icon14}
                    alt="Dental practices expanding implant services"
                    className="w-6 h-auto sm:w-7 md:w-8 object-cover"
                  />
                </div>

                <div className="flex flex-col sm:ml-4 w-full">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-samibold text-[#0C1152] mb-2 sm:mb-3">
                        Dental practices expanding implant services
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-regular text-[#374151] w-full">
                            Standardize outcomes and streamline workflows.
                        </p>
                </div>

              </div>

            </div>

            <div className="flex justify-center items-center relative z-10 my-8 sm:my-10 md:my-0">

              <div className="relative border-2 border-dashed border-[#0C1152] rounded-full w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">

                <div className="w-[280px] h-[200px] sm:w-[320px] sm:h-[240px] md:w-[380px] md:h-[280px] lg:w-[420px] lg:h-[300px] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={surgicalimg2}
                    alt="Surgical Guides"
                    className="w-full h-full object-contain"
                  />
                </div>

              </div>
            </div>

            <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10">

              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">

                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-full border-[#0C1152] flex items-center justify-center border flex-shrink-0 mb-3 sm:mb-0">
                    <img
                    src={icon12}
                    alt="Patients undergoing implant surgery"
                    className="w-8 h-auto sm:w-9 md:w-10 object-cover"
                  />
                </div>

                <div className="flex flex-col sm:ml-4 w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-samibold text-[#0C1152] mb-2 sm:mb-3">
                    Patients undergoing implant surgery
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-regular text-[#374151] w-full">
                    Experience safer, minimally invasive procedures and faster
                    recovery.
                  </p>
                </div>
                
              </div>






              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">

                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-full border border-[#0C1152] flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                  <img src={icon13} alt="Complex cases" className="w-6 h-auto sm:w-7 md:w-8" />
                </div>

                <div className="flex flex-col sm:ml-4 w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-samibold text-[#0C1152] mb-2 sm:mb-3">
                    Complex cases
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-regular text-[#374151] w-full">
                    Multiple implants, challenging anatomy, or limited bone
                    structure.
                    </p>
                </div>

              </div>

              
            </div>


          </div>
        

        {/* Call-to-Action Button */}
        <div className="text-center px-4 sm:px-0">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-[#0C1152] text-white font-bold rounded-full hover:bg-[#0a0e42] transition-colors uppercase text-xs sm:text-sm md:text-base">
            SUBMIT YOUR CASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomDental;

