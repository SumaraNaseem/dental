import React from 'react'
import implantPhotoroom from "../../assets/implantPhotoroom.png";

function OurAchievement() {
  return (
    <div className="bg-[#CDCEC9] py-16 px-8 mt-24 font-afacad relative ">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 relative z-10">
        <h2 className="lg:text-[50px] text-[20px] font-bold text-[#0C1152] mb-4">
          Our Achievement
        </h2>
        <p className="text-[20px] font-regular text-[#0C1152]">
          Showcasing our key milestones and remarkable success journey
        </p>
      </div>





      <div className="absolute -bottom-10 left-0 w-auto h-[346px] overflow-hidden z-10">
        <img
          src={implantPhotoroom}
          alt="Dental Implant"
          className="w-full h-full object-cover transform rotate-[52deg]"
        />
      </div>





      <div className="absolute -top-28 right-0 w-auto h-[411px] overflow-hidden   z-10">
        <img
         src={implantPhotoroom}
          alt="Dental Implant"
          className="w-full h-full object-cover transform -rotate-"
        />
      </div>







      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div className="text-center px-4 border-r border-[#0C1152]/20 last:border-r-0">
          <div className="lg:text-[50px] text-[20px] font-regular text-[#0C1152] mb-2">
            23+
          </div>
          <div className="text-[25px] font-regular text-[#0C1152]">
            Years of Clinical Experience
          </div>
        </div>

        <div className="text-center px-4 border-r border-[#0C1152]/20 last:border-r-0">
          <div className="lg:text-[50px] text-[20px] font-regular text-[#0C1152] mb-2">
            3,600+
          </div>
          <div className="text-[25px] font-regular text-[#0C1152]">
            Surgical Guides Planned
          </div>
        </div>

        <div className="text-center px-4 border-r border-[#0C1152]/20 last:border-r-0">
          <div className="lg:text-[50px] text-[20px] font-regular text-[#0C1152] mb-2">
            100+
          </div>
          <div className="text-[25px] font-regular text-[#0C1152]">
            Implants Compatible
          </div>
        </div>

        <div className="text-center px-4 last:border-r-0">
          <div className="lg:text-[50px] text-[20px] font-regular text-[#0C1152] mb-2">
            &lt;3DAYS
          </div>
          <div className="text-[25px] font-regular text-[#0C1152]">
            Planning Turnaround Time
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OurAchievement