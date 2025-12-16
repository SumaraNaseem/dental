import React from "react";
import surgicalimg1 from "../../assets/surgicalimg1.png";

function WhatIs3DPrinted({
  title = "What is a 3D Printed Implant Surgical Guides",
  description = "A 3D surgery implant guide is a custom designed tool used to guide the precise placement of dental implants. It ensures optimal angulation, depth, and positioning, reducing risks, and improving procedural outcomes.",
  image = surgicalimg1,
  imageClass = "lg:w-[434px] lg:h-[250px] xl:w-[517px] xl:h-[300px] 2xl:w-[660px] 2xl:h-[434px]",
  rightSpacing = "right-0",
  titleClass = "text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1153] -tracking-[0.03rem]",
  descriptionClass = "text-base md:text-lg lg:text-[20px] font-regular max-w-3xl leading-relaxed",
}) {
  return (
    <section className="bg-[#CDCEC9] font-afacad py-8 md:py-12 lg:py-16 relative mt-10 md:mt-16 lg:mt-20 ">
      <div className="pl-4 sm:pl-6 md:pl-8 mb-10 lg:pl-12 xl:pl-24 2xl:pl-48  lg:flex justify-between items-center">
        <div className="space-y-4 md:space-y-6 ">
          <h1 className={titleClass}>
            {title}
          </h1>
          <p className={descriptionClass}>
            {description}
          </p>
          <button
            type="submit"
            className="w-fit px-6 py-4 bg-[#0c1152] text-white font-bold rounded-full hover:bg-[#0a0e42] transition-colors uppercase text-sm md:text-base xl:text-[20px]"
          >
            SUBMIT YOUR CASE
          </button>
        </div>
        <div className={`lg:absolute ${rightSpacing} lg:-bottom-[0px] xl:-bottom-[0px] 2xl:-top-[85px] z-0`}>
            <img
              src={image}
              alt="3d surgical image"
              className={imageClass}
            />
          </div>
      </div>
    </section>
  );
}

export default WhatIs3DPrinted;

