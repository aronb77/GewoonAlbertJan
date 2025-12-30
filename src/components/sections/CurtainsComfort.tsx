"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Volume2, Thermometer, Snowflake, Info, MoveRight, Volume1, VolumeX } from "lucide-react";

const CurtainsComfort = () => {

    // Toggle States
    const [soundProtection, setSoundProtection] = useState(false); // false = echo, true = dampened
    const [thermalProtection, setThermalProtection] = useState(false); // false = cold, true = warm

    return (
        <section className="py-24 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#D2B48C] font-bold uppercase tracking-wider mb-2 block text-sm">
                        Het onzichtbare comfort
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Rust voor uw oren.<br />Warmte voor uw huis.
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        Gordijnen doen meer dan alleen verduisteren. Ze zijn de belangrijkste factor voor een fijne akoestiek en werken als een isolerende deken voor uw ramen.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* ZONE A: THE ECHO KILLER (ACOUSTICS) */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 flex flex-col">

                        <div className="p-8 pb-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                    <Volume2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900">Weg met de galm.</h3>
                            </div>
                            <p className="text-stone-600 mb-8">
                                Harde vloeren + strakke muren = galm. Gordijnen absorberen geluidsgolven direct.
                            </p>

                            {/* Main Toggle */}
                            <div className="flex justify-center mb-8">
                                <div className="bg-stone-100 p-1 rounded-full flex relative">
                                    {/* Slider Background */}
                                    <motion.div
                                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md z-0"
                                        animate={{ x: soundProtection ? '100%' : '0%' }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        initial={false}
                                        style={{ left: 2 }} // slight offset correction
                                    />
                                    <button
                                        onClick={() => setSoundProtection(false)}
                                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${!soundProtection ? 'text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
                                    >
                                        Zonder Gordijn
                                    </button>
                                    <button
                                        onClick={() => setSoundProtection(true)}
                                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${soundProtection ? 'text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
                                    >
                                        Met Gordijn
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* VISUALIZATION: EQUALIZER */}
                        <div className="flex-1 bg-stone-900 relative flex items-center justify-center min-h-[300px] border-t border-stone-100">

                            {/* Background Context (Room Outline) */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                            {/* Status Label */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm uppercase tracking-wider bg-black/50 px-3 py-1 rounded backdrop-blur">
                                {soundProtection ? "Status: GELUIDSABSORPTIE ACTIEF" : "Status: HARDE REFLECTIE (GALM)"}
                            </div>

                            {/* Equalizer Bars */}
                            <div className="flex items-center gap-2 md:gap-3 h-32">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-3 md:w-4 rounded-full ${soundProtection ? 'bg-green-400' : 'bg-red-500'}`}
                                        animate={{
                                            // Scale Y based on state: 
                                            // Echo = High variation, fast, chaotic
                                            // Dampened = Low amplitude, slow, smooth
                                            scaleY: soundProtection
                                                ? [0.2 + Math.random() * 0.1, 0.3 + Math.random() * 0.1, 0.2 + Math.random() * 0.1] // Low
                                                : [0.3, 1.5 + Math.random(), 0.3] // High
                                        }}
                                        transition={{
                                            duration: soundProtection ? 1.5 : 0.4, // Slow vs Fast
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            delay: i * 0.1,
                                            ease: soundProtection ? "easeInOut" : "linear"
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Sound Icon floating representation */}
                            <motion.div
                                className="absolute bottom-6 right-6 text-white/50"
                                animate={{ scale: soundProtection ? 1 : 1.2, opacity: soundProtection ? 0.5 : 1 }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                {soundProtection ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
                            </motion.div>

                        </div>
                    </div>


                    {/* ZONE B: HEAT SHIELD (THERMAL) */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 flex flex-col">

                        <div className="p-8 pb-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                                    <Thermometer className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900">Houd de warmte binnen.</h3>
                            </div>
                            <p className="text-stone-600 mb-8">
                                Glas is koud. De stilstaande luchtlaag tussen gordijn en raam vormt een isolerende buffer.
                            </p>

                            {/* Main Toggle */}
                            <div className="flex justify-center mb-8">
                                <div className="bg-stone-100 p-1 rounded-full flex relative">
                                    {/* Slider Background */}
                                    <motion.div
                                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md z-0"
                                        animate={{ x: thermalProtection ? '100%' : '0%' }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        initial={false}
                                        style={{ left: 2 }}
                                    />
                                    <button
                                        onClick={() => setThermalProtection(false)}
                                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${!thermalProtection ? 'text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
                                    >
                                        Kaal Raam
                                    </button>
                                    <button
                                        onClick={() => setThermalProtection(true)}
                                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${thermalProtection ? 'text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
                                    >
                                        Met Isolatie
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* VISUALIZATION: THERMAL CROSS SECTION */}
                        <div className="flex-1 bg-stone-200 relative min-h-[300px] border-t border-stone-100 overflow-hidden">

                            {/* The Room (Right Side) - Changes Color */}
                            <motion.div
                                className="absolute inset-y-0 right-0 w-3/4 z-0"
                                animate={{ backgroundColor: thermalProtection ? '#fff7ed' : '#f0f9ff' }} // Warm OrangeTint v Cool BlueTint
                                transition={{ duration: 0.8 }}
                            />

                            {/* The Visual Elements */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">

                                {/* Window Pane (Vertical Bar) */}
                                <div className="w-2 h-48 bg-blue-200 border border-blue-300 shadow-sm relative mr-8" />

                                {/* The Curtain (Appears) */}
                                <AnimatePresence>
                                    {thermalProtection && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 192, opacity: 1 }} // h-48 = 192px
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-4 bg-[#D2B48C] rounded-full shadow-lg mr-8 origin-top relative"
                                        >
                                            {/* Fabric Texture */}
                                            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Cold Air Arrows (From Left/Window) */}
                                <div className="absolute left-10 md:left-20 flex flex-col gap-4">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center text-blue-500"
                                            animate={{ x: [0, 10, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                                        >
                                            <Snowflake className="w-5 h-5 mr-1" />
                                            <MoveRight className="w-5 h-5" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Warmth Indicator (Room Side) */}
                                <div className="absolute right-10 md:right-20">
                                    <motion.div
                                        className={`text-2xl font-bold font-mono ${thermalProtection ? 'text-orange-500' : 'text-blue-400'}`}
                                        key={thermalProtection ? 'warm' : 'cold'}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {thermalProtection ? "20.5°C" : "18.0°C"}
                                    </motion.div>
                                    <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Gevoelstemp</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* FABRIC FACTOR SCALE (Between Zones - Optional or Bottom) */}
                <div className="mt-16 bg-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm border border-stone-100">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-[#D2B48C]/10 p-3 rounded-full text-[#D2B48C]">
                            <Info className="w-6 h-6" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h4 className="font-bold text-stone-900 mb-1">Dikkere stof = Meer comfort</h4>
                            <p className="text-stone-600 text-sm">
                                Hoe dikker de stof, hoe hoger de isolatiewaarde en geluidsabsorptie.
                            </p>
                        </div>

                        {/* Visual Scale */}
                        <div className="flex items-center gap-1 w-full md:w-auto">
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="h-8 w-8 rounded bg-stone-200 border border-stone-300 opacity-30" />
                                <span className="text-[10px] uppercase font-bold text-stone-400">Vitrage</span>
                                <span className="text-xs font-bold text-stone-500">10%</span>
                            </div>
                            <div className="h-0.5 w-8 bg-stone-200" />
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="h-8 w-8 rounded bg-[#D2B48C] border border-[#c1a075] opacity-60" />
                                <span className="text-[10px] uppercase font-bold text-stone-400">Inbetween</span>
                                <span className="text-xs font-bold text-stone-500">40%</span>
                            </div>
                            <div className="h-0.5 w-8 bg-stone-200" />
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="h-8 w-8 rounded bg-stone-800 border border-stone-600 shadow-md" />
                                <span className="text-[10px] uppercase font-bold text-stone-400">Velours</span>
                                <span className="text-xs font-bold text-stone-900 text-green-600">90%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CurtainsComfort;
