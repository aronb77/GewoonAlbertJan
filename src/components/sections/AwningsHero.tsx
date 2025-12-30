"use client";

import React, { useState } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowLeftRight, Ruler, Power, ChevronRight, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AwningsHero = () => {
    // Slider state (0 to 100)
    const [sliderValue, setSliderValue] = useState(0);

    // Derived values for animations
    const openness = sliderValue / 100; // 0 to 1

    // Background Image Opacity / Filter Logic
    // Start with "Warm/Hot" look, fade into "Cool/Shadow" look
    // We can simulate this by layering two images or using CSS filters

    // Shadow Overlay: Moves down from top as slider increases
    // Awning Fabric: Moves down from top as slider increases

    return (
        <section className="relative h-screen min-h-[800px] overflow-hidden bg-slate-900 group">

            {/* 1. BACKGROUND LAYERS */}

            {/* Base Layer: Sunny/Hot (High Contrast, Warm) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2560&auto=format&fit=crop" // Modern Terrace sunny
                    alt="Zonnig terras zonder zonwering"
                    fill
                    className="object-cover opacity-100 transition-all duration-700 ease-out"
                    style={{
                        filter: `brightness(${1.2 - openness * 0.4}) saturate(${1.2 - openness * 0.2}) contrast(${1.1 - openness * 0.1})`
                    }}
                />
            </div>

            {/* Shadow Overlay (Simulate shade casting) */}
            <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-transparent pointer-events-none"
                initial={{ y: "-100%" }}
                animate={{ y: `${-100 + openness * 100}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />

            {/* Awning Fabric Visual (The "Roof") */}
            <motion.div
                className="absolute top-0 left-0 right-0 z-20 h-[60vh] bg-[url('https://www.tudelft.nl/fileadmin/_processed_/9/6/csm_Sunshades_texture_01_a93910c268.jpg')] bg-repeat shadow-2xl origin-top"
                style={{
                    y: `${-100 + openness * 100}%`,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
            >
                {/* Mechanical Arm Hint (Visual Detail) */}
                <div className="absolute bottom-4 left-1/4 w-4 h-64 bg-slate-800 origin-bottom -rotate-45 opacity-0 md:opacity-100" />
                <div className="absolute bottom-4 right-1/4 w-4 h-64 bg-slate-800 origin-bottom rotate-45 opacity-0 md:opacity-100" />
            </motion.div>


            {/* 2. CONTENT CONTAINER */}
            <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-20">

                {/* HEADLINES */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <span
                        className={`inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase transition-colors duration-500
                            ${openness > 0.5 ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"}
                        `}
                    >
                        {openness > 0.5 ? "Genieten in de schaduw" : "Te warm om te zitten?"}
                    </span>

                    <h1 className="text-4xl md:text-7xl font-bold font-robotoslab text-white mb-6 drop-shadow-lg leading-tight">
                        Maak van uw terras <br />
                        <span className="text-secondary-500">uw tweede woonkamer.</span>
                    </h1>

                    <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md mb-10">
                        Geniet van lange zomeravonden zonder de felle zon. Met onze luxe knikarmschermen creëert u schaduw over uw hele terras, zonder dat er parasolvoeten in de weg staan.
                    </p>
                </motion.div>


                {/* 3. INTERACTIVE CONTROL (THE SLIDER) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl mb-12"
                >
                    <div className="flex justify-between text-white text-xs font-bold uppercase tracking-wider mb-4">
                        <span>Zon</span>
                        <span>Schaduw</span>
                    </div>

                    <div className="relative h-12 bg-white/20 rounded-full cursor-pointer touch-none group/slider">
                        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-1 bg-white/30 rounded-full" />

                        {/* Draggable Thumb Simulation (Using native range input for accessibility + custom style) */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />

                        {/* Visual Thumb */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-10 w-10 bg-secondary-500 rounded-full shadow-lg flex items-center justify-center pointer-events-none transition-all duration-75 z-10"
                            style={{ left: `calc(${sliderValue}% - 20px)` }}
                        >
                            {openness > 0.1 ? <Power className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-white animate-spin-slow" />}
                        </div>
                    </div>

                    <div className="mt-2 text-white/60 text-xs font-medium">
                        Schuif om het scherm te bedienen
                    </div>
                </motion.div>


                {/* 4. USP TAGS */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        { icon: ArrowLeftRight, text: "Vrije doorloop (Geen palen)" },
                        { icon: Ruler, text: "Tot wel 12 meter breed" },
                        { icon: Power, text: "Elektrisch bedienbaar" }
                    ].map((usp, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white text-sm font-medium shadow-sm">
                            <usp.icon className="w-4 h-4 text-secondary-400" />
                            {usp.text}
                        </div>
                    ))}
                </div>

                {/* 5. CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="bg-secondary-600 hover:bg-secondary-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-secondary-900/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                    >
                        Bekijk de mogelijkheden
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/aanbod"
                        className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center"
                    >
                        Inspiratie opdoen
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default AwningsHero;
