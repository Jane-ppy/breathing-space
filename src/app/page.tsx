"use client"

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Benefits from '@/components/Benefits'
import Navigation from '@/components/Navigation'
import Infographic from '@/components/Infographic'
import Citation from '@/components/Citation'

export default function Home() {
    const { language } = useLanguage()

    const content = {
        zh: {
            title: "三分鐘呼吸空間",
            subtitle: "Three-Minute Breathing Space",
            description: "活在當下，專注呼吸，讓心靈找到平靜",
            startButton: "開始冥想",
            learnMore: "了解更多",
            originTitle: "專案起源 | Project Origin",
            originText: "在這個數位時代，我們常常被智能手機和無盡的通知所困擾。「三分鐘呼吸空間」源於對現代人注意力分散的關注，調查顯示大多數人因習慣性查看手機而無法活在當下，錯過真實連結。這個簡單而強大的正念練習，旨在幫助人們從數位干擾中抽離，重新體驗生命的真實與豐富。",
            infographicTitle: "數位時代的注意力挑戰",
            journeyTitle: "開始您的冥想之旅",
            journeyText: "花一點時間停下腳步，專注呼吸，與當下時刻建立連結。只需三分鐘，就能轉變您的心境。"
        },
        en: {
            title: "Three-Minute Breathing Space",
            subtitle: "三分鐘呼吸空間",
            description: "Live in the present, focus on breathing, and find peace of mind",
            startButton: "Start Meditation",
            learnMore: "Learn More",
            originTitle: "Project Origin | 專案起源",
            originText: "In this digital age, we often find ourselves disturbed by smartphones and endless notifications. 'Three-Minute Breathing Space' originated from concerns about modern attention fragmentation, as surveys show most people cannot live in the present due to habitual phone checking, missing authentic connections. This simple yet powerful mindfulness practice aims to help people detach from digital distractions and rediscover the authenticity and richness of life.",
            infographicTitle: "Attention Challenges in the Digital Age",
            journeyTitle: "Start Your Meditation Journey",
            journeyText: "Take a moment to pause, focus on your breath, and connect with the present moment. Just three minutes can transform your state of mind."
        }
    }

    const currentContent = content[language as keyof typeof content]

    return (
        <>
            <Navigation />
            <div data-name="home-page" className="bg-gradient-to-b from-gray-50 to-white">
                <section className="hero pt-24 pb-32" data-name="hero-section">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800">
                                {currentContent.title}
                                <span className="block text-2xl md:text-3xl mt-3 text-gray-500 font-light">
                                    {currentContent.subtitle}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
                                {currentContent.description}
                            </p>
                            <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center items-center">
                                <a 
                                    href="/meditation"
                                    className="inline-block bg-primary text-white px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg"
                                    data-name="start-button"
                                >
                                    {currentContent.startButton}
                                </a>
                                <a 
                                    href="/about"
                                    className="inline-block border-2 border-gray-300 text-gray-600 px-10 py-4 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:scale-105 text-lg"
                                >
                                    {currentContent.learnMore}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 container mx-auto px-4" data-name="origin-section">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            {currentContent.originTitle}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {currentContent.originText}
                        </p>
                    </motion.div>
                </section>

                <Infographic />

                <Benefits />

                <section className="py-24 container mx-auto px-4" data-name="journey-section">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-5xl text-primary">✧</span>
                        <h2 className="text-3xl md:text-4xl mt-8 mb-6 font-light text-gray-800">
                            {currentContent.journeyTitle}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {currentContent.journeyText}
                        </p>
                    </motion.div>
                </section>
            </div>
        </>
    )
}
