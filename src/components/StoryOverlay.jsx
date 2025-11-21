import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function StoryOverlay({ isOpen, onClose }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setProgress(0);
            const startTime = Date.now();
            const duration = 5000; // 5 seconds

            const timer = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const newProgress = Math.min((elapsed / duration) * 100, 100);
                setProgress(newProgress);

                if (newProgress >= 100) {
                    clearInterval(timer);
                    onClose();
                }
            }, 50);

            return () => clearInterval(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-4"
                >
                    {/* Progress Bar */}
                    <div className="absolute top-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden z-20">
                        <div
                            className="h-full bg-white transition-all duration-50 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-6 text-white/80 hover:text-white transition-colors z-20"
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-md w-full aspect-[9/16] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Vibe Design Challenge</h2>
                            <p className="text-lg mb-8 leading-relaxed font-medium">
                                This prototype explores a new feature for Instagram:
                                <br /><br />
                                <span className="font-bold text-yellow-300">Themable Profiles</span>
                            </p>
                            <p className="text-sm opacity-90">
                                Allowing brands and artists to switch their entire grid aesthetic without needing to archive all posts.
                            </p>
                            <div className="mt-12 text-xs opacity-75 uppercase tracking-widest">
                                Crescent Creatives • 7 Day Vibe Design Challenge
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
