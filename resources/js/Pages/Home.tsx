import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { PublicLayout } from '@/Layouts/PublicLayout';
import { Product, Category } from '@/types/product';
import { HighlightBadge } from '@/Components/HighlightBadge';
import { Shield, ChevronRight, ArrowRight, Grid, Layers } from 'lucide-react';

interface HomeProps {
    featuredProducts: Product[];
    categories: Category[];
}

export default function Home({ featuredProducts, categories }: HomeProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProducts = selectedCategory
        ? featuredProducts.filter(
              (p) =>
                  p.category_relation?.slug === selectedCategory ||
                  p.category_id === categories.find((c) => c.slug === selectedCategory)?.id
          )
        : featuredProducts;

    return (
        <PublicLayout>
            <Head title="PerisaiCorp - Integrated Defense & Technology Solutions" />

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

            {/* 2. Products Section with Category Filter Bar & Updated Cards */}
            <section className="mb-20 space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xs font-bold font-mono text-blue-400 tracking-widest uppercase mb-1">
                            MISSION-READY SOLUTIONS
                        </h2>
                        <h3 className="text-3xl font-black font-display text-white uppercase tracking-tight">
                            OUR PRODUCTS
                        </h3>
                    </div>
                    <Link
                        href={route('products.index')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
                    >
                        <span>View Full Catalog</span>
                        <ChevronRight size={16} />
                    </Link>
                </div>

                {/* Category Filter Bar */}
                <div className="overflow-x-auto pb-2">
                    <div className="flex items-center gap-2 min-w-max">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                                !selectedCategory
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                            }`}
                        >
                            <Grid size={14} />
                            <span>All Categories</span>
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.slug)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                                    selectedCategory === cat.slug
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                                }`}
                            >
                                <Layers size={14} />
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid Layout (3 Columns) */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
                        <Shield size={48} className="mx-auto text-slate-600" />
                        <p className="text-slate-400 text-sm">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-slate-900/70 rounded-2xl border border-blue-900/30 overflow-hidden flex flex-col backdrop-blur-md shadow-xl hover:border-blue-600/50 transition-all duration-300"
                            >
                                {/* Image Header */}
                                <div className="relative h-56 bg-slate-950 flex items-center justify-center border-b border-slate-800/80">
                                    {product.image_url ? (
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="text-slate-700 flex flex-col items-center gap-2">
                                            <Shield size={40} />
                                            <span className="text-[10px] font-mono">NO IMAGE</span>
                                        </div>
                                    )}

                                    {/* Category Tag */}
                                    <div className="absolute top-3 left-3 bg-slate-950/90 text-blue-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-blue-900/60 uppercase">
                                        {product.category_relation?.name || product.category || 'DEFENSE'}
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-xl font-black font-display text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                                {product.name}
                                            </h3>
                                            {product.category && (
                                                <p className="text-xs font-bold text-blue-400 tracking-wider uppercase mt-0.5">
                                                    {product.category}
                                                </p>
                                            )}
                                        </div>

                                        {product.description && (
                                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                                                {product.description}
                                            </p>
                                        )}

                                        {/* Highlights Row */}
                                        {product.highlights && product.highlights.length > 0 && (
                                            <div className="pt-2 flex flex-wrap gap-2">
                                                {product.highlights.slice(0, 3).map((h, i) => (
                                                    <HighlightBadge key={i} item={h} size="sm" />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <div className="pt-2">
                                        <Link
                                            href={route('products.show', product.slug)}
                                            className="w-full py-3 px-4 bg-slate-800 hover:bg-blue-600 text-slate-100 hover:text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group/btn"
                                        >
                                            <span>View Technical Specifications</span>
                                            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* 3. Institutional Alignment Section */}
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
