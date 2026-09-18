import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { PublicLayout } from '@/Layouts/PublicLayout';
import { Product, Category } from '@/types/product';
import { Shield, ChevronRight, Truck, Eye, Cpu, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface HomeProps {
    featuredProducts: Product[];
    categories: Category[];
}

export default function Home({ featuredProducts, categories }: HomeProps) {
    return (
        <PublicLayout>
            <Head title="Perisai Corp - Defense & Tactical Karoseri Manufacturing" />

            {/* 1. Hero Section */}
            <section className="relative py-12 md:py-20 mb-16 overflow-hidden">
                <div className="relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-lg shadow-blue-950/50">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                        INDUSTRY LEADERS IN DEFENSE & KAROSERI
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase leading-none mb-6">
                        PERISAI CORP <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                            TACTICAL KAROSERI & OPTICS
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                        Spesialis rancang bangun <strong className="text-white">Karoseri Kendaraan Taktis Lapis Baja</strong>, kendaraan komando lapangan, serta penyedia perangkat <strong className="text-white">Optik Penglihatan Malam & Kamera Termal</strong> terdepan untuk mendukung kesiapan misi taktis pertahanan nasional.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href={route('products.index')}
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
                        >
                            <span>Jelajahi Katalog Produk</span>
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 transition-all"
                        >
                            <span>Tentang Perusahaan</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Key Metrics Bar */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                {[
                    { number: '100+', label: 'Kendaraan Taktis & Karoseri' },
                    { number: 'STANAG 2', label: 'Proteksi Balistik Militer' },
                    { number: 'IP67', label: 'Standar Kedap Air Optik' },
                    { number: 'ISO 9001', label: 'Sertifikasi Manufaktur' },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-blue-900/30 backdrop-blur-sm text-center">
                        <div className="text-2xl sm:text-3xl font-black font-display text-blue-400 mb-1">{stat.number}</div>
                        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </section>

            {/* 3. Company Profile & Core Pillars */}
            <section id="about" className="mb-20 space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-xs font-bold font-mono text-blue-400 tracking-widest uppercase mb-2">
                        PILAR UTAMA BISNIS
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-black font-display text-white uppercase tracking-tight">
                        KEUNGGULAN MANUFAKTUR PERISAI CORP
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pillar 1: Karoseri */}
                    <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm hover:border-blue-600/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                            <Truck size={24} />
                        </div>
                        <h4 className="text-xl font-bold font-display text-white mb-3">Karoseri Taktis & Lapis Baja</h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                            Konstruksi karoseri khusus untuk Armored Personnel Carrier (APC 4x4), Rapid Response Vehicle, hingga Mobile Command Center berpenggerak 4WD untuk medan berat.
                        </p>
                        <ul className="space-y-2 text-xs text-slate-300">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-400" /> Kapsul Proteksi Balistik Crew
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-400" /> V-Shape Hull Anti-Ranjau
                            </li>
                        </ul>
                    </div>

                    {/* Pillar 2: Optics */}
                    <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm hover:border-blue-600/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                            <Eye size={24} />
                        </div>
                        <h4 className="text-xl font-bold font-display text-white mb-3">Optik Malam & Termal</h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                            Perangkat Binocular Night Vision Goggles (ELF-3IH), Clip-on Thermal Imager (ELF-C), dan Monokular Termal beresolusi 640x512 berbahan komposit PEEK ringan.
                        </p>
                        <ul className="space-y-2 text-xs text-slate-300">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-400" /> Sensor Termal 12µm High-Sensitivity
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-400" /> Ketahanan Benturan hingga 1,000G
                            </li>
                        </ul>
                    </div>

                    {/* Pillar 3: Defense Systems */}
                    <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm hover:border-blue-600/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                            <Cpu size={24} />
                        </div>
                        <h4 className="text-xl font-bold font-display text-white mb-3">Sistem & Integrasi Taktis</h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                            Integrasi sistem komunikasi satelit (VSAT), transmisi video nirkabel nirkabel berenkripsi, serta konsol perintah bergerak untuk efektivitas komunikasi pertempuran.
                        </p>
                        <ul className="space-y-2 text-xs text-slate-300">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-400" /> App Wireless Image Transmission
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-400" /> Multi-Source Hybrid Power Unit
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. Featured Products Grid Preview */}
            <section className="mb-20 space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xs font-bold font-mono text-blue-400 tracking-widest uppercase mb-1">
                            KATALOG UNGGULAN
                        </h2>
                        <h3 className="text-3xl font-black font-display text-white uppercase tracking-tight">
                            PRODUK PERISAI CORP
                        </h3>
                    </div>
                    <Link
                        href={route('products.index')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
                    >
                        <span>Lihat Semua Produk</span>
                        <ChevronRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-slate-900/70 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-blue-700/50 transition-all group shadow-xl">
                            <div className="relative h-48 bg-slate-950 flex items-center justify-center p-4">
                                {product.image_url ? (
                                    <img src={product.image_url} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                                ) : (
                                    <Shield size={36} className="text-slate-700" />
                                )}
                                <div className="absolute top-3 left-3 bg-blue-950/90 text-blue-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-blue-800">
                                    {product.category_relation?.name || product.category || 'DEFENSE'}
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                                        {product.name}
                                    </h4>
                                    <p className="text-slate-400 text-xs line-clamp-2 mt-1">
                                        {product.description}
                                    </p>
                                </div>

                                <Link
                                    href={route('products.show', product.slug)}
                                    className="w-full py-2 bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-bold text-xs rounded-xl text-center transition-all block"
                                >
                                    Lihat Detail Produk
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
