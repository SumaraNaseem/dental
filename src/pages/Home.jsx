import React from "react";
import HeroWithForm from "../Components/HomePage/HeroWithForm";
import CustomerLogos from "../Components/HomePage/CustomerLogos";
import WhatIs3DPrinted from "../Components/HomePage/WhatIs3DPrinted";
import TypesOfGuides from "../Components/HomePage/TypesOfGuides";
import WhoCanBenefit from "../Components/HomePage/WhoCanBenefit";
import DoctorConsultation from "../Components/HomePage/DoctorConsultation";
import Advantages from "../Components/HomePage/Advantages";
import Technology from "../Components/HomePage/Technology";
import StreamlinedProcess from "../Components/HomePage/StreamlinedProcess";
import ChoosingExcellence from "../Components/HomePage/ChoosingExcellence";
import Testimonials from "../Components/HomePage/Testimonials";
import Faq from "../Components/HomePage/Faq";

function Home() {
  return (
    <div className="font-afacad">
      {/* ========== SECTION 1: HERO WITH FORM ========== */}
      <HeroWithForm />

      {/* ========== SECTION 2: CUSTOMER LOGOS ========== */}
      <CustomerLogos />

      {/* ========== SECTION 3: WHAT IS 3D PRINTED IMPLANT SURGICAL GUIDES ========== */}
      <WhatIs3DPrinted />

      {/* ========== SECTION 4: TYPES OF 3D PRINTED DENTAL IMPLANT GUIDES ========== */}
      <TypesOfGuides />

      {/* ========== SECTION 5: WHO CAN BENEFIT ========== */}
      <WhoCanBenefit />

      {/* ========== SECTION 6: DOCTOR CONSULTATION ========== */}
      <DoctorConsultation />

      {/* ========== SECTION 7: ADVANTAGES ========== */}
      <Advantages />

      {/* ========== SECTION 8: TECHNOLOGY ========== */}
      <Technology />

      {/* ========== SECTION 9: STREAMLINED PROCESS ========== */}
      <StreamlinedProcess />

      {/* ========== SECTION 10: CHOOSING GUIDED EXCELLENCE ========== */}
      <ChoosingExcellence />

      {/* ========== SECTION 11: TESTIMONIALS ========== */}
      <Testimonials />

      {/* ========== SECTION 12: FAQ ========== */}
      <Faq />
    </div>
  );
}

export default Home;
