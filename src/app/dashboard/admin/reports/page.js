'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaChartBar, FaChartLine, FaChartPie, FaUsers, FaBook } from 'react-icons/fa';

const demoAnalytics = {
  courseEnrollments: [
    { month: 'Jan', count: 45 },
    { month: 'Feb', count: 62 },
    { month: 'Mar', count: 78 },
    { month: 'Apr', count: 95 },
    { month: 'May', count: 110 },
    { month: 'Jun', count: 132 }
  ],
  completionRates: [
    { course: 'JavaScript Fundamentals', rate: 78 },
    { course: 'Python for Beginners', rate: 65 },
    { course: 'React Development', rate: 82 },
    { course: 'Data Structures', rate: 70 },
    { course: 'Machine Learning', rate: 75 }
  ],
  userStats: {
    totalUsers: 1234,
    activeUsers: 890,
    newUsersThisMonth: 145,
    averageEngagement: '4.2 hours'
  },
  courseStats: {
    totalCourses: 45,
    activeCourses: 38,
    averageRating: 4.6,
    totalEnrollments: 3567
  }
};

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('overview');

  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
          <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            <FaDownload /> Export Report
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaUsers className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-dark-700">Total Users</p>
                <p className="text-2xl font-semibold">{demoAnalytics.userStats.totalUsers}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaBook className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-dark-700">Active Courses</p>
                <p className="text-2xl font-semibold">{demoAnalytics.courseStats.activeCourses}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaChartLine className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-sm text-dark-700">Avg. Engagement</p>
                <p className="text-2xl font-semibold">{demoAnalytics.userStats.averageEngagement}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FaChartBar className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-sm text-dark-700">Total Enrollments</p>
                <p className="text-2xl font-semibold">{demoAnalytics.courseStats.totalEnrollments}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enrollment Trends */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Enrollment Trends</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {demoAnalytics.courseEnrollments.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{
                    height: `${(data.count / Math.max(...demoAnalytics.courseEnrollments.map(d => d.count))) * 100}%`,
                    transition: 'height 0.5s ease-in-out'
                  }}
                ></div>
                <div className="mt-2 text-sm text-dark-700">{data.month}</div>
                <div className="text-sm font-medium">{data.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Completion Rates */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Course Completion Rates</h2>
          <div className="space-y-4">
            {demoAnalytics.completionRates.map((course) => (
              <div key={course.course} className="bg-dark-300 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>{course.course}</span>
                  <span className="font-medium">{course.rate}%</span>
                </div>
                <div className="w-full bg-dark-400 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all"
                    style={{ width: `${course.rate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Activity */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">User Activity Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-300 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Active Users</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-blue-500">{demoAnalytics.userStats.activeUsers}</p>
                  <p className="text-sm text-dark-700">Currently Active</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-green-500">+{demoAnalytics.userStats.newUsersThisMonth}</p>
                  <p className="text-sm text-dark-700">New This Month</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-300 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Course Statistics</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-purple-500">{demoAnalytics.courseStats.averageRating}</p>
                  <p className="text-sm text-dark-700">Average Rating</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-yellow-500">{demoAnalytics.courseStats.totalCourses}</p>
                  <p className="text-sm text-dark-700">Total Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}