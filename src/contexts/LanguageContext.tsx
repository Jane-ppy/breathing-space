"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type LanguageContextType = {
    language: string
    setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState('zh')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    const value = {
        language,
        setLanguage: (lang: string) => {
            setLanguage(lang)
            localStorage.setItem('language', lang)
        }
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
} 