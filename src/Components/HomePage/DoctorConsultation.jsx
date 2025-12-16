import React from "react";
import doc1 from "../../assets/doc1.png";

function DoctorConsultation({
  // Content
  title = "Take the Next Step in Dental Implant Precision",
  description = (
    <>
      Submit your case now or book a free consultation with{" "}
      <strong className="font-bold">Dr. Zareh Baghoomian</strong> to experience
      expert-reviewed, technology-driven dental surgical guides designed for
      precision and safety.
    </>
  ),
  primaryButtonText = "SUBMIT YOUR CASE",
  secondaryButtonText = "BOOK A FREE CONSULT",

  // Layout & styling
  image = doc1,
  sectionClass = "bg-white py-8 md:py-16",
  outerContainerClass = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52",
  gridClass = "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center",
  imageWrapperClass =
    "flex justify-center lg:justify-start order-2 lg:order-1",
  imageContainerClass = "overflow-hidden w-full            lg:max-w-[558px] h-auto",
  imageClass = "w-full h-full object-cover",
  contentWrapperClass = "space-y-4 md:space-y-6 order-1 lg:order-2",
  titleClass =
    "text-lg md:text-4xl xl:text-[50px] font-bold text-[#0C1152] !leading-tight",
  descriptionClass =
    "text-base md:text-lg xl:text-[20px] font-regular w-full max-w-[595px] leading-relaxed",
  buttonsWrapperClass = "flex flex-col sm:flex-row gap-4 pt-4",
  primaryButtonClass =
    "px-6 py-2 md:py-3 bg-[#0C1152] text-white font-bold rounded-full transition-colors uppercase text-sm md:text-base lg:text-[12px] xl:text-[20px]",
  secondaryButtonClass =
    "px-6 py-2 md:py-3 bg-white border-2 border-[#0C1152] text-[#0C1152] font-bold rounded-full transition-colors uppercase text-sm md:text-base lg:text-[12px] xl:text-[20px]",
}) {
  return (
    <section className={sectionClass}>
      <div className={outerContainerClass}>
        <div className={gridClass}>
          <div className={imageWrapperClass}>
            <div className={imageContainerClass}>
              <img src={image} alt="Dr. Zareh Baghoomian" className={imageClass} />
            </div>
          </div>

          <div className={contentWrapperClass}>
            <h2 className={titleClass}>{title}</h2>
            <p className={descriptionClass}>{description}</p>
            <div className={buttonsWrapperClass}>
              <button className={primaryButtonClass}>{primaryButtonText}</button>
              <button className={secondaryButtonClass}>
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorConsultation;


