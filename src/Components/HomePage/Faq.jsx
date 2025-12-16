import React, { useState } from 'react'

function Faq({ 
  faqData: customFaqData,
  borderWidth = "border",
  sectionClass = "bg-white py-8 md:py-12 px-4 md:px-8",
  containerClass = "max-w-6xl mx-auto",
  titleClass = "text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1152] uppercase",
  titleContainerClass = "text-center mb-8 md:mb-12",
  questionClass = "text-base md:text-lg lg:text-[20px] font-bold text-black pr-4",
  answerClass = "text-base md:text-lg lg:text-[20px] font-regular text-black leading-relaxed",
  buttonClass = "w-full flex justify-between items-center p-4 md:p-6 text-left transition-colors",
  answerContainerClass = "p-4 md:p-6",
  defaultOpenIndex = 0
}) {

    const defaultFaqData = [
        {
          id: 1,
          question: "How does 3D guided implant surgery improve outcomes?",
          answer: "3D guided implant surgery combines digital imaging, CAD/CAM planning, and advanced 3D printing technology to create surgical guides that enhance accuracy. This approach ensures implants are placed exactly as planned, minimizing surgical risks and supporting faster patient recovery.",
        },
        {
          id: 2,
          question: "How is a 3D printed dental implant guide created?",
          answer: "A 3D printed dental implant guide is created through a multi-step process: first, digital scans (CBCT and intraoral scans) are taken, then CAD/CAM software is used to design the guide based on the treatment plan, and finally, the guide is 3D printed using high-precision materials.",
        },
        {
          id: 3,
          question: "Are 3D printed surgical guides safe for patients?",
          answer: "Yes, 3D printed surgical guides are safe for patients. They are made from biocompatible materials that meet medical-grade standards and are sterilized before use. The guides are designed to enhance precision and reduce surgical risks.",
        },
        {
          id: 4,
          question: "How quickly can a dental practice receive a 3D printed surgical guide?",
          answer: "Typically, a dental practice can receive a 3D printed surgical guide within 5-7 business days after submitting the required scans and treatment plan. Rush orders may be available for urgent cases.",
        },
        {
          id: 5,
          question: "Can these guides handle complex or multiple implant cases?",
          answer: "Yes, 3D printed surgical guides are excellent for complex and multiple implant cases. They can accommodate full-arch restorations, multiple single implants, and cases with challenging anatomical considerations.",
        },
        {
          id: 6,
          question: "Do 3D printed implant surgical guides reduce surgery time?",
          answer: "Yes, 3D printed surgical guides significantly reduce surgery time by eliminating the need for manual measurements and adjustments during the procedure. The pre-planned guide allows for faster, more efficient implant placement.",
        },
        {
          id: 7,
          question: "Is special training required to use a 3D printed surgical guide?",
          answer: "Minimal training is required. Most dentists familiar with implant procedures can easily adapt to using 3D printed surgical guides. We provide comprehensive instructions and support to ensure successful implementation.",
        },
        {
          id: 8,
          question: "How does a 3D printed dental implant guide improve patient comfort?",
          answer: "3D printed guides reduce surgery time and minimize tissue trauma, leading to less post-operative discomfort. The precise placement also promotes better healing and faster recovery times.",
        },
        {
          id: 9,
          question: "What materials are used for 3D printed dental implant guides?",
          answer: "3D printed dental implant guides are typically made from medical-grade biocompatible resins or polymers that are sterilizable and meet FDA standards for surgical use. These materials are durable, precise, and safe for clinical applications.",
        },
      ];

    const faqData = customFaqData || defaultFaqData;
    const [openFAQ, setOpenFAQ] = useState(defaultOpenIndex);

    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };

  return (
    <section className={sectionClass}>
        <div className={containerClass}>
          <div className={titleContainerClass}>
            <h2 className={titleClass}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={faq.id}>
                <div className={`${borderWidth} border-black rounded-lg lg:rounded-full mb-2 bg-white`}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={buttonClass}
                  >
                    <span className={questionClass}>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {openFAQ === index && (
                  <div className={`${borderWidth} border-black rounded-lg lg:rounded-full px-3 bg-white`}>
                    <div className={answerContainerClass}>
                      <p className={answerClass}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Faq