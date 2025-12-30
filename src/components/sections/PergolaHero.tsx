"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wind, ShieldCheck, ArrowDownToLine, CloudRain, ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PergolaHero = () => {
    const [windForce, setWindForce] = useState<3 | 6>(3);

    return (
        <section className="relative min-h-[90vh] flex flex-col bg-slate-900 overflow-hidden">

            {/* Background Image - Luxury Outdoor */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxe Pergolazonwering"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-20 flex-1 flex flex-col justify-center pt-32 pb-12 text-white">

                {/* 1. HERO CONTENT */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                            Outdoor Living
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-robotoslab mb-6 leading-tight">
                            Het robuuste alternatief <br className="hidden md:block" /> voor een overkapping.
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                            Wilt u wél grote schaduw, maar géén permanente aanbouw die het licht uit uw huis wegneemt? Pergolazonwering combineert de flexibiliteit van een zonnescherm met de kracht van een veranda.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300 mb-12">
                            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full border border-slate-700">
                                <ArrowDownToLine className="w-4 h-4 text-amber-500" /> Windvast door staanders
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full border border-slate-700">
                                <ShieldCheck className="w-4 h-4 text-amber-500" /> Grote oppervlaktes
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full border border-slate-700">
                                <CloudRain className="w-4 h-4 text-amber-500" /> Regenbestendig
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link
                                href="#stabiliteit"
                                className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 group"
                            >
                                Ontdek de voordelen
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/projecten"
                                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur text-lg font-bold py-4 px-10 rounded-full border border-white/20 transition-all"
                            >
                                Bekijk projecten
                            </Link>
                        </div>
                    </motion.div>
                </div>


                {/* 2. INTERACTIVE STABILITY TEST */}
                <div id="stabiliteit" className="max-w-5xl mx-auto w-full">
                    <div className="bg-slate-800/80 backdrop-blur rounded-3xl p-8 border border-white/10 shadow-2xl">

                        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                                    De Stabiliteitstest
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Zie het verschil tussen een standaard scherm en een pergola.
                                </p>
                            </div>

                            {/* Wind Toggle */}
                            <div className="flex bg-slate-900 p-1 rounded-full border border-slate-700">
                                <button
                                    onClick={() => setWindForce(3)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${windForce === 3 ? 'bg-green-500 text-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    Windkracht 3
                                </button>
                                <button
                                    onClick={() => setWindForce(6)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${windForce === 6 ? 'bg-red-500 text-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    Windkracht 6
                                </button>
                            </div>
                        </div>


                        {/* VISUAL SIMULATION */}
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* MODEL A: Standard Awning */}
                            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 relative overflow-hidden group">
                                <h4 className="text-white font-bold mb-4 text-center">Standaard Knikarmscherm</h4>

                                <div className="h-48 relative flex items-center justify-center">
                                    {/* Wall */}
                                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-600 z-10" />

                                    {/* The Awning Arm/Cloth */}
                                    <motion.div
                                        className="w-32 h-1 bg-amber-100 origin-left absolute left-4 top-10"
                                        animate={{
                                            rotate: windForce === 6 ? [0, 5, -5, 8, -2, 0] : [0, 1, 0],
                                            y: windForce === 6 ? [0, -10, 5, -8, 0] : 0
                                        }}
                                        transition={{
                                            duration: windForce === 6 ? 0.5 : 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        style={{ width: '80%' }}
                                    >
                                        <div className="w-full h-24 bg-amber-100/20 skew-x-12 origin-top" />
                                    </motion.div>

                                    {/* Warning Icon if Force 6 */}
                                    {windForce === 6 && (
                                        <motion.div
                                            className="absolute top-2 right-2 text-red-500 bg-red-500/10 p-2 rounded-full"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                        >
                                            <Info className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </div>

                                <p className={`text-center text-sm mt-4 font-bold ${windForce === 6 ? 'text-red-400' : 'text-green-400'}`}>
                                    {windForce === 6 ? "⚠️ Gevaarlijk bewegen (inhalen verplicht)" : "✅ Stabiel bij rustig weer"}
                                </p>
                            </div>


                            {/* MODEL B: Pergola Awning */}
                            <div className="bg-slate-900 rounded-2xl p-6 border border-amber-500/30 relative overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                                <h4 className="text-white font-bold mb-4 text-center text-amber-500">Pergolazonwering</h4>

                                <div className="h-48 relative flex items-center justify-center">
                                    {/* Wall */}
                                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-600 z-10" />

                                    {/* Frame Structure (Pergola) */}
                                    <div className="absolute left-4 top-10 w-[80%] h-32 border-t-4 border-r-4 border-slate-400 rounded-tr-lg" />

                                    {/* The Fabric (Taut inside frame) */}
                                    <motion.div
                                        className="absolute left-4 top-10 w-[80%] h-1 bg-amber-500"
                                        animate={{
                                            // Very minimal movement even at force 6
                                            y: windForce === 6 ? [0, 1, 0] : 0
                                        }}
                                        transition={{ duration: 0.2, repeat: Infinity }}
                                    >
                                        <div className="w-full h-24 bg-amber-500/20" />
                                    </motion.div>

                                    {/* Legs/Posts Indicator */}
                                    <div className="absolute bottom-6 right-[20%] text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                                        Vaste Staanders
                                    </div>

                                </div>

                                <p className="text-center text-sm mt-4 font-bold text-green-400 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    {windForce === 6 ? "✅ Blijft rotsvast staan" : "✅ Maximale stabiliteit"}
                                </p>
                            </div>

                        </div>

                        <div className="mt-8 text-center bg-white/5 border border-white/10 rounded-xl p-4">
                            <p className="text-slate-300 text-sm">
                                "Dankzij de vaste staanders en stevige geleiders geniet u ook als het waait. Het doek blijft <strong>strak gespannen</strong> en klappert niet."
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PergolaHero;
