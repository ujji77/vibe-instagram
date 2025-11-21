import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

export function ProfileHeader({ account, currentTheme, onOpenThemeModal }) {
    return (
        <div className="px-6 pt-8 pb-6">
            <div className="flex justify-between items-center mb-6">
                <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-black">
                        {account.avatar && (
                            <img
                                src={account.avatar}
                                alt={account.username}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>
                <div className="flex gap-6 text-center">
                    <div>
                        <div className="font-bold text-lg">{account.stats.posts}</div>
                        <div className="text-xs text-neutral-500">Posts</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{account.stats.followers}</div>
                        <div className="text-xs text-neutral-500">Followers</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{account.stats.following}</div>
                        <div className="text-xs text-neutral-500">Following</div>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="font-bold text-lg">{account.name}</h1>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenThemeModal();
                        }}
                        className="relative group flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-[10px] font-bold text-neutral-600 hover:border-neutral-400 transition-colors"
                    >
                        <span className="relative z-10 flex items-center gap-1">
                            {currentTheme?.label}
                            <ChevronDown size={10} />
                        </span>
                        {/* Gradient Border Shimmer */}
                        <div
                            className="absolute inset-[-1px] rounded-full animate-instagram-shimmer pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, transparent 30%, #FFD600 45%, #FF0169 50%, #D300C5 55%, #7638FA 65%, transparent 80%, transparent 100%)',
                                backgroundSize: '200% 100%',
                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                maskComposite: 'exclude',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                padding: '1px'
                            }}
                        />
                    </button>
                </div>
                <div className="text-sm text-neutral-600 mb-3 leading-relaxed">
                    <a
                        href={`https://${account.bio}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={14} />
                        {account.bio}
                    </a>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="flex-1 bg-neutral-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors">
                    Follow
                </button>
                <button className="flex-1 bg-neutral-100 text-neutral-900 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">
                    Message
                </button>
            </div>
        </div>
    );
}
