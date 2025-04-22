'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFileAlt, FaUsers, FaCheck } from 'react-icons/fa';

const demoExamsData = [
  {
    id: 1,
    title: 'JavaScript Fundamentals Final',
    course: 'JavaScript Fundamentals',
    duration: '2 hours',
    totalQuestions: 50,
    status: 'Active',
    submissions: 45,
    averageScore: 78
  },
  {
    id: 2,
    title: 'Python Basics Assessment',
    course: 'Python for Beginners',
    duration: '1.5 hours',
    totalQuestions: 40,
    status: 'Draft',
    submissions: 0,
    averageScore: 0
  },
  {
    id: 3,
    title: 'React Components Quiz',
    course: 'React Development',
    duration: '1 hour',
    totalQuestions: 30,
    status: 'Completed',
    submissions: 38,
    averageScore: 82
  }
];

export default function ExamManagement() {
  const [exams, setExams] = useState(demoExamsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExam, setNewExam] = useState({
    title: '',
    course: '',
    duration: '',
    totalQuestions: '',
    status: 'Draft'
  });

  const filteredExams = exams.filter(exam =>
    exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddExam = (e) => {
    e.preventDefault();
    const exam = {
      ...newExam,
      id: exams.length + 1,
      submissions: 0,
      averageScore: 0,
      totalQuestions: parseInt(newExam.totalQuestions)
    };
    setExams([...exams, exam]);
    setShowAddModal(false);
    setNewExam({
      title: '',
      course: '',
      duration: '',
      totalQuestions: '',
      status: 'Draft'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-500';
      case 'Draft':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Exam Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            <FaPlus /> Create New Exam
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-700" />
          <input
            type="text"
            placeholder="Search exams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-200 border border-dark-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Exam Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-dark-200 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <FaFileAlt className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-dark-700">Total Exams</p>
                <p className="text-2xl font-semibold">{exams.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-200 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <FaUsers className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-dark-700">Total Submissions</p>
                <p className="text-2xl font-semibold">
                  {exams.reduce((sum, exam) => sum + exam.submissions, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-200 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <FaCheck className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-sm text-dark-700">Average Score</p>
                <p className="text-2xl font-semibold">
                  {Math.round(
                    exams.reduce((sum, exam) => sum + exam.averageScore * exam.submissions, 0) /
                    exams.reduce((sum, exam) => sum + exam.submissions, 0)
                  )}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exams Table */}
        <div className="bg-dark-200 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-300">
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Course</th>
                <th className="py-3 px-4 text-center">Duration</th>
                <th className="py-3 px-4 text-center">Questions</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Submissions</th>
                <th className="py-3 px-4 text-center">Avg. Score</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredExams.map((exam) => (
                <tr key={exam.id} className="border-t border-dark-300 hover:bg-dark-300 transition-colors">
                  <td className="py-3 px-4">{exam.title}</td>
                  <td className="py-3 px-4">{exam.course}</td>
                  <td className="py-3 px-4 text-center">{exam.duration}</td>
                  <td className="py-3 px-4 text-center">{exam.totalQuestions}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-sm ${getStatusColor(exam.status)}`}>
                      {exam.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">{exam.submissions}</td>
                  <td className="py-3 px-4 text-center">{exam.averageScore}%</td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-blue-500 hover:text-blue-600 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Exam Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-200 p-6 rounded-lg w-full max-w-md"
            >
              <h2 className="text-xl font-semibold mb-4">Create New Exam</h2>
              <form onSubmit={handleAddExam}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Exam Title</label>
                  <input
                    type="text"
                    value={newExam.title}
                    onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Course</label>
                  <input
                    type="text"
                    value={newExam.course}
                    onChange={(e) => setNewExam({ ...newExam, course: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Duration</label>
                  <input
                    type="text"
                    value={newExam.duration}
                    onChange={(e) => setNewExam({ ...newExam, duration: e.target.value })}
                    placeholder="e.g., 2 hours"
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Total Questions</label>
                  <input
                    type="number"
                    value={newExam.totalQuestions}
                    onChange={(e) => setNewExam({ ...newExam, totalQuestions: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    value={newExam.status}
                    onChange={(e) => setNewExam({ ...newExam, status: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 bg-dark-300 rounded hover:bg-dark-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Create Exam
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}