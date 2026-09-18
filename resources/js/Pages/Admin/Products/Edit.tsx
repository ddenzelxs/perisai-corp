import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { DynamicSpecEditor } from '@/Components/DynamicSpecEditor';
import { DynamicHighlightEditor } from '@/Components/DynamicHighlightEditor';
import { Product, Category, HighlightItem, SpecificationMap } from '@/types/product';
import { ArrowLeft, Upload, Link as LinkIcon } from 'lucide-react';

interface AdminProductsEditProps {
    product: Product;
    categories: Category[];
}

export default function AdminProductsEdit({ product, categories }: AdminProductsEditProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        name: product.name || '',
        category_id: product.category_id || '',
        category: product.category || '',
        description: product.description || '',
        image: null as File | null,
        image_url_input: product.image_path && product.image_path.startsWith('http') ? product.image_path : '',
        highlights: product.highlights || ([] as HighlightItem[]),
        specifications: product.specifications || ({} as SpecificationMap),
        is_active: product.is_active ?? true,
    });

    const [imagePreview, setImagePreview] = useState<string | null>(product.image_url || null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.products.update', product.id));
    };

    return (
        <AdminLayout title={`Edit Produk: ${product.name}`}>
            <Head title={`Edit ${product.name} - Admin Panel`} />

            <div className="max-w-4xl mx-auto space-y-6">
                <Link
                    href={route('admin.products.index')}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-slate-100 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>Kembali ke Daftar Produk</span>
                </Link>

                <form onSubmit={handleSubmit} className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-8 backdrop-blur-md shadow-2xl">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                            Informasi Dasar Produk
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Nama Produk <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    className="w-full bg-slate-950 text-slate-100 text-xs px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
                                />
                                {errors.name && <div className="text-red-400 text-[11px] mt-1">{errors.name}</div>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Kategori Utama
                                </label>
                                <select
                                    value={data.category_id}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                    className="w-full bg-slate-950 text-slate-100 text-xs px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">-- Pilih Kategori --</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.category_id && <div className="text-red-400 text-[11px] mt-1">{errors.category_id}</div>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                                Subtitle Kategori Spesifik (Opsional)
                            </label>
                            <input
                                type="text"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                className="w-full bg-slate-950 text-slate-100 text-xs px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 uppercase"
                            />
                            {errors.category && <div className="text-red-400 text-[11px] mt-1">{errors.category}</div>}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                                Deskripsi Produk
                            </label>
                            <textarea
                                rows={4}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full bg-slate-950 text-slate-100 text-xs p-3 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
                            />
                            {errors.description && <div className="text-red-400 text-[11px] mt-1">{errors.description}</div>}
                        </div>
                    </div>

                    {/* Image Upload / External URL */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                            Gambar Produk
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                            {/* Upload Area */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Ganti File Gambar (Opsional)
                                </label>
                                <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl bg-slate-950/60 cursor-pointer transition-colors text-center">
                                    <Upload size={24} className="text-slate-500 mb-2" />
                                    <span className="text-xs text-slate-300 font-semibold">Klik untuk memilih file baru</span>
                                    <span className="text-[10px] text-slate-500 mt-1">PNG, JPG, WEBP hingga 5MB</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                                {data.image && (
                                    <div className="text-[11px] text-emerald-400 font-mono mt-1 truncate">
                                        File terpilih: {data.image.name}
                                    </div>
                                )}
                            </div>

                            {/* Preview or URL Fallback */}
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                                        <LinkIcon size={14} /> ATAU Gunakan URL Gambar Eksternal
                                    </label>
                                    <input
                                        type="url"
                                        placeholder="https://example.com/image.jpg"
                                        value={data.image_url_input}
                                        onChange={(e) => setData('image_url_input', e.target.value)}
                                        className="w-full bg-slate-950 text-slate-100 text-xs px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-600"
                                    />
                                </div>

                                {/* Preview Box */}
                                {(imagePreview || data.image_url_input) && (
                                    <div>
                                        <span className="text-[11px] text-slate-400 block mb-1">Gambar Saat Ini / Preview:</span>
                                        <div className="w-full h-32 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden p-2">
                                            <img
                                                src={imagePreview || data.image_url_input}
                                                alt="Preview"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Highlights Dynamic Editor */}
                    <DynamicHighlightEditor
                        value={data.highlights}
                        onChange={(val) => setData('highlights', val)}
                    />

                    {/* Specifications Dynamic Editor */}
                    <DynamicSpecEditor
                        value={data.specifications}
                        onChange={(val) => setData('specifications', val)}
                    />

                    {/* Status Toggle */}
                    <div className="flex items-center gap-3 pt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={data.is_active}
                                onChange={(e) => setData('is_active', e.target.checked)}
                                className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-xs font-semibold text-slate-200">Tampilkan produk ini di katalog publik (Aktif)</span>
                        </label>
                    </div>

                    {/* Submit Bar */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                        <Link
                            href={route('admin.products.index')}
                            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
                        >
                            {processing ? 'Menyimpan Perubahan...' : 'Update Produk'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
