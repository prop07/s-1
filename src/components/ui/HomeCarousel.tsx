"use client"
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";


type HomeCarouselProps = {
  slides: {
    image: string;
    alt: string;
  }[];
};

const HomeCarousel:React.FC<HomeCarouselProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused,nextSlide]);

  return (
    <div
      className="w-full  overflow-hidden group space-y-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides container */}
      <div
        className="flex relative max-h-[40vh]  transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 aspect-video relative "
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
            <div className=" absolute p-1 sm:p-2 bg-black opacity-80 inset-x-0 bottom-0">
              <p className=" text-white sm:text-lg font-semibold truncate">
                heading Lorem ipsum dolor sit
              </p>
              <p className=" text-white  text-ellipsis line-clamp-1 sm:line-clamp-2 ">
                random shit Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Enim possimus laudantium quasi dolorum vero facilis
                officia velit et reprehenderit, perspiciatis, ratione est
                distinctio eius recusandae omnis sunt provident nostrum! Facilis
                quidem repellendus ut. Ad hic adipisci dignissimos perspiciatis
                rerum illum at quo dolorem, aliquam qui, voluptatem similique
                error quod fuga.
              </p>
            </div>
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/95 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/95 transition-colors duration-300"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {/* Indicators */}
      <div className=" flex gap-1 px-2">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center">
            <Image
            width={500}
            height={500}
              src={slide.image}
              onClick={() => goToSlide(index)}
              className={` w-28 cursor-pointer ${
                index === activeIndex && " border-2 border-sky-500"
              } `}
              alt={"hello"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
