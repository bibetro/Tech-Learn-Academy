'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaSearch, FaEdit, FaTrash, FaUserCog } from 'react-icons/fa';

const demoUsersData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Student',
    status: 'Active',
    enrolledCourses: 3,
    lastActive: '2024-02-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Instructor',
    status: 'Active',
    enrolledCourses: 0,
    lastActive: '2024-02-14'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Student',
    status: 'Inactive',
    enrolledCourses: 2,
    lastActive: '2024-02-10'
  }
];

export default function UserManagement() {
  const [users, setUsers] = useState(demoUsersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Student',
    status: 'Active'
  });

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = {
      ...newUser,
      id: users.length + 1,
      enrolledCourses: 0,
      lastActive: new Date().toISOString().split('T')[0]
    };
    setUsers([...users, user]);
    setShowAddModal(false);
    setNewUser({ name: '', email: '', role: 'Student', status: 'Active' });
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
          <h1 className="text-3xl font-bold">User Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            <FaUserPlus /> Add New User
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-700" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-200 border border-dark-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Users Table */}
        <div className="bg-dark-200 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-300">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-center">Role</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Enrolled Courses</th>
                <th className="py-3 px-4 text-center">Last Active</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-dark-300 hover:bg-dark-300 transition-colors">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-sm ${user.role === 'Instructor' ? 'bg-purple-500/20 text-purple-500' : 'bg-blue-500/20 text-blue-500'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-sm ${user.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">{user.enrolledCourses}</td>
                  <td className="py-3 px-4 text-center">{user.lastActive}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-blue-500 hover:text-blue-600 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-600 mr-2">
                      <FaTrash />
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <FaUserCog />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-200 p-6 rounded-lg w-full max-w-md"
            >
              <h2 className="text-xl font-semibold mb-4">Add New User</h2>
              <form onSubmit={handleAddUser}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    value={newUser.status}
                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                    className="w-full p-2 bg-dark-300 rounded border border-dark-400 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
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
                    Add User
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