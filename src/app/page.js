'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaStar, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';

const popularCourses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Master the basics of web development with HTML, CSS, and JavaScript',
    students: 1234,
    rating: 4.8,
    image: '/course1.svg'
  },
  {
    id: 2,
    title: 'Advanced React Development',
    description: 'Build modern web applications with React and its ecosystem',
    students: 987,
    rating: 4.9,
    image: '/course2.svg'
  },
  {
    id: 3,
    title: 'Python Programming',
    description: 'Learn Python programming from scratch to advanced concepts',
    students: 2345,
    rating: 4.7,
    image: '/course3.svg'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Software Developer',
    content: 'The courses here are incredibly well-structured and practical. I learned more in 3 months than I did in a year of self-study.',
    rating: 5
  }
];

const stats = [
  { label: 'Active Students', value: '10K+', icon: FaUsers },
  { label: 'Total Courses', value: '100+', icon: FaGraduationCap },
  { label: 'Success Rate', value: '95%', icon: FaStar },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Best online platform for education
            </h1>
            <p className="text-lg md:text-xl text-dark-700 mb-8">
              Online learning wherever and whenever. Access world-class education at your fingertips.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/courses" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Browse Courses
              </Link>
              <Link href="/signup" className="bg-dark-200 text-dark-700 px-8 py-3 rounded-lg hover:bg-dark-300 transition-colors">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center gap-4 p-6 bg-dark-300 rounded-lg"
              >
                <stat.icon className="w-8 h-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-dark-700">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-200 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative pt-[60%] bg-dark-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaLaptopCode className="w-16 h-16 text-blue-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-dark-700 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-dark-700" />
                      <span className="text-dark-700">{course.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted by genius people</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-300 p-6 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-dark-700 mb-4">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-dark-700">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-200 rounded-lg overflow-hidden"
              >
                <div className="relative pt-[60%] bg-dark-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaLaptopCode className="w-12 h-12 text-blue-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Understanding Modern Web Development</h3>
                  <p className="text-dark-700">Explore the latest trends and best practices in web development...</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-dark-700 mb-8">Get the latest updates and exclusive offers directly in your inbox.</p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
