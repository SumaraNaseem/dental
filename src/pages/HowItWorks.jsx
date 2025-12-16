import React from "react";
import howToWorkImage1 from "../assets/howToWorkImage1.png";
import surgicalimg2 from "../assets/surgicalimg2.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle17 from "../assets/Rectangle17.png";
import Rectangle18 from "../assets/Rectangle18.png";
import Rectangle19 from "../assets/Rectangle19.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import Rectangle14 from "../assets/Rectangle14.png";
import Rectangle13 from "../assets/Rectangle13.png";
import Rectangle15 from "../assets/Rectangle15.png";
import Rectangle16 from "../assets/Rectangle16.png";
import icon7 from "../assets/icon7.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import HeroWithForm from "../Components/HomePage/HeroWithForm";
import CustomerLogos from "../Components/HomePage/CustomerLogos";
import WhatIs3DPrinted from "../Components/HomePage/WhatIs3DPrinted";
import TypesOfGuides from "../Components/HomePage/TypesOfGuides";
import WhoCanBenefit from "../Components/HomePage/WhoCanBenefit";
import StreamlinedProcess from "../Components/HomePage/StreamlinedProcess";
import Technology from "../Components/HomePage/Technology";
import Advantages from "../Components/HomePage/Advantages";
import Testimonials from "../Components/HomePage/Testimonials";
import Faq from "../Components/HomePage/Faq";
import RequestSurgicalGuide from "../Components/WhoToWork/RequestSurgicalGuide";

