"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wind, Volume2, VolumeX, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const DropArmMechanics = () => {
    const [windActive, setWindActive] = useState(false);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Comfort & Geluid
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Het geheim van een <span className="text-secondary-500">stil scherm.</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Niemand wil wakker liggen van een klapperend zonnescherm. Het type arm bepaalt de doekspanning. Wij laten u graag het verschil horen én zien.
                    </p>
                </div>

                {/* Control Toggle */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={() => setWindActive(!windActive)}
                        className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl ${windActive ? "bg-blue-600 text-white scale-105" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                    >
                        <Wind className={`w-5 h-5 ${windActive ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""}`} />
                        {windActive ? "Wind Simulatie AAN" : "Zet de wind aan"}
                    </button>
                </div>

                {/* COMPARISON GRID */}
                <div className="grid lg:grid-cols-2 gap-0 border-4 border-slate-100 rounded-3xl overflow-hidden shadow-2xl">

                    {/* LEFT: STANDARD (The Problem) */}
                    <div className="bg-slate-50 p-8 lg:p-16 flex flex-col items-center relative overflow-hidden">
                        {/* Background Chaos Pattern (visible when windy) */}
                        <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 transition-opacity duration-300 ${windActive ? "opacity-100" : "opacity-30"}`} />

                        <div className="relative z-10 w-full max-w-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-500" />
                                Standaard Armen
                            </h3>
                            <p className="text-center text-slate-500 text-sm mb-8 font-mono">Status: Zwaartekracht</p>

                            {/* VISUAL: SAGGING AWNING */}
                            <div className="relative h-64 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6 flex items-center justify-center">
                                {/* The Wall */}
                                <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-200 border-r border-slate-300" />

                                {/* The Awning Structure */}
                                <motion.div
                                    className="w-48 h-32 relative origin-top-left"
                                    animate={windActive ? {
                                        rotate: [0, 2, -1, 3, -2, 0],   // Chaotic shake
                                        y: [0, -2, 2, -1, 0]
                                    } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.4, repeat: windActive ? Infinity : 0 }}
                                >
                                    {/* Arm */}
                                    <div className="absolute top-28 left-0 w-44 h-1 bg-slate-400 -rotate-[20deg] origin-left" />

                                    {/* Fabric (Sagging curve) */}
                                    <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <motion.path
                                            d="M 5 0 Q 60 70 90 60 L 90 60" // Curvy/Sagging shape
                                            fill="rgba(148, 163, 184, 0.4)" // Slate-400/40
                                            stroke="#94a3b8"
                                            strokeWidth="2"
                                            animate={windActive ? {
                                                d: [
                                                    "M 5 0 Q 60 70 90 60 L 90 60", // Sag
                                                    "M 5 0 Q 60 30 90 50 L 90 60", // Flap Up
                                                    "M 5 0 Q 60 80 90 40 L 90 60"  // Flap chaotic
                                                ]
                                            } : { d: "M 5 0 Q 60 70 90 60 L 90 60" }}
                                            transition={{ duration: 0.3, repeat: windActive ? Infinity : 0 }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Sound Waves Animation */}
                                {windActive && (
                                    <div className="absolute top-10 right-10">
                                        <Volume2 className="w-8 h-8 text-red-500 animate-pulse" />
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0"
                                                animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                                            />
                                        ))}
                                        <span className="absolute top-10 left-10 text-xs font-bold text-red-500 whitespace-nowrap animate-bounce">
                                            *FLAP* *KLAP*
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className={`p-4 rounded-xl border transition-colors duration-500 text-center ${windActive ? "bg-red-50 border-red-100 text-red-700" : "bg-slate-100 border-slate-200 text-slate-500"}`}>
                                <h4 className="font-bold mb-1">{windActive ? "⚠️ KLAPPERT BIJ WIND" : "Alleen bij windstil"}</h4>
                                <p className="text-xs">
                                    Doek hangt slap. Gevoelig voor windvlagen.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT: GAS SPRING (The Solution) */}
                    <div className="bg-white p-8 lg:p-16 flex flex-col items-center relative overflow-hidden group">
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-blue-50 opacity-0 transition-opacity duration-500 ${windActive ? "opacity-100" : "opacity-0"}`} />

                        <div className="relative z-10 w-full max-w-sm">
                            <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                Stormvast & Gasveer
                            </h3>
                            <p className="text-center text-blue-400 text-sm mb-8 font-mono">Status: Permanente Spanning</p>

                            {/* VISUAL: TIGHT AWNING */}
                            <div className="relative h-64 bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden mb-6 flex items-center justify-center">
                                {/* The Wall */}
                                <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-100 border-r border-slate-200" />

                                {/* The Awning Structure */}
                                <div className="w-48 h-32 relative origin-top-left">

                                    {/* The Gas Piston Arm */}
                                    <div className="absolute top-28 left-0 w-44 h-3 bg-slate-800 -rotate-[25deg] origin-left rounded-full shadow-md overflow-hidden flex items-center px-1">
                                        {/* Internal Piston Visualization */}
                                        <div className="w-full h-1 bg-slate-600 rounded-full relative">
                                            <motion.div
                                                className="absolute right-0 top-0 bottom-0 bg-blue-500 rounded-full"
                                                initial={{ width: "40%" }}
                                                animate={windActive ? { width: ["40%", "45%", "40%"] } : { width: "40%" }} // Absorb shock
                                                transition={{ duration: 0.5, repeat: windActive ? Infinity : 0 }}
                                            />
                                        </div>
                                    </div>

                                    {/* Fabric (Drum Tight) */}
                                    <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path
                                            d="M 5 0 L 95 65 L 95 65" // Straight Line
                                            fill="rgba(59, 130, 246, 0.2)" // Blue-500/20
                                            stroke="#3b82f6"
                                            strokeWidth="3"
                                        />
                                    </svg>
                                </div>

                                {/* No Sound / Silence Indicator */}
                                {windActive && (
                                    <div className="absolute top-10 right-10 flex flex-col items-center">
                                        <div className="bg-green-100 p-2 rounded-full mb-2">
                                            <VolumeX className="w-6 h-6 text-green-600" />
                                        </div>
                                        <span className="text-xs font-bold text-green-600">Muisstil</span>
                                    </div>
                                )}
                            </div>

                            <div className={`p-4 rounded-xl border transition-colors duration-500 text-center ${windActive ? "bg-green-50 border-green-100 text-green-700" : "bg-blue-50 border-blue-100 text-blue-700"}`}>
                                <h4 className="font-bold mb-1">{windActive ? "✅ ABSORBEERT DE WIND" : "Altijd strak"}</h4>
                                <p className="text-xs">
                                    Gasveren houden het doek constant op spanning.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DropArmMechanics;
