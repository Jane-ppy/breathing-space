"use client"

import { motion } from 'framer-motion'

const benefitsList = [
    {
        title: '減輕壓力',
        description: '通過正念呼吸緩解日常壓力，找回內在平靜',
        icon: '🌱'
    },
    {
        title: '提升專注',
        description: '培養當下覺知，增強注意力和工作效率',
        icon: '🎯'
    },
    {
        title: '情緒平衡',
        description: '更好地理解和管理情緒，保持心理健康',
        icon: '🌊'
    },
    {
        title: '改善睡眠',
        description: '幫助放鬆身心，提高睡眠質量和生活品質',
        icon: '🌙'
    }
]

export default function Benefits() {
    return (
        <section className="py-24 bg-white" data-name="benefits-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-800">冥想帶來的好處</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">透過規律練習，獲得身心平衡，提升生活品質</p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefitsList.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-all transform hover:scale-105"
                        >
                            <div className="text-5xl mb-6">{benefit.icon}</div>
                            <h3 className="text-xl font-medium mb-4 text-gray-800">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 