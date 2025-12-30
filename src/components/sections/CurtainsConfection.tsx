"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Scissors, TrendingDown, Info, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const CurtainsConfection = () => {
    // Pleat Selection: 'wave' | 'double' | 'single'
    const [selectedPleat, setSelectedPleat] = useState<'wave' | 'double' | 'single'>('wave');

    // Content Data
    const pleats = {
        wave: {
            title: "De Wave Plooi",
            subtitle: "De Trend (Hotel Chic)",
            description: "Dé trend van nu. Het gordijn hangt onder de rails in een perfecte, regelmatige golf. Ideaal voor kamerhoge inbetweens.",
            note: "Vereist speciale runners.",
            usage: 90, // Percentage for bar
            usageLabel: "Rijk (2.2x)",
            icon: <Waves className="w-5 h-5" />,
            visual: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1974&auto=format&fit=crop" // Placeholder for Wave Visual
        },
        double: {
            title: "De Dubbele Plooi",
            subtitle: "Klassiek & Vol (Vlinder)",
            description: "Voor een rijke, volle uitstraling. Omdat we meer stof gebruiken, valt het gordijn in diepe, mooie plooien. Prachtig voor velours of zware overgordijnen.",
            note: "Meest luxe uitstraling.",
            usage: 100, // Max usage
            usageLabel: "Zeer Rijk (2.5x)",
            icon: <Scissors className="w-5 h-5" />, // Abstract representation
            visual: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" // Placeholder for Double Pleat
        },
        single: {
            title: "De Enkele Plooi",
            subtitle: "Minimalistisch & Voordelig",
            description: "Strak en minimalistisch. Omdat er minder stof nodig is, is dit de voordeligste optie. Bovendien neemt het gordijn in open toestand weinig ruimte in.",
            note: "Klein pakket in de hoek.",
            usage: 60, // Low usage
            usageLabel: "Economisch (1.8x)",
            icon: <TrendingDown className="w-5 h-5" />,
            visual: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1974&auto=format&fit=crop" // Placeholder for Single Pleat
        }
    };

    const currentPleat = pleats[selectedPleat];

    return (
        <section className="py-24 bg-[#F5F5F0]">
            <div className="container mx-auto px-4">

                {/* HEADLINE */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-stone-500 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Maatwerk & Confectie
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Het verschil zit in <span className="text-[#D2B48C]">de plooi.</span>
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        De manier waarop we het gordijn maken (confectioneren) bepaalt hoe het valt en hoeveel stof we nodig hebben. Wij adviseren u graag.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

                    {/* LEFT: SELECTION MENU */}
                    <div className="order-2 lg:order-1 space-y-4">

                        {/* Option 1: Wave */}
                        <button
                            onClick={() => setSelectedPleat('wave')}
                            className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 group ${selectedPleat === 'wave' ? 'bg-white border-[#D2B48C] shadow-lg scale-105' : 'bg-white/50 border-transparent hover:bg-white hover:border-stone-200'}`}
                        >
                            <div className={`p-3 rounded-xl transition-colors ${selectedPleat === 'wave' ? 'bg-[#D2B48C] text-white' : 'bg-stone-200 text-stone-500'}`}>
                                <Waves className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold mb-1 ${selectedPleat === 'wave' ? 'text-stone-900' : 'text-stone-600'}`}>
                                    De Wave Plooi
                                </h3>
                                <p className="text-stone-500 text-sm">Hotel Chic & Modern</p>
                            </div>
                            {selectedPleat === 'wave' && <CheckCircle2 className="ml-auto w-6 h-6 text-[#D2B48C] animate-in fade-in zoom-in" />}
                        </button>

                        {/* Option 2: Double */}
                        <button
                            onClick={() => setSelectedPleat('double')}
                            className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 group ${selectedPleat === 'double' ? 'bg-white border-[#D2B48C] shadow-lg scale-105' : 'bg-white/50 border-transparent hover:bg-white hover:border-stone-200'}`}
                        >
                            <div className={`p-3 rounded-xl transition-colors ${selectedPleat === 'double' ? 'bg-[#D2B48C] text-white' : 'bg-stone-200 text-stone-500'}`}>
                                <Scissors className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold mb-1 ${selectedPleat === 'double' ? 'text-stone-900' : 'text-stone-600'}`}>
                                    De Dubbele Plooi
                                </h3>
                                <p className="text-stone-500 text-sm">Klassiek, Rijk & Vol (Vlinder)</p>
                            </div>
                            {selectedPleat === 'double' && <CheckCircle2 className="ml-auto w-6 h-6 text-[#D2B48C] animate-in fade-in zoom-in" />}
                        </button>

                        {/* Option 3: Single */}
                        <button
                            onClick={() => setSelectedPleat('single')}
                            className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 group ${selectedPleat === 'single' ? 'bg-white border-[#D2B48C] shadow-lg scale-105' : 'bg-white/50 border-transparent hover:bg-white hover:border-stone-200'}`}
                        >
                            <div className={`p-3 rounded-xl transition-colors ${selectedPleat === 'single' ? 'bg-[#D2B48C] text-white' : 'bg-stone-200 text-stone-500'}`}>
                                <TrendingDown className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold mb-1 ${selectedPleat === 'single' ? 'text-stone-900' : 'text-stone-600'}`}>
                                    De Enkele Plooi
                                </h3>
                                <p className="text-stone-500 text-sm">Strak & Voordelig</p>
                            </div>
                            {selectedPleat === 'single' && <CheckCircle2 className="ml-auto w-6 h-6 text-[#D2B48C] animate-in fade-in zoom-in" />}
                        </button>

                    </div>


                    {/* RIGHT: DYNAMIC VISUAL & DETAILS */}
                    <div className="order-1 lg:order-2 h-full">
                        <div className="bg-white p-8 rounded-3xl shadow-xl h-full flex flex-col">

                            {/* VISUAL IMAGE AREA */}
                            <div className="relative aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden mb-8 group">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedPleat}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        {/* Note: In a real app, I would use distinct images for each pleat. 
                                             Here I simulate the 'Wave' look vs 'Pleat' look with the same image but styled/labelled differently for context, 
                                             or use placeholder images as defined. */}
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url('${currentPleat.visual}')` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Label Overlay */}
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                    <h3 className="text-2xl font-bold font-robotoslab">{currentPleat.title}</h3>
                                    <p className="opacity-90">{currentPleat.subtitle}</p>
                                </div>
                            </div>

                            {/* DETAILS SECTION */}
                            <div className="flex-1">
                                <motion.div
                                    key={selectedPleat + "-content"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-stone-600 leading-relaxed mb-8">
                                        {currentPleat.description}
                                    </p>

                                    {/* Metric: Stofverbruik */}
                                    <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                                        <div className="flex justify-between items-end mb-2">
                                            <label className="text-xs font-bold uppercase text-stone-500 tracking-wider">
                                                Stofverbruik & Volheid
                                            </label>
                                            <span className="text-sm font-bold text-[#D2B48C]">{currentPleat.usageLabel}</span>
                                        </div>
                                        <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#D2B48C]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentPleat.usage}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            />
                                        </div>
                                        <p className="text-xs text-stone-400 mt-2">
                                            De plooi bepaalt hoeveel stof we nodig hebben (en dus de prijs).
                                        </p>
                                    </div>

                                </motion.div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurtainsConfection;
