"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

const Navigation: React.FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()

  const navItems = [
    { href: '/', label: { zh: '首頁', en: 'Home' } },
    { href: '/about', label: { zh: '關於', en: 'About' } },
    { href: '/benefits', label: { zh: '好處', en: 'Benefits' } },
    { href: '/meditation', label: { zh: '冥想', en: 'Meditation' } },
    { href: '/resources', label: { zh: '資源', en: 'Resources' } },
    { href: '/tracker', label: { zh: '追蹤', en: 'Tracker' } },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-primary transition-colors duration-200 ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.label[language]}
              </Link>
            ))}
          </div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navigation 