import React from "react";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle3 from "../../assets/Rectangle3.png";
import Rectangle4 from "../../assets/Rectangle4.png";

const defaultGuideTypes = [
  {
    id: 1,
    image: Rectangle2,
    title: "Tooth Supported Guides",
    description: "Anchor directly on existing teeth for stability.",
    widthClass: "w-[253px]",
  },
  {
    id: 2,
    image: Rectangle1,
    title: "Bone supported Guides",
    description: "Ideal for edentulous patients, supported by the jawbone.",
    widthClass: "w-[253px]",
  },
  {
    id: 3,
    image: Rectangle3,
    title: "Tissue Supported Guides",
    description: "Used for soft tissue support when teeth are absent.",
    widthClass: "w-[253px]",
  },
  {
    id: 4,
    image: Rectangle4,
    title: "Hybrid Guides",
    description: "Combine multiple support methods for complex cases.",
    widthClass: " w-[253px] ",
    mbClass: "mb-2 md:mb-9 lg:mb- xl:mb-10  ",
  },
];

function TypesOfGuides({
  title = "Types of 3D Printed Dental Implant Guides",
  titleClass = "text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1153] mb-2 md:mb-4 max-w-6xl !leading-tight mx-auto",
  description = "There are multiple types of 3D printed dental guides, each designed to meet specific surgical needs.",
  descriptionClass = "text-base md:text-lg lg:text-[20px] font-regular max-w-6xl mx-auto !leading-relaxed px-4 sm:px-6 md:px-8 lg:px-12",
  guideTypes = defaultGuideTypes,
  bottomText = "Each guide is designed digitally and manufactured via surgical guide 3D printing, ensuring a perfect fit for every patient.",
  bottomTextWidth = "max-w-xl",
  gridClass = "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8  mb-8 md:mb-12",
  cardClass = "bg-white rounded-lg shadow-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-shadow ",
  buttonText = "SUBMIT YOUR CASE",
}) {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-8">
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
          <h2 className={titleClass}>
            {title}
          </h2>
          <p className={descriptionClass}>
            {description}
          </p>
        </div>

        <div className={gridClass}>
          {guideTypes.map((guide) => (
            <div key={guide.id} className={cardClass}>
              <div className="p-2 sm:p-4 flex items-center justify-center">
                <img src={guide.image} alt={guide.title} className="w-full h-auto object-cover" />
              </div>
              <div className="p-2 sm:p-4 md:p-5">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold text-[#0c1152] ${
                    guide.mbClass || "mb-2 sm:mb-3"
                  } ${guide.widthClass || "w-[253px]"}`}
                >
                  {guide.title}
                </h3>
                <p className="text-sm sm:text-base md:text-base lg:text-[16px] font-regular leading-relaxed w-full">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={`max-w-full sm:max-w-xl mx-auto text-center px-2 sm:px-0`}>
          <p className="text-[#374154] text-sm sm:text-base md:text-lg lg:text-[20px] font-regular mb-4 sm:mb-6">
            {bottomText}
          </p>
          <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#0c1152] text-xs sm:text-sm md:text-base xl:text-[20px] text-white font-bold rounded-full transition-colors uppercase hover:bg-[#0a0e42]">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TypesOfGuides;

