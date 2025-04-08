"use client"
import { useState } from "react";

import React from "react";

type slidesType = {
  image: string;
  alt: string;
};

type HomeCarouselProps = {
  slides: slidesType[];
};

const slides = [
  {
    image: "https://picsum.photos/1000/600?random=1",
    alt: "First slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=2",
    alt: "Second slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=3",
    alt: "Second slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=4",
    alt: "Second slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=5",
    alt: "Second slide description",
  },
  // Add more slides as needed
];

const page = () => {
  return (
    <div>
      <HomeCarousel slides={slides} />
    </div>
  );
};

export default page;

const HomeCarousel:React.FC<HomeCarouselProps>  = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full  overflow-hidden group space-y-2">
      <p className=" sm:text-lg font-semibold tracking-wid mt-2">
        heading Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti, provident inventore similique ad consectetur
        fuga illo tenetur, autem atque omnis quae enim voluptatem. Atque
      </p>
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
            <img
              src={slide.image}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
            <div className=" absolute p-1 sm:p-2 bg-black opacity-80 inset-x-0 bottom-0">
              <p className=" text-white ">
                random shit Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Enim possimus laudantium quasi dolorum vero facilis
                officia velit et reprehenderit, perspiciatis, ratione est
                distinctio eius recusandae omnis sunt provident nostrum! Facilis
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Indicators */}
      <div className=" flex gap-1 px-2">
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              onClick={() => goToSlide(index)}
              className={` w-20 cursor-pointer ${
                index === activeIndex && " border-2 border-sky-500"
              } `}
            />
          </div>
        ))}
      </div>
      {/* news */}
      <div>
        <p className=" mb-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illo vero aspernatur animi totam, molestias maxime reprehenderit,
          doloribus illum tempore dicta beatae!
        </p>
        <p className=" mb-4">
          Curabitur sit amet magna quam. Praesent in libero vel turpis
          pellentesque egestas sit amet vel nunc. Nunc lobortis dui neque quis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          voluptatum, sint incidunt in vero aliquid velit. Quae, accusamus
          repellat corrupti aliquam molestiae vel eius accusantium quidem ipsum,
          voluptate doloribus quia delectus. Libero illo sunt sit sed accusamus
          quod culpa consequatur magni laudantium expedita nisi voluptatibus
          facilis, modi obcaecati nobis eum perspiciatis dicta doloribus quas?
          Inventore sed illo aspernatur consequuntur atque voluptatem vero
          adipisci accusamus saepe. Soluta tenetur totam delectus repudiandae
          odit ab eum vel praesentium quia voluptatem, neque enim ipsa quaerat
          quod iusto corrupti, accusamus officia aliquid nostrum magni
          distinctio et! Eaque placeat pariatur natus sint odio non beatae
          exercitationem.
        </p>
        <p className="">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem maiores non tenetur, earum amet quaerat facilis
          sapiente distinctio ex temporibus modi suscipit saepe consequuntur
          quae, obcaecati fuga? Officiis possimus, voluptatibus dignissimos
          reiciendis nulla, vitae odit earum omnis maxime modi accusamus commodi
          eveniet eaque culpa necessitatibus non optio. Ea quos temporibus sit
          dolore culpa, fugiat explicabo laudantium quidem earum aliquam
          blanditiis?
        </p>
      </div>
    </div>
  );
};