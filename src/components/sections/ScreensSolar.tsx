"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, BatteryFull, Ban, Zap } from "lucide-react";

const ScreensSolar = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Solar Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold tracking-wider uppercase mb-6 border border-yellow-200">
                            <Sun className="w-4 h-4" />
                            100% Duurzame Energie
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6 leading-tight">
                            Ook uw Screens: <span className="text-secondary-500">100% Draadloos</span>.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Net als bij onze rolluiken, kunt u nu kiezen voor Solar Screens. De motor laadt zichzelf op via een onopvallende zonnecel op de voorlijst. Ideaal voor montage op kunststof kozijnen of dakkapellen.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Invisible Power */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-500 border border-slate-200">
                            Flush Design
                        </div>

                        {/* Visual: Solar Strip Simulation */}
                        <div className="h-40 mb-8 relative flex items-center justify-center bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                            {/* Solar Strip Animation */}
                            <div className="w-3/4 h-2 bg-slate-900 rounded-full relative overflow-hidden">
                                {/* Light Ray Hit */}
                                <motion.div
                                    className="absolute inset-0 bg-yellow-400/50 blur-sm"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                                {/* Charging Flow */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-green-400"
                                    animate={{ width: ["0%", "100%"], opacity: [1, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </div>

                            {/* Connection Line */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-900 to-transparent -translate-x-1/2 translate-y-2 opacity-20"
                            />

                            <div className="absolute -bottom-6 text-green-500 flex flex-col items-center">
                                <Zap className="w-5 h-5 fill-current animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Charging</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            De Onzichtbare Kracht
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            De zonnecel is subtiel weggewerkt in de kast. Hij vangt daglicht op, ook als het bewolkt is. Geen logge panelen, maar strak design.
                        </p>
                    </motion.div>

                    {/* Card 2: Damage Free */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="h-40 mb-8 flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-inner relative">
                            <div className="relative">
                                {/* Drill Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-16 h-16 text-slate-300"
                                >
                                    <path d="M14 9l-2 2-2-2-2 2-2-2 2-2" />
                                    <path d="M2 13h10" />
                                    <path d="M11 13a4 4 0 0 1 4 4v3" />
                                    <path d="M15 13a4 4 0 0 1 4-4h3" />
                                </svg>

                                {/* Forbidden Overlay */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -top-4 -right-4 bg-white rounded-full"
                                >
                                    <Ban className="w-12 h-12 text-red-500 fill-red-500/10" />
                                </motion.div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Schadevrije Montage
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            We hoeven <strong className="text-slate-900">geen</strong> gat naar binnen te boren voor stroom. Uw kozijnen en muren blijven 100% intact. Geen lelijke kabelgoten in de woonkamer.
                        </p>
                    </motion.div>

                    {/* Card 3: Always Moving */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="h-40 mb-8 flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-inner">
                            <div className="relative">
                                <BatteryFull className="w-16 h-16 text-green-500" />
                                <motion.div
                                    className="absolute inset-0 bg-green-400/20 blur-xl rounded-full"
                                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Altijd in Beweging
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            De geïntegreerde accu is krachtig genoeg om het screen wekenlang te bedienen zonder direct zonlicht. U bedient hem simpel met de meegeleverde afstandsbediening.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ScreensSolar;
