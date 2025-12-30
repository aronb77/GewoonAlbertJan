"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MoveHorizontal, Waves, Ear, Ruler, ArrowRight, Wand2 } from "lucide-react";
import Link from "next/link";

const CurtainsHero = () => {
    // Slider state (0 = Kaal/Left, 100 = Warm/Right)
    const [sliderValue, setSliderValue] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Handle mouse/touch move
    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderValue(percent);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleWindowMove = (e: MouseEvent) => {
            if (isDragging) handleMove(e.clientX);
        };
        const handleWindowUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleWindowMove);
            window.addEventListener('mouseup', handleWindowUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleWindowMove);
            window.removeEventListener('mouseup', handleWindowUp);
        };
    }, [isDragging]);

    return (
        <section className="relative min-h-[90vh] flex flex-col pt-32 pb-12 bg-stone-100 overflow-hidden">

            {/* CONTENT HEADER */}
            <div className="container mx-auto px-4 text-center relative z-20 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-stone-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                        Interieur & Sfeer
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-robotoslab text-stone-900 mb-6">
                        Maak van uw huis een <span className="text-[#D2B48C]">warm thuis.</span>
                    </h1>
                    <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        Zonwering regelt het klimaat, gordijnen bepalen de sfeer. Van prachtige inbetweens tot verduisterende overgordijnen: wij meten, maken en hangen ze perfect voor u op.
                    </p>

                    {/* USP Tags */}
                    <div className="flex flex-wrap justify-center gap-4 text-stone-500 text-sm font-medium mb-8">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-200">
                            <Waves className="w-4 h-4 text-[#D2B48C]" /> Perfecte Wave-plooi
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-200">
                            <Ear className="w-4 h-4 text-[#D2B48C]" /> Verbetert akoestiek
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-200">
                            <Ruler className="w-4 h-4 text-[#D2B48C]" /> Gratis inmeten
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* THE INTERACTIVE SLIDER */}
            <div className="container mx-auto px-4 max-w-6xl relative z-20 flex-1 flex flex-col justify-center">

                <div
                    ref={containerRef}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none border-4 border-white group"
                    onMouseDown={(e) => { handleMouseDown(); handleMove(e.clientX); }}
                    onTouchStart={(e) => { handleMouseDown(); handleMove(e.touches[0].clientX); }}
                    onTouchMove={(e) => { if (isDragging) handleMove(e.touches[0].clientX); }}
                    onTouchEnd={handleMouseUp}
                >
                    {/* IMAGE B: RIGHT (Warm / With Curtains) - Base Layer */}
                    <div className="absolute inset-0">
                        {/* Placeholder for "Warm Room" - Ideally a real image */}
                        <div className="w-full h-full bg-stone-300 relative">
                            {/* Mock Visual: Warm Room */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
                            {/* Overlay to simulate warmth if needed */}
                            <div className="absolute inset-0 bg-orange-100/10 mix-blend-overlay" />
                        </div>

                        {/* Right Label */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-stone-800 font-bold shadow-lg pointer-events-none">
                            Warm & Gedempt
                        </div>
                    </div>

                    {/* IMAGE A: LEFT (Cold / Bare) - Clip Layer */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderValue}%` }}
                    >
                        {/* Only the width changes, image scales same as container meaning it reveals */}
                        <div className="absolute inset-0 w-[100vw] max-w-[1152px] h-full bg-stone-200"> {/* Width needs to match container width to prevent squishing */}
                            {/* Placeholder for "Cold Room" - Same image but Edited to be bare/cold */}
                            {/* Since I can't edit images, I will use a filter trick + overlaid 'bare window' graphic for the concept */}
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-110 contrast-125">
                                {/* Simulate "Bare" by overlaying a subtle 'cold' tint */}
                                <div className="absolute inset-0 bg-blue-100/20 mix-blend-overlay" />
                            </div>
                        </div>

                        {/* Left Label */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-stone-500 font-bold shadow-lg pointer-events-none flex items-center gap-2">
                            Kaal & Hol
                        </div>
                    </div>

                    {/* THE SLIDER HANDLE */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] pointer-events-none z-30"
                        style={{ left: `${sliderValue}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-stone-400">
                            <MoveHorizontal className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Sound/Atmosphere Indicator (Optional Creative Touch) */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-12 pointer-events-none">
                        <motion.div
                            className="bg-black/50 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                            animate={{ opacity: sliderValue < 40 ? 1 : 0.3, scale: sliderValue < 40 ? 1.05 : 1 }}
                        >
                            <span className="text-xs uppercase tracking-wider">Sound</span> Galmende akoestiek
                        </motion.div>
                        <motion.div
                            className="bg-[#D2B48C]/90 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                            animate={{ opacity: sliderValue > 60 ? 1 : 0.3, scale: sliderValue > 60 ? 1.05 : 1 }}
                        >
                            <span className="text-xs uppercase tracking-wider text-white/80">Sound</span> Rustige sfeer
                        </motion.div>
                    </div>

                </div>

                <div className="text-center mt-4 text-stone-400 text-sm font-medium animate-pulse">
                    Sleep de slider om het verschil te zien
                </div>

            </div>

            {/* CTA BUTTONS */}
            <div className="container mx-auto px-4 text-center relative z-20 mt-12 flex flex-col sm:flex-row justify-center gap-6">
                <Link
                    href="#collectie" // Anchor to collection
                    className="bg-[#D2B48C] hover:bg-[#c1a075] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                    Bekijk de collectie
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    href="/contact"
                    className="bg-white hover:bg-stone-50 text-stone-700 text-lg font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg transition-all border border-stone-200"
                >
                    Advies aan huis
                </Link>
            </div>

        </section>
    );
};

export default CurtainsHero;
