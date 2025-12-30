"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck } from "lucide-react";

const locations = [
    { name: "Oldebroek", x: 45, y: 55, main: true },
    { name: "Wezep", x: 60, y: 45 },
    { name: "Hattem", x: 75, y: 50 },
    { name: "Zwolle", x: 80, y: 30 },
    { name: "Elburg", x: 25, y: 40 },
    { name: "'t Harde", x: 30, y: 65 },
    { name: "Kampen", x: 35, y: 20 },
];

const brands = [
    { name: "Somfy", desc: "Motorisering & Smart Home", color: "text-amber-500" },
    { name: "Brel Home", desc: "Solar Motoren", color: "text-blue-500" },
    { name: "Tibelly", desc: "Hoogwaardige Doeken", color: "text-green-600" },
    { name: "Heroal", desc: "Rolluik Systemen", color: "text-red-600" },
    { name: "Velux", desc: "Dakramen", color: "text-red-500" },
];

const AboutLocal = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* PART A: REGION */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Text Side */}
                    <div>
                        <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Regio Noord-Veluwe</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                            Bekend met uw wijk.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Ik werk uitsluitend in de regio Noord-Veluwe. Van de karakteristieke jaren '30 woningen in Hattem tot de nieuwbouw in Wezep en Stadshagen: ik ken de bouwwijzen en weet precies welke montage waar nodig is.
                        </p>
                        <div className="flex items-center gap-3 text-slate-500 font-medium">
                            <MapPin className="w-5 h-5 text-secondary-500" />
                            <span>Snel ter plaatse, geen voorrijkosten.</span>
                        </div>
                    </div>

                    {/* Map Visual */}
                    <div className="relative aspect-square md:aspect-video bg-slate-50 rounded-3xl border border-slate-100 p-8 shadow-inner overflow-hidden">
                        {/* Abstract decorative map background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg width="100%" height="100%">
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        {/* Pins */}
                        <div className="relative w-full h-full">
                            {locations.map((loc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring" }}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-default"
                                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                                >
                                    <div className="relative">
                                        {/* Pulse Effect for Main Location */}
                                        {loc.main && (
                                            <span className="absolute -inset-2 rounded-full bg-secondary-500/20 animate-ping" />
                                        )}

                                        {/* Pin Body */}
                                        <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md transition-colors ${loc.main ? "bg-secondary-500 w-6 h-6" : "bg-slate-400 group-hover:bg-secondary-400"}`} />

                                        {/* Label Tooltip */}
                                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold text-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                            {loc.name}
                                        </div>
                                        {/* Main label always visible */}
                                        {loc.main && (
                                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 font-bold text-slate-900 text-sm whitespace-nowrap">
                                                {loc.name}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PART B: BRANDS */}
                <div className="text-center">
                    <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Kwaliteit & Garantie</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-12">
                        Partner van de A-merken.
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
                    >
                        {brands.map((brand, idx) => (
                            <div
                                key={idx}
                                className="group bg-slate-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-100 hover:border-slate-200"
                            >
                                {/* Placeholder for Logo - Using stylized text for robustness */}
                                <div className={`text-xl md:text-2xl font-black mb-2 transition-colors duration-300 text-slate-300 group-hover:text-slate-800`}>
                                    {brand.name}
                                </div>
                                <div className="h-px w-8 bg-slate-200 mx-auto mb-2 group-hover:bg-secondary-500 transition-colors" />
                                <p className="text-xs text-slate-400 font-medium">{brand.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    <p className="mt-12 text-slate-500 max-w-2xl mx-auto italic">
                        "Vakmanschap stopt niet bij de montage. Ik werk alleen met producten waar ik zelf 100% achter sta. Geen goedkope import, maar degelijke Europese kwaliteit."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutLocal;
