"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: "提升專注力 | Enhanced Focus",
    description: "通過定期練習三分鐘呼吸空間，您可以培養更強的專注力。研究表明，短暫的正念練習可以顯著改善工作和學習效率，減少分心。\n\nRegular practice of the three-minute breathing space helps cultivate stronger focus. Research shows that brief mindfulness exercises significantly improve work and study efficiency while reducing distractions.",
    icon: "🎯"
  },
  {
    title: "減輕壓力 | Stress Reduction",
    description: "這個簡短的練習能幫助您在繁忙的日常生活中找到平靜。通過關注呼吸，您可以降低壓力荷爾蒙水平，改善身心健康。\n\nThis brief practice helps you find calm amid busy daily life. By focusing on breath, you can lower stress hormone levels and improve both physical and mental well-being.",
    icon: "🌿"
  },
  {
    title: "情緒覺察 | Emotional Awareness",
    description: "通過定期練習，您將更好地理解和管理自己的情緒。這種覺察能力可以幫助您做出更明智的決定，改善人際關係。\n\nRegular practice helps you better understand and manage your emotions. This awareness can lead to better decision-making and improved relationships.",
    icon: "💭"
  },
  {
    title: "提高生活品質 | Life Quality",
    description: "將正念融入日常生活，能幫助您活在當下，減少對過去的懊悔和對未來的焦慮。這種練習可以增加生活滿意度和幸福感。\n\nIntegrating mindfulness into daily life helps you live in the present, reducing regret about the past and anxiety about the future. This practice can increase life satisfaction and well-being.",
    icon: "✨"
  }
]

export default function Benefits() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">冥想帶來的好處 | Benefits of Meditation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透過三分鐘呼吸空間練習，您可以體驗以下好處：
              <br />
              Through the Three-Minute Breathing Space practice, you can experience these benefits:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 transform transition-all hover:scale-[1.02]">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">科學研究支持 | Scientific Support</h2>
              <p className="text-gray-600 mb-4">
                多項研究證實，即使是短暫的正念練習也能帶來顯著的認知和情緒效益。
                <br />
                Multiple studies confirm that even brief mindfulness practices can bring significant cognitive and emotional benefits.
              </p>
              <p className="text-gray-600">
                — Journal of Cognitive Enhancement, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 