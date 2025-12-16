import React from "react";
import costomer1 from "../../assets/costomer1.png";
import costomer2 from "../../assets/costomer2.png";
import costomer3 from "../../assets/costomer3.png";
import costomer4 from "../../assets/costomer4.png";
import costomer5 from "../../assets/costomer5.png";
import costomer6 from "../../assets/costomer6.png";
import costomer7 from "../../assets/costomer7.png";

const customerLogos = [costomer1, costomer2, costomer3, costomer4, costomer5, costomer6, costomer7];

function CustomerLogos() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...customerLogos, ...customerLogos];

  return (
    <>
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide-logos {
          animation: slide 10s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
      <section className="py-4 overflow-hidden">
        <div className="relative">
          <div className="flex animate-slide-logos">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-8 md:px-12 lg:px-16">
                <img src={logo} alt={`Customer ${(index % customerLogos.length) + 1}`} className="w-auto h-12 md:h-12 lg:h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerLogos;

