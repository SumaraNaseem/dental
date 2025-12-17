import React from "react";
import costomer1 from "../../assets/costomer1.png";
import costomer2 from "../../assets/costomer2.png";
import costomer3 from "../../assets/costomer3.png";
import costomer4 from "../../assets/costomer4.png";
import costomer5 from "../../assets/costomer5.png";
import costomer6 from "../../assets/costomer6.png";
import costomer7 from "../../assets/costomer7.png";

const customerLogos = [
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974173/logo_7-D5ikdAoI_fothjr.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974174/logo_3-tix51D0u_fwjjp8.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974174/logo_2-Bs2ExRP6_fqaxus.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974174/logo_4-DDG3PIFV_g7ngf5.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974174/logo_5-Czg2A4fR_d9jqi3.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974173/logo_6-C4OVt-Xc_uo7owk.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974173/yomi-B1geGCaw_iikjqg.png',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974171/logo_15-CEfIWHdi_bibwcv.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974171/logo_11-krQ2WSB__aju1x3.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974171/logo_9-BDqbn06L_sw9nxb.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974171/logo_11-krQ2WSB__aju1x3.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974171/logo_9-BDqbn06L_sw9nxb.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974170/logo_12-CWuRWKCa_w4bgaq.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974170/logo_12-CWuRWKCa_w4bgaq.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974171/logo_10-BTMYP0RC_g9dtyw.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974170/logo_13-sxWkalQS_tylquo.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765974169/logo_14-B-M6bRuD_lj20mc.svg',
  'https://res.cloudinary.com/djlpb1ld5/image/upload/v1765973876/download_k0pji4.svg'
   ];

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
          animation: slide 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
      <section className="py-4 overflow-hidden">
        <div className="relative">
          <div className="flex animate-slide-logos">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0  px-8 md:px-12 lg:px-16">
                <img src={logo} alt={`Customer ${(index % customerLogos.length) + 1}`} className="w-auto h-12 md:h-12 mt-3 lg:h-28 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerLogos;

