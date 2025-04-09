"use client"

import { motion } from 'framer-motion'
import Benefits from '@/components/Benefits'
import Navigation from '@/components/Navigation'

export default function Home() {
    try {
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
                                    三分鐘呼吸空間
                                    <span className="block text-2xl md:text-3xl mt-3 text-gray-500 font-light">
                                        Three-Minute Breathing Space
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
                                    活在當下，專注呼吸，讓心靈找到平靜
                                </p>
                                <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center items-center">
                                    <a 
                                        href="/breathing-space/resources/"
                                        className="inline-block bg-primary text-white px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg"
                                        data-name="start-button"
                                    >
                                        開始冥想
                                    </a>
                                    <a 
                                        href="/breathing-space/about/"
                                        className="inline-block border-2 border-gray-300 text-gray-600 px-10 py-4 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:scale-105 text-lg"
                                    >
                                        了解更多
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <Benefits />

                    <section className="py-24 container mx-auto px-4" data-name="intro-section">
                        <motion.div 
                            className="max-w-3xl mx-auto text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-5xl text-primary">✧</span>
                            <h2 className="text-3xl md:text-4xl mt-8 mb-6 font-light text-gray-800">開始您的冥想之旅</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                花一點時間停下腳步，專注呼吸，與當下時刻建立連結。
                                <br className="hidden md:block" />
                                只需三分鐘，就能轉變您的心境。
                            </p>
                        </motion.div>
                    </section>

                    <section className="py-24 bg-gray-50" data-name="features-section">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                <motion.div 
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-4xl mb-6">🎯</div>
                                    <h3 className="text-xl mb-4 text-gray-800">專注當下</h3>
                                    <p className="text-gray-600">通過呼吸練習，培養正念覺知</p>
                                </motion.div>
                                <motion.div 
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <div className="text-4xl mb-6">🌊</div>
                                    <h3 className="text-xl mb-4 text-gray-800">放鬆身心</h3>
                                    <p className="text-gray-600">釋放壓力，找回內在平靜</p>
                                </motion.div>
                                <motion.div 
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="text-4xl mb-6">🌱</div>
                                    <h3 className="text-xl mb-4 text-gray-800">持續成長</h3>
                                    <p className="text-gray-600">建立日常習慣，滋養心靈</p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    } catch (error) {
        console.error('Home page error:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">抱歉，頁面載入時發生錯誤。請稍後再試。</p>
            </div>
        );
    }
}
