import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const defaultBenefitCategories = [
  {
    id: 1,
    icon: icon1,
    title: "Dentists performing implants:",
    description: "Ensure precise placement and reduced surgical risk.",
    mbClass: " mb-5 lg:mb-16 xl:mb-8",
    borderClass: "border-white/80",
  },
  {
    id: 2,
    icon: icon2,
    title: "Labs seeking turnkey solution:",
    description: "Offer surgical guides to existing dental clientele.",
    mbClass: "  mb-5 lg:mb-16",
    borderClass: "border-white/80",
  },
  {
    id: 3,
    icon: icon3,
    title: "Dental practices expanding implant services:",
    description: "Standardize outcomes and streamline workflows.",
    mbClass: "  mb-5 lg:mb-16 xl:mb-8",
    borderClass: "border-white/80",
  },
  {
    id: 4,
    icon: icon4,
    title: "Complex cases:",
    description: "Multiple implants, anatomical challenges, or compromised bone structures.",
    mbClass: "mb-5 md:mb-12 lg:mb-24 ",
    borderClass: "border-white/20",
  },
];

function WhoCanBenefit({
  title = "Who Can Benefit from 3D Printed Surgical Guides?",
  description = "3D printed implant surgical guides are ideal for",
  benefitCategories = defaultBenefitCategories,
  showBottomText = true,
  bottomText = "Submit your case now and allow our expert-reviewed guides to simplify even the most complex dental implant procedures.",
  buttonText = "SUBMIT YOUR CASE",
  buttonClass = "rounded-full",
  titleClass = "text-3xl md:text-4xl lg:text-[50px]",
  descriptionClass = "text-base md:text-lg lg:text-[20px]",
}) {
  return (
    <section className="bg-[#0C1152] py-12 md:py-16  ">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52 ">
        <div className="text-center mb-8 md:mb-12 ">
          <h1 className={`${titleClass} font-bold text-white mb-4`}>
            {title}
          </h1>
          <p className={`${descriptionClass} font-regular text-white`}>
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 ">
          {benefitCategories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-start px-4 border-b md:border-b-0 ${category.id === 2 ? 'lg:border-r-0 xl:border-r' : 'md:border-r'} ${category.borderClass || "border-white/80"} last:border-b-0 md:last:border-r-0 pb-6 md:pb-0`}
            >
              <div className="  w-full h-[80px]  ">
                <img src={category.icon} alt={category.title} className="w-[40px] md:w-[46px] h-auto mb-4" />
              </div>
              <h3 className={`text-xl md:text-2xl lg:text-[30px] font-regular text-white ${category.mbClass || "mb-6"}`}>
                {category.title}
              </h3>
              <p className={`text-sm md:text-base lg:text-[20px] font-regular text-white leading-relaxed ${category.descriptionWidthClass || ""}`}>
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {showBottomText && (
          <div className="text-center">
            <p className="text-white text-base md:text-lg lg:text-[20px] font-regular mb-6 md:mb-8 max-w-2xl mx-auto px-4 md:px-8">
              {bottomText}
            </p>
            <button className={`px-6 md:px-8 py-2 md:py-3 bg-white text-[#0C1152] font-bold ${buttonClass} transition-colors uppercase text-sm md:text-base xl:text-[20px]`}>
              {buttonText}
            </button>
          </div>
        )}
        {!showBottomText && (
          <div className="text-center">
            <button className={`px-6 md:px-8 py-2 md:py-3 bg-white text-[#0C1152] font-bold ${buttonClass} transition-colors uppercase text-sm md:text-base xl:text-[20px]`}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default WhoCanBenefit;

