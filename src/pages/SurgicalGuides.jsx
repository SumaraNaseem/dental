import React from "react";
import Howtowork from "../assets/Howtowork2.png";
import surgicalimg3 from "../assets/surgicalimg3.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle20 from "../assets/Rectangle20.png";
import Rectangle21 from "../assets/Rectangle21.png";
import Rectangle27 from "../assets/Rectangle27.png";
import icon1 from "../assets/icon1.png";
import Advantages from "../Components/HomePage/Advantages";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";
import HeroWithForm from "../Components/HomePage/HeroWithForm";
import CustomerLogos from "../Components/HomePage/CustomerLogos";
import WhatIs3DPrinted from "../Components/HomePage/WhatIs3DPrinted";
import TypesOfGuides from "../Components/HomePage/TypesOfGuides";
import WhoCanBenefit from "../Components/HomePage/WhoCanBenefit";
import OurAchievement from "../Components/surgicalGuide/OurAchievement";
import CustomDental from "../Components/surgicalGuide/CustomDental";
import TechDental from "../Components/surgicalGuide/TechDental";
import DoctorConsultation from "../Components/HomePage/DoctorConsultation";
import StreamlinedProcess from "../Components/HomePage/StreamlinedProcess";
import icon7 from "../assets/icon7.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import Testimonials from "../Components/HomePage/Testimonials";
import Faq from "../Components/HomePage/Faq";

