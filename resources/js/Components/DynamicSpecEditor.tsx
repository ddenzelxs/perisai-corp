import React, { useState } from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { SpecificationMap } from '@/types/product';

interface DynamicSpecEditorProps {
    value: SpecificationMap;
    onChange: (value: SpecificationMap) => void;
}

export const DynamicSpecEditor: React.FC<DynamicSpecEditorProps> = ({ value = {}, onChange }) => {
    // Convert dictionary object to array of key-value pairs for form editing
    const [specList, setSpecList] = useState<{ key: string; val: string }[]>(() => {
        return Object.entries(value || {}).map(([key, val]) => ({ key, val: String(val) }));
    });

    const updateParent = (newList: { key: string; val: string }[]) => {
        const specObject: SpecificationMap = {};
        newList.forEach((item) => {
            if (item.key.trim() !== '') {
                specObject[item.key.trim()] = item.val;
            }
        });
        onChange(specObject);
    };

    const handleKeyChange = (index: number, newKey: string) => {
        const updated = [...specList];
        updated[index].key = newKey;
        setSpecList(updated);
        updateParent(updated);
    };

    const handleValChange = (index: number, newVal: string) => {
        const updated = [...specList];
        updated[index].val = newVal;
        setSpecList(updated);
        updateParent(updated);
    };

    const addRow = () => {
        const updated = [...specList, { key: '', val: '' }];
        setSpecList(updated);
        updateParent(updated);
    };

    const removeRow = (index: number) => {
        const updated = specList.filter((_, i) => i !== index);
        setSpecList(updated);
        updateParent(updated);
    };

    const presetSpecs = [
        'Magnification, x',
        'Resolution, Pixels',
        'Pixel Pitch, µm',
        'Frame Rate, Hz',
        'FOV, °',
        'Lens System, mm',
        'Immersion',
        'Battery Type',
        'Battery Life, h',
        'Dimensions, mm',
        'Weight, g'
    ];

    const addPreset = (presetKey: string) => {
        if (!specList.some(item => item.key === presetKey)) {
            const updated = [...specList, { key: presetKey, val: '' }];
            setSpecList(updated);
            updateParent(updated);
        }
    };

    return (
        <div className="space-y-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-sm font-semibold text-slate-200">Spesifikasi Teknis (JSON)</h4>
                    <p className="text-xs text-slate-400">Atur parameter spesifikasi produk secara bebas (Key-Value)</p>
                </div>
                <button
                    type="button"
                    onClick={addRow}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                >
                    <Plus size={14} /> Tambah Parameter
                </button>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] text-slate-400 self-center mr-1">Preset Cepat:</span>
                {presetSpecs.map((preset) => (
                    <button
                        key={preset}
                        type="button"
                        onClick={() => addPreset(preset)}
                        className="px-2 py-0.5 text-[11px] bg-slate-800 hover:bg-blue-950 hover:text-blue-300 text-slate-300 rounded border border-slate-700 transition-colors"
                    >
                        + {preset}
                    </button>
                ))}
            </div>

            {/* Spec List */}
            {specList.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500 border border-dashed border-slate-800 rounded-lg">
                    Belum ada spesifikasi teknis. Klik "Tambah Parameter" atau tombol preset di atas.
                </div>
            ) : (
                <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                    {specList.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                            <GripVertical size={14} className="text-slate-600 shrink-0" />
                            <input
                                type="text"
                                placeholder="Nama Parameter (misal: FOV, °)"
                                value={item.key}
                                onChange={(e) => handleKeyChange(index, e.target.value)}
                                className="w-1/2 bg-slate-900 text-slate-100 text-xs px-3 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500"
                            />
                            <input
                                type="text"
                                placeholder="Nilai (misal: 40±2)"
                                value={item.val}
                                onChange={(e) => handleValChange(index, e.target.value)}
                                className="w-1/2 bg-slate-900 text-slate-100 text-xs px-3 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500"
                            />
                            <button
                                type="button"
                                onClick={() => removeRow(index)}
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
