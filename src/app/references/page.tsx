"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'

export default function References() {
    const { language } = useLanguage()

    const references = {
        zh: {
            title: "參考文獻",
            items: [
                {
                    id: 1,
                    citation: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research, 2(2), 140–154.",
                    link: "https://doi.org/10.1086/691462"
                },
                {
                    id: 2,
                    citation: "Santilli, M. (2024, November 8). How to stop overthinking: Causes and ways to Cope. Forbes.",
                    link: "https://www.forbes.com/health/mind/what-causes-overthinking-and-6-ways-to-stop/"
                }
            ]
        },
        en: {
            title: "References",
            items: [
                {
                    id: 1,
                    citation: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research, 2(2), 140–154.",
                    link: "https://doi.org/10.1086/691462"
                },
                {
                    id: 2,
                    citation: "Santilli, M. (2024, November 8). How to stop overthinking: Causes and ways to Cope. Forbes.",
                    link: "https://www.forbes.com/health/mind/what-causes-overthinking-and-6-ways-to-stop/"
                }
            ]
        }
    }

    const currentContent = references[language as keyof typeof references]

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-50 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-light text-center mb-12">
                        {currentContent.title}
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {currentContent.items.map((item) => (
                            <div key={item.id} id={`reference-${item.id}`} className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-800">
                                    {item.citation}
                                </p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-dark transition-colors mt-2 inline-block"
                                >
                                    {language === 'zh' ? '查看原文' : 'View Source'}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
} 