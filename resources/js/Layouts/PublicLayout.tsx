import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Shield } from 'lucide-react';

interface PublicLayoutProps {
    children: React.ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    const { url } = usePage();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
            {/* Tactical Grid Overlay Background */}
            <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
            <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Header Navbar - Sticky top-0 z-50 */}
            <header className="sticky top-0 z-50 border-b border-blue-900/40 bg-slate-950/90 backdrop-blur-md shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center text-blue-400">
                                    <Shield size={22} />
                                </div>
                            </div>
                            <div>
                                <span className="font-display font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
                                    PERISAI CORP
                                </span>
                                <div className="text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-1.5">
                                    <span>Technology for a Saver Tomorrow</span>
                                </div>
                            </div>
                        </Link>

                        {/* Public Navigation Items */}
                        <nav className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wider">
                            <Link
                                href={route('home')}
                                className={`transition-colors py-2 border-b-2 uppercase ${url === '/'
                                        ? 'text-white border-blue-500 font-bold'
                                        : 'text-slate-400 hover:text-blue-400 border-transparent'
                                    }`}
                            >
                                Company Profile
                            </Link>

                            <Link
                                href={route('products.index')}
                                className={`transition-colors py-2 border-b-2 uppercase ${url.startsWith('/products')
                                        ? 'text-white border-blue-500 font-bold'
                                        : 'text-slate-400 hover:text-blue-400 border-transparent'
                                    }`}
                            >
                                Products Catalog
                            </Link>

                            <a
                                href="/#about"
                                className="text-slate-400 hover:text-blue-400 transition-colors py-2 border-b-2 border-transparent uppercase hidden md:inline-block"
                            >
                                Karoseri & Tech
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-900 bg-slate-950/90 py-10 text-slate-400 text-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-900">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="font-display font-extrabold text-white text-base">PERISAI CORP</span>
                                <span className="text-slate-700">|</span>
                                <span className="text-blue-400 font-semibold tracking-wider">DEFENSE & KAROSERI MANUFACTURING</span>
                            </div>
                            <p className="text-slate-500 text-xs mt-1 max-w-lg">
                                Manufaktur karoseri taktis khusus pertahanan, kendaraan lapis baja, serta penyedia optik termal & night vision standar industri militer.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
                        <div>
                            © {new Date().getFullYear()} PT Perisai Corp Indonesia. All rights reserved.
                        </div>
                        <div className="font-mono tracking-widest text-slate-600">
                            ISO 9001:2015 CERTIFIED DEFENSE & KAROSERI
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
