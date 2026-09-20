import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AdminLayout } from '@/Layouts/AdminLayout';
import { Category, PaginatedData } from '@/types/product';
import { Plus, Search, Edit2, Trash2, Layers, ArrowLeft } from 'lucide-react';

interface AdminCategoriesIndexProps {
    categories: PaginatedData<Category>;
    filters: {
        search?: string;
    };
}

export default function AdminCategoriesIndex({ categories, filters }: AdminCategoriesIndexProps) {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route('admin.categories.index'), { search: searchTerm }, { preserveState: true });
    };

    const handleDelete = (id: number, name: string, productsCount?: number) => {
        if (productsCount && productsCount > 0) {
            alert(`Kategori "${name}" tidak dapat dihapus karena digunakan oleh ${productsCount} produk.`);
            return;
        }

        if (confirm(`Apakah Anda yakin ingin menghapus kategori "${name}"?`)) {
            setDeletingId(id);
            router.delete(route('admin.categories.destroy', id), {
                onFinish: () => setDeletingId(null),
            });
        }
    };

    return (
        <AdminLayout title="Kelola Kategori">
            <Head title="Manajemen Kategori - Admin Panel" />

            <div className="space-y-6">
                {/* Header Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="w-full sm:w-80 relative">
                        <input
                            type="text"
                            placeholder="Cari kategori (nama/slug)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-950 text-slate-100 text-xs pl-9 pr-4 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-500"
                        />
                        <Search size={16} className="absolute left-3 top-2.5 text-slate-500" />
                    </form>

                    {/* Add Category Button */}
                    <Link
                        href={route('admin.categories.create')}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                    >
                        <Plus size={16} />
                        <span>Tambah Kategori Baru</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                                <tr>
                                    <th className="py-3.5 px-4 w-16">ID</th>
                                    <th className="py-3.5 px-4">Nama Kategori</th>
                                    <th className="py-3.5 px-4">Slug URL</th>
                                    <th className="py-3.5 px-4">Deskripsi</th>
                                    <th className="py-3.5 px-4 text-center">Jumlah Produk</th>
                                    <th className="py-3.5 px-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {categories.data.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="py-12 text-center text-slate-500">
                                            Tidak ada data kategori yang ditemukan.
                                        </td>
                                    </tr>
                                ) : (
                                    categories.data.map((category) => (
                                        <tr key={category.id} className="hover:bg-slate-800/30 transition-colors">
                                            <td className="py-3.5 px-4 font-mono text-slate-500">
                                                #{category.id}
                                            </td>

                                            <td className="py-3.5 px-4">
                                                <div className="font-bold text-white font-display text-sm flex items-center gap-2">
                                                    <Layers size={16} className="text-blue-400 shrink-0" />
                                                    <span>{category.name}</span>
                                                </div>
                                            </td>

                                            <td className="py-3.5 px-4">
                                                <span className="font-mono text-xs bg-slate-950 px-2 py-1 rounded border border-slate-800 text-blue-400">
                                                    /{category.slug}
                                                </span>
                                            </td>

                                            <td className="py-3.5 px-4 text-slate-400 max-w-xs truncate">
                                                {category.description || <span className="text-slate-600 italic">- Tidak ada -</span>}
                                            </td>

                                            <td className="py-3.5 px-4 text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                                                    (category.products_count ?? 0) > 0
                                                        ? 'bg-blue-950 text-blue-400 border border-blue-800/60'
                                                        : 'bg-slate-950 text-slate-500 border border-slate-800'
                                                }`}>
                                                    {category.products_count ?? 0} Produk
                                                </span>
                                            </td>

                                            <td className="py-3.5 px-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={route('admin.categories.edit', category.id)}
                                                        className="p-1.5 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                                                        title="Edit Kategori"
                                                    >
                                                        <Edit2 size={14} />
                                                    </Link>

                                                    <button
                                                        onClick={() => handleDelete(category.id, category.name, category.products_count)}
                                                        disabled={deletingId === category.id}
                                                        className="p-1.5 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white rounded-lg transition-colors disabled:opacity-50"
                                                        title="Hapus Kategori"
                                                    >
                                                        <Trash2 size={14} />
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
                    {categories.last_page > 1 && (
                        <div className="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/40 text-xs">
                            <div className="text-slate-400 font-mono">
                                Menampilkan {categories.data.length} dari {categories.total} kategori
                            </div>
                            <div className="flex gap-1">
                                {categories.links.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.url || '#'}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-3 py-1.5 rounded-lg border font-mono ${
                                            link.active
                                                ? 'bg-blue-600 text-white border-blue-500 font-bold'
                                                : link.url
                                                ? 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                                                : 'bg-slate-950 text-slate-600 border-slate-900 cursor-not-allowed'
                                        }`}
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
