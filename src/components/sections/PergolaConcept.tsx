"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CloudOff, Sun, Wind, Umbrella, ArrowDown, Check, X, ArrowRight, CloudRain, Droplets } from "lucide-react";

const PergolaConcept = () => {
    const [isRaining, setIsRaining] = useState(false);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* 1. HEADING */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        De Evolutie van Zonwering
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Waarom kiezen voor een pergola?
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Twijfelt u tussen een normaal zonnescherm en een vaste veranda? De pergola combineert het beste van twee werelden.
                    </p>
                </div>

                {/* 2. THE EVOLUTION CARDS */}
                <div className="grid md:grid-cols-3 gap-8 mb-24 items-end">

                    {/* CARD 1: Knikarmscherm */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative group hover:shadow-lg transition-all opacity-80 hover:opacity-100">
                        <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm text-slate-400">
                            <Sun className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">1. Het Knikarmscherm</h3>
                        <p className="text-slate-500 text-sm mb-6">De klassieker voor het terras.</p>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                <span>Volledig vrije doorloop</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                <span>Onzichtbaar in gesloten stand</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                <span>Windgevoelig bij grote uitval</span>
                            </li>
                        </ul>
                        <div className="bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold text-center">
                            Verdict: Perfect voor gemiddelde terrassen tot 3m diep.
                        </div>
                    </div>

                    {/* CARD 2: Vaste Veranda */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative group hover:shadow-lg transition-all opacity-80 hover:opacity-100">
                        <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm text-slate-400">
                            <Umbrella className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">2. De Vaste Veranda</h3>
                        <p className="text-slate-500 text-sm mb-6">De definitieve verbouwing.</p>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                <span>Altijd droog (vast dak)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                <span>Robuuste constructie</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                <span>Lichtverlies in huis (donker)</span>
                            </li>
                        </ul>
                        <div className="bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold text-center">
                            Verdict: Een permanente 'kamer' in de tuin.
                        </div>
                    </div>

                    {/* CARD 3: PERGOLA (WINNER) */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: -20, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-slate-900 rounded-3xl p-8 border-2 border-amber-500 relative shadow-2xl transform md:-translate-y-6"
                    >
                        <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                            De Slimste Keuze
                        </div>

                        <div className="mb-6 bg-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-slate-900">
                            <CloudOff className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">3. De Pergolazonwering</h3>
                        <p className="text-slate-400 text-sm mb-6">Het beste van beide werelden.</p>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm text-slate-200">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400" /></div>
                                <span>Windvast (t/m kracht 6)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-200">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400" /></div>
                                <span>Regenbestendig doek</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-200">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400" /></div>
                                <span>Dak open? Licht in huis!</span>
                            </li>
                        </ul>
                        <div className="bg-white/10 text-amber-400 px-4 py-3 rounded-lg text-xs font-bold text-center border border-white/5">
                            Verdict: Flexibel, robuust en behoud van daglicht.
                        </div>
                    </motion.div>

                </div>


                {/* 3. WATER DRAINAGE FEATURE */}
                <div className="bg-blue-50/50 rounded-3xl overflow-hidden border border-blue-100 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2">

                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                Slimme Afwatering
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                Geen waterzakken.
                            </h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Een grote angst bij doekzonwering is regenwater dat blijft staan. Bij onze pergola's is dat verleden tijd. Dankzij de slimme spanning en hellingshoek loopt regenwater direct naar de goten en staanders.
                            </p>

                            <button
                                onClick={() => setIsRaining(!isRaining)}
                                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all w-fit shadow-lg shadow-blue-500/20"
                            >
                                <CloudRain className="w-5 h-5" />
                                {isRaining ? "Stop de regen" : "Start regensimulatie"}
                            </button>
                        </div>

                        {/* VISUAL SIMULATOR */}
                        <div className="bg-slate-200 relative min-h-[300px] overflow-hidden flex items-end">

                            {/* Weather Overlay */}
                            <div className={`absolute inset-0 transition-opacity duration-1000 ${isRaining ? 'bg-slate-900/10' : 'bg-transparent'}`} />

                            {/* Rain Particles */}
                            {isRaining && (
                                <div className="absolute inset-0 pointer-events-none">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-0.5 bg-blue-400 opacity-60"
                                            style={{
                                                height: Math.random() * 20 + 10,
                                                left: `${Math.random() * 100}%`
                                            }}
                                            initial={{ top: -50 }}
                                            animate={{ top: "120%" }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                delay: Math.random() * 1,
                                                ease: "linear"
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* The Pergola Side View */}
                            <div className="relative w-full h-[80%] flex items-end px-12 pb-12">

                                {/* Wall */}
                                <div className="w-8 h-full bg-slate-400 border-r border-slate-500 relative z-10" />

                                {/* Pergola Structure */}
                                <div className="flex-1 h-ful relative">
                                    {/* Posts */}
                                    <div className="absolute right-0 bottom-0 w-3 h-48 bg-slate-700" />

                                    {/* Roof (Sloped) */}
                                    <div className="absolute left-0 top-12 right-0 h-2 bg-amber-600 origin-left rotate-[5deg] z-20" />

                                    {/* Water Flowing Off */}
                                    {isRaining && (
                                        <motion.div
                                            className="absolute right-[-5px] top-[70px] w-2 h-20 bg-blue-400 rounded-full blur-[1px]"
                                            initial={{ scaleY: 0, opacity: 0 }}
                                            animate={{ scaleY: 1, opacity: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="absolute bottom-0 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-50" />
                                        </motion.div>
                                    )}

                                </div>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-500">
                                Zij-aanzicht
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PergolaConcept;