function HowItWorks() {
  return (
    <div className="font-afacad">
      {/* ========== SECTION 1: HERO WITH FORM ========== */}
      <HeroWithForm
        backgroundImage={howToWorkImage1}
        title="Implant Surgical Guide Lab - Get Dental Precision with Care"
        description="For dentists seeking unmatched accuracy in dental implant procedures, Guided Excellence's implant surgical guide lab offers best-in-class dental implant guides for dentists. Our goal is to deliver predictable, safe, and efficient outcomes by bringing the power of digital implant planning for dental labs and guided surgery planning for dentists together under one roof. With every case, our dental implant surgical guide lab ensures every implant procedure meets the highest clinical standards."
      />

      {/* ========== SECTION 2: CUSTOMER LOGOS ========== */}
      <CustomerLogos />
      
      {/* ========== SECTION 3: WHAT IS 3D PRINTED IMPLANT SURGICAL GUIDES ========== */}
      <WhatIs3DPrinted
        title="What Is an Implant Surgical Guide Lab?"
        description="An implant surgical guide lab is a dedicated center specializing in the creation of precise implant surgical guide solutions for dentists. Leveraging digital implant planning for dental labs, our expert team transforms diagnostic data into fully customized dental implant guides for dentists. By deploying the latest technology, each implant surgical guide lab case is handled with personalized attention - helping practices deliver predictable, repeatable outcomes for patients."
        image={surgicalimg2}
        imageClass="2xl:w-[743px] 2xl:h-[518px]"
        rightSpacing="right-16"
      />
      {/* ========== SECTION 4: TYPES OF 3D PRINTED DENTAL IMPLANT GUIDES ========== */}
      <TypesOfGuides
        title="Innovative Implant Guide Designs from Our Implant Surgical Guide Lab"
        description="At Guided Excellence's implant surgical guide lab, we specialize in developing advanced dental implant guides for dentists - tailored to diverse surgical scenarios. Integrating digital implant planning for dental labs and the expertise of our guided surgery planning for dentists, we engineer solutions that match the precise needs of each clinical case."
        guideTypes={[
          {
            id: 1,
            image: Rectangle2,
            title: "Tooth Supported Guides",
            description:
              "These dental implant guides for dentists are anchored securely to adjacent teeth. This type ensures excellent stabilization and is ideal for cases in which tooth structures remain, offering maximum control during placement.",
            widthClass: "w-[246px] ",
            titleWidthClass: "w-[236px]",
          },
          {
            id: 2,
            image: Rectangle17,
            title: "Foundation Based Surgical Guides",
            description:
              "For patients without existing teeth, our implant surgical guide solutions for dentists use direct bone contact for support. This approach is key for edentulous procedures - delivering reliability and improving outcomes for complex restorations",
            widthClass: "w-[246px]",
            titleWidthClass: "w-[236px]",
          },
          {
            id: 3,
            image: Rectangle19,
            title: "Soft Tissue Adapted Guides",
            description:
              "When anatomical challenges exist, our custom implant guide service for dental labs in the US creates guides that rest on oral mucosa. These guides are optimized for procedures where soft tissue thickness or profile must be carefully managed.",
            widthClass: "w-[255px]",
            titleWidthClass: "w-[255px]",
          },
          {
            id: 4,
            image: Rectangle18,
            title: "Integrated Multi Support Guides",
            description:
              "For demanding or multi-unit surgeries, hybrid dental implant guides for dentists utilize a combination of support methods. Created through advanced digital implant planning for dental labs, these guides are designed for anatomy-driven precision and versatility.",
            widthClass: "w-[255px]",
            titleWidthClass: "w-[290px] ",
          },
        ]}
        bottomText="Each guide is designed digitally and manufactured using 3D resin printing, ensuring a perfect fit for every patient."
        bottomTextWidth="w-[580px]"
      />

      {/* ========== SECTION 5: WHO CAN BENEFIT ========== */}
      <WhoCanBenefit
        title="Who Benefits from Our Implant Surgical Guide Lab"
        description="Let us go through how dental labs create surgical guides for dentists and the advantages in a way that describes it."
        benefitCategories={[
          {
            id: 1,
            icon: icon1,
            title: "Dentists:",
            description:
              "Achieve precision and efficiency in implant placement.",
            mbClass: "mb-8",
            borderClass: "border-white",
            descriptionWidthClass: "w-[210px] ",
          },
          {
            id: 2,
            icon: icon2,
            title: "Dental Labs",
            description:
              "Turn-key solution allowing traditional dental labs to enter into surgical guide planning and manufacturing.",
            mbClass: "mb-8",
            borderClass: "border-white",
            descriptionWidthClass: "w-[260px]",
          },
          {
            id: 3,
            icon: icon3,
            title: "Complex Cases",
            description:
              "Address anatomical challenges with custom implant guide service for dental labs in the US.",
            mbClass: "mb-8",
            borderClass: "border-white",
            descriptionWidthClass: "w-[250px]",
          },
          {
            id: 4,
            icon: icon4,
            title: "Multi Unit Procedures",
            description:
              "Allows planning of All on X cases with optimal parallelism and zero guesswork.",
            mbClass: "mb-8",
            borderClass: "border-white/20",
            descriptionWidthClass: "w-[250px]",
          },
        ]}
        titleClass="lg:text-[50px] text-[20px]"
        descriptionClass="text-[20px] max-w-5xl mx-auto "
        showBottomText={false}
        buttonText="SUBMIT YOUR CASE"
        buttonClass="rounded-full"
      />

      {/* ========== SECTION 6: Request Surgical Guide ========== */}
      <RequestSurgicalGuide />

      {/* ========== SECTION 7: STREAMLINED PROCESS ========== */}
      <StreamlinedProcess
        title="Our Advanced Digital Workflow: Dental Lab Digital Implant Guide Services"
        description="Our streamlined submission-to-delivery process is designed for both clinicians and dental labs:"
        processSteps={[
          {
            id: 1,
            icon: icon6,
            title: "Upload Your Case",
            description:
              "Dentists and labs securely upload patient scans and treatment plans, forming the foundation for digital implant planning for dental labs.",
            mbClass: "mb-16",
            borderClass: "border-white/80",
            // iconClass: "w-[46px]",
            descriptionWidthClass: "max-w-[385px] ",
          },
          {
            id: 2,
            icon: icon5,
            title: "Consultation & Guided Surgery Planning for Dentists",
            description:
              "Every case benefit from guided surgery planning for dentists, led by Dr. Zareh Baghoomian. Each implant surgical guide solution for dentists is created in consultation with the clinical team to ensure fit and function.",
            // mbClass: "mb-4",
            borderClass: "border-white/80",
            // iconClass: "w-[46px]",
            descriptionWidthClass: "max-w-[385px] ",
          },
          {
            id: 3,
            icon: icon7,
            title: "3D Printing & Shipping",
            description:
              "Your guide is manufactured using advanced 3D printing technology, ensuring optimized dental implant guides for dentists. We offer custom implant guide service for dental labs in the US, shipped promptly and ready for surgery.",
            mbClass: "mb-14",
            // borderClass: "border-white/20",
            // iconClass: "w-[46px]",
            descriptionWidthClass: "max-w-[380px] ",
          },
        ]}
      />

      {/* ========== SECTION 8: TECHNOLOGY ========== */}
      <Technology
        title="Technology to Run Digital Implant Surgical Guide Labs"
        description="From digital scanning to CAD/CAM design and precision 3D printing, our process covers:"
        technologyCards={[
          {
            id: 1,
            image: Rectangle14,
            title: "Advanced Imaging",
            description:
              "Key to accurate digital implant planning for dental labs.",
            widthClass: "w-[265px]",
            imagePaddingClass: "p-4",
            contentPaddingClass: "p-4",
          },
          {
            id: 2,
            image: Rectangle13,
            title: "Smart Software",
            description:
              "Enables guided surgery planning for dentists with high reliability.",
            widthClass: "w-[265px]",
            imagePaddingClass: "p-4",
            contentPaddingClass: "p-4",
          },
          {
            id: 3,
            image: Rectangle15,
            title: "Materials Science",
            description:
              "We only use biocompatible, regulatory-compliant substrate for every dental implant guide for dentists.",
            widthClass: "w-[290px]",
            imagePaddingClass: "p-4",
            contentPaddingClass: "p-4",
          },
        ]}
        // buttonText="SUBMIT YOUR CASE"
        // buttonClass="rounded-3xl"
        titleClass="lg:text-[50px] text-[20px]  tracking-tight"
        descriptionClass="text-[20px]"
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12  max-w-5xl mx-auto"
        // buttonWidthClass="w-[560px] mx-auto"
        imagePaddingClass="p-2"
        contentPaddingClass="p-2"
      />

      {/* ========== SECTION 9: ADVANTAGES ========== */}
      <Advantages
        title="Advantages of Partnering with Our Implant Surgical Guide Lab"
        description="Choosing our dental implant surgical guide lab brings major benefits:"
        advantages={[
          {
            id: 1,
            title: "Enhanced Accuracy:",
            description:
              "Every guide is a result of careful digital implant planning for dental lab clients and undergoes rigorous clinical review.",
            titleClass: "text-[20px]",
            descriptionClass: "text-[20px]",
          },
          {
            id: 2,
            title: "Better Safety:",
            description:
              "Designed to lower surgical risks; ideal for even the most complex cases including those requiring custom implant guide service for dental labs in the US.",
            titleClass: "text-[20px]",
            descriptionClass: "text-[20px]",
          },
          {
            id: 3,
            title: "Efficiency:",
            description:
              "Streamlines chair time and increases confidence for the surgical team.",
            titleClass: "text-[20px]",
            descriptionClass: "text-[20px]",
          },
          {
            id: 4,
            title: "Seamless Collaboration:",
            description:
              "Our implant surgical guide lab emphasizes partnership making us a preferred partner dental lab for surgical guide design.",
            titleClass: "text-[20px]",
            descriptionClass: "text-[20px]",
          },
          {
            id: 5,
            title: "Predictable Outcomes:",
            description:
              "Focused on clinical success and patient satisfaction.",
            titleClass: "text-[20px]",
            descriptionClass: "text-[20px]",
          },
        ]}
        bottomText="Experience the power of 3D printed implant surgical guides: submit your case today"
        // buttonText="SUBMIT YOUR CASE"
        image={Rectangle16}
        imageClass="w-[628px] h-auto "
        sectionClass="bg-[#F8F8F8]  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52"
        // innerClass="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-52"
        gridClass="grid grid-cols-1 lg:grid-cols-2 items-center "
        titleClass="lg:text-[50px]  text-[20px] tracking-tighter "
        descriptionClass="text-[20px] "
        listItemClass=" max-w-[620px]  "
        iconClass="w-[20px] h-[20px]"
        bottomTextClass="text-[18px] max-w-[450px]  "
        buttonClass="rounded-full"
      />

      {/* ========== SECTION 10: TESTIMONIALS ========== */}
      <Testimonials />

      {/* ========== SECTION 11: FAQ ========== */}
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
            question:
              "What's involved in a surgical guide design consultation?",
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
            question:
              "How do you ensure precision implant guide design service?",
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
        // borderWidth="border-2"
        // sectionClass="bg-white py-10"
        // containerClass="max-w-6xl mx-auto font-afacad"
        // titleClass="lg:text-[50px]  text-[20px] font-bold text-[#0C1152] uppercase"
        // titleContainerClass="text-center mb-12"
        // questionClass="text-[20px] font-bold"
        // answerClass="text-[20px] font-regular leading-relaxed"
        // buttonClass="w-full flex justify-between items-center p-6 text-left transition-colors"
        // answerContainerClass="p-6"
        // defaultOpenIndex={0}
      />
    </div>
  );
}

export default HowItWorks;
