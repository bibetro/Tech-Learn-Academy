"use client";
import Image from "next/image";
import CourseCard from "./CourseCard";

export default function CourseSection() {
  const courses = [
    {
      title: "Web Development Fundamentals",
      instructor: "John Smith",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.8,
      students: 1234,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "Data Science Essentials",
      instructor: "Emily Brown",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.9,
      students: 2341,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "UX/UI Design Masterclass",
      instructor: "Sarah Wilson",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.7,
      students: 1876,
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Machine Learning Fundamentals",
      instructor: "Michael Chen",
      level: "Intermediate",
      duration: "14 weeks",
      rating: 4.9,
      students: 2198,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="pt-16 pb-12 relative bg-gray-200">
      {/* BOUNCE BOLL */}
      <Image
        src="/cb.png"
        alt="images"
        width={800}
        height={800}
        className="absolute top-[30%] animate-bounce"
      />

      <div className="w-[80%] pt-8 pb-8 mx-auto">
        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">
          Popular Courses
        </h1>
        <div className="md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {courses.map((item, key) => {
            return <CourseCard key={key} course={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
