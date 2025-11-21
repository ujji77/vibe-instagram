import React from 'react';
import { Grid, Clapperboard, UserSquare2 } from 'lucide-react';

export function ProfileTabs() {
    return (
        <div className="flex border-t border-neutral-200">
            <div className="flex-1 flex justify-center items-center py-3 border-t-2 border-neutral-900 -mt-[1px]">
                <Grid size={24} className="text-neutral-900" />
            </div>
            <div className="flex-1 flex justify-center items-center py-3 text-neutral-400">
                <Clapperboard size={24} />
            </div>
            <div className="flex-1 flex justify-center items-center py-3 text-neutral-400">
                <UserSquare2 size={24} />
            </div>
        </div>
    );
}
