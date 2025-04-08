"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-accent mb-4">
              關於我們
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              了解這個學術研究項目的背景和目的
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm mb-8"
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                項目背景
              </h2>
              <p className="text-gray-600 mb-4">
                這是一個由 CCI4900 畢業專題課程支持的學術研究項目，旨在探索短期冥想練習對大學生心理健康和學習效果的影響。
              </p>
              <p className="text-gray-600">
                通過提供簡單易行的三分鐘冥想練習，我們希望幫助學生培養正念意識，改善情緒管理能力，並提升學習效率。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm mb-8"
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                研究目標
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>評估短期冥想練習對學生情緒調節能力的影響</li>
                <li>研究正念練習與學業表現之間的關係</li>
                <li>探索適合大學生的冥想練習方式</li>
                <li>收集和分析冥想練習的數據，為未來研究提供參考</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                參與方式
              </h2>
              <p className="text-gray-600 mb-4">
                您可以通过以下方式参与这个研究项目：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>使用網站提供的冥想資源進行練習</li>
                <li>記錄您的冥想練習和情緒狀態</li>
                <li>分享您的練習體驗和建議</li>
              </ul>
              <p className="text-gray-600 mt-4">
                所有收集的數據都將匿名處理，僅用於學術研究目的。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
} 