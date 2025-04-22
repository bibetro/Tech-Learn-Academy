'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaClock, FaStar, FaTrophy, FaChartLine, FaPencilAlt, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const upcomingExams = [
  {
    id: 1,
    title: 'JavaScript Advanced Concepts',
    date: '2024-02-20',
    duration: '2 hours',
    course: 'JavaScript Fundamentals'
  },
  {
    id: 2,
    title: 'Python Data Structures',
    date: '2024-02-25',
    duration: '1.5 hours',
    course: 'Python for Beginners'
  }
];

const attendanceData = [
  { month: 'Jan', attendance: 90 },
  { month: 'Feb', attendance: 85 },
  { month: 'Mar', attendance: 95 },
  { month: 'Apr', attendance: 88 },
  { month: 'May', attendance: 92 },
  { month: 'Jun', attendance: 87 }
];

const enrolledCourses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    progress: 75,
    nextLesson: 'Advanced Functions',
    lastAccessed: '2 days ago'
  },
  {
    id: 2,
    title: 'Python for Beginners',
    progress: 45,
    nextLesson: 'Data Structures',
    lastAccessed: '1 week ago'
  },
  {
    id: 3,
    title: 'React Development',
    progress: 90,
    nextLesson: 'State Management',
    lastAccessed: 'Yesterday'
  }
];

const achievements = [
  { id: 1, title: 'Fast Learner', description: 'Completed 5 lessons in one day', icon: FaStar },
  { id: 2, title: 'Code Master', description: 'Achieved 100% in JavaScript quiz', icon: FaTrophy },
  { id: 3, title: 'Consistent', description: '7-day learning streak', icon: FaClock }
];

const examProgress = [
  { id: 1, course: 'JavaScript Fundamentals', exam: 'Basic Concepts', score: 85, date: '2024-01-15' },
  { id: 2, course: 'Python for Beginners', exam: 'Introduction to Python', score: 92, date: '2024-01-20' },
  { id: 3, course: 'React Development', exam: 'Component Basics', score: 88, date: '2024-01-25' }
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/dashboard/user/courses" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'courses' ? 'bg-blue-500 text-white' : 'bg-dark-300 hover:bg-dark-400'}`}>
            <FaBook /> My Courses
          </Link>
          <Link href="/dashboard/user/exams" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'exams' ? 'bg-blue-500 text-white' : 'bg-dark-300 hover:bg-dark-400'}`}>
            <FaPencilAlt /> Exams
          </Link>
          <Link href="/dashboard/user/progress" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'progress' ? 'bg-blue-500 text-white' : 'bg-dark-300 hover:bg-dark-400'}`}>
            <FaChartLine /> Progress
          </Link>
          <Link href="/dashboard/user/settings" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'bg-dark-300 hover:bg-dark-400'}`}>
            <FaCog /> Settings
          </Link>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-200 rounded-lg shadow-lg p-6"
        >
          {activeTab === 'courses' && (
            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-dark-300 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{course.title}</h3>
                    <span className="text-sm text-dark-700">Last accessed: {course.lastAccessed}</span>
                  </div>
                  <div className="mb-2">
                    <div className="w-full bg-dark-400 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-dark-700">{course.progress}% Complete</span>
                      <span className="text-sm text-dark-700">Next: {course.nextLesson}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {activeTab === 'exams' && (
            <div className="space-y-6">
              <div className="bg-dark-300 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Exam Progress</h3>
                <div className="space-y-4">
                  {examProgress.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{exam.course}</p>
                        <p className="text-sm text-dark-700">{exam.exam}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">{exam.score}%</p>
                        <p className="text-sm text-dark-700">{exam.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-300 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Upcoming Exams</h3>
                <div className="space-y-4">
                  {upcomingExams.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{exam.title}</p>
                        <p className="text-sm text-dark-700">{exam.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{exam.date}</p>
                        <p className="text-sm text-dark-700">{exam.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-dark-300 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Notifications</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span className="ml-2">Course updates</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span className="ml-2">Exam reminders</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span className="ml-2">New course recommendations</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Language Preference</label>
                  <select className="w-full p-2 bg-dark-400 rounded border border-dark-500 focus:outline-none focus:border-blue-500">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time Zone</label>
                  <select className="w-full p-2 bg-dark-400 rounded border border-dark-500 focus:outline-none focus:border-blue-500">
                    <option>UTC-05:00 Eastern Time</option>
                    <option>UTC-06:00 Central Time</option>
                    <option>UTC-07:00 Mountain Time</option>
                    <option>UTC-08:00 Pacific Time</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}