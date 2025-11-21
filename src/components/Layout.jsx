import React from 'react';

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
            <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl border-x border-neutral-100 relative">
                {children}
            </div>
        </div>
    );
}
