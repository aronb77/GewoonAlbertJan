"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Blinds, Layers, CheckCircle2, Moon, Sun, Plus } from "lucide-react";

const PergolaUpgrade = () => {
    // Toggles for the Builder
    const [leftScreen, setLeftScreen] = useState(false);
    const [frontScreen, setFrontScreen] = useState(false);
    const [ledLighting, setLedLighting] = useState(false);

    return (
        <section className="py-24 bg-stone-900 text-white overflow-hidden relative">

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-stone-900 z-0">
                <div className={`absolute inset-0 transition-opacity duration-1000 ${ledLighting ? 'opacity-20' : 'opacity-0'} bg-gradient-to-t from-amber-900/40 to-transparent`} />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-amber-500 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Upgrade naar Comfort Class
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-white mb-6">
                        Maak er een tuinkamer van.
                    </h2>
                    <p className="text-stone-400 text-lg leading-relaxed">
                        Last van tocht of laagstaande zon? Breid uw pergola uit met geïntegreerde Solar Screens. Zo creëert u een beschutte cocon, zonder het zicht volledig te verliezen.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* 1. THE VISUAL BUILDER */}
                    <div className="bg-stone-800 rounded-3xl p-4 md:p-8 border border-stone-700 shadow-2xl relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">

                        {/* Night/Day vibe based on LED */}
                        <div className={`absolute inset-0 transition-colors duration-700 rounded-2xl ${ledLighting ? 'bg-black/40' : 'bg-transparent'}`} />

                        {/* THE PERGOLA STRUCTURE */}
                        <div className="relative w-full max-w-md aspect-square perspective-[1000px]">

                            {/* Floor / Deck */}
                            <div className="absolute bottom-10 left-0 right-0 h-32 bg-stone-700/50 transform rotate-x-60 rounded-xl border border-stone-600/30" />

                            {/* Back Wall (House) */}
                            <div className="absolute top-10 bottom-10 left-10 w-4 bg-stone-600 z-0" />

                            {/* Posts - Front */}
                            <div className="absolute right-10 top-20 bottom-10 w-3 bg-stone-400 z-20 rounded-sm shadow-lg" />
                            {/* Posts - Back Right (Hidden perspective slightly) */}
                            <div className="absolute right-32 top-16 bottom-16 w-3 bg-stone-500/50 z-0" />


                            {/* ROOF (Fabric) */}
                            <div className="absolute top-20 left-10 right-10 h-4 bg-amber-600 shadow-lg z-30 flex items-end overflow-hidden origin-left">
                                {/* Overhang/Volant */}
                                <div className="w-full h-2 bg-amber-700 opacity-50" />
                            </div>

                            {/* LED STRIPS (Under the roof) */}
                            <div className={`absolute top-24 left-10 right-10 flex justify-between px-4 transition-opacity duration-500 z-20 ${ledLighting ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="w-full h-1 bg-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.8)] rounded-full" />
                            </div>


                            {/* LEFT SCREEN (Sidewall) */}
                            <div className="absolute top-24 bottom-10 left-14 w-1 bg-stone-500 z-10" /> {/* Guide Rail Back */}
                            <div className="absolute top-24 bottom-10 right-32 w-1 bg-stone-500 z-10" /> {/* Guide Rail Front-Right */}

                            <AnimatePresence>
                                {leftScreen && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "calc(100% - 136px)" }} // Approx calc
                                        exit={{ height: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute top-24 left-10 right-32 z-10 bg-stone-800/80 border-b-4 border-stone-300 backdrop-blur-[2px]"
                                        style={{ bottom: 40 }}
                                    >
                                        {/* Fabric Texture */}
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>


                            {/* FRONT SCREEN */}
                            <AnimatePresence>
                                {frontScreen && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "calc(100% - 136px)" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute top-24 right-10 w-2 left-auto bottom-10 z-20 bg-stone-800/90 border-b-4 border-stone-300 backdrop-blur-[2px]"
                                        style={{ width: 0 }} // Correcting approach: This is side view, so front screen is thin strip? 
                                    // Wait, 3D perspective is tricky. Let's simplify: 
                                    // This view is mostly side/angle. 
                                    // Let's make Front Screen span from Right Post to... left? No, let's treat "Front" as the rightmost face in this perspective.
                                    // Actually, let's just make the "Front" screen cover the rightmost vertical plane.
                                    ></motion.div>
                                )}
                            </AnimatePresence>

                            {/* Trying a simpler 2D "Front" overlay for the specific perspective */}
                            {/* If we view from side, "Front" is the right side. */}
                            <AnimatePresence>
                                {frontScreen && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "calc(100% - 136px)" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute top-24 right-10 w-1/4 z-20 bg-stone-900/80 border-b-4 border-stone-300 backdrop-blur-sm"
                                    >
                                        {/* Fabric Texture */}
                                        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>


                            {/* Furniture Hint (Chair) */}
                            <div className="absolute bottom-16 left-1/3 text-stone-600 opacity-50">
                                <span className="text-4xl">🪑</span>
                            </div>

                        </div>

                        {/* Captions */}
                        <div className="absolute bottom-4 left-4 flex flex-col gap-1 text-xs text-stone-500 font-mono">
                            <span><span className={leftScreen ? "text-green-400 font-bold" : ""}>{leftScreen ? "✓" : "-"}</span> Zijkant (Wind)</span>
                            <span><span className={frontScreen ? "text-green-400 font-bold" : ""}>{frontScreen ? "✓" : "-"}</span> Voorzijde (Laagstaande zon)</span>
                            <span><span className={ledLighting ? "text-amber-400 font-bold" : ""}>{ledLighting ? "✓" : "-"}</span> LED Sfeer</span>
                        </div>

                    </div>


                    {/* 2. CONTROLS & CONTENT (RIGHT) */}
                    <div>
                        <div className="space-y-6">

                            {/* Toggle 1: Left Screen */}
                            <button
                                onClick={() => setLeftScreen(!leftScreen)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${leftScreen ? 'border-amber-500 bg-stone-800' : 'border-stone-700 bg-stone-800/50 hover:border-stone-600'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${leftScreen ? 'bg-amber-500 text-stone-900' : 'bg-stone-700 text-stone-400'}`}>
                                        <Blinds className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-bold ${leftScreen ? 'text-white' : 'text-stone-300'}`}>+ Rits-Screen Sluithoogte</h4>
                                        <p className="text-xs text-stone-500">Blokkeer zijwind en inkijk.</p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${leftScreen ? 'bg-amber-500 border-amber-500 text-stone-900' : 'border-stone-500 text-transparent'}`}>
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                            </button>

                            {/* Toggle 2: Front Screen */}
                            <button
                                onClick={() => setFrontScreen(!frontScreen)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${frontScreen ? 'border-amber-500 bg-stone-800' : 'border-stone-700 bg-stone-800/50 hover:border-stone-600'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${frontScreen ? 'bg-amber-500 text-stone-900' : 'bg-stone-700 text-stone-400'}`}>
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-bold ${frontScreen ? 'text-white' : 'text-stone-300'}`}>+ Rits-Screen Voorzijde</h4>
                                        <p className="text-xs text-stone-500">Tegen laagstaande avondzon.</p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${frontScreen ? 'bg-amber-500 border-amber-500 text-stone-900' : 'border-stone-500 text-transparent'}`}>
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                            </button>

                            {/* Toggle 3: LED */}
                            <button
                                onClick={() => setLedLighting(!ledLighting)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${ledLighting ? 'border-amber-500 bg-stone-800' : 'border-stone-700 bg-stone-800/50 hover:border-stone-600'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${ledLighting ? 'bg-amber-500 text-stone-900' : 'bg-stone-700 text-stone-400'}`}>
                                        <Lightbulb className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-bold ${ledLighting ? 'text-white' : 'text-stone-300'}`}>+ Geïntegreerde LED</h4>
                                        <p className="text-xs text-stone-500">Dimbare spots of strips in de liggers.</p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${ledLighting ? 'bg-amber-500 border-amber-500 text-stone-900' : 'border-stone-500 text-transparent'}`}>
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                            </button>

                        </div>

                        <div className="mt-12 p-6 bg-stone-800/50 rounded-2xl border border-stone-700">
                            <h3 className="text-amber-500 font-bold mb-2 flex items-center gap-2">
                                <Sun className="w-5 h-5" />
                                Het resultaat
                            </h3>
                            <p className="text-stone-300 italic">
                                {leftScreen && frontScreen
                                    ? "Een complete 'tuinkamer'. Beschut tegen wind, zon en muggen. U zit er warmpjes bij tot laat in de avond."
                                    : (leftScreen || frontScreen)
                                        ? "Een beschutte plek met behoud van openheid. De windbreker maakt al een enorm verschil."
                                        : "Een heerlijk open terrasoverkapping met maximale schaduw. Ideaal voor warme zomerdagen."
                                }
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default PergolaUpgrade;
