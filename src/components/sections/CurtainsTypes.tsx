"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, EyeOff, Moon, Star, Hand, Info } from "lucide-react";
import Image from "next/image";

const CurtainsTypes = () => {

    // Config for the 3 types
    const types = [
        {
            id: 'vitrage',
            title: "Vitrage",
            subtitle: "Maximaal Licht",
            description: "Dunne, transparante stoffen die het felle zonlicht breken, maar waar u wel doorheen kijkt. Vaak gecombineerd met overgordijnen voor de avond.",
            useCase: "Voorkomt inkijk overdag, behoudt uitzicht.",
            transparency: "high", // Clear silhouette
            icon: <Sun className="w-6 h-6 text-yellow-500" />,
            blurAmount: "blur-sm", // Slight blur
            opacity: 0.6
        },
        {
            id: 'inbetween',
            title: "Inbetweens",
            subtitle: "Privacy & Sfeer",
            description: "Iets dikker dan vitrage, maar dunner dan een overgordijn. De ideale tussenoplossing. Het licht komt mooi binnen, maar overdag kijkt niemand naar binnen.",
            useCase: "Vaak kamerhoog (dus geen naden!)",
            transparency: "medium", // Blurred silhouette
            icon: <EyeOff className="w-6 h-6 text-[#D2B48C]" />,
            badge: "Meest Gekozen",
            blurAmount: "blur-md", // Heavy blur
            opacity: 0.3
        },
        {
            id: 'overgordijn',
            title: "Overgordijnen",
            subtitle: "Warmte & Duisternis",
            description: "Dikkere stoffen voor maximale sfeer, akoestiek en isolatie. Verkrijgbaar als 'lichtdicht' (slaapkamer) of gewone dichte stof (woonkamer).",
            useCase: "Dempt het geluid in holle ruimtes.",
            transparency: "none", // No silhouette
            icon: <Moon className="w-6 h-6 text-indigo-500" />,
            blurAmount: "blur-none", // N/A
            opacity: 0
        }
    ];

    return (
        <section className="py-24 bg-white" id="collectie">
            <div className="container mx-auto px-4">

                {/* HEADLINE */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-stone-500 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Transparantie & Privacy
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        De perfecte balans tussen <span className="text-[#D2B48C]">licht en privacy.</span>
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        Elke stof heeft een andere functie. Gebruik de <span className="font-bold text-[#D2B48C] inline-flex items-center gap-1"><Hand className="w-4 h-4" /> hand-test</span> hieronder om de transparantie te ervaren.
                    </p>
                </div>

                {/* THE CARDS */}
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12 relative max-w-6xl mx-auto">

                    {types.map((type, index) => (
                        <div key={type.id} className="group relative flex flex-col h-full">

                            {/* EXPERT TIP BADGE (Floating for Inbetween) */}
                            {type.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-[#D2B48C] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-2 animate-bounce-slow">
                                    <Star className="w-3 h-3 fill-white" />
                                    {type.badge}
                                </div>
                            )}

                            {/* INTERACTIVE VISUAL CARD */}
                            <div className="relative aspect-[3/4] bg-stone-100 rounded-3xl overflow-hidden shadow-lg border border-stone-100 mb-8 cursor-pointer group-hover:shadow-2xl transition-all duration-500">

                                {/* 1. Background Content (The "Hand" or Object behind) */}
                                <div className="absolute inset-0 flex items-center justify-center bg-stone-200">
                                    {/* Silhouette/Shadow Hand */}
                                    <motion.div
                                        className={`w-3/4 h-3/4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center text-stone-800 ${type.id === 'vitrage' ? 'blur-[2px]' : type.id === 'inbetween' ? 'blur-[8px]' : ''}`}
                                    >
                                        <Hand className="w-48 h-48" strokeWidth={type.id === 'overgordijn' ? 0 : 1.5} />
                                    </motion.div>

                                    {/* Text hint if not hovering */}
                                    <div className="absolute bottom-6 text-stone-400 text-sm font-medium opacity-100 group-hover:opacity-0 transition-opacity">
                                        Hover om te testen
                                    </div>
                                </div>

                                {/* 2. Fabric Overlay Layer */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none transition-all duration-500"
                                    style={{
                                        backgroundColor: type.id === 'overgordijn' ? '#475569' : '#e7e5e4', // Slate-600 vs Stone-200
                                        opacity: type.id === 'vitrage' ? 0.3 : type.id === 'inbetween' ? 0.6 : 1
                                    }}
                                >
                                    {/* Texture Pattern */}
                                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />
                                </div>

                                {/* 3. Label on top */}
                                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-stone-600 text-xs font-bold uppercase tracking-wider shadow-sm">
                                    {type.id === 'vitrage' ? 'Transparant' : type.id === 'inbetween' ? 'Semi-transparant' : 'Verduisterend'}
                                </div>

                            </div>

                            {/* TEXT CONTENT */}
                            <div className="text-center px-4 flex-1 flex flex-col items-center">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-4 text-[#D2B48C] group-hover:scale-110 transition-transform duration-300">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-stone-800 mb-1 font-robotoslab">{type.title}</h3>
                                <p className="text-[#D2B48C] font-bold text-sm uppercase tracking-wide mb-4">{type.subtitle}</p>
                                <p className="text-stone-500 leading-relaxed text-sm mb-6">
                                    {type.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-stone-100 w-full">
                                    <p className="text-xs font-bold text-stone-400 flex items-center justify-center gap-2">
                                        <Info className="w-3 h-3" />
                                        {type.useCase}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CurtainsTypes;
