import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { PublicLayout } from '@/Layouts/PublicLayout';
import { 
    Radio, Truck, ShieldCheck, Headphones, Award, Cpu, 
    CheckCircle2, ArrowRight, Activity, Eye, Compass, 
    FileCheck, Wrench, Shield, Layers, Zap
} from 'lucide-react';

interface ServiceItem {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

interface AdvantageItem {
    number: string;
    title: string;
    description: string;
}

interface OperationItem {
    src: string;
    alt: string;
    label: string;
}

const SERVICES: ServiceItem[] = [
    {
        number: '01',
        title: 'Tactical Communication Systems',
        description: 'Reliability when it matters most. We provide and maintain high-frequency radio systems and encrypted data links that keep command centers and tactical units connected in the most demanding environments.',
        icon: Radio,
    },
    {
        number: '02',
        title: 'Specialized Vehicle Integration',
        description: 'We engineer mobile command hubs, not just vehicles. Our specialists integrate surveillance, protection, communication, and mission systems into resilient platforms built for frontline operations.',
        icon: Truck,
    },
    {
        number: '03',
        title: 'Defense Equipment Procurement & Testing',
        description: 'Working with government and defense stakeholders, we facilitate compliant procurement of mission-grade equipment. Every system undergoes rigorous functional testing against safety and performance benchmarks.',
        icon: ShieldCheck,
    },
    {
        number: '04',
        title: 'Technical Consultancy & Support',
        description: 'Our expertise extends beyond delivery. We provide technical advisory, operator training, lifecycle maintenance, and responsive support to keep every deployed asset mission-ready.',
        icon: Headphones,
    },
];

const ADVANTAGES: AdvantageItem[] = [
    {
        number: '01',
        title: 'Proven Track Record',
        description: 'Years of experience supporting government and defense programs with accountable delivery and dependable technical outcomes.',
    },
    {
        number: '02',
        title: 'Mission-Focused Engineering',
        description: 'Every solution begins with the operational objective, then adapts technology, platform, and process around the mission.',
    },
    {
        number: '03',
        title: 'End-to-End Readiness',
        description: 'From needs analysis and integration to field testing, training, and after-sales support, one team remains accountable.',
    },
];

const OPERATIONS: OperationItem[] = [
    {
        src: 'images/technical-validation.jpg',
        alt: 'Field operator documenting equipment test results',
        label: 'TECHNICAL VALIDATION',
    },
    {
        src: 'images/platform-inspection.jpg',
        alt: 'Military personnel inspecting a specialized field vehicle',
        label: 'PLATFORM INSPECTION',
    },
    {
        src: 'images/field-evaluation.jpg',
        alt: 'Defense team conducting an operational field exercise',
        label: 'FIELD EVALUATION',
    },
    {
        src: 'images/mission-readiness.jpg',
        alt: 'Tactical equipment being prepared for operations',
        label: 'MISSION READINESS',
    },
];

export default function WhatWeDo() {
    return (
        <PublicLayout>
            <Head title="What We Do - Perisai Corp" />

            {/* 1. Hero Section */}
            <section className="relative mb-16 overflow-hidden rounded-3xl border border-blue-900/40 bg-slate-900/70 p-8 sm:p-14 backdrop-blur-xl shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1759167625071-069dc252702f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=2000"
                    alt="Defense personnel operating in the field"
                    className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl space-y-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                        <Link href={route('home')} className="transition-colors hover:text-white">
                            HOME
                        </Link>
                        <span className="text-slate-600">/</span>
                        <span className="text-blue-400 font-bold">WHAT WE DO</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
                        <Zap size={14} />
                        <span>CORE CAPABILITIES</span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
                        EMPOWERING NATIONAL <br />
                        SECURITY WITH <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">PRECISION</span> <br />
                        TECHNOLOGY.
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                        From secure communication systems to specialized vehicle integration, we provide the technical backbone for critical missions.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <div className="px-4 py-2 bg-blue-950/70 border border-blue-800/80 rounded-xl text-xs font-bold text-blue-300 tracking-wider uppercase flex items-center gap-2">
                            <ShieldCheck size={14} className="text-blue-400" />
                            Defense & Technology Integration
                        </div>
                        <div className="px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300">
                            Government & Military Grade Solutions
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Services / Expertise Section */}
            <section className="mb-24 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            <Layers size={14} />
                            <span>OUR EXPERTISE</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
                            INTEGRATED CAPABILITIES. <br />
                            <span className="text-cyan-400">ONE MISSION.</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
                        Four interconnected capabilities enable us to deliver complete, field-ready solutions instead of isolated systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <article
                                key={service.number}
                                className="group relative bg-slate-900/70 border border-slate-800 hover:border-blue-600/60 rounded-2xl p-7 sm:p-9 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
                            >
                                <div className="mb-8 flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                                        <IconComponent size={24} />
                                    </div>
                                    <span className="font-mono text-[11px] font-bold tracking-widest text-slate-500 uppercase px-3 py-1 bg-slate-950/60 border border-slate-800 rounded-lg">
                                        PROTOCOL {service.number}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* 3. Perisai Advantage Section */}
            <section className="mb-24">
                <div className="bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 border border-blue-900/40 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-8">
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                                    <Award size={14} />
                                    <span>THE PERISAI ADVANTAGE</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
                                    WHY CHOOSE <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                        PERISAI CORP?
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {ADVANTAGES.map((item) => (
                                    <article 
                                        key={item.number} 
                                        className="flex gap-4 bg-slate-950/80 border border-slate-800/80 hover:border-blue-700/50 rounded-2xl p-5 transition-all group shadow-md"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-800/60 bg-blue-950 font-mono text-xs font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            {item.number}
                                        </div>
                                        <div>
                                            <h3 className="font-display text-base font-bold text-white uppercase group-hover:text-blue-300 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="relative min-h-[28rem] sm:min-h-[34rem] overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1717386255773-a456c611dc4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400"
                                    alt="Advanced control systems in a modern production facility"
                                    className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                                    <div className="font-mono text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-lg inline-block backdrop-blur-md">
                                        SYSTEMS APPROACH
                                    </div>
                                    <p className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                                        ENGINEERING, INTEGRATION, AND SUPPORT UNDER ONE ACCOUNTABLE TEAM.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Operational Excellence Section */}
            <section className="mb-24 space-y-10">
                <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                        <Activity size={14} />
                        <span>VERIFIED IN THE FIELD</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
                        OPERATIONAL EXCELLENCE <br />
                        <span className="text-cyan-400">& TESTING</span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        Our functional testing and field operations connect engineering decisions with real-world tactical demands before systems are placed into service.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OPERATIONS.map((item, index) => (
                        <figure 
                            key={item.label} 
                            className="group relative h-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            <figcaption className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                                <div className="font-mono text-xs font-bold text-blue-400">
                                    0{index + 1}
                                </div>
                                <div className="font-display text-sm font-bold tracking-wider text-white uppercase group-hover:text-blue-300 transition-colors">
                                    {item.label}
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