function SurgicalGuides() {
  return (
    <div className="font-inter">
      {/* ========== SECTION 1: HERO WITH FORM (HeroWithForm) ========== */}
      <HeroWithForm
        backgroundImage={Howtowork}
        title="Streamline Every Implant Surgery with Advanced Dental Surgical Guide Design"
        description="Dental implant procedures require accuracy, predictability, and safety. At Guided Excellence, our dental surgical guide design services give dentists the ultimate tools to plan and execute seamless implant placements."
      />

      {/* ========== SECTION 2: CUSTOMER LOGOS (CustomerLogos) ========== */}
      <CustomerLogos />

      {/* ========== SECTION 3: WHAT IS DENTAL SURGICAL GUIDE DESIGN (WhatIs3DPrinted) ========== */}
      <WhatIs3DPrinted
        title="What is Dental Surgical Guide Design?"
        description="A dental surgical guide is a patient-specific tool designed to guide the placement of dental implants with high precision. By controlling implant angulation, depth, and position, surgical guides reduce risks and improve procedural outcomes. Our dental guide design lab for implant surgery combines advanced planning with expert review to create guides that ensure predictable, safe, and efficient implant procedures."
        image={surgicalimg3}
        imageClass="w-[517px] h-[458px]"
        rightSpacing="right-20 -translate-x-1/4"
        imageTopClass="2xl:top-1/2 -translate-y-1/2"
        titleClass="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1153]  !leading-tight max-w-[620px]"
        descriptionClass="text-base md:text-lg lg:text-[20px] font-regular leading-relaxed max-w-[590px] "
      />

      {/* ========== SECTION 4: TYPES OF DENTAL SURGICAL GUIDES (TypesOfGuides) ========== */}
      <TypesOfGuides
        title="Types of Dental Surgical Guides"
        description="Different patients and clinical scenarios require different types of guides. Our dental surgical guide design lab for implant surgery offers:"
        titleClass="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1153] mb-2 md:mb-4 !leading-tight text-center mx-auto"
        descriptionClass="text-base md:text-lg lg:text-[20px] font-regular max-w-[670px] mx-auto !leading-relaxed text-center"
        guideTypes={[
          {
            id: 1,
            image: Rectangle2,
            title: "Tooth Supported Guides",
            description: "Anchor directly to existing teeth for stability.",
            widthClass: "w-[266px]",
          },
          {
            id: 2,
            image: Rectangle20,
            title: "Bone Supported Guides",
            description:
              "Ideal for edentulous patients, these guides rest directly on the jawbone.",
            widthClass: "w-[266px]",
          },
          {
            id: 3,
            image: Rectangle21,
            title: "Mucosa Supported Guides",
            description:
              "Designed for soft tissue support when teeth are missing.",
            widthClass: "w-[276px]",
          },
        ]}

        bottomText="Each guide is digitally designed and 3D printed to fit perfectly, ensuring precise and reliable surgical outcomes."
        bottomTextWidth="w-[560px]"
        buttonText="BOOK A FREE CONSULT"
        gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12 justify-items-center max-w-6xl  mx-auto"
        cardClass="bg-white rounded-lg shadow-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full max-w-[360px] p-2"
      />

      {/* ========== SECTION 5: ADVANTAGES (WhoCanBenefit) ========== */}
      <WhoCanBenefit
        title="Advantages of Custom Dental Surgical Guides"
        description="Using custom dental surgical guides revolutionizes implant procedures by combining digital precision with modern manufacturing."
        benefitCategories={[
          {
            id: 1,
            icon: icon1,
            title: "Superior Accuracy",
            description:
              "Guides are based on detailed digital scans, ensuring implants are positioned exactly as planned.",
            mbClass: "mb-10",
            borderClass: "border-white",
            descriptionWidthClass: "max-w-[260px]",
          },
          {
            id: 2,
            icon: icon8,
            title: "Enhanced Safety",
            description:
              "Reduces risk of nerve injury, sinus perforation, or improper angulation.",
            mbClass: "mb-10",
            borderClass: "border-white",
            descriptionWidthClass: "max-w-[270px]",
          },
          {
            id: 3,
            icon: icon9,
            title: "Efficient Procedures",
            description:
              "Streamlined surgeries reduce chair time and improve patient comfort.",
            mbClass: "mb-10",
            borderClass: "border-white",
            descriptionWidthClass: "max-w-[270px]",
          },
          {
            id: 4,
            icon: icon10,
            title: "Predictable Healing",
            description:
              "Accurate placement promotes faster osseointegration and better long-term outcomes.",
            mbClass: "mb-10",
            borderClass: "border-white/20",
            descriptionWidthClass: "max-w-[280px]",
          },
        ]}
        showBottomText={false}
        buttonText="SUBMIT YOUR CASE"
      />

      {/* ========== SECTION 6: OUR ACHIEVEMENT (OurAchievement) ========== */}
      <OurAchievement />

      {/* ========== SECTION 7: CUSTOM DENTAL (CustomDental) ========== */}
      <CustomDental />

      {/* ========== SECTION 8: TECH DENTAL (TechDental) ========== */}
      <TechDental />

      {/* ========== SECTION 9: CHOOSING GUIDED EXCELLENCE (Advantages) ========== */}
      <Advantages
        title="Choosing Guided Excellence for Your Surgical Guides"
        description="At Guided Excellence, every custom dental surgical guide is designed with care by Dr. Zareh Baghoomian, a practicing dentist with over 20 years of experience."
        advantages={[
          {
            id: 1,
            title: "Expert Designed Guides:",
            description:
              "Each guide is reviewed and finalized by a seasoned dental surgeon.",
          },
          {
            id: 2,
            title: "Seamless Digital Workflow:",
            description:
              "Quick case submission, precise planning, and fast delivery ensure efficiency.",
          },
          {
            id: 3,
            title: "Patient Specific Solutions:",
            description:
              "Every guide is customized to fit the patient's unique anatomy.",
          },
          {
            id: 4,
            title: "Safer, Faster Procedures:",
            description:
              "Reduce surgical time, improve accuracy, and enhance patient outcomes.",
            widthClass: "max-w-[380px]",
          },
        ]}
        bottomText="Experience the power of 3D printed implant surgical guides; submit your case today"

        buttonText="SUBMIT YOUR CASE"

        image={Rectangle27}

        imageClass="w-[628px] h-[833px]  "

        sectionClass="bg-[#f8f8f8]  py- px-4 sm:px-6 md:px-8  lg:px-12 xl:px-24 2xl:px-52 2xl:pl-[135px] xl:pl-[70px] font-inter "

        gridClass="grid grid-cols-1 lg:grid-cols-2 gap- items-center  "

        titleClass="lg:text-[50px] text-[20px]max-w-[720px]"

        descriptionClass="text-[20px] max-w-[590px]"

        listItemClass="space-y-4 max-w-[425px]"

        iconClass="w-[20px] h-[20px]"


        bottomTextClass="text-[18px] max-w-[500px]"

        buttonClass="rounded-full"
      />
      
      {/* ========== SECTION 10: DOCTOR CONSULTATION (DoctorConsultation) ========== */}
      <DoctorConsultation
        title="Consult Directly with Dr. Zareh Baghoomian"
        description={
          <>
            Submit your case now or book a free consultation with{" "}
            <strong className="font-bold text-[#0C1152]">
              Dr. Zareh Baghoomian
            </strong>{" "}
            to experience the power of expertly designed surgical guides.
          </>
        }
        sectionClass="bg-white py-12"
        titleClass="lg:text-[50px] text-[20px] font-bold max-w-[620px] text-[#0C1152]"
      />

      {/* ========== SECTION 11: STREAMLINED PROCESS (StreamlinedProcess) ========== */}
      <StreamlinedProcess
        title="Our Streamlined Process for Your Custom Dental Surgical Guide"
        description="Creating your custom dental surgical guide is simple, precise, and fully tailored to each patient. Our process ensures accuracy, efficiency, and predictable results."
        processSteps={[
          {
            id: 1,
            icon: icon6,
            title: "Upload Your Case",
            description:
              "Securely submit your patient's digital scans, CBCT data, and treatment details through our online portal. This enables our team to plan a surgical guide specifically suited to your patient's anatomy.",
            borderClass: "border-white",
            descriptionWidthClass: "max-w-[383px]",
          },
          {
            id: 2,
            icon: icon5,
            title: "Consultation & Review",
            description:
              "Dr. Zareh Baghoomian personally reviews each case, providing expert guidance on implant positioning and verifying the surgical guide design for clinical precision.",
            borderClass: "border-white",
            descriptionWidthClass: "max-w-[383px]",
          },
          {
            id: 3,
            icon: icon7,
            title: "3D Printing & Delivery",
            description:
              "Once finalized, your custom dental surgical guide is produced using high-precision 3D printing technology and shipped directly to your practice, ready for accurate and safe implant placement.",
            borderClass: "border-white/20",
            descriptionWidthClass: "max-w-[363px]",
          },
        ]}
        titleClass="lg:text-[50px] text-[20px] font-bold"
        descriptionClass="text-[20px] font-regular max-w-[850px] mx-auto"
        stepTitleClass="text-[30px] font-regular"
        stepDescriptionClass="text-[20px] font-regular"
        buttonText="GET STARTED"
        buttonClass="rounded-full"
      />

      {/* ========== SECTION 12: TESTIMONIALS (Testimonials) ========== */}
      <Testimonials />

      {/* ========== SECTION 13: FAQ (Faq) ========== */}
      <Faq
        faqData={[
          {
            id: 1,
            question: "How do dental labs create surgical guides for dentists?",
            answer:
              "By combining digital scans, expert review, and modern 3D printing, dental lab digital implant guide services transform diagnostics into precise, fully customized guides. Each step is optimized for guided surgery planning for dentists.",
          },
          {
            id: 2,
            question: "What's involved in a surgical guide design consultation?",
            answer:
              "A surgical guide design consultation involves reviewing your patient's digital scans, discussing treatment goals, and collaborating with our expert team to create a customized guide plan. Our consultation process ensures optimal implant placement and addresses any clinical concerns before manufacturing.",
          },
          {
            id: 3,
            question:
              "Can I collaborate with your lab as a partner in a dental lab for surgical guide design?",
            answer:
              "Yes, we welcome partnerships with dental labs. As a partner dental lab for surgical guide design, you can offer comprehensive surgical guide services to your clients while leveraging our expertise in digital implant planning and 3D printing technology. We provide support throughout the process to ensure seamless collaboration.",
          },
          {
            id: 4,
            question: "How do you ensure precision implant guide design service?",
            answer:
              "Our precision implant guide design service utilizes advanced digital planning software, rigorous quality control protocols, and expert clinical review. Every guide undergoes multiple verification steps, including digital accuracy checks and clinical validation, ensuring each guide meets the highest standards for implant placement precision.",
          },
          {
            id: 5,
            question:
              "Which cases are best suited for your dental implant surgical guide lab?",
            answer:
              "Our dental implant surgical guide lab is ideal for a wide range of cases, including single and multiple implant placements, full-arch restorations, complex anatomical cases, and procedures requiring precise positioning. We excel at handling challenging cases that benefit from custom implant guide service for dental labs in the US.",
          },
          {
            id: 6,
            question: "How do I order a custom dental surgical guide?",
            answer:
              "To order a custom dental surgical guide, simply submit your case through our online portal or contact us directly. You'll need to provide digital scans (CBCT and intraoral scans) along with your treatment plan. Our team will review your case, provide a consultation if needed, and guide you through the ordering process.",
          },
        ]}
        sectionClass="bg-white py-10"
        containerClass="max-w-6xl mx-auto font-inter"
        titleClass="lg:text-[50px] text-[20px] font-bold text-[#0C1152] uppercase"
        titleContainerClass="text-center mb-12"
        questionClass="text-[20px] font-bold text-black"
        answerClass="text-[20px] font-regular text-black leading-relaxed"
        buttonClass="w-full flex justify-between items-center p-6 text-left transition-colors"
        answerContainerClass="p-6"
        defaultOpenIndex={0}
      />
    </div>
  );
}

export default SurgicalGuides;
