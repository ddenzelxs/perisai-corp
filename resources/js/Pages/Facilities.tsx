import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { PublicLayout } from '@/Layouts/PublicLayout';
import { 
    Factory, Cpu, Wrench, ShieldCheck, CheckCircle2, Building2, 
    Layers, MapPin, ArrowRight, Clock, Shield, Activity, Award,
    Check, Sparkles, ChevronRight
} from 'lucide-react';

interface FacilityItem {
    index: string;
    title: string;
    label: string;
    description: string;
    image: string;
    alt: string;
}

interface CapabilityItem {
    title: string;
    description: string;
}

const FACILITIES: FacilityItem[] = [
    {
        index: '01',
        title: 'Body Fabrication',
        label: 'Heavy-Duty Production',
        description: 'An integrated fabrication area for cutting, forming, welding, and assembling vehicle structures under strict process control.',
        image: 'images/body-fabrication.jpg',
        alt: 'Welder fabricating a metal structure',
    },
    {
        index: '02',
        title: 'Precision Machining',
        label: 'CNC & Metalworks',
        description: 'Precision machinery support and modern production equipment to manufacture specialized components with high consistency and tight tolerances.',
        image: 'images/precision-machine.jpg',
        alt: 'Industrial machine control system',
    },
    {
        index: '03',
        title: 'Assembly Line',
        label: 'Integrated Workflow',
        description: 'Assembly workflow designed for specialized bodywork projects, ranging from subsystem integration to final vehicle inspection.',
        image: 'images/assembly-line.jpg',
        alt: 'Modern manufacturing floor with industrial machinery',
    },
];

const CAPABILITIES: CapabilityItem[] = [
    { title: 'CNC MACHINING', description: 'High-precision components and high repeatability' },
    { title: 'METAL FORMING', description: 'Specialized panel and structural forming' },
    { title: 'MIG / TIG WELDING', description: 'Controlled structural joint welding' },
    { title: 'SURFACE FINISHING', description: 'Surface preparation and anti-corrosion protection' },
    { title: 'SYSTEM INTEGRATION', description: 'Electrical and subsystem integration' },
    { title: 'QUALITY CONTROL', description: 'Multi-layered inspection prior to handover' },
];

const STATS = [
    { value: '10,000 M²', label: 'Production Area' },
    { value: '06', label: 'Integrated Zones' },
    { value: '24/7', label: 'Site Security' },
    { value: '100%', label: 'Final Inspection' },
];

export default function Facilities() {
    return (
        <PublicLayout>
            <Head title="Facilities & Capabilities - Perisai Corp" />

            {/* 1. Hero Header */}
            <section className="relative mb-16 overflow-hidden rounded-3xl border border-blue-900/40 bg-slate-900/70 p-8 sm:p-14 backdrop-blur-xl shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=2000"
                    alt="Perisai Corp manufacturing facility"
                    className="absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl space-y-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                        <Link href={route('home')} className="transition-colors hover:text-white">
                            HOME
                        </Link>
                        <span className="text-slate-600">/</span>
                        <span className="text-blue-400 font-bold">FACILITIES</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
                        <Factory size={14} />
                        <span>BUILT FOR MISSION-CRITICAL WORK</span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        ENGINEERED <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                            TO DELIVER.
                        </span>
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                        Perisai Corp's production and operational facilities combine expert personnel, modern equipment, and structured processes to manufacture rugged, secure, and mission-ready tactical vehicles.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <div className="px-4 py-2 bg-blue-950/70 border border-blue-800/80 rounded-xl text-xs font-bold text-blue-300 tracking-wider uppercase flex items-center gap-2">
                            <ShieldCheck size={14} className="text-blue-400" />
                            ISO 9001:2015 Quality Standards
                        </div>
                        <div className="px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300">
                            Vertical Manufacturing & Integrated Control
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-900/80 border border-blue-900/40 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl divide-x divide-y md:divide-y-0 divide-slate-800">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="p-6 text-center space-y-1">
                            <div className="font-display text-3xl sm:text-4xl font-black text-blue-400 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Production Facilities Section */}
            <section className="mb-24 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            <Layers size={14} />
                            <span>PRODUCTION FACILITIES</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
                            FROM RAW MATERIAL <br />
                            <span className="text-cyan-400">TO MISSION READY</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
                        Every production zone is interconnected to maintain quality, safety, and timely delivery across all vehicle manufacturing stages.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {FACILITIES.map((facility) => (
                        <article 
                            key={facility.index} 
                            className="group bg-slate-900/70 border border-slate-800 hover:border-blue-700/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.alt}
                                    className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                <div className="absolute left-5 top-5 border border-blue-500/50 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg font-mono text-xs font-bold text-cyan-300 shadow-lg">
                                    {facility.index}
                                </div>
                            </div>
                            <div className="p-7 space-y-3 flex-grow flex flex-col justify-between border-t border-slate-800/80">
                                <div>
                                    <div className="font-mono text-[11px] font-bold tracking-widest text-blue-400 uppercase mb-1">
                                        {facility.label}
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-blue-300 transition-colors">
                                        {facility.title}
                                    </h3>
                                    <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 4. Core Capabilities Section */}
            <section className="mb-24">
                <div className="bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 border border-blue-900/40 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                                <Cpu size={14} />
                                <span>CORE CAPABILITIES</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase tracking-tight leading-tight">
                                ONE FACILITY. <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                    COMPLETE CONTROL.
                                </span>
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Our production capabilities exist within a single operational ecosystem, ensuring seamless coordination, documentation, and thorough quality control.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CAPABILITIES.map((cap, index) => (
                                <div 
                                    key={cap.title} 
                                    className="bg-slate-950/80 border border-slate-800/80 hover:border-blue-700/50 rounded-xl p-5 transition-all group flex gap-4 items-start shadow-md"
                                >
                                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950 px-2 py-1 rounded border border-blue-800/60 shrink-0">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-sm font-bold text-white tracking-wider uppercase group-hover:text-blue-300 transition-colors">
                                            {cap.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. People & Operations (Headquarters) Section */}
            <section className="mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                        <img
                            src="images/office.jpg"
                            alt="Perisai Corp modern office and collaboration space"
                            className="h-[26rem] w-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                        <div className="absolute bottom-6 left-6 border-l-2 border-blue-500 pl-4 bg-slate-950/70 backdrop-blur-md p-3 rounded-r-xl border-y border-r border-slate-800">
                            <div className="font-mono text-[10px] font-bold tracking-widest text-blue-400 uppercase">HEADQUARTERS</div>
                            <div className="mt-0.5 font-display text-lg font-extrabold text-white">INDONESIA</div>
                        </div>
                    </div>

                    <div className="space-y-6 lg:pl-4">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            <Building2 size={14} />
                            <span>PEOPLE & OPERATIONS</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight leading-tight">
                            WHERE IDEAS BECOME <br />
                            <span className="text-cyan-400">FIELD SOLUTIONS</span>
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Our office facilities foster collaboration between engineering, project management, procurement, and quality assurance teams. Secure and integrated workspaces ensure every operational requirement is translated into manufacturable, high-grade solutions.
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            {['Engineering Office', 'Project War Room', 'Secure Meeting Area', 'Client Briefing Room'].map(
                                (item) => (
                                    <div key={item} className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-xs font-mono font-semibold text-blue-300">
                                        <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
