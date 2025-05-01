'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginButton from './LoginButton';
import ProfileDropdown from './ProfileDropdown';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    let timeout;
    const handleMouseMove = () => {
      setIsTransparent(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsTransparent(true), 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${isTransparent ? 'bg-transparent' : 'bg-dark-200/80 backdrop-blur-md shadow-lg'} transition-all duration-300`}>
      <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Tech Academy</span>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-dark-700 hover:text-white transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-12"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-dark-700 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          {true ? (
            <ProfileDropdown />
          ) : (
            <Link href="/login">
              <LoginButton />
            </Link>
          )}
        </motion.div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-200/95 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-dark-400">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Academy</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark-700 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-dark-700 hover:text-white hover:bg-dark-300 transition-colors touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {true ? (
                  <div className="px-3">
                    <ProfileDropdown />
                  </div>
                ) : (
                  <div className="px-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <LoginButton />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}