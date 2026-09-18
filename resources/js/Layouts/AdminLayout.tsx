import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { Package, LogOut, Shield, User as UserIcon, ExternalLink } from 'lucide-react';
import { PageProps } from '@/types/product';

interface AdminLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
    const { auth, flash } = usePage<PageProps>().props;

    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(route('admin.logout'));
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-blue-600 selection:text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900/90 border-r border-slate-800 flex flex-col shrink-0">
                {/* Brand */}
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/30">
                        <Shield size={20} />
                    </div>
                    <div>
                        <div className="font-display font-extrabold text-base tracking-tight text-white">
                            PERISAI ADMIN
                        </div>
                        <div className="text-[10px] text-blue-400 font-mono">PANEL KONTROL</div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 p-4 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">
                        Manajemen Utama
                    </div>
                    <Link
                        href={route('admin.products.index')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                            route().current('admin.products.*')
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                        }`}
                    >
                        <Package size={18} />
                        <span>Kelola Produk</span>
                    </Link>

                    <div className="pt-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">
                        Pintas
                    </div>
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-all"
                    >
                        <ExternalLink size={18} />
                        <span>Lihat Katalog Publik</span>
                    </Link>
                </nav>

                {/* User & Logout */}
                <div className="p-4 border-t border-slate-800 bg-slate-950/40">
                    <div className="flex items-center gap-3 mb-3 px-2">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                            <UserIcon size={16} />
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-xs font-semibold text-slate-200 truncate">{auth.user?.name || 'Admin'}</div>
                            <div className="text-[10px] text-slate-500 truncate">{auth.user?.email}</div>
                        </div>
                    </div>

                    <form onSubmit={handleLogout}>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-lg border border-red-900/30 transition-all"
                        >
                            <LogOut size={14} />
                            <span>Keluar Admin</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-slate-900/50 border-b border-slate-800 px-8 flex items-center justify-between">
                    <h1 className="text-lg font-bold text-white font-display">
                        {title || 'Dashboard Admin'}
                    </h1>
                </header>

                {/* Body */}
                <main className="flex-1 p-8 overflow-y-auto">
                    {/* Flash messages */}
                    {flash.success && (
                        <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-200 text-sm flex items-center gap-3 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            {flash.success}
                        </div>
                    )}
                    {flash.error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-800/60 text-red-200 text-sm flex items-center gap-3 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            {flash.error}
                        </div>
                    )}

                    {children}
                </main>
            </div>
        </div>
    );
};
