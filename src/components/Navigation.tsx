"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
<<<<<<< HEAD
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'
=======
>>>>>>> fb1afd1

const Navigation: React.FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
<<<<<<< HEAD
  const { language } = useLanguage()

  const navItems = [
    { href: '/', label: { zh: '首頁', en: 'Home' } },
    { href: '/about', label: { zh: '關於', en: 'About' } },
    { href: '/benefits', label: { zh: '好處', en: 'Benefits' } },
    { href: '/meditation', label: { zh: '冥想', en: 'Meditation' } },
    { href: '/resources', label: { zh: '資源', en: 'Resources' } },
    { href: '/tracker', label: { zh: '追蹤', en: 'Tracker' } },
=======

  const navItems = [
    { name: '首頁', path: '/' },
    { name: '冥想好處', path: '/benefits' },
    { name: '冥想資源', path: '/resources' },
    { name: '關於我們', path: '/about' },
    { name: '冥想記錄', path: '/tracker' },
    { name: '參考文獻', path: '/references' }
>>>>>>> fb1afd1
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">三分鐘呼吸空間</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item) => (
              <Link
<<<<<<< HEAD
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
=======
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.path
>>>>>>> fb1afd1
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label[language]}
              </Link>
            ))}
          </div>

<<<<<<< HEAD
          <LanguageToggle />

=======
>>>>>>> fb1afd1
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">打開主選單</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
<<<<<<< HEAD
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium ${
                pathname === item.href
=======
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 text-base font-medium ${
                pathname === item.path
>>>>>>> fb1afd1
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
<<<<<<< HEAD
              {item.label[language]}
=======
              {item.name}
>>>>>>> fb1afd1
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation 