import React from "react";
import Rectangle9 from "../../assets/Rectangle9.png";
import Rectangle10 from "../../assets/Rectangle10.png";
import Rectangle11 from "../../assets/Rectangle11.png";
import Rectangle12 from "../../assets/Rectangle12.png";

const excellenceCards = [
  {
    id: 1,
    image: Rectangle9,
    title: "Expert Designed Guides",
    description: "Captures accurate 3D images of oral anatomy.",
    mbClass: "mb-4 md:mb-12 lg:mb-4 ",
  },
  {
    id: 2,
    image: Rectangle10,
    title: "Seamless Digital Workflow",
    description: "Replaces traditional molds for more precise guide design.",
  },
  {
    id: 3,
    image: Rectangle11,
    title: "Patient Specific Solutions",
    description: "Customized guides fit each patient's anatomy perfectly.",
  },
  {
    id: 4,
    image: Rectangle12,
    title: "Faster, Safer Procedures",
    description: "Reduce surgical time, improve accuracy, and enhance outcomes.",
  },
];

function ChoosingExcellence() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1153] mb-2 md:mb-4">
            Choosing Guided Excellence for Your Surgical Guides
          </h2>
          <p className="text-base md:text-lg lg:text-[20px] font-regular max-w-3xl mx-auto">
            At Guided Excellence, every 3D printed implant surgical guide is designed with care by Dr. Zareh Baghoomian, a practicing dentist with over 20 years of experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {excellenceCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4 flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className={`text-xl md:text-2xl lg:text-[24px] font-bold text-[#0c1152] ${card.mbClass || "mb-4"}`}>
                  {card.title}
                </h3>
                <p className="text-sm md:text-base lg:text-[16px] w-[258px] font-regular leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-6 md:px-8 py-2 md:py-3 bg-[#0c1152] text-sm md:text-base xl:text-[20px] text-white font-bold rounded-3xl transition-colors uppercase hover:bg-[#0a0e42]">
            SUBMIT YOUR CASE
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChoosingExcellence;

