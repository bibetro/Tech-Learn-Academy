"use client";

import Image from "next/image";
import { FaAward } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function FeaturesSection() {
  return (
    <div className="pt-16 pb-16">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto">
        {/* IMAGE */}
        <Tilt>
          <div>
            <Image
              src="/f.png"
              alt="Learning Experience"
              width={1000}
              height={1000}
            />
          </div>
        </Tilt>
        {/* TEXT */}
        <div>
          {/* Sub heading */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Elevate Your Learning Journey
            </h1>
          </div>
          {/* MAIN heading */}
          <h1 className="text-2xl sm:text-3xl md:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
            Unlock potential with expert guidance.
          </h1>
          <div className="mt-8 mb-6">
            <h1 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
              Learn from Industry Experts
            </h1>
            <p className="text-sm md:text-base text-black text-opacity-70 mt-4">
              Gain insights from top professionals with hands-on experience in
              various domains. Stay ahead with up-to-date and practical
              knowledge.
            </p>
          </div>
          <div className="mt-8 mb-6">
            <h1 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
              Enhance Your Skills with Practical Learning
            </h1>
            <p className="text-sm md:text-base text-black text-opacity-70 mt-4">
              Our courses are designed to help you apply what you learn in
              real-world scenarios. Build projects, test your skills, and grow
              your expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}