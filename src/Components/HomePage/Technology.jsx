import React from "react";
import Rectangle5 from "../../assets/Rectangle5.png";
import Rectangle6 from "../../assets/Rectangle6.png";
import Rectangle7 from "../../assets/Rectangle7.png";
import Rectangle8 from "../../assets/Rectangle8.png";

const defaultTechnologyCards = [
  {
    id: 1,
    image: Rectangle7,
    title: "3D Cone Beam CT (CBCT) Scanning",
    description: "Captures accurate 3D images of oral anatomy.",
    widthClass: "w-[235px]",
  },
  {
    id: 2,
    image: Rectangle6,
    title: "Digital Impressions",
    description: "Replaces traditional molds for more precise guide design.",
    mbClass: " mb-2 md:mb-9 lg:mb-2 xl:mb-10",
    widthClass: "w-[235px]",
  },
  {
    id: 3,
    image: Rectangle5,
    title: "CAD/CAM Design Software",
    description: "Transforms scans into exact surgical blueprints.",
    widthClass: "w-[235px]",
  },
  {
    id: 4,
    image: Rectangle8,
    title: "High Precision 3D Printing",
    description: "Produces durable and highly accurate guides ready for surgical use.",
    widthClass: "w-[235px]",
  },
];

function Technology({
  title = "Technology Behind 3D Printing Dental Guides",
  description = "The creation of 3D printing dental guides combines advanced imaging, design, and manufacturing technology.",
  technologyCards = defaultTechnologyCards,
  buttonText = "BOOK A FREE CONSULT",
  buttonClass = "rounded-full",
  titleClass = "text-3xl md:text-4xl lg:text-[50px]",
  descriptionClass = "text-base md:text-lg lg:text-[20px]",
  gridCols = "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
  buttonWidthClass = "",
  imagePaddingClass = "p-2",
  contentPaddingClass = "p-2",
}) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className={`${titleClass} font-bold text-[#0C1153] mb-2 md:mb-4`}>
            {title}
          </h2>
          <p className={`${descriptionClass} font-regular `}>
            {description}
          </p>
        </div>
        <div className={`grid ${gridCols} gap-6 md:gap-8  mb-8 md:mb-12`}>
          {technologyCards.map((tech) => (
            <div key={tech.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`${tech.imagePaddingClass || imagePaddingClass} flex items-center justify-center`}>
                <img src={tech.image} alt={tech.title} className="w-full h-full object-cover" />
              </div>
              <div className={`${tech.contentPaddingClass || contentPaddingClass}`}>
                <h3 className={`text-xl md:text-2xl lg:text-[24px] font-bold text-[#0c1152] ${tech.mbClass || 'mb-2'}`}>
                  {tech.title}
                </h3>
                <p className={`text-sm md:text-base lg:text-[16px] font-regular leading-relaxed ${tech.widthClass || "w-[235px]"}`}>
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${buttonWidthClass} text-center`}>
          <button className={`px-6 md:px-8 py-2 md:py-3 bg-[#0c1152] text-sm md:text-base xl:text-[20px] text-white font-bold ${buttonClass} transition-colors uppercase`}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Technology;

