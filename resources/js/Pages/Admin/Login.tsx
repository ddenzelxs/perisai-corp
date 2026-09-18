import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Shield, Lock, Mail, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.login'));
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 selection:bg-blue-600 selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
            <div className="fixed w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <Head title="Admin Portal Login" />

            <div className="w-full max-w-md relative z-10">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-blue-600/30 mb-4">
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-blue-400">
                            <Shield size={28} />
                        </div>
                    </div>
                    <h1 className="text-2xl font-black font-display tracking-tight text-white uppercase">
                        PERISAI CORP <span className="text-blue-500">ADMIN</span>
                    </h1>
                    <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-widest">
                        RESTRICTED ACCESS PORTAL
                    </p>
                </div>

                {/* Login Form Box */}
                <div className="bg-slate-900/80 rounded-2xl border border-blue-900/40 p-8 backdrop-blur-xl shadow-2xl">
                    {errors.email && (
                        <div className="mb-6 p-3.5 rounded-xl bg-red-950/80 border border-red-800/60 text-red-200 text-xs flex items-center gap-2.5">
                            <AlertCircle size={16} className="shrink-0 text-red-400" />
                            <span>{errors.email}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                Email Administrator
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="admin@perisaicorp.com"
                                    required
                                    className="w-full bg-slate-950/90 text-slate-100 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-600"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                Kata Sandi
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full bg-slate-950/90 text-slate-100 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-600"
                                />
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-xs text-slate-400">Ingat saya</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
                        >
                            {processing ? 'Memproses Authentikasi...' : 'Masuk ke Control Panel'}
                        </button>
                    </form>
                </div>

                <div className="text-center mt-6 text-[11px] text-slate-600 font-mono">
                    SECURITY SYSTEM • ENCRYPTED ADMIN SESSION
                </div>
            </div>
        </div>
    );
}
