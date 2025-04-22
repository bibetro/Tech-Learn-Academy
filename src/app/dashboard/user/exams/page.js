'use client';
import { motion } from 'framer-motion';
import { FaPencilAlt, FaClock, FaTrophy } from 'react-icons/fa';

const upcomingExams = [
  {
    id: 1,
    title: 'JavaScript Advanced Concepts',
    date: '2024-02-20',
    duration: '2 hours',
    course: 'JavaScript Fundamentals',
    topics: ['Closures', 'Promises', 'Async/Await', 'Design Patterns']
  },
  {
    id: 2,
    title: 'Python Data Structures',
    date: '2024-02-25',
    duration: '1.5 hours',
    course: 'Python for Beginners',
    topics: ['Lists', 'Dictionaries', 'Sets', 'Trees and Graphs']
  }
];

const examProgress = [
  {
    id: 1,
    course: 'JavaScript Fundamentals',
    exam: 'Basic Concepts',
    score: 85,
    date: '2024-01-15',
    feedback: 'Good understanding of core concepts. Review DOM manipulation.'
  },
  {
    id: 2,
    course: 'Python for Beginners',
    exam: 'Introduction to Python',
    score: 92,
    date: '2024-01-20',
    feedback: 'Excellent work! Strong grasp of Python basics.'
  },
  {
    id: 3,
    course: 'React Development',
    exam: 'Component Basics',
    score: 88,
    date: '2024-01-25',
    feedback: 'Well done. Consider reviewing component lifecycle methods.'
  }
];

export default function Exams() {
  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Exams</h1>

        {/* Upcoming Exams */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Upcoming Exams</h2>
          <div className="space-y-6">
            {upcomingExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-300 p-6 rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{exam.title}</h3>
                    <p className="text-dark-700 mb-2">Course: {exam.course}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-blue-500">{exam.date}</p>
                    <p className="text-sm text-dark-700">{exam.duration}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {exam.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-dark-400 text-sm px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Prepare for Exam
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exam History */}
        <div className="bg-dark-200 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Exam History</h2>
          <div className="space-y-6">
            {examProgress.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-300 p-6 rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{exam.course}</h3>
                    <p className="text-sm text-dark-700">{exam.exam}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-green-500">{exam.score}%</p>
                    <p className="text-sm text-dark-700">{exam.date}</p>
                  </div>
                </div>
                <p className="text-sm text-dark-700 mt-2">
                  <span className="font-medium">Feedback:</span> {exam.feedback}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}