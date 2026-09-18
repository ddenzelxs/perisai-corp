import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { Product, PaginatedData } from '@/types/product';
import { Plus, Search, Edit2, Trash2, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';

interface AdminProductsIndexProps {
    products: PaginatedData<Product>;
    filters: {
        search?: string;
    };
}

export default function AdminProductsIndex({ products, filters }: AdminProductsIndexProps) {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route('admin.products.index'), { search: searchTerm }, { preserveState: true });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            setDeletingId(id);
            router.delete(route('admin.products.destroy', id), {
                onFinish: () => setDeletingId(null),
            });
        }
    };

    return (
        <AdminLayout title="Kelola Produk">
            <Head title="Manajemen Produk - Admin Panel" />

            <div className="space-y-6">
                {/* Header Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="w-full sm:w-80 relative">
                        <input
                            type="text"
                            placeholder="Cari produk (nama/kategori)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-950 text-slate-100 text-xs pl-9 pr-4 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500"
                        />
                        <Search size={16} className="absolute left-3 top-2.5 text-slate-500" />
                    </form>

                    {/* Add Product Button */}
                    <Link
                        href={route('admin.products.create')}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                    >
                        <Plus size={16} />
                        <span>Tambah Produk Baru</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                                <tr>
                                    <th className="py-3.5 px-4">Gambar</th>
                                    <th className="py-3.5 px-4">Nama Produk</th>
                                    <th className="py-3.5 px-4">Kategori / Subtitle</th>
                                    <th className="py-3.5 px-4">Fitur (Highlights)</th>
                                    <th className="py-3.5 px-4">Spesifikasi (JSON)</th>
                                    <th className="py-3.5 px-4">Status</th>
                                    <th className="py-3.5 px-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {products.data.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-12 text-center text-slate-500">
                                            Tidak ada data produk yang ditemukan.
                                        </td>
                                    </tr>
                                ) : (
                                    products.data.map((product) => (
                                        <tr key={product.id} className="hover:bg-slate-800/30 transition-colors">
                                            {/* Thumbnail */}
                                            <td className="py-3 px-4">
                                                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                                                    {product.image_url ? (
                                                        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ShieldCheck size={20} className="text-slate-600" />
                                                    )}
                                                </div>
                                            </td>

                                            {/* Name */}
                                            <td className="py-3 px-4">
                                                <div className="font-bold text-white font-display text-sm">{product.name}</div>
                                                <div className="text-[10px] text-slate-500 font-mono">/{product.slug}</div>
                                            </td>

                                            {/* Category */}
                                            <td className="py-3 px-4 text-slate-300 font-medium">
                                                {product.category || '-'}
                                            </td>

                                            {/* Highlights */}
                                            <td className="py-3 px-4">
                                                <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-blue-300">
                                                    {product.highlights ? `${product.highlights.length} item` : '0 item'}
                                                </span>
                                            </td>

                                            {/* Specifications Count */}
                                            <td className="py-3 px-4">
                                                <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300">
                                                    {product.specifications ? `${Object.keys(product.specifications).length} params` : '0 params'}
                                                </span>
                                            </td>

                                            {/* Status */}
                                            <td className="py-3 px-4">
                                                {product.is_active ? (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-[11px] font-semibold">
                                                        <CheckCircle2 size={12} /> Aktif
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[11px] font-semibold">
                                                        <XCircle size={12} /> Nonaktif
                                                    </span>
                                                )}
                                            </td>

                                            {/* Actions */}
                                            <td className="py-3 px-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={route('admin.products.edit', product.id)}
                                                        className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                                                        title="Edit Produk"
                                                    >
                                                        <Edit2 size={16} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        disabled={deletingId === product.id}
                                                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-950/50 transition-colors disabled:opacity-50"
                                                        title="Hapus Produk"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Links */}
                    {products.links.length > 3 && (
                        <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs">
                            <span className="text-slate-400">Total {products.total} produk</span>
                            <div className="flex gap-1">
                                {products.links.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.url || '#'}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-3 py-1.5 rounded-lg border transition-all ${
                                            link.active
                                                ? 'bg-blue-600 border-blue-500 text-white font-bold'
                                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                                        } ${!link.url && 'opacity-40 cursor-not-allowed'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
