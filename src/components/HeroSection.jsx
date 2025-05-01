"use client";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

export default function HeroSection() {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-indigo-950 overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* HERO TEXT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4.5rem] text-white">
              Smart Learning for a Digital Future.
            </h1>
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              Empower your future with high-quality Computer education. Join our
              expert-led courses and excel in academics, programming, and
              beyond.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <Link
                href="/courses"
                className="button_hero_section bg-green-700 hover:bg-green-900"
              >
                Get Started
              </Link>
              <button className="button_hero_section bg-yellow-700 hover:bg-yellow-900">
                Learn More
              </button>
            </div>
            <div className="flex items-center flex-wrap space-x-16 mt-8">
              <div>
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
                  260+
                </p>
                <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg" />
                <p className="md:text-lg text-sm text-white text-opacity-70">
                  Tutors
                </p>
              </div>
              <div>
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
                  75+
                </p>
                <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg" />
                <p className="md:text-lg text-sm text-white text-opacity-70">
                  Students
                </p>
              </div>
              <div>
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
                  35+
                </p>
                <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg" />
                <p className="md:text-lg text-sm text-white text-opacity-70">
                  Courses
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}

          <Tilt>
            <div className="hidden lg:block">
              <Image
                src="/hero.png"
                width={800}
                height={600}
                alt="Hero"
                priority
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
