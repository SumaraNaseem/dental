import React, { useState, useEffect, useRef } from 'react'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideOffset, setSlideOffset] = useState(100);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const containerRef = useRef(null);
    const flexContainerRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

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
          id: 1,
          name: "DR. MICHAEL R.",
          rating: 5,
          text: "These surgical guides have completely transformed the way I perform implant surgeries! Knowing they are designed by a clinical dentist with over 24 years of experience gives me total confidence in their precision and reliability!",
        },
        {
          id: 3,
          name: "DR. JAMES T.",
          rating: 5,
          text: "Absolutely game-changing! The guides are incredibly precise, and the customer service is outstanding. Having a designer who truly understands the clinical challenges we face sets this service apart from the rest!",
        },
      ];

    const getMaxIndex = () => {
      if (window.innerWidth >= 1024) {
        // Large screen: show 3 cards, max index = total - 3
        return Math.max(0, testimonials.length - 3);
      }
      // Mobile: show 1 card, max index = total - 1
      return testimonials.length - 1;
    };

    const nextSlide = () => {
      const maxIndex = getMaxIndex();
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    };

    const prevSlide = () => {
      const maxIndex = getMaxIndex();
      setCurrentIndex((prevIndex) => {
        if (prevIndex <= 0) {
          return maxIndex; // Loop to end
        }
        return prevIndex - 1;
      });
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    // Touch/Swipe handlers for mobile
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartX.current || !touchEndX.current) return;
      
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50; // Minimum distance for swipe

      if (distance > minSwipeDistance) {
        // Swipe left - next slide
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        // Swipe right - previous slide
        prevSlide();
      }

      // Reset
      touchStartX.current = 0;
      touchEndX.current = 0;
    };

    useEffect(() => {
      const updateSlideOffset = () => {
        const isLarge = window.innerWidth >= 1024;
        setIsLargeScreen(isLarge);
        
        if (isLarge && containerRef.current && flexContainerRef.current) {
          // Large screen: show 3 cards, slide by 1 card
          const container = containerRef.current;
          const flexContainer = flexContainerRef.current;
          const cards = flexContainer.querySelectorAll('div');
          
          if (cards.length > 0) {
            const containerRect = container.getBoundingClientRect();
            const flexContainerRect = flexContainer.getBoundingClientRect();
            const firstCardRect = cards[0].getBoundingClientRect();
            
            // Use flex container width for accurate calculation
            const flexContainerWidth = flexContainerRect.width;
            const cardWidth = firstCardRect.width;
            const gap = 32; // 2rem = 32px (md:gap-8)
            
            // Slide by one card + one gap, relative to container width
            const slideDistance = cardWidth + gap;
            const containerWidth = containerRect.width;
            const slidePercentage = (slideDistance / containerWidth) * 100;
            setSlideOffset(slidePercentage);
          } else {
            // Fallback: calculate based on container width
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const gap = 32;
            const totalGapSpace = gap * 2; // 2 gaps between 3 cards
            const cardWidth = (containerWidth - totalGapSpace) / 3;
            const slideDistance = cardWidth + gap;
            const slidePercentage = (slideDistance / containerWidth) * 100;
            setSlideOffset(slidePercentage);
          }
        } else {
          // Mobile: show 1 card, slide by exactly 100% (no gap on mobile)
          setSlideOffset(100);
        }
      };

      // Multiple attempts to ensure DOM is ready
      const timeoutId1 = setTimeout(updateSlideOffset, 200);
      const timeoutId2 = setTimeout(updateSlideOffset, 500);
      const timeoutId3 = setTimeout(updateSlideOffset, 800);
      window.addEventListener('resize', updateSlideOffset);
      return () => {
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
        window.removeEventListener('resize', updateSlideOffset);
      };
    }, [testimonials.length]);
      
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 ">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0C1152] uppercase">
              TESTIMONIALS FROM SATISFIED DENTISTS
            </h2>
          </div>

          <div className="relative">

            <button 
              onClick={prevSlide}
              className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full bg-transparent border-2 border-[#0C1152] items-center justify-center transition-colors hover:bg-[#0C1152] hover:text-white cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#0C1152]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div 
              className="overflow-hidden px-0 md:px-6" 
              ref={containerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                ref={flexContainerRef}
                className="flex transition-transform duration-500 ease-in-out gap-0 md:gap-8 cursor-grab active:cursor-grabbing"
                style={{ 
                  transform: `translateX(-${currentIndex * slideOffset}%)`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={`${testimonial.id}-${index}`} 
                    className="w-full min-w-full lg:min-w-0 lg:w-[calc((100%-4rem)/3)] flex-shrink-0 bg-[#0C1152] border border-blue-400/30 rounded-lg py-6 md:py-8 px-4 md:px-[26px] shadow-lg text-center"
                  >
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
                ))}
              </div>
            </div>
            <button 
              onClick={nextSlide}
              className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full bg-transparent border-2 border-[#0C1152] items-center justify-center transition-colors hover:bg-[#0C1152] hover:text-white cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#0C1152]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  index === currentIndex 
                    ? 'bg-[#0C1152]' 
                    : 'border border-[#0C1152] hover:bg-[#0C1152]/50'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonials