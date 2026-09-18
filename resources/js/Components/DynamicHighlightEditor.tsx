import React, { useState } from 'react';
import { Plus, Trash2, ShieldCheck, Feather, Zap, Sliders, Power, Droplets, Eye, Target, Layers, Monitor, BatteryCharging, Download, Camera, Wifi, Settings, ShieldAlert } from 'lucide-react';
import { HighlightItem } from '@/types/product';

interface DynamicHighlightEditorProps {
    value: HighlightItem[];
    onChange: (value: HighlightItem[]) => void;
}

const AVAILABLE_ICONS = [
    { name: 'Feather', label: 'Feather (Ringan)', icon: Feather },
    { name: 'Zap', label: 'Zap (Performasi/Optik)', icon: Zap },
    { name: 'Sliders', label: 'Sliders (Manual Gain)', icon: Sliders },
    { name: 'Power', label: 'Power (Daya)', icon: Power },
    { name: 'Droplets', label: 'Droplets (Tahan Air)', icon: Droplets },
    { name: 'Eye', label: 'Eye (Penglihatan 3D)', icon: Eye },
    { name: 'Target', label: 'Target (Targeting)', icon: Target },
    { name: 'Layers', label: 'Layers (Fusion)', icon: Layers },
    { name: 'Monitor', label: 'Monitor (Display)', icon: Monitor },
    { name: 'BatteryCharging', label: 'Battery (Power Supply)', icon: BatteryCharging },
    { name: 'Download', label: 'Download (Plug & Play)', icon: Download },
    { name: 'Camera', label: 'Camera (Photo/Video)', icon: Camera },
    { name: 'Wifi', label: 'Wifi (Transmisi Nirkabel)', icon: Wifi },
    { name: 'Settings', label: 'Settings (Fungsi)', icon: Settings },
    { name: 'ShieldAlert', label: 'ShieldAlert (Tahan Benturan)', icon: ShieldAlert },
    { name: 'ShieldCheck', label: 'ShieldCheck (Perlindungan)', icon: ShieldCheck },
];

export const DynamicHighlightEditor: React.FC<DynamicHighlightEditorProps> = ({ value = [], onChange }) => {
    const [items, setItems] = useState<HighlightItem[]>(() => value || []);

    const updateParent = (newList: HighlightItem[]) => {
        setItems(newList);
        onChange(newList);
    };

    const addItem = () => {
        const updated = [...items, { icon: 'ShieldCheck', label: '' }];
        updateParent(updated);
    };

    const removeItem = (index: number) => {
        const updated = items.filter((_, i) => i !== index);
        updateParent(updated);
    };

    const handleIconChange = (index: number, iconName: string) => {
        const updated = [...items];
        updated[index].icon = iconName;
        updateParent(updated);
    };

    const handleLabelChange = (index: number, newLabel: string) => {
        const updated = [...items];
        updated[index].label = newLabel;
        updateParent(updated);
    };

    return (
        <div className="space-y-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-sm font-semibold text-slate-200">Fitur Utama / Highlights (JSON)</h4>
                    <p className="text-xs text-slate-400">Pilih ikon dan label fitur unggulan produk</p>
                </div>
                <button
                    type="button"
                    onClick={addItem}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                >
                    <Plus size={14} /> Tambah Fitur
                </button>
            </div>

            {items.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500 border border-dashed border-slate-800 rounded-lg">
                    Belum ada fitur unggulan. Klik "Tambah Fitur".
                </div>
            ) : (
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                            {/* Icon selector */}
                            <select
                                value={item.icon || 'ShieldCheck'}
                                onChange={(e) => handleIconChange(index, e.target.value)}
                                className="w-1/3 bg-slate-900 text-slate-200 text-xs px-2 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-blue-500"
                            >
                                {AVAILABLE_ICONS.map((ico) => (
                                    <option key={ico.name} value={ico.name}>
                                        {ico.name}
                                    </option>
                                ))}
                            </select>

                            {/* Label input */}
                            <input
                                type="text"
                                placeholder="Label Fitur (misal: LIGHTWEIGHT AND PORTABLE)"
                                value={item.label}
                                onChange={(e) => handleLabelChange(index, e.target.value)}
                                className="w-2/3 bg-slate-900 text-slate-100 text-xs px-3 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500 uppercase"
                            />

                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-950/50 rounded transition-colors"
                                title="Hapus"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
