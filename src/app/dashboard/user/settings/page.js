'use client';
import { motion } from 'framer-motion';
import { FaCog, FaBell, FaGlobe, FaLock, FaPalette } from 'react-icons/fa';

export default function Settings() {
  return (
    <div className="min-h-screen p-8 pt-24 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Notifications Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBell className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span>Course updates</span>
                <input type="checkbox" className="form-checkbox" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span>Exam reminders</span>
                <input type="checkbox" className="form-checkbox" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span>New course recommendations</span>
                <input type="checkbox" className="form-checkbox" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span>Achievement notifications</span>
                <input type="checkbox" className="form-checkbox" defaultChecked />
              </label>
            </div>
          </motion.div>

          {/* Language and Region */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGlobe className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Language and Region</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className="w-full p-2 bg-dark-400 rounded border border-dark-500 focus:outline-none focus:border-blue-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
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
          </motion.div>

          {/* Account Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Account Security</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Change Password
              </button>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Enable Two-Factor Authentication
              </button>
            </div>
          </motion.div>

          {/* Appearance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-dark-200 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaPalette className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select className="w-full p-2 bg-dark-400 rounded border border-dark-500 focus:outline-none focus:border-blue-500">
                  <option>Dark Theme</option>
                  <option>Light Theme</option>
                  <option>System Default</option>
                </select>
              </div>
              <label className="flex items-center justify-between">
                <span>Enable Animations</span>
                <input type="checkbox" className="form-checkbox" defaultChecked />
              </label>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}