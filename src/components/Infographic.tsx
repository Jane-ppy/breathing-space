"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function Infographic() {
    const { language } = useLanguage()

    const content = {
        zh: {
            title: "數位時代的注意力挑戰",
            sections: [
                {
                    title: "智能手機的影響",
                    content: "研究顯示，即使手機只是靜靜地放在視線範圍內，也會顯著降低我們的認知能力和專注度。",
                    icon: "📱"
                },
                {
                    title: "心理健康趨勢",
                    content: "香港市民的心理健康指數連續五年下滑，這與過度沉迷於虛擬世界密切相關。",
                    icon: "📉"
                },
                {
                    title: "正念練習的三階段",
                    content: "開放覺察、心跳感知與呼吸錨定，幫助重新與當下連結。",
                    icon: "🧘"
                }
            ]
        },
        en: {
            title: "Attention Challenges in the Digital Age",
            sections: [
                {
                    title: "Smartphone Impact",
                    content: "Research shows that even the mere presence of a smartphone significantly reduces cognitive capacity and focus.",
                    icon: "📱"
                },
                {
                    title: "Mental Health Trends",
                    content: "Hong Kong residents' mental health index has declined for five consecutive years, closely related to excessive virtual world engagement.",
                    icon: "📉"
                },
                {
                    title: "Three Stages of Mindfulness",
                    content: "Open awareness, heartbeat perception, and breath anchoring help reconnect with the present moment.",
                    icon: "🧘"
                }
            ]
        }
    }

    const currentContent = content[language as keyof typeof content]

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-3xl md:text-4xl font-light text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {currentContent.title}
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {currentContent.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="text-4xl mb-4">{section.icon}</div>
                            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                            <p className="text-gray-600">{section.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
} 