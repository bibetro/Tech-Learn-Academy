'use client';
import { motion } from 'framer-motion';
import { FaStar, FaTrophy, FaClock, FaChartLine } from 'react-icons/fa';

const achievements = [
  { id: 1, title: 'Fast Learner', description: 'Completed 5 lessons in one day', icon: FaStar },
  { id: 2, title: 'Code Master', description: 'Achieved 100% in JavaScript quiz', icon: FaTrophy },
  { id: 3, title: 'Consistent', description: '7-day learning streak', icon: FaClock }
];

const attendanceData = [
  { month: 'Jan', attendance: 90 },
  { month: 'Feb', attendance: 85 },
  { month: 'Mar', attendance: 95 },
  { month: 'Apr', attendance: 88 },
  { month: 'May', attendance: 92 },
  { month: 'Jun', attendance: 87 }
];

const learningStats = [
  { title: 'Total Learning Hours', value: '120', icon: FaClock },
  { title: 'Courses Completed', value: '5', icon: FaStar },
  { title: 'Average Score', value: '88%', icon: FaChartLine },
  { title: 'Achievements Earned', value: '12', icon: FaTrophy }
];

export default function Progress() {
  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Learning Progress</h1>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {learningStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-dark-700">{stat.title}</p>
                  <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-300 p-4 rounded-lg flex items-start gap-4"
              >
                <achievement.icon className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-dark-700">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Attendance Overview</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {attendanceData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: `${data.attendance}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full bg-blue-500 rounded-t-lg"
                style={{ height: `${data.attendance}%` }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">
                  {data.attendance}%
                </span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm">
                  {data.month}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}