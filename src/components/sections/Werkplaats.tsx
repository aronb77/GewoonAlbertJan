"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, PenTool, Ruler } from "lucide-react";

const Werkplaats = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Left */}
                    <div>
                        <span className="text-blue-400 font-bold uppercase tracking-wider mb-2 block text-sm">
                            De Werkplaats
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab mb-6">
                            Hier gebeurt het.
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-serif">
                            Onze werkplaats in Oldebroek is het hart van de zaak. Hier assembleren we zonwering, testen we motoren en bereiden we elke klus tot in de puntjes voor. Geen snelle dozenschuiverij, maar aandacht voor techniek.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700">
                                    <Ruler className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Assemblage op maat</h4>
                                    <p className="text-slate-400 text-sm">We zagen profielen en monteren onderdelen zelf af waar nodig.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700">
                                    <Wrench className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Reparatie & Onderhoud</h4>
                                    <p className="text-slate-400 text-sm">Een kapotte motor of gescheurd doek? In de werkplaats maken we het weer als nieuw.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700">
                                    <PenTool className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Stalenkamer</h4>
                                    <p className="text-slate-400 text-sm">Bekijk honderden doekstalen in echt daglicht.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Right (Abstract Representation of Workshop) */}
                    <div className="relative h-[500px] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group">
                        {/* Placeholder for Workshop Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/80 mix-blend-overlay z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
                            alt="Werkplaats impression"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Label */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute bottom-8 left-8 bg-blue-600/90 backdrop-blur px-6 py-3 rounded-xl z-20 border border-blue-400/30"
                        >
                            <span className="font-bold text-white block">Bezoek op afspraak</span>
                            <span className="text-blue-100 text-xs">Zuiderzeestraatweg, Oldebroek</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Werkplaats;
