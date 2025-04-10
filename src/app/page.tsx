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
                                        href="/meditation"
                                        className="inline-block bg-primary text-white px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg"
                                        data-name="start-button"
                                    >
                                        開始冥想
                                    </a>
                                    <a 
                                        href="/about"
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
                {/* Origin Story Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            專案起源 | Project Origin
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg text-gray-600 mb-4">
                                在這個數位時代，我們常常發現自己被智能手機和無盡的通知所困擾。這個專案源於一個個人經歷：在尋找生命意義和內在平靜的過程中，發現了三分鐘呼吸空間這個簡單而強大的練習方法。
                            </p>
                            <p className="text-lg text-gray-600">
                                In this digital age, we often find ourselves trapped by smartphones and endless notifications. This project emerged from a personal journey: discovering the simple yet powerful practice of the three-minute breathing space while searching for life's meaning and inner peace.
                            </p>
                        </div>
                    </div>
                    
                    {/* Research Findings Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                研究發現 | Research Findings
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-600 mb-2">
                                        根據 Ward 等人（2017）的研究：
                                    </p>
                                    <p className="text-gray-800">
                                        智能手機的存在會顯著降低認知能力，即使手機處於關機狀態，也會佔用寶貴的認知資源。
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        According to Ward et al. (2017):
                                    </p>
                                    <p className="text-gray-800">
                                        The mere presence of smartphones reduces cognitive capacity, even when the device is turned off, consuming valuable cognitive resources.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                最新研究 | Latest Research
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-600 mb-2">
                                        Santilli 和 Spann（2024）發現：
                                    </p>
                                    <p className="text-gray-800">
                                        短暫的正念練習可以顯著改善注意力和情緒調節能力，特別是在面對數位干擾時。
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Santilli & Spann (2024) found:
                                    </p>
                                    <p className="text-gray-800">
                                        Brief mindfulness practices can significantly improve attention and emotional regulation, particularly when facing digital distractions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
