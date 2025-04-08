"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-6">
              三分鐘呼吸空間
              <span className="block text-2xl sm:text-3xl md:text-4xl text-primary mt-2">
                Three-Minute Breathing Space
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              活在當下，專注呼吸，讓心靈找到平靜
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/resources"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                開始冥想
              </a>
              <a
                href="/benefits"
                className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                了解更多
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
