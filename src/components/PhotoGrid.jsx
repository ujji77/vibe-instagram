import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PhotoGrid({ posts }) {
    return (
        <div className="grid grid-cols-3 gap-0.5 pb-32">
            <AnimatePresence mode="wait">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="aspect-square bg-neutral-100 overflow-hidden relative group"
                    >
                        <img
                            src={post.image}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
