"use client"

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'

export default function Practice() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [time, setTime] = useState(180) // 3 minutes in seconds
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

    useEffect(() => {
        // 創建音頻元素
        const audioElement = new Audio('/breathing-space/meditation.mp3')
        setAudio(audioElement)

        return () => {
            if (audioElement) {
                audioElement.pause()
                audioElement.currentTime = 0
            }
        }
    }, [])

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isPlaying && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000)
        }

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [isPlaying, time])

    const togglePlay = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const resetMeditation = () => {
        if (audio) {
            audio.pause()
            audio.currentTime = 0
        }
        setIsPlaying(false)
        setTime(180)
    }

    return (
        <>
            <Navigation />
            <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h1 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">
                            三分鐘正念冥想
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            找一個安靜的地方，讓自己舒適地坐下。
                            <br />
                            跟隨引導，開始您的冥想之旅。
                        </p>

                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <div className="text-6xl font-light mb-8 text-primary">
                                {formatTime(time)}
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={togglePlay}
                                    className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                                >
                                    {isPlaying ? '暫停' : '開始'}
                                </button>
                                <button
                                    onClick={resetMeditation}
                                    className="px-8 py-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:scale-105"
                                >
                                    重置
                                </button>
                            </div>
                        </div>

                        <div className="text-left bg-gray-50 rounded-lg p-6">
                            <h2 className="text-xl font-medium mb-4 text-gray-800">冥想指引</h2>
                            <ol className="space-y-4 text-gray-600">
                                <li>1. 找到一個舒適的坐姿，保持脊椎挺直</li>
                                <li>2. 深呼吸幾次，讓身體放鬆</li>
                                <li>3. 將注意力集中在呼吸上</li>
                                <li>4. 當心思漫遊時，溫柔地將注意力帶回呼吸</li>
                            </ol>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
} 