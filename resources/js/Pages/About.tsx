import React from 'react';
import { Head } from '@inertiajs/react';
import { PublicLayout } from '@/Layouts/PublicLayout';
import { 
    Shield, Target, Compass, Building2, Wrench, Radio, Lock, TrendingUp, Layers,
    Award, CheckCircle2, Cpu, Wrench as ToolIcon, ShieldCheck, Truck, Factory,
    Paintbrush, ThumbsUp, Layers3, Activity
} from 'lucide-react';

export default function About() {
    return (
        <PublicLayout>
            <Head title="About Us - Perisai Corp" />

            {/* 1. Hero Header */}
            <section className="mb-20">
                <div className="bg-slate-900/70 border border-blue-900/40 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
                                <Shield size={14} />
                                <span>ABOUT PERISAI CORP</span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight leading-tight">
                                Innovation Connects.<br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Integration Protects.
                                </span>
                            </h1>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                <strong className="text-white">PT. Perintis Sukses Cipta Tunai</strong>, operating under the trade brand <strong className="text-white">Perisai Corp</strong>, was established in 2025 and focuses on the development, production, and procurement of specialized tactical vehicles and defense solutions.
                            </p>

                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                Backed by the extensive manufacturing experience of <strong className="text-slate-200">SJA Group since 2009</strong>, Perisai Corp delivers end-to-end integrated solutions designed for government, defense, security, disaster management, and civil service operational requirements.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <div className="px-4 py-2 bg-blue-950/60 border border-blue-800/60 rounded-xl text-xs font-bold text-blue-300 tracking-wider uppercase">
                                    Stronger Nation • Safer Tomorrow
                                </div>
                                <div className="px-4 py-2 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs font-semibold text-slate-300">
                                    Established 2025 | SJA Group Heritage (2009)
                                </div>
                            </div>
                        </div>

                        {/* Highlight Card */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-blue-950/80 to-slate-950 border border-blue-800/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
                                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest border-b border-blue-900/60 pb-3 flex items-center justify-between">
                                    <span>INTEGRATED DEFENSE HOLDING</span>
                                    <span className="text-slate-500">EST. 2025</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                                            <Award size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase">SJA Group Manufacturing Synergy</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">Over 15+ years of industrial manufacturing excellence since 2009.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                                            <Shield size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase">Multi-Sector Defense Operations</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">Government, defense, law enforcement, disaster relief & civil services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Our Mission (Reference from Screenshot 2) */}
            <section className="mb-24 space-y-10">
                <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
                        Our Mission
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            num: "01",
                            title: "Integrated Solutions",
                            desc: "To provide reliable and integrated defense solutions that effectively support the operational needs of the Indonesian Armed Forces (TNI) and government institutions."
                        },
                        {
                            num: "02",
                            title: "Defense Independence",
                            desc: "To contribute to national defense independence by advancing local capabilities in engineering, manufacturing, and defense technology."
                        },
                        {
                            num: "03",
                            title: "Quality Standards",
                            desc: "To deliver high-quality, mission-ready products and services that meet stringent standards of performance, safety, and regulatory compliance."
                        },
                        {
                            num: "04",
                            title: "Strategic Infrastructure",
                            desc: "To support national security and resilience through the development of strategic infrastructure, defense systems, and advanced technology solutions."
                        },
                        {
                            num: "05",
                            title: "Strong Partnerships",
                            desc: "To build strong and sustainable partnerships with government stakeholders and industry partners in strengthening Indonesia's defense ecosystem."
                        },
                        {
                            num: "06",
                            title: "Continuous Innovation",
                            desc: "To continuously innovate and improve in order to address evolving challenges in modern defense and security environments."
                        }
                    ].map((m, idx) => (
                        <div key={idx} className="bg-slate-900/70 border border-slate-800 p-8 rounded-2xl hover:border-blue-700/50 backdrop-blur-sm transition-all group shadow-xl flex flex-col justify-between space-y-4">
                            <div>
                                <div className="text-4xl font-black font-display text-slate-400 group-hover:text-blue-400 transition-colors mb-4">
                                    {m.num}
                                </div>
                                <h3 className="text-xl font-bold font-display text-white mb-3">
                                    {m.title}
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    {m.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Vision Banner */}
            <section className="mb-24">
                <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-800/40 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            <Compass size={16} />
                            <span>OUR VISION</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                            Leading Integrated Defense Solutions in Southeast Asia
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            To become the premier provider of integrated defense solutions across Southeast Asia, supporting national sovereignty through continuous technological innovation and strategic collaboration.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-xl">
                            <Compass size={36} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Engineering Excellence / The Manufacturing Lifecycle (Reference from Screenshot 1) */}
            <section className="mb-24 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
                            THE MANUFACTURING LIFECYCLE
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
                            Our Engineering Excellence
                        </h2>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
                        From design to after-sales support, we ensure mission-critical reliability through a vertically integrated process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[
                        {
                            step: "STEP 1",
                            title: "Design and Engineering",
                            desc: "CAD-driven structural modeling and ballistic simulation analysis.",
                            icon: Cpu
                        },
                        {
                            step: "STEP 2",
                            title: "Fabrication",
                            desc: "High-precision cutting and welding of military-grade armor steel.",
                            icon: Factory
                        },
                        {
                            step: "STEP 3",
                            title: "Assembly",
                            desc: "Integration of powertrain, suspension, and tactical subsystems.",
                            icon: ToolIcon
                        },
                        {
                            step: "STEP 4",
                            title: "Customization",
                            desc: "Tailoring loadouts for specific combat or reconnaissance profiles.",
                            icon: Paintbrush
                        },
                        {
                            step: "STEP 5",
                            title: "Finishing",
                            desc: "CARC coating and thermal signature reduction application.",
                            icon: CheckCircle2
                        },
                        {
                            step: "STEP 6",
                            title: "Quality Control",
                            desc: "Ballistic testing and off-road mobility verification.",
                            icon: ShieldCheck
                        },
                        {
                            step: "STEP 7",
                            title: "After-sales Support",
                            desc: "Global spare parts network and technical field maintenance teams.",
                            icon: ThumbsUp
                        }
                    ].map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <div 
                                key={idx}
                                className={`bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-blue-600/50 backdrop-blur-sm transition-all group flex flex-col justify-between space-y-4 shadow-xl ${
                                    idx === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                                }`}
                            >
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <IconComp size={20} />
                                    </div>
                                    <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 5. Integrated Ecosystem (Structure from brochure) */}
            <section className="mb-20 space-y-10">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
                        <Layers size={14} />
                        <span>Strategic Defense & Technology Holding</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
                        INTEGRATED ECOSYSTEM
                    </h2>
                    <p className="text-sm font-bold font-mono text-blue-400 tracking-widest uppercase">
                        ONE VISION. ONE SYSTEM. ONE MISSION.
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                        Perisai Corp integrates platform, infrastructure, communication, and technology into a single unified defense ecosystem that reinforces national readiness, security, and sovereignty.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            name: "PERISAI GUARDIKA INDUSTRI",
                            icon: Truck,
                            desc: "Tactical defense vehicle design, armored personnel carriers & special vehicle manufacturing."
                        },
                        {
                            name: "PERISAI DEFENSE ARMAMENT",
                            icon: Target,
                            desc: "Advanced armament integration, tactical optical systems, night vision & thermal optics."
                        },
                        {
                            name: "PERISAI INFRA DEVELOPMENT",
                            icon: Building2,
                            desc: "Strategic defense infrastructure, tactical facility engineering & defense construction."
                        },
                        {
                            name: "PERISAI SUPPORT FACILITIES",
                            icon: Wrench,
                            desc: "Technology & security support solutions, facility operational maintenance & logistics."
                        },
                        {
                            name: "PERISAI COMM SYSTEMS",
                            icon: Radio,
                            desc: "Tactical mission communication solutions, VSAT satellite links & encrypted video transmission."
                        },
                        {
                            name: "PERISAI TECH SOLUTIONS",
                            icon: Lock,
                            desc: "Advanced cybersecurity, military-grade software integration & technology solutions."
                        },
                        {
                            name: "PERISAI EQUITY PARTNERS",
                            icon: TrendingUp,
                            desc: "Defense technology investments, growth capital management & strategic partnerships."
                        }
                    ].map((unit, idx) => {
                        const IconComp = unit.icon;
                        return (
                            <div
                                key={idx}
                                className={`bg-slate-900/60 border border-slate-800 hover:border-blue-600/50 p-6 rounded-2xl backdrop-blur-sm transition-all group flex flex-col justify-between ${
                                    idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
                                }`}
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                                        <IconComp size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold font-display text-white tracking-wide uppercase group-hover:text-blue-400 transition-colors">
                                            {unit.name}
                                        </h4>
                                        <p className="text-slate-400 text-xs leading-relaxed mt-2">
                                            {unit.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center pt-4">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest border-t border-slate-900 pt-4 inline-block">
                        A STRONGER, SAFER, MORE RESILIENT NATION.
                    </span>
                </div>
            </section>
        </PublicLayout>
    );
}
