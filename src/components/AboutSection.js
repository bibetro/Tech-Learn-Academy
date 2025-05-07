"use client";

import { FaArrowRight, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="pt-16 pb-16 bg-gray-50">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Trusted and Recognized
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
            Build Computer skills with experts.
          </h1>
          <p className="mt-4 text-gray-600">
            Gain hands-on experience with expert mentors and structured
            curriculum designed to boost your skills.
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-[#f2f2f2] text-opacity-5">
              01
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Personalized Learning
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-[#7a8c9b] text-opacity-60">
                Get one-on-one guidance with expert faculty and structured
                learning plans for better understanding.
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-[#f2f2f2] text-opacity-5">
              02
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Affordable Tuition
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-[#7a8c9b] text-opacity-60">
                Quality education at budget-friendly fees, making learning
                accessible for every student.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
  );
}