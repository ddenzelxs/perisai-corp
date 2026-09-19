import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { PublicLayout } from '@/Layouts/PublicLayout';
import { Product } from '@/types/product';
import { SpecTable } from '@/Components/SpecTable';
import { HighlightBadge } from '@/Components/HighlightBadge';
import { ArrowLeft, Shield, Mail, CheckCircle2 } from 'lucide-react';

interface ProductShowProps {
    product: Product;
}

export default function ProductShow({ product }: ProductShowProps) {
    return (
        <PublicLayout>
            <Head title={`${product.name} - ${product.category || 'Product Specifications'}`} />

            {/* Breadcrumb & Back Link */}
            <div className="mb-6 flex items-center justify-between">
                <Link
                    href={route('products.index')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-400 transition-colors uppercase tracking-wider"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Products Catalog</span>
                </Link>

                <div className="text-[11px] font-mono text-slate-500 uppercase">
                    SERIES ID: {product.slug}
                </div>
            </div>

            {/* Detail Main Section */}
            <div className="bg-slate-900/60 rounded-2xl border border-blue-900/30 p-6 sm:p-10 backdrop-blur-md shadow-2xl space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Image Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 h-80 sm:h-[420px] flex items-center justify-center p-6 shadow-inner">
                            {product.image_url ? (
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="text-slate-700 flex flex-col items-center gap-2">
                                    <Shield size={56} />
                                    <span className="text-xs font-mono">NO IMAGE AVAILABLE</span>
                                </div>
                            )}

                            <div className="absolute top-4 left-4 bg-blue-950/90 text-blue-400 text-xs font-mono font-bold px-3 py-1 rounded-lg border border-blue-800 uppercase">
                                {product.category_relation?.name || product.category || 'DEFENSE'}
                            </div>
                        </div>
                    </div>

                    {/* Info & Specs Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <div className="text-xs font-bold font-mono text-blue-400 tracking-widest uppercase mb-1 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                PERISAI CORP DEFENSE & BODYWORK
                            </div>
                            <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
                                {product.name}
                            </h1>
                            {product.category && (
                                <p className="text-sm font-bold text-blue-400 tracking-wider uppercase mt-1">
                                    {product.category}
                                </p>
                            )}
                        </div>

                        {product.description && (
                            <div className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-blue-500/60 pl-4 py-1">
                                {product.description}
                            </div>
                        )}

                        {/* Feature Highlights */}
                        {product.highlights && product.highlights.length > 0 && (
                            <div className="pt-2">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                    Key Features & Highlights
                                </h3>
                                <div className="flex flex-wrap items-center justify-around gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    {product.highlights.map((highlight, idx) => (
                                        <HighlightBadge key={idx} item={highlight} size="md" />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Technical Specifications Table */}
                        <div className="pt-4">
                            <SpecTable specifications={product.specifications} />
                        </div>

                        {/* Contact & Inquiry Banner */}
                        <div className="pt-4 bg-slate-950/80 p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Need Custom Tactical / Bodywork Specifications?</h4>
                                <p className="text-[11px] text-slate-400">Our engineering team is ready to support your mission-critical customization requirements.</p>
                            </div>
                            <a
                                href="mailto:info@perisaicorp.com"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shrink-0"
                            >
                                <Mail size={16} />
                                <span>Contact Sales Team</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
