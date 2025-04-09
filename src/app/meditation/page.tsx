"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

export default function MeditationTimer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [timeLeft, setTimeLeft] = useState(180) // 3 minutes in seconds
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    const newTime = prev - 1
                    setProgress((newTime / 180) * 100)
                    return newTime
                })
            }, 1000)
        }

        return () => {
            if (timer) clearInterval(timer)
        }
    }, [isPlaying, timeLeft])

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const resetTimer = () => {
        setIsPlaying(false)
        setTimeLeft(180)
        setProgress(100)
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
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        className="text-gray-200"
                                        strokeWidth="8"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="70"
                                        cx="96"
                                        cy="96"
                                    />
                                    <circle
                                        className="text-primary"
                                        strokeWidth="8"
                                        strokeDasharray={440}
                                        strokeDashoffset={440 - (440 * progress) / 100}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="70"
                                        cx="96"
                                        cy="96"
                                    />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="text-4xl font-light text-gray-800">
                                        {formatTime(timeLeft)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={togglePlay}
                                    className="bg-primary text-white p-4 rounded-full hover:bg-opacity-90 transition-all"
                                >
                                    {isPlaying ? (
                                        <PauseIcon className="h-8 w-8" />
                                    ) : (
                                        <PlayIcon className="h-8 w-8" />
                                    )}
                                </button>
                                {timeLeft < 180 && (
                                    <button
                                        onClick={resetTimer}
                                        className="border-2 border-gray-300 text-gray-600 px-6 rounded-full hover:border-primary hover:text-primary transition-all"
                                    >
                                        重置
                                    </button>
                                )}
                            </div>
                        </div>
                        <p className="text-gray-600 text-lg">
                            找一個安靜的地方，保持舒適的坐姿，<br />
                            讓我們開始這段寧靜的旅程。
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    )
} 