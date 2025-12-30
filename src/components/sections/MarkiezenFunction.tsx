"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, ThermometerSun, AlertTriangle } from "lucide-react";

const MarkiezenFunction = () => {
    // 0 = Noon (Top), 100 = Evening (Side)
    const [sunPosition, setSunPosition] = useState(0);

    // Auto animate sun
    useEffect(() => {
        const interval = setInterval(() => {
            setSunPosition((prev) => (prev + 0.5) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Calculate light intrusion
    // Standard awning allows side light as sun moves to side (> 50)
    const standardIntrusion = Math.max(0, (sunPosition - 40) * 1.5);
    // Markies blocks it almost completely
    const markiesIntrusion = 0;

    return (
        <section className="py-24 bg-[#F9FAFB] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* 1. CONTENT LEFT */}
                    <div>
                        <span className="text-green-800 font-serif italic text-lg tracking-wide mb-2 block">
                            Functionele Perfectie
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                            De meest effectieve <br />
                            <span className="text-green-800">zonwering die er is.</span>
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8 font-serif">
                            Dankzij de karakteristieke bolle vorm en de gesloten zijkanten heeft de zon geen schijn van kans. Waar bij andere schermen de zon er via de zijkant nog 'onderdoor' kan piepen, blokkeert de markies de hitte vanuit elke hoek.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm border border-stone-200 mt-1">
                                    <ShieldCheck className="w-6 h-6 text-green-700" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg">100% Schaduw op het glas</h4>
                                    <p className="text-stone-500 font-serif">De 'korf' omsluit het raam volledig. Hierdoor blijft de warmte gegarandeerd buiten.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm border border-stone-200 mt-1">
                                    <ThermometerSun className="w-6 h-6 text-green-700" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg">De koelste keuze</h4>
                                    <p className="text-stone-500 font-serif">Geen zonnestralen die stiekem via de zijkant naar binnen glippen.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 2. VISUAL RIGHT: SUN PATH SIMULATION */}
                    <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xl relative min-h-[500px] flex flex-col">

                        {/* Sun Track */}
                        <div className="h-32 relative mb-12 border-b border-stone-100">
                            {/* Sun Arc Path (Visual only) */}
                            <div className="absolute top-8 left-1/4 right-0 h-px border-t border-dashed border-stone-300 rounded-full w-full opacity-50" />

                            <motion.div
                                className="absolute top-0 w-16 h-16 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] z-10"
                                style={{
                                    left: `${sunPosition}%`,
                                    top: `${Math.sin(sunPosition / 30) * 20}px` // Simple arc check
                                }}
                            >
                                <Sun className="w-full h-full fill-amber-500" />
                            </motion.div>

                            <div className="absolute top-4 right-4 text-xs font-bold bg-stone-100 px-2 py-1 rounded text-stone-500">
                                Zonstand: {sunPosition > 70 ? "Avondzon (Zijkant)" : sunPosition > 30 ? "Middag" : "Ochtend"}
                            </div>
                        </div>

                        {/* Houses Comparison */}
                        <div className="flex-1 grid grid-cols-2 gap-8">

                            {/* HOUSE A: STANDARD AWNING (Open Sides) */}
                            <div className="relative flex flex-col items-center">
                                <h5 className="text-sm font-bold text-stone-400 mb-4 uppercase tracking-wider">Standaard Scherm</h5>

                                {/* Window */}
                                <div className="w-32 h-40 bg-blue-100 border-4 border-stone-300 relative overflow-hidden transition-colors duration-500"
                                    style={{ backgroundColor: standardIntrusion > 30 ? '#fed7aa' : '#dbeafe' }} // Turns orange if hot
                                >
                                    {/* Glass Reflection */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent" />

                                    {/* SUN BEAM (Intrusion) */}
                                    {standardIntrusion > 0 && (
                                        <div
                                            className="absolute top-0 right-0 h-full bg-amber-400/30 blur-md transform origin-top-right transition-all duration-100"
                                            style={{
                                                width: `${standardIntrusion}%`,
                                                transform: `skewX(-${standardIntrusion}deg)`
                                            }}
                                        />
                                    )}

                                    {/* Alert Icon if Hot */}
                                    {standardIntrusion > 30 && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <AlertTriangle className="w-8 h-8 text-amber-600 animate-bounce" />
                                        </div>
                                    )}
                                </div>

                                {/* Awning (Flat top only) */}
                                <div className="absolute top-[36px] w-40 h-2 bg-stone-800 rounded-full" /> {/* Cassette */}
                                <div className="absolute top-[40px] w-36 h-12 bg-gray-400 transform origin-top perspective-[500px] rotate-x-60 z-20 shadow-lg"
                                    style={{ transform: 'perspective(500px) rotateX(45deg)' }}
                                >
                                    {/* Stripes */}
                                    <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.2)_10px,rgba(255,255,255,0.2)_20px)]" />
                                </div>

                                <div className="mt-6 text-center">
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${standardIntrusion > 20 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                        {standardIntrusion > 20 ? "Zoninval via zijkant!" : "Schaduw OK"}
                                    </span>
                                </div>
                            </div>


                            {/* HOUSE B: MARKIES (Closed Sides) */}
                            <div className="relative flex flex-col items-center">
                                <h5 className="text-sm font-bold text-green-700 mb-4 uppercase tracking-wider">De Markies</h5>

                                {/* Window */}
                                <div className="w-32 h-40 bg-blue-100 border-4 border-stone-300 relative overflow-hidden">
                                    {/* Glass Reflection */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent" />

                                    {/* 100% COOL INDICATOR */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20" />
                                    </div>
                                </div>

                                {/* Markies Shape (Curved Canvas) */}
                                <div className="absolute top-[36px] w-[140px] h-[100px] z-20">
                                    {/* Main Body (Semi-circle) */}
                                    <div className="w-full h-full bg-green-800 rounded-t-lg rounded-b-[40px] shadow-2xl relative overflow-hidden">
                                        {/* Stripes */}
                                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />

                                        {/* Side Panel specific highlight */}
                                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-black/20" /> {/* Side shadow */}
                                    </div>

                                    {/* Wood Frame Detail */}
                                    <div className="absolute top-0 left-0 right-0 h-4 bg-[#D2B48C] border-b border-stone-400" />
                                </div>

                                <div className="mt-6 text-center">
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-green-100 text-green-600">
                                        Volledig Beschermd
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Control Slider */}
                        <div className="mt-8 px-8">
                            <label className="text-xs text-stone-400 block mb-2 text-center">Sleep de zon</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sunPosition}
                                onChange={(e) => setSunPosition(Number(e.target.value))}
                                className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarkiezenFunction;
