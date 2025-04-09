"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-light mb-6 text-gray-800">
              關於三分鐘呼吸空間
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              讓每個人都能在忙碌的生活中找到屬於自己的寧靜時刻
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">我們的理念</h2>
              <p className="text-gray-600 leading-relaxed">
                在這個快節奏的現代社會中，我們常常忽略了最重要的事情——與自己內在的連結。三分鐘呼吸空間正是為此而生，我們相信，只需要短短三分鐘的正念練習，就能幫助你重新找回平靜與專注。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">為什麼是三分鐘？</h2>
              <p className="text-gray-600 leading-relaxed">
                研究表明，即使是短暫的正念練習也能帶來顯著的效果。三分鐘是一個最佳的平衡點——足夠短，讓你能輕鬆地融入日常生活；同時又足夠長，能讓你真正沉浸在當下的體驗中。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">我們的承諾</h2>
              <p className="text-gray-600 leading-relaxed">
                我們承諾提供簡單易行的正念練習指導，幫助你在日常生活中培養正念習慣。無論你是正念新手還是有經驗的修行者，都能在這裡找到適合自己的練習方式。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 