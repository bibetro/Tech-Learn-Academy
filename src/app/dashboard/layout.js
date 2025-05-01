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
    <div className="flex min-h-screen bg-dark-100 relative overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? '60px' : '250px',
          x: isCollapsed ? '-100%' : '0',
          opacity: isCollapsed ? 0 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-screen bg-dark-200 shadow-lg z-20 md:relative md:translate-x-0 md:opacity-100"
      >
        <div className="flex flex-col h-full py-6 overflow-hidden">
          {/* Logo/Brand */}
          <div className="px-4 mb-8">
            <h1 className={`font-bold text-lg md:text-xl transition-opacity text-center md:text-left ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              {isAdmin ? 'Admin Panel' : 'Dashboard'}
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 pt-8 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center px-4 py-3 transition-colors rounded-lg touch-manipulation ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-dark-300'}`}
                    >
                      <item.icon className="w-6 h-6 md:w-5 md:h-5" />
                      <span className={`ml-3 transition-opacity text-sm md:text-base ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
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
              className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-dark-300 rounded-lg transition-colors touch-manipulation"
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              <FaSignOutAlt className="w-6 h-6 md:w-5 md:h-5" />
              <span className={`ml-3 transition-opacity text-sm md:text-base ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
                Logout
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="fixed top-4 right-4 z-50 md:absolute md:-right-3 md:top-1/2 md:transform md:-translate-y-1/2 bg-dark-300 rounded-full p-2 md:p-1.5 hover:bg-dark-400 transition-colors touch-manipulation shadow-lg"
            aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
          >
            <svg
              className={`w-6 h-6 md:w-5 md:h-5 transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
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
        className={`flex-1 transition-all duration-300 p-4 md:p-6 ${isCollapsed ? 'md:ml-[60px]' : 'md:ml-[250px]'} mt-[60px] md:mt-0`}
      >
        {children}
      </main>
    </div>
  );
}