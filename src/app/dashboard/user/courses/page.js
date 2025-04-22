'use client';
import { motion } from 'framer-motion';
import { FaBook, FaClock } from 'react-icons/fa';

const enrolledCourses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    progress: 75,
    nextLesson: 'Advanced Functions',
    lastAccessed: '2 days ago',
    description: 'Learn the core concepts of JavaScript programming.',
    totalLessons: 24,
    completedLessons: 18
  },
  {
    id: 2,
    title: 'Python for Beginners',
    progress: 45,
    nextLesson: 'Data Structures',
    lastAccessed: '1 week ago',
    description: 'Master Python programming from scratch.',
    totalLessons: 20,
    completedLessons: 9
  },
  {
    id: 3,
    title: 'React Development',
    progress: 90,
    nextLesson: 'State Management',
    lastAccessed: 'Yesterday',
    description: 'Build modern web applications with React.',
    totalLessons: 30,
    completedLessons: 27
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Courses</h1>

        <div className="space-y-6">
          {enrolledCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-dark-700 mb-4">{course.description}</p>
                </div>
                <span className="text-sm text-dark-700 flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  Last accessed: {course.lastAccessed}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-dark-700">
                    Progress: {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                  <span className="text-sm text-dark-700">{course.progress}% Complete</span>
                </div>
                <div className="w-full bg-dark-400 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-dark-700">
                  <span className="font-medium">Next Lesson:</span> {course.nextLesson}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Continue Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}