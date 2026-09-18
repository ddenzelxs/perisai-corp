import React from 'react';
import * as Icons from 'lucide-react';
import { HighlightItem } from '@/types/product';

interface HighlightBadgeProps {
    item: HighlightItem;
    size?: 'sm' | 'md' | 'lg';
}

export const HighlightBadge: React.FC<HighlightBadgeProps> = ({ item, size = 'md' }) => {
    // Dynamic icon resolution from lucide-react
    const IconComponent = item.icon && (Icons as Record<string, React.ElementType>)[item.icon]
        ? (Icons as Record<string, React.ElementType>)[item.icon]
        : Icons.ShieldCheck;

    const sizeClasses = {
        sm: {
            container: 'p-2',
            icon: 16,
            text: 'text-[10px] font-semibold tracking-wider',
            circle: 'w-9 h-9',
        },
        md: {
            container: 'p-2.5',
            icon: 20,
            text: 'text-xs font-bold tracking-wider',
            circle: 'w-12 h-12',
        },
        lg: {
            container: 'p-3',
            icon: 24,
            text: 'text-xs font-black tracking-widest',
            circle: 'w-14 h-14',
        }
    }[size];

    return (
        <div className="flex flex-col items-center text-center group max-w-[110px]">
            <div className={`relative ${sizeClasses.circle} rounded-full bg-gradient-to-br from-blue-600 to-indigo-950 border border-blue-400/30 flex items-center justify-center text-blue-300 shadow-lg shadow-blue-950/50 group-hover:scale-105 group-hover:border-blue-400 group-hover:text-white transition-all duration-300`}>
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm group-hover:bg-blue-400/20 transition-all"></div>
                <IconComponent size={sizeClasses.icon} className="relative z-10" />
            </div>
            <span className={`mt-2 ${sizeClasses.text} text-slate-300 uppercase group-hover:text-blue-200 transition-colors line-clamp-2 leading-tight`}>
                {item.label}
            </span>
        </div>
    );
};
