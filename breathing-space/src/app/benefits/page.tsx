"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: '前額葉皮質活動',
    description: '增強注意力控制和情緒調節能力',
    icon: '🧠',
  },
  {
    title: '人際互動改善',
    description: '提升同理心和社交能力',
    icon: '🤝',
  },
  {
    title: '減少反芻思考',
    description: '降低負面思維循環',
    icon: '🔄',
  },
  {
    title: '減少未來焦慮',
    description: '提高當下專注力',
    icon: '🎯',
  },
]

export default function Benefits() {
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
              冥想練習的好處
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              透過規律的冥想練習，我們可以獲得以下益處
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 