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
            <Head title="PerisaiCorp" />

            {/* 1. Hero Section */}
            <section className="relative py-12 md:py-20 mb-16">
                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase leading-none mb-6">
                        PERISAI CORP <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                            TECHNOLOGY FOR A SAFER TOMORROW
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                        A Military Defense Group Holding Industry. Providing strategic direction, corporate
                        governance, investment oversight, and synergy across all business units within the
                        national defense industry
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href={route('products.index')}
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
                        >
                            <span>Explore Products Catalog</span>
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href={route('about')}
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 transition-all"
                        >
                            <span>Learn About Us</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Featured Products Grid Preview */}
            <section className="mb-20 space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xs font-bold font-mono text-blue-400 tracking-widest uppercase mb-1">
                            FEATURED CATALOG
                        </h2>
                        <h3 className="text-3xl font-black font-display text-white uppercase tracking-tight">
                            OUR PRODUCTS
                        </h3>
                    </div>
                    <Link
                        href={route('products.index')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
                    >
                        <span>View All Products</span>
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
                                    View Product Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* 5. Institutional Alignment Section */}
            <section className="mb-20 py-12 px-6 bg-slate-900/40 rounded-3xl border border-slate-800/80 backdrop-blur-md">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-xs font-bold font-mono text-slate-500 tracking-widest uppercase mb-2">
                        INSTITUTIONAL ALIGNMENT
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                            Trusted by National Defense Institutions
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                        {[
                            { name: 'KEMHAN RI', image: '/images/KEMHAN.png' },
                            { name: 'TNI AD', image: '/images/TNIAD.png' },
                            { name: 'TNI AU', image: '/images/TNIAU.png' },
                            { name: 'TNI AL', image: '/images/TNIAL.png' },
                        ].map((inst, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 group">
                                <div className="w-24 h-24 sm:w-60 sm:h-60 rounded-2xl bg-slate-950/80 border border-slate-800/80 p-4 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-slate-900 transition-all shadow-lg">
                                    <img
                                        src={inst.image}
                                        alt={inst.name}
                                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 contrast-125 transition-all opacity-80 group-hover:opacity-100"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            if (e.currentTarget.nextElementSibling) {
                                                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                            }
                                        }}
                                    />
                                    <div className="hidden flex-col items-center justify-center text-slate-600">
                                        <Shield size={32} />
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                                    {inst.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </PublicLayout>
    );
}
