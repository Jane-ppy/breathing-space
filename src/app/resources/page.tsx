"use client"

import Navigation from '@/components/Navigation'

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            冥想資源 | Meditation Resources
          </h1>
          <p className="text-xl text-gray-600">
            探索不同類型的冥想練習，找到最適合您的方式
            <br />
            Explore different types of meditation practices to find what works best for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  冥想類型 | Meditation Types
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-100 rounded-lg">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      呼吸覺察 | Breath Awareness
                    </h3>
                    <p className="text-gray-600">
                      最基礎且有效的冥想方式，專注於呼吸的自然流動。
                      <br />
                      The most fundamental and effective meditation method, focusing on the natural flow of breath.
                    </p>
                  </div>
                  <div className="p-6 border border-gray-100 rounded-lg">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      身體掃描 | Body Scan
                    </h3>
                    <p className="text-gray-600">
                      系統地關注身體各個部位的感受，幫助深化身體覺察。
                      <br />
                      Systematically focus on sensations throughout the body, helping deepen awareness.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  推薦資源 | Recommended Resources
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      書籍 | Books
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>&ldquo;Mindfulness in Plain English&rdquo; by Bhante Gunaratana</li>
                      <li>&ldquo;The Miracle of Mindfulness&rdquo; by Thich Nhat Hanh</li>
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
      </div>
    </div>
  )
} 