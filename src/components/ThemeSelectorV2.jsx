import React, { useState } from 'react';
import { ChevronDown, History, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeSelectorV2({ themes, currentThemeId, onSelectTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const currentTheme = themes[currentThemeId];

    // Sort themes: current one first, then others
    const otherThemes = Object.values(themes).filter(t => t.id !== currentThemeId);

    return (
        <div className="px-6 py-4 relative z-20">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xs font-bold text-neutral-400 tracking-wider uppercase">Current Version</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors"
                >
                    <History size={12} />
                    <span>View Archive</span>
                </button>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-xl shadow-sm hover:border-neutral-300 transition-all active:scale-[0.99]"
            >
                <div className="flex flex-col items-start">
                    <span className="font-bold text-lg">{currentTheme?.label}</span>
                    <span className="text-xs text-neutral-500">Active Configuration</span>
                </div>
                <ChevronDown
                    className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-6 right-6 top-[calc(100%-10px)] mt-2 bg-white border border-neutral-100 rounded-xl shadow-xl overflow-hidden z-30"
                    >
                        <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-100">
                            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Version History</span>
                        </div>

                        <div className="max-h-60 overflow-y-auto">
                            {/* Current (Active) Item in List */}
                            <div className="px-4 py-3 flex items-center justify-between bg-neutral-50/50">
                                <span className="font-medium text-neutral-900">{currentTheme?.label}</span>
                                <div className="flex items-center gap-2 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                                    <Check size={12} />
                                    CURRENT
                                </div>
                            </div>

                            {/* Other Themes */}
                            {otherThemes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => {
                                        onSelectTheme(theme.id);
                                        setIsOpen(false);
                                    }}
                                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors text-left group"
                                >
                                    <span className="font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">
                                        {theme.label}
                                    </span>
                                    <span className="text-xs text-neutral-400 group-hover:text-neutral-600">
                                        Restore
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
