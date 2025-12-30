"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Drill, Ruler, CheckCircle2, Paintbrush, ArrowRight, CornerUpLeft } from "lucide-react";
import Image from "next/image";

const CurtainsRails = () => {
    // Rail Color State
    const [railColor, setRailColor] = useState<'black' | 'white' | 'aluminium'>('black');

    // Rail Content
    const railColors = {
        black: { label: "Zwart (De Trend)", desc: "Industrieel & Modern. Prachtig bij zwarte kozijnen.", hex: "#1a1a1a" },
        white: { label: "Wit (De Onzichtbare)", desc: "Tijdloos. Valt weg tegen het plafond.", hex: "#ffffff" },
        aluminium: { label: "Aluminium (De Tech-Look)", desc: "Puur, zakelijk en functioneel.", hex: "#94a3b8" }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* PART A: THE HARDWARE (LEFT) */}
                    <div>
                        <span className="text-stone-500 font-bold uppercase tracking-wider mb-2 block text-sm">
                            De Basis (Hardware)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-stone-900 mb-6">
                            Geen rammelende <br /> bouwmarkt-rails.
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8">
                            Een gordijn is zo goed als de rails waar het aan hangt. Wij werken uitsluitend met <strong>professionele aluminium projectrails</strong> (KS/DS). Fluisterstil, gecoat en met soepele bochten.
                        </p>

                        {/* Interactive Rail Configurator */}
                        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 relative overflow-hidden group">

                            {/* Visual Mockup of Rail */}
                            <div className="relative h-48 w-full mb-8 flex items-center justify-center bg-white rounded-2xl shadow-inner border border-stone-100">
                                {/* The Rail Element */}
                                <motion.div
                                    className="w-3/4 h-3 rounded-full shadow-lg relative"
                                    animate={{ backgroundColor: railColors[railColor].hex }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Runners imitation */}
                                    <div className="absolute top-full left-10 w-4 h-8 bg-white/20 border-l border-r border-stone-300/50" />
                                    <div className="absolute top-full left-24 w-4 h-8 bg-white/20 border-l border-r border-stone-300/50" />
                                    <div className="absolute top-full right-10 w-4 h-8 bg-white/20 border-l border-r border-stone-300/50" />

                                    {/* Highlight reflection */}
                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/30 rounded-t-full" />
                                </motion.div>
                                <p className="absolute bottom-4 text-xs font-bold uppercase tracking-widest text-stone-300">
                                    Profiel Doorsnede
                                </p>
                            </div>

                            {/* Color Toggles */}
                            <div className="space-y-4">
                                <p className="font-bold text-stone-700 block mb-2">Kies uw afwerking:</p>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {Object.entries(railColors).map(([key, value]) => (
                                        <button
                                            key={key}
                                            onClick={() => setRailColor(key as any)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${railColor === key ? 'border-stone-800 bg-white shadow-md' : 'border-transparent bg-white hover:bg-stone-100'}`}
                                        >
                                            <div className="w-6 h-6 rounded-full border border-stone-200 shadow-sm" style={{ backgroundColor: value.hex }} />
                                            <span className={`text-sm font-bold ${railColor === key ? 'text-stone-900' : 'text-stone-500'}`}>{value.label.split(' (')[0]}</span>
                                        </button>
                                    ))}
                                </div>

                                <motion.p
                                    key={railColor}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-stone-500 italic text-sm border-l-4 border-[#D2B48C] pl-4"
                                >
                                    "{railColors[railColor].desc}"
                                </motion.p>
                            </div>

                            {/* Bending Badge */}
                            <div className="absolute top-6 right-6 bg-[#D2B48C] text-white p-2 rounded-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                                <CornerUpLeft className="w-6 h-6" />
                            </div>

                        </div>

                        <div className="mt-8 flex gap-4 items-start">
                            <div className="bg-stone-100 p-3 rounded-full text-[#D2B48C]">
                                <CornerUpLeft className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-900">Op maat gebogen</h4>
                                <p className="text-sm text-stone-500">Heeft u een erker of een bocht? We buigen de rails uit één stuk. Dus geen happende koppelstukjes waar uw gordijn blijft haken.</p>
                            </div>
                        </div>

                    </div>


                    {/* PART B: THE SERVICE (RIGHT) */}
                    <div>
                        <span className="text-secondary-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                            Totale Ontzorging
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-stone-900 mb-6">
                            Bang voor beton?
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8">
                            In moderne huizen zijn de plafonds keihard en wanden vaak van beton. Zelf boren eindigt vaak in frustratie, botte boren en scheve gaten. Laat dat zware werk maar aan ons over.
                        </p>

                        <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">

                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <motion.div
                                        initial={{ rotate: -45, x: -20, opacity: 0 }}
                                        whileInView={{ rotate: 0, x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 bg-[#D2B48C] text-stone-900 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6"
                                    >
                                        <Drill className="w-8 h-8" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Professionele Montage</h3>
                                        <p className="text-stone-400 text-sm">Wij hebben het juiste gereedschap.</p>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#D2B48C] shrink-0" />
                                        <span className="text-stone-200">Professionele Hilti hamerboren voor beton</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#D2B48C] shrink-0" />
                                        <span className="text-stone-200">Laser-gestuurd uitlijnen (100% waterpas)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#D2B48C] shrink-0" />
                                        <span className="text-stone-200">Stofvrij werken (met afzuiging)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#D2B48C] shrink-0" />
                                        <span className="text-stone-200">Alles netjes opgeruimd & afgevoerd</span>
                                    </li>
                                </ul>

                                <div className="mt-8 pt-6 border-t border-stone-700">
                                    <p className="text-[#D2B48C] font-bold text-sm uppercase tracking-wider mb-2">Het Resultaat</p>
                                    <p className="text-stone-300 italic">"U hoeft alleen maar te genieten van het eindresultaat. Geen stof, geen gedoe."</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurtainsRails;
