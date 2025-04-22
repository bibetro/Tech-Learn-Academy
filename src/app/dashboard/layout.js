'use client';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaBook, FaUsers, FaChartBar, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';

const adminMenuItems = [
  { name: 'Overview', icon: FaHome, path: '/dashboard/admin' },
  { name: 'Courses', icon: FaBook, path: '/dashboard/admin/courses' },
  { name: 'Users', icon: FaUsers, path: '/dashboard/admin/users' },
  { name: 'Reports', icon: FaChartBar, path: '/dashboard/admin/reports' },
  { name: 'Exams', icon: FaClipboardList, path: '/dashboard/admin/exams' },
  { name: 'Settings', icon: FaCog, path: '/dashboard/admin/settings' },
];

const userMenuItems = [
  { name: 'Overview', icon: FaHome, path: '/dashboard/user' },
  { name: 'My Courses', icon: FaBook, path: '/dashboard/user/courses' },
  { name: 'My Exams', icon: FaClipboardList, path: '/dashboard/user/exams' },
  { name: 'Progress', icon: FaChartBar, path: '/dashboard/user/progress' },
  { name: 'Settings', icon: FaCog, path: '/dashboard/user/settings' },
];

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname.includes('/admin');
  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <div className="flex min-h-screen bg-dark-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 250 }}
        animate={{ width: isCollapsed ? 80 : 250 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen bg-dark-200 shadow-lg z-10"
      >
        <div className="flex flex-col h-full py-6">
          {/* Logo/Brand */}
          <div className="px-4 mb-8">
            <h1 className={`font-bold text-xl transition-opacity ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              {isAdmin ? 'Admin Panel' : 'Dashboard'}
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 pt-8">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center px-4 py-3 transition-colors ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-dark-300'}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className={`ml-3 transition-opacity ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="px-4">
            <button
              className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-dark-300 rounded transition-colors"
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              <FaSignOutAlt className="w-5 h-5" />
              <span className={`ml-3 transition-opacity ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
                Logout
              </span>
            </button>
          </div>

          {/* Collapse Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-dark-300 rounded-full p-1 hover:bg-dark-400 transition-colors"
          >
            <svg
              className={`w-4 h-4 transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all ${isCollapsed ? 'ml-20' : 'ml-64'}`}
      >
        {children}
      </main>
    </div>
  );
}