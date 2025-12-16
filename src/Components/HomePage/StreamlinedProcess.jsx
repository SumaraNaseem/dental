import React from "react";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";

const defaultProcessSteps = [
  {
    id: 1,
    icon: icon6,
    title: "Upload Your Case",
    description: "Securely submit your patient's digital scans and treatment details through our online portal. This allows us to create a custom 3D surgery implant guide tailored to your patient's anatomy.",
  },
  {
    id: 2,
    icon: icon5,
    title: "Consultation & Review",
    description: "Dr. Zareh Baghoomian personally reviews each case, ensuring clinical precision and providing expert guidance for 3D guided implant surgery.",
  },
  {
    id: 3,
    icon: icon7,
    title: "3D Printing & Delivery",
    description: "We craft your 3D printed implant surgical guide using advanced technology and ship it directly to your practice, ready for accurate and safe implant placement.",
  },
];

function StreamlinedProcess({
  title = "Our Streamlined Process for Your 3D Printed Surgical Guides",
  description = "At Guided Excellence, creating your 3D printed dental implant guide is simple, precise, and fully tailored to each patient. Our workflow ensures accuracy, efficiency, and predictable results from start to finish.",
  processSteps = defaultProcessSteps,
  buttonText = "GET STARTED",
  buttonClass = "rounded-3xl",
  titleClass = "text-3xl md:text-4xl lg:text-[50px]",
  descriptionClass = "text-base md:text-lg lg:text-[20px] max-w-5xl xl:px-8 mx-auto",
  stepTitleClass = "text-2xl md:text-3xl lg:text-[30px]",
  stepDescriptionClass = "text-base md:text-lg lg:text-[20px]",
}) {
  return (
    <section className="bg-[#0C1152] py-8 sm:py-12 md:py-16">
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-3 sm:px-6">
          <h1 className={`${titleClass} font-bold text-white mb-3 sm:mb-4 tracking-tighter !leading-tight px-1 sm:px-0`}>
            {title}
          </h1>
          <p className={`${descriptionClass} font-regular text-white !leading-relaxed px-1 sm:px-0`}>
            {description}
          </p>
        </div>
        <div className="px-3 sm3px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-2 xl:gap-8 2xl:gap-12 mb-6 sm:mb-8 md:mb-12">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-start border-b pb-5 mb-5 last:mb-0 last:border-b-0 lg:border-b-0 lg:mb-0 lg:pb-0 lg:px-1 lg:py-0 lg:border-r ${step.borderClass || "border-white"} lg:last:border-r-0`}
              >
                <div className="w-full h-12 sm:h-14 mb-3 sm:mb-4 md:mb-6">
                  <img src={step.icon} alt={step.title} className={`${step.iconClass || "w-[30px] sm:w-[35px] md:w-[40px]"} h-auto`} />
                </div>

                <h3 className={`${stepTitleClass} mb-2 sm:mb-3 md:mb-4 lg:mb-6 font-regular text-white ${step.mbClass || ""}`}>
                  {step.title}
                </h3>

                <p className={`${stepDescriptionClass} font-regular w-full ${step.descriptionWidthClass || "max-w-full sm:max-w-[360px]"} text-white leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center px-3 sm:px-0">
          <button className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-white text-[#0C1152] font-bold ${buttonClass} hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm md:text-base xl:text-[20px]`}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default StreamlinedProcess;

