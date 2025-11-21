import React from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeModal({ isOpen, onClose, themes, currentThemeId, onSelectTheme }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-6 max-w-md mx-auto"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold">Switch Theme</h3>
                            <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-2">
                            {Object.values(themes).map((theme) => {
                                const isActive = theme.id === currentThemeId;
                                return (
                                    <button
                                        key={theme.id}
                                        onClick={() => {
                                            onSelectTheme(theme.id);
                                            onClose();
                                        }}
                                        className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${isActive
                                                ? 'bg-neutral-900 text-white shadow-lg'
                                                : 'bg-neutral-50 text-neutral-900 hover:bg-neutral-100'
                                            }`}
                                    >
                                        <span className="font-medium">{theme.label}</span>
                                        {isActive && <Check size={18} />}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
                            <p className="text-xs text-neutral-400">
                                Switching themes will update your grid layout and aesthetic.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
