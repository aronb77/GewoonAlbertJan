"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wind, ShieldCheck, Zap, Maximize2 } from "lucide-react";

const ScreensWindSpecs = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(14,165,233,0.1),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 text-secondary-500 text-sm font-bold tracking-wider uppercase mb-6 border border-secondary-500/20">
                            <Wind className="w-4 h-4" />
                            Ritz-Technologie
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab mb-6 leading-tight">
                            Stormvast tot <span className="text-secondary-500">145 km/u</span>.
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Onze screens zijn uitgerust met de innovatieve <strong>Zip-technologie</strong>.
                            Het doek zit stevig verankerd in de geleiders, waardoor het strak blijft staan,
                            zelfs bij krachtige windstoten. Geen klapperende doeken, geen scheuren.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Wind,
                                    title: "Windklasse 6",
                                    desc: "Bestand tegen orkaankracht windstoten.",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Insectenwerend",
                                    desc: "Sluit de ramen volledig af voor ongedierte.",
                                },
                                {
                                    icon: Maximize2,
                                    title: "Strak Opspang",
                                    desc: "Altijd een strak doek zonder kreukels.",
                                },
                                {
                                    icon: Zap,
                                    title: "Geluiddempend",
                                    desc: "Geen geklapper of resonantie bij wind.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                                        <item.icon className="w-6 h-6 text-secondary-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Graphical/Animated Representation */}
                    <div className="relative">
                        {/* "Testing Tunnel" Visualization */}
                        <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 shadow-2xl overflow-hidden aspect-[4/5] md:aspect-square flex items-center justify-center">

                            {/* Wind Particles Animation */}
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute h-0.5 bg-secondary-500/30 rounded-full"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `-20%`,
                                        width: `${Math.random() * 100 + 50}px`,
                                    }}
                                    animate={{
                                        x: ['0%', '500%'],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: Math.random() * 1 + 0.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: Math.random() * 2
                                    }}
                                />
                            ))}

                            {/* The "Screen" staying straight */}
                            <div className="relative w-1/3 h-full bg-slate-800 border-x-4 border-slate-600 flex flex-col justify-between z-10">
                                <div className="absolute top-0 left-0 w-full h-8 bg-slate-700 rounded-t-lg z-20 shadow-md"></div>

                                {/* Fabric */}
                                <div className="flex-1 bg-slate-700/50 backdrop-blur-sm relative overflow-hidden grid place-items-center">
                                    <div className="text-slate-500 font-mono text-xs rotate-90 tracking-widest opacity-30">ZIP-LOCK SYSTEM ACTIVE</div>
                                    {/* Subtle ripple to show tension strength */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-8 bg-slate-700 rounded-b-lg z-20 shadow-md"></div>
                            </div>

                            {/* Force indicators */}
                            <motion.div
                                className="absolute right-10 top-1/2 -translate-y-1/2 bg-slate-800/80 backdrop-blur border border-slate-600 px-4 py-2 rounded-lg text-xs font-mono text-secondary-400"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                WIND LOAD: <span className="text-white font-bold">CRITICAL</span><br />
                                STATUS: <span className="text-green-400 font-bold">STABLE</span>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScreensWindSpecs;
