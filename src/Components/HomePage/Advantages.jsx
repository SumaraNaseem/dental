import React from "react";
import docwork from "../../assets/docwork.png";
import goodicon from "../../assets/goodicon.png";
console.log("Advantages component loaded");
const defaultAdvantages = [
  {
    id: 1,
    title: "Faster Procedures:",
    description: "Streamlined surgeries mean less chair time and improved patient comfort.",
  },
  {
    id: 2,
    title: "Enhanced Safety:",
    description: "Minimizes risk of nerve damage, sinus perforation, or incorrect placement.",
  },
  {
    id: 3,
    title: "Superior Accuracy:",
    description: "Guides are based on digital scans, ensuring implants are positioned exactly where planned.",
  },
  {
    id: 4,
    title: "Better Healing:",
    description: "Precise implant positioning promotes faster osseointegration and recovery.",
  },
];


// 
function Advantages({
  title = "Advantages of 3D Printed Surgical Guides ",
  description = "Using 3D printed surgical guides in implant dentistry has revolutionized the way dental procedures are performed. These guides combine digital precision with modern manufacturing technology.",
  advantages = defaultAdvantages,
  bottomText = "Experience the power of 3D printed implant surgical guides; submit your case today",
  buttonText = "SUBMIT YOUR CASE",
  image = docwork,
  imageClass = "w-full max-w-[628px] h-auto",
  sectionClass = "px-4 sm:px-6 md:px-8 xl:pr-0 lg:px-12 xl:pl-12 2xl:pl-[135px] bg-[#F8F8F8] xl:bg-transparent",
  innerClass = "xl:bg-[#F8F8F8] xl:pl-[45px] 2xl:pl-[70px] w-full py-12 md:py-16",
  gridClass = "grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:w-[1250px] 2xl:w-full 2xl:pr-[209px] items-center",
  titleClass = "text-xl md:text-4xl lg:text-[50px]",
  descriptionClass = "text-base md:text-lg lg:text-[20px] max-w-[630px]",
  listClass = "space-y-3 md:space-y-4",
  listItemClass = "space-y-1 max-w-[445px]",
  iconClass = "w-5 h-5 md:w-[20px] md:h-[20px]",
  advantageTitleClass = "text-base md:text-lg lg:text-[20px]",
  advantageDescriptionClass = "text-base md:text-lg lg:text-[20px]",
  bottomTextClass = "text-base md:text-lg lg:text-[18px] max-w-[435px]",
  buttonClass = "rounded-full",
}) {
  return (
    <section className={sectionClass}>
      <div className={innerClass}>

        <div className={gridClass}>

          <div className="space-y-4 md:space-y-5 order-2 xl:order-1 ">
            

            <h2 className={`${titleClass} font-bold text-[#0C1152] !leading-tight`}>
              {title}
            </h2>


            <p className={`${descriptionClass} font-regular text-[#374151] leading-relaxed`}>
              {description}
            </p>



            <ul className={listItemClass || listClass}>
              {advantages.map((advantage) => (
                <li key={advantage.id} className="flex items-start gap-3">
                  <img src={goodicon} alt={advantage.title} className={`${advantage.iconClass || iconClass} mt-2 flex-shrink-0`} />
                  <div>
                    <h3 className={`font-bold text-[#0C1152] ${advantage.titleClass || advantageTitleClass} ${advantage.mbClass || "mb-2"}`}>{advantage.title}</h3>
                    <p className={`text-[#374151] ${advantage.descriptionClass || advantageDescriptionClass} font-regular leading-relaxed ${advantage.widthClass || ""}`}>
                      {advantage.description}
                    </p>
                  </div>
                </li> 
              ))}
            </ul>



            <p className={`${bottomTextClass} font-regular text-[#374151] leading-relaxed`}>
              {bottomText}
            </p>


            <button className={`px-6 md:px-8 py-2 md:py-3 bg-[#0C1152] text-white text-sm md:text-base xl:text-[20px] font-bold ${buttonClass} transition-colors uppercase`}>
              {buttonText}
            </button>


          </div>


          <div className="flex justify-center xl:justify-end order-1 xl:order-2 ">
            <div className={`overflow-hidden ${imageClass}`}>
              <img src={image} alt="Dental Procedure" className="w-full h-auto object-cover" />
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}

export default Advantages;

