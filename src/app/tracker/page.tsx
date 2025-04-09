"use client"

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'

interface Practice {
  date: string;
  emotion: string;
}

const emotions = [
  { emoji: '😊', label: '平靜 | Calm' },
  { emoji: '😌', label: '放鬆 | Relaxed' },
  { emoji: '🤔', label: '專注 | Focused' },
  { emoji: '😔', label: '疲倦 | Tired' },
  { emoji: '😕', label: '緊張 | Tense' }
]

export default function Tracker() {
  const [practices, setPractices] = useState<Practice[]>([])
  const [selectedEmotion, setSelectedEmotion] = useState('')

  useEffect(() => {
    const savedPractices = localStorage.getItem('meditationPractices')
    if (savedPractices) {
      setPractices(JSON.parse(savedPractices))
    }
  }, [])

  const logPractice = () => {
    if (!selectedEmotion) return

    const newPractice = {
      date: new Date().toISOString(),
      emotion: selectedEmotion
    }

    const updatedPractices = [...practices, newPractice]
    setPractices(updatedPractices)
    localStorage.setItem('meditationPractices', JSON.stringify(updatedPractices))
    setSelectedEmotion('')
  }

  const getEmotionStats = () => {
    const stats: { [key: string]: number } = {}
    practices.forEach(practice => {
      stats[practice.emotion] = (stats[practice.emotion] || 0) + 1
    })
    return stats
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            冥想記錄 | Meditation Tracker
          </h1>
          <p className="text-xl text-gray-600">
            記錄您的冥想練習和情緒變化
            <br />
            Track your meditation practice and emotional changes
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              記錄今天的練習 | Log Today&apos;s Practice
            </h2>
            <p className="text-gray-600 mb-6">
              選擇最能描述您當前感受的表情
              <br />
              Choose the emoji that best describes how you feel
            </p>
            <div className="grid grid-cols-5 gap-4 mb-6">
              {emotions.map((emotion) => (
                <button
                  key={emotion.emoji}
                  onClick={() => setSelectedEmotion(emotion.emoji)}
                  className={`p-4 rounded-lg text-center transition-all ${
                    selectedEmotion === emotion.emoji
                      ? 'bg-primary bg-opacity-10 border-2 border-primary'
                      : 'border-2 border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="text-3xl mb-2">{emotion.emoji}</div>
                  <div className="text-sm text-gray-600">{emotion.label}</div>
                </button>
              ))}
            </div>
            <button
              onClick={logPractice}
              disabled={!selectedEmotion}
              className={`w-full py-3 rounded-lg font-medium ${
                selectedEmotion
                  ? 'bg-primary text-white hover:bg-opacity-90'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              記錄練習 | Log Practice
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              練習統計 | Practice Statistics
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">總練習次數 | Total Practices</span>
                <span className="text-2xl font-bold text-primary">{practices.length}</span>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  情緒分布 | Emotion Distribution
                </h3>
                {Object.entries(getEmotionStats()).map(([emotion, count]) => (
                  <div key={emotion} className="flex justify-between items-center mb-2">
                    <span className="text-2xl">{emotion}</span>
                    <span className="text-gray-600">{count} 次 | times</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            註：所有數據僅儲存在您的設備上，僅用於學術研究目的。
            <br />
            Note: All data is stored locally on your device and used for academic research purposes only.
          </div>
        </div>
      </div>
    </div>
  )
} 