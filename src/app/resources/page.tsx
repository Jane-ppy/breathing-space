"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

const resources = [
  {
    category: '呼吸技巧',
    items: [
      {
        title: '基礎呼吸法',
        description: '簡單的腹式呼吸練習',
        duration: '3分鐘',
      },
      {
        title: '4-7-8呼吸法',
        description: '放鬆身心的呼吸節奏',
        duration: '3分鐘',
      },
    ],
  },
  {
    category: '引導冥想',
    items: [
      {
        title: '開放覺知',
        description: '培養當下覺知能力',
        duration: '3分鐘',
      },
      {
        title: '心跳覺知',
        description: '專注於心跳節奏',
        duration: '3分鐘',
      },
      {
        title: '呼吸錨定',
        description: '以呼吸為專注點',
        duration: '3分鐘',
      },
    ],
  },
  {
    category: '快速練習',
    items: [
      {
        title: '一分鐘放鬆',
        description: '快速緩解壓力',
        duration: '1分鐘',
      },
      {
        title: '辦公室冥想',
        description: '適合工作場合的簡短練習',
        duration: '2分鐘',
      },
    ],
  },
]

export default function Resources() {
  const meditationTypes = [
    {
      title: "呼吸覺察 | Breath Awareness",
      description: "最基礎且有效的冥想方式，專注於呼吸的自然流動。適合初學者開始練習正念。\n\nThe most fundamental and effective meditation method, focusing on the natural flow of breath. Ideal for beginners starting mindfulness practice.",
      duration: "3-5分鐘 | 3-5 minutes",
      level: "入門 | Beginner"
    },
    {
      title: "身體掃描 | Body Scan",
      description: "系統地關注身體各個部位的感受，幫助深化身體覺察和放鬆。\n\nSystematically focus on sensations throughout the body, helping deepen body awareness and relaxation.",
      duration: "5-10分鐘 | 5-10 minutes",
      level: "初級 | Basic"
    },
    {
      title: "慈心冥想 | Loving-Kindness",
      description: "培養對自己和他人的慈悲心，增強正面情緒和人際連結。\n\nCultivate compassion for yourself and others, enhancing positive emotions and interpersonal connections.",
      duration: "10-15分鐘 | 10-15 minutes",
      level: "進階 | Advanced"
    },
    {
      title: "行走冥想 | Walking Meditation",
      description: "在行走時保持正念，特別適合無法靜坐的人。\n\nMaintain mindfulness while walking, particularly suitable for those who find it difficult to sit still.",
      duration: "10-20分鐘 | 10-20 minutes",
      level: "中級 | Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            冥想資源 | Meditation Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索不同類型的冥想練習，找到最適合您的方式
            <br />
            Explore different types of meditation practices to find what works best for you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {meditationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <div className="flex space-x-4 mb-4">
                  <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">
                    {type.duration}
                  </span>
                  <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">
                    {type.level}
                  </span>
                </div>
                <p className="text-gray-600 whitespace-pre-line">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              推薦資源 | Recommended Resources
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  書籍 | Books
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>&quot;Mindfulness in Plain English&quot; by Bhante Gunaratana</li>
                  <li>&quot;The Miracle of Mindfulness&quot; by Thich Nhat Hanh</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  應用程式 | Apps
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Headspace - 提供引導式冥想 | Guided meditation</li>
                  <li>Calm - 睡眠和放鬆 | Sleep and relaxation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 