'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const demoCoursesData = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    instructor: 'John Doe',
    students: 156,
    rating: 4.8,
    status: 'Active'
  },
  {
    id: 2,
    title: 'Python for Beginners',
    instructor: 'Jane Smith',
    students: 124,
    rating: 4.6,
    status: 'Active'
  },
  {
    id: 3,
    title: 'React Development',
    instructor: 'Mike Johnson',
    students: 98,
    rating: 4.9,
    status: 'Draft'
  }
];

export default function CourseManagement() {
  const [courses, setCourses] = useState(demoCoursesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    status: 'Draft'
  });

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCourse = (e) => {
    e.preventDefault();
    const course = {
      ...newCourse,
      id: courses.length + 1,
      students: 0,
      rating: 0
    };
    setCourses([...courses, course]);
    setShowAddModal(false);
    setNewCourse({ title: '', instructor: '', status: 'Draft' });
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
          <h1 className="text-3xl font-bold">Course Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            <FaPlus /> Add New Course
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-700" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-200 border border-dark-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Courses Table */}
        <div className="bg-dark-200 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-300">
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Instructor</th>
                <th className="py-3 px-4 text-center">Students</th>
                <th className="py-3 px-4 text-center">Rating</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id} className="border-t border-dark-300 hover:bg-dark-300 transition-colors">
                  <td className="py-3 px-4">{course.title}</td>
                  <td className="py-3 px-4">{course.instructor}</td>
                  <td className="py-3 px-4 text-center">{course.students}</td>
                  <td className="py-3 px-4 text-center">{course.rating}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block px-2 py-1 rounded text-sm ${course.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}
                    >
                      {course.status}
                    </span>
                  </td>
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

        {/* Add Course Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-200 p-6 rounded-lg w-full max-w-md"
            >
              <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
              <form onSubmit={handleAddCourse}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Course Title</label>
                  <input
                    type="text"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Instructor</label>
                  <input
                    type="text"
                    value={newCourse.instructor}
                    onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    value={newCourse.status}
                    onChange={(e) => setNewCourse({ ...newCourse, status: e.target.value })}
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
                    Add Course
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