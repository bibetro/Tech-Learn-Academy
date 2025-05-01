"use client";
import Image from "next/image";
import { FaStar, FaUserGraduate, FaClock, FaSignal } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function CourseCard({ course }) {
  return (
    <Tilt>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
        {/* Course Image */}
        <div className="relative h-48">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Course Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {course.title}
          </h3>
          
          {/* Instructor */}
          <div className="flex items-center mb-4">
            <FaUserGraduate className="text-gray-500 mr-2" />
            <span className="text-gray-600">{course.instructor}</span>
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Level */}
            <div className="flex items-center">
              <FaSignal className="text-blue-500 mr-2" />
              <span className="text-sm text-gray-600">{course.level}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center">
              <FaClock className="text-green-500 mr-2" />
              <span className="text-sm text-gray-600">{course.duration}</span>
            </div>
          </div>

          {/* Rating and Students */}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-gray-700 font-medium">{course.rating}</span>
            </div>
            <span className="text-sm text-gray-500">
              {course.students.toLocaleString()} students
            </span>
          </div>
        </div>
      </div>
    </Tilt>
  );
}