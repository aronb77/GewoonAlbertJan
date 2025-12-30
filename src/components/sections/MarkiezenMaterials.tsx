"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trees, PaintBucket, Umbrella, Clock, Info, Check, X, Star } from "lucide-react";

const MarkiezenMaterials = () => {
    const [ageMode, setAgeMode] = useState<'new' | 'old'>('new');

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* HEADLINE */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-green-800 font-serif italic text-lg tracking-wide mb-2 block">
                        Kiezen voor Karakter of Gemak?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Hardhout vs. Aluminium
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed font-serif">
                        Vroeger was er alleen hout. Tegenwoordig is aluminium nauwelijks meer van echt te onderscheiden, maar met één groot voordeel: het onderhoud.
                    </p>
                </div>

                {/* CONTROLS */}
                <div className="flex justify-center mb-16">
                    <div className="bg-stone-100 p-1.5 rounded-full flex gap-2 border border-stone-200">
                        <button
                            onClick={() => setAgeMode('new')}
                            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${ageMode === 'new' ? 'bg-white shadow-md text-green-900' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            <Star className="w-4 h-4" />
                            Dag 1 (Nieuw)
                        </button>
                        <button
                            onClick={() => setAgeMode('old')}
                            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${ageMode === 'old' ? 'bg-stone-800 shadow-md text-white' : 'text-stone-500 hover:text-stone-700'}`}
                        >
                            <Clock className="w-4 h-4" />
                            Na 10 jaar (Geen onderhoud)
                        </button>
                    </div>
                </div>


                {/* COMPARISON CARDS */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

                    {/* OPTION A: WOOD */}
                    <div className="group relative">
                        <div className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">

                            {/* Visual Header */}
                            <div className="h-64 relative bg-[#d4c5a9] overflow-hidden">
                                {/* Wood Texture */}
                                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

                                {/* DECAY OVERLAY (The paint peeling effect) */}
                                <motion.div
                                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cracked-ground.png')] opacity-60 mix-blend-multiply"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: ageMode === 'old' ? 0.7 : 0 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-stone-600/30 mix-blend-multiply"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: ageMode === 'old' ? 1 : 0 }}
                                    transition={{ duration: 1 }}
                                />

                                <div className="absolute bottom-6 left-6 text-white text-shadow">
                                    <div className="bg-stone-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold w-fit mb-2 flex items-center gap-2">
                                        <Trees className="w-3 h-3" /> De Purist
                                    </div>
                                    <h3 className="text-2xl font-bold font-robotoslab">Hardhout (Meranti)</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-stone-600 mb-6 font-serif leading-relaxed">
                                    Traditioneel vakmanschap. Geeft een ongeëvenaarde, warme uitstraling die perfect past bij monumentale panden.
                                </p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-sm text-stone-700">
                                        <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span>Authentieke charme & houtnerf</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-stone-700">
                                        <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span>Warme, natuurlijke uitstraling</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-stone-700 font-bold bg-amber-50 p-2 rounded-lg -mx-2">
                                        <PaintBucket className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                                        <span>Nadeel: Elke 5 jaar schilderen</span>
                                    </li>
                                </ul>

                                {ageMode === 'old' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-100 flex items-start gap-3"
                                    >
                                        <X className="w-5 h-5 shrink-0" />
                                        <p>Zonder onderhoud gaat hout scheuren en bladderen. Houtrot kan het frame aantasten.</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>


                    {/* OPTION B: ALUMINUM */}
                    <div className="group relative transform md:-translate-y-4">
                        {/* Winner Badge */}
                        <div className="absolute -top-4 right-8 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
                            <Star className="w-3 h-3 fill-white" />
                            Meest Gekozen
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden border-2 border-green-600 shadow-2xl h-full flex flex-col relative z-10">

                            {/* Visual Header */}
                            <div className="h-64 relative bg-[#d4c5a9]">
                                {/* Smooth Texture (Coating) */}
                                <div className="absolute inset-0 bg-stone-200" />
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />

                                {/* "Aging" - NO CHANGE */}

                                <div className="absolute bottom-6 left-6 text-stone-800">
                                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold w-fit mb-2 flex items-center gap-2 text-stone-900 border border-stone-200">
                                        <Umbrella className="w-3 h-3" /> De Slimme Keuze
                                    </div>
                                    <h3 className="text-2xl font-bold font-robotoslab">Aluminium</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-stone-600 mb-6 font-serif leading-relaxed">
                                    De moderne standaard. Dezelfde klassieke vormen, maar dan van onverwoestbaar aluminium.
                                </p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-start gap-3 text-sm text-stone-700">
                                        <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span>Onderhoudsvrij & Rotvrij</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-stone-700">
                                        <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span>Blijft altijd strak in de lak</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-stone-700">
                                        <Check className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                        <span>Klassieke omkasting mogelijk</span>
                                    </li>
                                </ul>

                                {ageMode === 'old' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-50 text-green-800 p-4 rounded-xl text-sm border border-green-100 flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 shrink-0" />
                                        <p>Ziet er na 10 jaar nog precies hetzelfde uit. Even een doekje erover en klaar.</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                {/* EXPERT TIP */}
                <div className="mt-16 bg-stone-900 text-stone-300 rounded-2xl p-6 md:p-8 flex items-start gap-6 max-w-4xl mx-auto border border-stone-800">
                    <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full bg-stone-700 overflow-hidden border-2 border-green-800">
                            {/* Placeholder Albert Jan */}
                            <div className="w-full h-full flex items-center justify-center text-2xl">👨‍🔧</div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1 border-2 border-stone-900">
                            <Info className="w-3 h-3 text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold font-robotoslab mb-2">Tip van Albert Jan</h4>
                        <p className="font-serif italic text-lg leading-relaxed text-stone-400">
                            "90% van mijn klanten kiest tegenwoordig voor aluminium. Met de huidige poedercoatings is het verschil met hout nauwelijks te zien, tot je na 5 jaar geen schilder hoeft te bellen. Tenzij u een rijksmonument bezit, adviseer ik aluminium."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MarkiezenMaterials;
