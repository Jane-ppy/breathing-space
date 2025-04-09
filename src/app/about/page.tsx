"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">
                            項目背景
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                                <h2 className="text-2xl font-light mb-4 text-gray-800">研究目的</h2>
                                <p className="text-gray-600 mb-6">
                                    這是一個由 CCI4900 畢業專題課程支持的學術研究項目，旨在探索短期冥想練習對大學生心理健康和學習效果的影響。
                                </p>
                                <p className="text-gray-600">
                                    通過提供簡單易行的三分鐘冥想練習，我們希望幫助學生培養正念意識，改善情緒管理能力，並提升學習效率。
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                                <h2 className="text-2xl font-light mb-4 text-gray-800">研究目標</h2>
                                <ul className="space-y-4 text-gray-600">
                                    <li>• 評估短期冥想練習對學生情緒調節能力的影響</li>
                                    <li>• 研究正念練習與學業表現之間的關係</li>
                                    <li>• 探索適合大學生的冥想練習方式</li>
                                    <li>• 收集和分析冥想練習的數據，為未來研究提供參考</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-8">
                                <h2 className="text-2xl font-light mb-4 text-gray-800">參與方式</h2>
                                <p className="text-gray-600 mb-4">
                                    您可以通過以下方式參與這個研究項目：
                                </p>
                                <ul className="space-y-4 text-gray-600">
                                    <li>• 使用網站提供的冥想資源進行練習</li>
                                    <li>• 記錄您的冥想練習和情緒狀態</li>
                                    <li>• 分享您的練習體驗和建議</li>
                                </ul>
                                <p className="text-gray-600 mt-6">
                                    所有收集的數據都將匿名處理，僅用於學術研究目的。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
} 