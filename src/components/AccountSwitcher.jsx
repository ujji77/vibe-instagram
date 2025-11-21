import React from 'react';
import { Users } from 'lucide-react';

export function AccountSwitcher({ currentAccountId, onSwitch }) {
    return (
        <div className="fixed bottom-6 right-6 z-50 group">
            <div className="absolute bottom-full right-0 mb-2 bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Switch Profile
                <div className="absolute bottom-[-4px] right-6 w-2 h-2 bg-black rotate-45"></div>
            </div>

            <button
                onClick={onSwitch}
                className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 font-medium border-2 border-white/20 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                <Users size={20} className="relative z-10" />
                <span className="hidden sm:inline relative z-10">Switch Account</span>
            </button>
        </div>
    );
}
