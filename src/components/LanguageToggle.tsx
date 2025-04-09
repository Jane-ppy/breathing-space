"use client"

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageToggle() {
    const [language, setLanguage] = useState('zh')
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    const toggleLanguage = () => {
        const newLanguage = language === 'zh' ? 'en' : 'zh'
        setLanguage(newLanguage)
        localStorage.setItem('language', newLanguage)
        router.refresh()
    }

    return (
        <button
            onClick={toggleLanguage}
            className="text-2xl hover:text-primary transition-colors"
            aria-label={language === 'zh' ? 'Switch to English' : '切換至中文'}
        >
            🌐
        </button>
    )
} 