"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

export default function Meditation() {
    const [timeLeft, setTimeLeft] = useState(180) // 3 minutes in seconds
    const [isActive, setIsActive] = useState(false)
    const [currentPhase, setCurrentPhase] = useState(0)
    const [showCompletionDialog, setShowCompletionDialog] = useState(false)

    const phases = [
        {
            title: "開放覺察 | Open Awareness",
            description: "觀察當下的想法、情緒和身體感受，不加評判\nObserve current thoughts, emotions, and bodily sensations without judgment",
            duration: 60
        },
        {
            title: "心跳覺察 | Heartbeat Awareness",
            description: "將注意力轉向心跳，感受生命的律動\nShift attention to your heartbeat, feel the rhythm of life",
            duration: 60
        },
        {
            title: "呼吸錨定 | Breath Anchoring",
            description: "專注於呼吸，讓它成為當下的錨點\nFocus on the breath, let it be your anchor to the present moment",
            duration: 60
        }
    ]

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => {
                    const newTime = time - 1
                    // Update phase based on time
                    const newPhase = Math.floor((180 - newTime) / 60)
                    if (newPhase !== currentPhase) {
                        setCurrentPhase(newPhase)
                    }
                    return newTime
                })
            }, 1000)
        } else if (timeLeft === 0) {
            setShowCompletionDialog(true)
            setIsActive(false)
        }
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isActive, timeLeft, currentPhase])

    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    const resetTimer = () => {
        setIsActive(false)
        setTimeLeft(180)
        setCurrentPhase(0)
        setShowCompletionDialog(false)
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        三分鐘呼吸空間 | Three-Minute Breathing Space
                    </h1>
                    <p className="text-xl text-gray-600">
                        跟隨指引，體驗三個階段的正念練習
                        <br />
                        Follow the guidance through three phases of mindfulness practice
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 mb-8">
                        <div className="flex justify-center mb-8">
                            <div className="relative w-48 h-48">
                                <div 
                                    className={`absolute inset-0 rounded-full border-4 border-primary transition-all duration-1000 ${
                                        isActive ? 'animate-pulse' : ''
                                    }`}
                                    style={{
                                        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.05) 100%)'
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-primary">
                                            {formatTime(timeLeft)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                {phases[currentPhase].title}
                            </h2>
                            <p className="text-gray-600 whitespace-pre-line">
                                {phases[currentPhase].description}
                            </p>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={toggleTimer}
                                className={`px-6 py-3 rounded-lg font-medium ${
                                    isActive
                                        ? 'bg-red-500 text-white hover:bg-red-600'
                                        : 'bg-primary text-white hover:bg-opacity-90'
                                }`}
                            >
                                {isActive ? '暫停 | Pause' : '開始 | Start'}
                            </button>
                            <button
                                onClick={resetTimer}
                                className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                            >
                                重置 | Reset
                            </button>
                        </div>
                    </div>

                    {showCompletionDialog && (
                        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                練習完成！| Practice Complete!
                            </h3>
                            <p className="text-gray-600 mb-6">
                                恭喜您完成了三分鐘呼吸空間練習。記得記錄您的心得！
                                <br />
                                Congratulations on completing the Three-Minute Breathing Space practice. Remember to log your experience!
                            </p>
                            <button
                                onClick={() => window.location.href = '/tracker'}
                                className="px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-opacity-90"
                            >
                                記錄練習 | Log Practice
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 