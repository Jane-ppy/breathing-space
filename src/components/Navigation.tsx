"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageToggle from './LanguageToggle'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: '首頁', path: '/' },
    { name: '冥想好處', path: '/benefits' },
    { name: '冥想資源', path: '/resources' },
    { name: '關於我們', path: '/about' },
    { name: '冥想記錄', path: '/tracker' },
    { name: '參考文獻', path: '/references' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-light text-gray-800 hover:text-primary transition-colors">
              三分鐘呼吸空間
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                關於我們
              </Link>
              <Link href="/benefits" className="text-gray-600 hover:text-primary transition-colors">
                好處
              </Link>
              <Link href="/meditation" className="text-gray-600 hover:text-primary transition-colors">
                冥想
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-primary transition-colors">
                資源
              </Link>
              <Link href="/tracker" className="text-gray-600 hover:text-primary transition-colors">
                追蹤
              </Link>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navigation 