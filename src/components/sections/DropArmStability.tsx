"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, ShieldCheck, Triangle, Anchor, Info } from "lucide-react";
import Image from "next/image";

const DropArmStability = () => {
    // Wind Force: 1-7
    const [windForce, setWindForce] = useState(2);

    // Wind force descriptions/effects
    const windEffects = {
        1: { label: "Windkracht 1 - Zwak", color: "text-green-500", effect: 0, text: "Geen beweging." },
        2: { label: "Windkracht 2 - Zwak", color: "text-green-500", effect: 2, text: "Geen beweging." },
        3: { label: "Windkracht 3 - Matig", color: "text-green-500", effect: 5, text: "Lichte trilling." },
        4: { label: "Windkracht 4 - Matig", color: "text-amber-500", effect: 10, text: "Parasol waait om. Uitvalscherm hangt stil." },
        5: { label: "Windkracht 5 - Vrij Krachtig", color: "text-amber-500", effect: 15, text: "Bomen bewegen. Scherm blijft stabiel." },
        6: { label: "Windkracht 6 - Krachtig", color: "text-red-500", effect: 25, text: "Knikarmschermen moeten in. Uitvalscherm houdt stand." },
        7: { label: "Windkracht 7 - Hard", color: "text-red-600", effect: 40, text: "Uitzonderlijk sterk. De driehoekconstructie werkt." },
    };

    const currentEffect = windEffects[windForce as keyof typeof windEffects];

    return (
        <section className="py-24 bg-[#F0F4F8] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT: The Narrative (The Why) */}
                    <div className="order-2 lg:order-1">
                        <span className="text-secondary-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                            Technische Perfectie
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                            Waarom dit model al 50 jaar <span className="text-secondary-500">de standaard is.</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Het is geen toeval dat u dit type zonwering overal ziet, van balkons op 10 hoog tot winderige hoekhuizen. De constructie is gebaseerd op de sterkste vorm in de natuurkunde: **de driehoek**.
                        </p>

                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex gap-5">
                                <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary-500 border border-slate-100">
                                    <Triangle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Onverwoestbaar</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Omdat de winddruk direct wordt afgevoerd naar de gevel via de armen, kan dit scherm veel hogere windsnelheden aan dan een knikarmscherm.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-5">
                                <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary-500 border border-slate-100">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">Geen Hefboom</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Door de vaste armen is er geen zwaar 'moment' (hefboomwerking) op de muur. Ideaal voor minder sterke muren of smalle kozijnen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT: The Visual (Blueprint Overlay + Wind Test) */}
                    <div className="order-1 lg:order-2">

                        {/* 1. The Interactive Stage */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">

                            {/* Header Panel */}
                            <div className="bg-slate-900 text-white p-6 flex justify-between items-center z-20 relative">
                                <h3 className="font-bold flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-sky-400" />
                                    Windtunnel Test
                                </h3>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${currentEffect.color} bg-white/10`}>
                                    {currentEffect.label}
                                </div>
                            </div>

                            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">

                                {/* Background Wall Texture */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')]" />

                                {/* Simulated Wind Particles */}
                                <AnimatePresence>
                                    <motion.div className="absolute inset-0 z-10 pointer-events-none">
                                        {[...Array(windForce * 3)].map((_, i) => (
                                            <motion.div
                                                key={`wind-${i}-${windForce}`}
                                                className={`absolute h-0.5 rounded-full ${windForce > 5 ? 'bg-red-400/50' : 'bg-sky-400/30'}`}
                                                style={{
                                                    top: `${20 + Math.random() * 60}%`,
                                                    left: '-10%',
                                                    width: `${50 + Math.random() * 100}px`
                                                }}
                                                animate={{ x: ['0%', '500%'] }}
                                                transition={{
                                                    duration: (8 - windForce) * 0.2, // Faster wind = shorter duration
                                                    repeat: Infinity,
                                                    delay: Math.random(),
                                                    ease: "linear"
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                </AnimatePresence>


                                {/* SCENE CONTAINER */}
                                <div className="absolute inset-0 flex items-center justify-center translate-y-10">

                                    {/* COMPETING PARASOL (Left) */}
                                    <div className="absolute left-10 bottom-10 flex flex-col items-center opacity-80">
                                        <AnimatePresence>
                                            {windForce >= 4 ? (
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 90, x: 50, y: 50, opacity: 0 }}
                                                    transition={{ duration: 0.8 }}
                                                    className="flex flex-col items-center"
                                                >
                                                    {/* Broken Parasol */}
                                                    <div className="relative w-20 h-20">
                                                        <div className="absolute bottom-0 left-1/2 w-1 h-20 bg-slate-400 -rotate-45 origin-bottom" />
                                                        <div className="absolute top-0 left-1/2 w-24 h-12 bg-red-200 rounded-t-full -translate-x-1/2 rotate-12" />
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    animate={{ rotate: [0, windForce, -windForce, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2 / windForce }}
                                                >
                                                    {/* Normal Parasol */}
                                                    <div className="w-24 h-12 bg-slate-300 rounded-t-full relative mb-1">
                                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-slate-400 translate-y-full" />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <span className="text-[10px] uppercase font-bold text-slate-400 mt-20">Parasol</span>
                                    </div>


                                    {/* HERO: DROP ARM (Right/Center) */}
                                    <div className="relative z-20 translate-x-10">
                                        {/* Wall Connection */}
                                        <div className="absolute left-0 top-[-100px] bottom-[-100px] w-4 bg-slate-300 border-l border-slate-400" />

                                        {/* The Awning Group */}
                                        {/* NOTE: With Drop Arms, the Triangle is Cassette -> FrontBar -> WallArmMount */}
                                        <div className="relative">

                                            {/* 1. Cassette Box (Top) */}
                                            <div className="w-40 h-8 bg-slate-800 rounded-sm relative z-30" />

                                            {/* 2. Fabric (Diagonal) */}
                                            <motion.div
                                                className="absolute top-4 left-2 w-48 h-32 bg-secondary-500 origin-top-left -skew-x-12 z-20 shadow-lg"
                                                style={{ transform: 'rotate(45deg)' }}
                                                animate={{
                                                    rotate: 45 + (Math.sin(Date.now()) * (windForce > 6 ? 0.5 : 0)), // Minimal movement
                                                }}
                                            />

                                            {/* 3. The Arm (The Critical Triangle Base) */}
                                            <div className="absolute top-36 left-0 w-44 h-2 bg-slate-700 -rotate-[25deg] origin-left z-30 shadow-md">
                                                {/* Pivot on Wall */}
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 rounded-full" />
                                            </div>

                                            {/* THE GLOWING BLUEPRINT OVERLAY */}
                                            <svg className="absolute top-0 left-0 w-60 h-60 z-40 pointer-events-none visible">
                                                <motion.path
                                                    d="M 5 5 L 140 140 L 5 130 Z" // Triangle roughly matching the shape above
                                                    fill="rgba(34, 197, 94, 0.2)"
                                                    stroke={windForce > 5 ? "#22c55e" : "#4ade80"}
                                                    strokeWidth="3"
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    animate={{ pathLength: 1, opacity: 1 }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                />
                                                {/* Force Arrows on the Arm */}
                                                <motion.path
                                                    d="M 100 120 L 20 120" // Arrow pointing to wall
                                                    stroke="#22c55e"
                                                    strokeWidth="2"
                                                    markerEnd="url(#arrowhead)"
                                                    animate={{ opacity: [0.5, 1, 0.5], x: [0, -5, 0] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                />
                                                <defs>
                                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                                        <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                                                    </marker>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>

                                </div>

                                {/* Text Feedback Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 flex items-start gap-3">
                                    <Info className={`w-5 h-5 shrink-0 mt-0.5 ${currentEffect.color}`} />
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{currentEffect.text}</p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {windForce < 4 ? "Ideaal weer." : windForce < 7 ? "De winddruk wordt afgevoerd naar de muur." : "Constructie bewezen stormvast."}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Controls */}
                            <div className="bg-white p-6 border-t border-slate-100">
                                <label className="flex justify-between text-xs font-bold uppercase text-slate-500 mb-4">
                                    <span>Test de windkracht</span>
                                    <span>Beaufort {windForce}</span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="7"
                                    step="1"
                                    value={windForce}
                                    onChange={(e) => setWindForce(parseInt(e.target.value))}
                                    className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-secondary-500 hover:accent-secondary-600 transition-all"
                                />
                                <div className="flex justify-between mt-2 px-1">
                                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                                        <div key={n} className="w-0.5 h-2 bg-slate-200" />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DropArmStability;
