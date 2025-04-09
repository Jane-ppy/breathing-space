"use client"

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function Practice() {
  const [timeLeft, setTimeLeft] = useState(180) // 3分鐘 = 180秒
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(0)

  const guidanceText = [
    "找一個舒適的坐姿，讓身體放鬆...",
    "深深地吸一口氣，慢慢地呼出...",
    "感受當下的呼吸，不需要改變什麼...",
    "如果心思飄走了，溫柔地把注意力帶回呼吸...",
    "繼續保持覺察，直到練習結束..."
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 0) {
            if (interval) clearInterval(interval)
            return 0
          }
          return time - 1
        })

        // 每36秒更換一次引導文字
        const newPhase = Math.floor((180 - timeLeft) / 36)
        setCurrentPhase(newPhase < guidanceText.length ? newPhase : guidanceText.length - 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, guidanceText.length])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleStart = () => {
    setIsActive(true)
  }

  const handleReset = () => {
    setIsActive(false)
    setTimeLeft(180)
    setCurrentPhase(0)
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-light mb-6 text-gray-800">
              三分鐘呼吸空間
            </h1>
            <p className="text-xl text-gray-600">
              讓我們一起開始這個簡單而有力的練習
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-2xl mx-auto text-center"
          >
            <div className="text-6xl sm:text-7xl font-light mb-8 text-primary">
              {formatTime(timeLeft)}
            </div>

            <div className="min-h-[100px] mb-8">
              <motion.p
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-600"
              >
                {guidanceText[currentPhase]}
              </motion.p>
            </div>

            <div className="space-x-4">
              {!isActive ? (
                <button
                  onClick={handleStart}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  開始練習
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="border-2 border-gray-300 text-gray-600 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:scale-105"
                >
                  重新開始
                </button>
              )}
            </div>
          </motion.div>

          {!isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 text-center text-gray-600"
            >
              <p>準備好了嗎？點擊「開始練習」，讓我們一起進入當下。</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
} 