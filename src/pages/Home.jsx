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
     
    <HeroWithForm />
    <CustomerLogos />
    <WhatIs3DPrinted />
    <TypesOfGuides />
    <WhoCanBenefit />
      <DoctorConsultation />
        <Advantages />
      <Technology />
     <StreamlinedProcess />
       <ChoosingExcellence />
     <Testimonials />
      <Faq />
    </div>
  );
}

export default Home;
