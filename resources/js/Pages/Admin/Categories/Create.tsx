import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { ArrowLeft, Save, Layers } from 'lucide-react';

export default function AdminCategoriesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.categories.store'));
    };

    return (
        <AdminLayout title="Tambah Kategori Baru">
            <Head title="Tambah Kategori Baru - Admin Panel" />

            <div className="max-w-3xl space-y-6">
                {/* Back link */}
                <Link
                    href={route('admin.categories.index')}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>Kembali ke Daftar Kategori</span>
                </Link>

                {/* Form Card */}
                <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2">
                                Nama Kategori <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Contoh: Optik Termal Taktis"
                                className="w-full bg-slate-950 text-slate-100 text-sm px-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-600"
                                required
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                            )}
                        </div>

                        {/* Slug */}
                        <div>
                            <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2">
                                Slug URL <span className="text-slate-500 font-normal">(Opsional - otomatis dibuat dari Nama jika kosong)</span>
                            </label>
                            <input
                                type="text"
                                value={data.slug}
                                onChange={(e) => setData('slug', e.target.value)}
                                placeholder="Contoh: optik-termal-taktis"
                                className="w-full bg-slate-950 text-slate-100 text-sm px-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-600 font-mono text-xs"
                            />
                            {errors.slug && (
                                <p className="mt-1 text-xs text-red-400 font-mono">{errors.slug}</p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2">
                                Deskripsi Kategori <span className="text-slate-500 font-normal">(Opsional)</span>
                            </label>
                            <textarea
                                rows={4}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Jelaskan cakupan produk atau definisi dari kategori ini..."
                                className="w-full bg-slate-950 text-slate-100 text-sm px-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-600"
                            />
                            {errors.description && (
                                <p className="mt-1 text-xs text-red-400 font-mono">{errors.description}</p>
                            )}
                        </div>

                        {/* Submit Action */}
                        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                            <Link
                                href={route('admin.categories.index')}
                                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition-all"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
                            >
                                <Save size={16} />
                                <span>Simpan Kategori</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
