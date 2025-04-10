"use client"

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function References() {
    const references = [
        {
            title: "Brain, Mind, and Body in the Healing of Trauma",
            author: "van der Kolk, B.",
            year: "2014",
            publisher: "Viking",
            category: "書籍 | Books"
        },
        {
            title: "Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity",
            authors: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W.",
            year: "2017",
            journal: "Journal of the Association for Consumer Research, 2(2), 140-154",
            category: "研究論文 | Research Papers"
        },
        {
            title: "Digital Mindfulness Interventions and Their Impact on Attention Regulation",
            authors: "Santilli, E. & Spann, M.",
            year: "2024",
            journal: "Journal of Cognitive Enhancement",
            category: "研究論文 | Research Papers"
        },
        {
            title: "Mindfulness: A Practical Guide to Finding Peace in a Frantic World",
            authors: "Williams, M., & Penman, D.",
            year: "2011",
            publisher: "Piatkus",
            category: "書籍 | Books"
        }
    ];

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <section className="py-24 container mx-auto px-4">
                    <motion.div 
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-light mb-12 text-center text-gray-800">參考文獻</h1>
                        
                        <div className="space-y-8">
                            <div id="ref1" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-900">[1] 智能手機對認知能力的影響</h2>
                                <p className="text-gray-600">
                                    Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research, 2(2), 140--154. <a href="https://doi.org/10.1086/691462" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1086/691462</a>
                                </p>
                            </div>

                            <div id="ref2" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-900">[2] 過度思考與應對方法</h2>
                                <p className="text-gray-600">
                                    Santilli, M. (2024, November 8). How to stop overthinking: Causes and ways to Cope. Forbes. <a href="https://www.forbes.com/health/mind/what-causes-overthinking-and-6-ways-to-stop/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.forbes.com/health/mind/what-causes-overthinking-and-6-ways-to-stop/</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    )
} 