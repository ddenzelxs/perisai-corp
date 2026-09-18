import React from 'react';
import { SpecificationMap } from '@/types/product';

interface SpecTableProps {
    specifications?: SpecificationMap | null;
    title?: string;
    compact?: boolean;
}

export const SpecTable: React.FC<SpecTableProps> = ({ 
    specifications, 
    title = "TECHNICAL SPECIFICATIONS",
    compact = false 
}) => {
    if (!specifications || Object.keys(specifications).length === 0) {
        return (
            <div className="text-slate-400 italic text-sm p-4 text-center bg-slate-900/50 rounded-lg border border-slate-800">
                Tidak ada spesifikasi teknis.
            </div>
        );
    }

    const entries = Object.entries(specifications);

    return (
        <div className="w-full overflow-hidden rounded-lg border border-blue-900/40 bg-slate-900/80 shadow-xl backdrop-blur-sm">
            {/* Header matching Perisai Corp banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 px-4 py-2.5 border-b border-blue-800/60 flex items-center justify-between">
                <span className="font-display font-bold tracking-wider text-xs sm:text-sm text-blue-100 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    {title}
                </span>
                <span className="text-[10px] text-blue-300/70 font-mono tracking-widest">ISO-9001 DEFENSE</span>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <tbody>
                        {entries.map(([key, value], index) => (
                            <tr 
                                key={index} 
                                className={`border-b border-slate-800/60 transition-colors hover:bg-blue-950/30 ${
                                    index % 2 === 0 ? 'bg-slate-950/40' : 'bg-slate-900/40'
                                }`}
                            >
                                <td className={`font-medium text-slate-300 border-r border-slate-800/60 ${compact ? 'py-1.5 px-3' : 'py-2 px-4'}`}>
                                    {key}
                                </td>
                                <td className={`font-semibold text-blue-200 ${compact ? 'py-1.5 px-3' : 'py-2 px-4'}`}>
                                    {value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
