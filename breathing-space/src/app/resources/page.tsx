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
              冥想資源
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              選擇適合您的冥想練習方式
            </p>
          </motion.div>

          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-semibold text-accent mb-6">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-semibold text-accent mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          時長：{item.duration}
                        </span>
                        <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                          開始練習
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 