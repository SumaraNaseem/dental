import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Testimonials() {
    const testimonials = [
        {
          id: 1,
          name: "DR. MICHAEL R.",
          rating: 5,
          text: "These surgical guides have completely transformed the way I perform implant surgeries! Knowing they are designed by a clinical dentist with over 24 years of experience gives me total confidence in their precision and reliability!",
        },
        {
          id: 2,
          name: "DR. SARAH L.",
          rating: 4,
          text: "The accuracy of these guides is second to none! My surgeries are faster, my patients heal better, and the fact that they're created by a seasoned clinical dentist makes all the difference!",
        },
        {
          id: 3,
          name: "DR. JAMES T.",
          rating: 5,
          text: "Absolutely game-changing! The guides are incredibly precise, and the customer service is outstanding. Having a designer who truly understands the clinical challenges we face sets this service apart from the rest!",
        },
        {
          id: 4,
          name: "DR. SARAH L.",
          rating: 4,
          text: "The accuracy of these guides is second to none! My surgeries are faster, my patients heal better, and the fact that they're created by a seasoned clinical dentist makes all the difference!",
        },
        {
          id: 5,
          name: "DR. JAMES T.",
          rating: 5,
          text: "Absolutely game-changing! The guides are incredibly precise, and the customer service is outstanding. Having a designer who truly understands the clinical challenges we face sets this service apart from the rest!",
        },
        {
          id: 6,
          name: "DR. MICHAEL R.",
          rating: 5,
          text: "These surgical guides have completely transformed the way I perform implant surgeries! Knowing they are designed by a clinical dentist with over 24 years of experience gives me total confidence in their precision and reliability!",
        },
        {
          id: 7,
          name: "DR. JAMES T.",
          rating: 5,
          text: "Absolutely game-changing! The guides are incredibly precise, and the customer service is outstanding. Having a designer who truly understands the clinical challenges we face sets this service apart from the rest!",
        },
      ];

    // Custom arrow components
    const PrevArrow = ({ onClick }) => (
      <button
        onClick={onClick}
        className="hidden xl:flex absolute -left-7 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full bg-transparent border-2 border-[#0C1152] text-[#0C1152] items-center justify-center transition-all duration-300 hover:bg-[#0C1152] hover:text-white active:bg-[#0C1152] active:text-white cursor-pointer group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-white group-active:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );

    const NextArrow = ({ onClick }) => (
      <button
        onClick={onClick}
        className="hidden xl:flex absolute -right-7 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full bg-transparent border-2 border-[#0C1152] text-[#0C1152] items-center justify-center transition-all duration-300 hover:bg-[#0C1152] hover:text-white active:bg-[#0C1152] active:text-white cursor-pointer group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-white group-active:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );

    // Slick Slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ],
      appendDots: (dots) => (
        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {dots}
        </div>
      ),
    };
      
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 font-afacad">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1152] uppercase">
            TESTIMONIALS FROM SATISFIED DENTISTS
          </h2>
        </div>

        <div className="relative px-0 md:px-6">
          <style>{`
            .slick-dots {
              position: relative !important;
              bottom: auto !important;
              margin-top: 24px !important;
            }
            .slick-dots li {
              margin: 0 6px !important;
              width: 12px !important;
              height: 12px !important;
            }
            .slick-dots li button {
              width: 12px !important;
              height: 12px !important;
              padding: 0 !important;
            }
            .slick-dots li button:before {
              content: '' !important;
              width: 12px !important;
              height: 12px !important;
              border-radius: 50% !important;
              border: 1px solid #0C1152 !important;
              background: transparent !important;
              opacity: 1 !important;
            }
            .slick-dots li.slick-active button:before {
              background: #0C1152 !important;
              border-color: #0C1152 !important;
            }
            .slick-slide {
              padding: 0 8px;
            }
            .slick-list {
              margin: 0 -8px;
            }
            @media (min-width: 768px) {
              .slick-slide {
                padding: 0 16px;
              }
              .slick-list {
                margin: 0 -16px;
              }
            }
          `}</style>
          
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`}>
                <div className="bg-[#0C1152] border border-blue-400/30 rounded-lg py-6 md:py-8 px-4 md:px-[26px] shadow-lg text-center h-full md:h-[390px] lg:h-[450px] xl:h-[450px] 2xl:h-[450px]">
                  <h3 className="text-white font-bold text-xl md:text-2xl lg:text-[24px] mb-4 md:mb-6">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 mb-4 md:mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#FFC813] text-base md:text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-white text-base md:text-lg lg:text-[20px] font-regular !leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials