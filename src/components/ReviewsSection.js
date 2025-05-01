"use client";

import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ReviewsSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const reviews = [
    {
      url: "/r1.jpg",
      name: "Rahul Verma",
      role: "Web Developer",
      description:
        "An outstanding learning experience! The content is engaging, and the mentors are truly inspiring. A must for anyone serious about skill development!",
    },
    {
      url: "/r2.jpg",
      name: "Sophia Lee",
      role: "UI/UX Designer",
      description:
        "The hands-on approach in these courses helped me build a strong portfolio. The best investment in my career growth so far!",
    },
    {
      url: "/r3.jpg",
      name: "Ankit Sharma",
      role: "Machine Learning Engineer",
      description:
        "The well-structured courses and practical projects gave me the confidence to tackle real-world challenges in my job. Highly recommended!",
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-900 text-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        {/* TEXT CONTENT */}
        <div className="xl:col-span-1 mt-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <BsQuote className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold">What Our Students Say</h1>
          </div>
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.3rem] xl:leading-[3.6rem]">
            Empowering learners worldwide.
          </h1>
          {/* Description */}
          <p className="text-base text-white text-opacity-50 mt-6">
            Discover success stories from students who have transformed their
            careers through our expert-led courses.
          </p>
          {/* Info */}
          <div className="flex items-center space-x-10 mt-8">
            <p className="text-white font-bold text-5xl">99%</p>
            <p className="text-white">
              Students Report <br />
              Enhanced Career Growth
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="xl:col-span-2 bg-white rounded-lg overflow-hidden">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite={true}
            itemClass="item"
          >
            {reviews.map((item, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-wrap sm:flex-nowrap items-center space-x-10"
                >
                  <div className="h-full w-full">
                    <Image
                      src={item.url}
                      alt="review"
                      width={350}
                      height={350}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="mt-6 mb-7">
                    <div className="flex items-center">
                      <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                      <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                      <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                      <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                      <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                    </div>
                    <p className="mt-6 text-gray-800 w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold text-opacity-65">
                      {item.description}
                    </p>
                    <div className="mt-7">
                      <h1 className="text-xl text-black font-semibold">
                        {item.name}
                      </h1>
                      <p className="text-xl text-black text-opacity-60">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}