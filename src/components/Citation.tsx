"use client"

import { useLanguage } from '@/contexts/LanguageContext'

type CitationProps = {
    number: number
    className?: string
}

export default function Citation({ number, className = '' }: CitationProps) {
    const { language } = useLanguage()

    const references = {
        zh: {
            1: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research, 2(2), 140–154.",
            2: "Santilli, M. (2024, November 8). How to stop overthinking: Causes and ways to Cope. Forbes."
        },
        en: {
            1: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research, 2(2), 140–154.",
            2: "Santilli, M. (2024, November 8). How to stop overthinking: Causes and ways to Cope. Forbes."
        }
    }

    return (
        <a
            href={`#reference-${number}`}
            className={`text-primary hover:text-primary-dark transition-colors ${className}`}
            aria-label={`Reference ${number}`}
        >
            [{number}]
        </a>
    )
} 