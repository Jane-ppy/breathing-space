"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

const emotions = [
  { emoji: '😔', label: '非常不好' },
  { emoji: '😕', label: '不太好' },
  { emoji: '😐', label: '普通' },
  { emoji: '🙂', label: '不錯' },
  { emoji: '😊', label: '非常好' },
]

// 模擬數據
const mockStats = {
  totalMeditations: 1234,
  emotionDistribution: {
    '😔': 15,
    '😕': 25,
    '😐': 30,
    '🙂': 20,
    '😊': 10,
  },
}

export default function Tracker() {
  const [showModal, setShowModal] = useState(false)
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

  const handleLogMeditation = () => {
    setShowModal(true)
  }

  const handleEmotionSelect = (emoji: string) => {
    setSelectedEmotion(emoji)
    // 這裡可以添加記錄情緒的邏輯
    setTimeout(() => {
      setShowModal(false)
      setSelectedEmotion(null)
    }, 1000)
  }

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
              冥想記錄
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              記錄您的冥想練習和情緒狀態
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                總冥想次數
              </h2>
              <p className="text-4xl font-bold text-primary">
                {mockStats.totalMeditations}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                情緒分布
              </h2>
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(mockStats.emotionDistribution).map(([emoji, count]) => (
                  <div key={emoji} className="text-center">
                    <div className="text-2xl mb-1">{emoji}</div>
                    <div className="text-sm text-gray-600">{count}%</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <button
              onClick={handleLogMeditation}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-lg"
            >
              記錄冥想
            </button>
          </motion.div>
        </div>
      </div>

      {/* 情緒選擇模態框 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-lg max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-semibold text-accent mb-6 text-center">
              請選擇您現在的情緒狀態
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {emotions.map(({ emoji, label }) => (
                <button
                  key={emoji}
                  onClick={() => handleEmotionSelect(emoji)}
                  className={`p-4 rounded-lg transition-colors ${
                    selectedEmotion === emoji
                      ? 'bg-primary/10'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
} 