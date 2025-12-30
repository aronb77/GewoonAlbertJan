"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Brush, Star, Shield, ArrowRight, MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MarkiezenHero = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
    };

    return (
        <section className="relative min-h-[90vh] bg-stone-100 overflow-hidden flex flex-col pt-24 md:pt-32">

            <div className="container mx-auto px-4 max-w-7xl flex-1 flex flex-col">

                {/* HEADLINE */}
                <div className="text-center max-w-4xl mx-auto mb-12 z-10">
                    <span className="text-green-800 font-serif italic text-lg md:text-xl tracking-wide mb-4 block">
                        Tijdloos & Authentiek
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-robotoslab text-stone-900 mb-6 leading-tight">
                        Geef uw woning het karakter <br className="hidden md:block" />
                        <span className="text-green-800">dat het verdient.</span>
                    </h1>
                    <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-serif">
                        De markies is de enige zonwering die niet alleen de zon weert, maar uw huis direct meerwaarde geeft. Tijdloze klasse, perfect voor zowel klassieke als moderne gevels.
                    </p>
                </div>

                {/* THE CHARM SLIDER HERO IMAGE */}
                <div className="flex-1 relative w-full h-[50vh] min-h-[400px] mb-12 group">
                    <div
                        ref={containerRef}
                        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-col-resize border-4 border-white"
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                    >
                        {/* IMAGE A: BARE (Right side, revealed when slider moves left) */}
                        {/* Wait, usually "Before" is left. Let's make Left = Bare, Right = Markiezen for "Transformation" effect? 
                           Or standard: Left Image, Right Image. 
                           Task says: Image A (Left) = Bare. Image B (Right) = Markiezen.
                        */}

                        {/* BACKGROUND (The "After/Right" Image - Markiezen) */}
                        <div className="absolute inset-0 bg-stone-200">
                            {/* Placeholder for "House with Markiezen" */}
                            <div className="absolute inset-0 bg-stone-300 flex items-center justify-center pt-20">
                                <span className="text-4xl">🏡 + ✨</span>
                            </div>
                            {/* Texture/Mockup */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent mix-blend-multiply" />

                            {/* Label */}
                            <div className="absolute top-6 right-6 bg-green-800 text-white px-4 py-2 rounded-full font-serif italic shadow-lg z-10">
                                Met Markiezen
                            </div>
                        </div>

                        {/* FOREGROUND (The "Before/Left" Image - Bare) 
                            Clip-path reveals this on the left.
                        */}
                        <div
                            className="absolute inset-0 bg-stone-100"
                            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                        >
                            {/* Placeholder for "Bare House" */}
                            <div className="absolute inset-0 bg-stone-100 flex items-center justify-center pt-20 grayscale opacity-80">
                                <span className="text-4xl text-stone-400">🏡</span>
                            </div>

                            {/* Label */}
                            <div className="absolute top-6 left-6 bg-white/80 text-stone-600 px-4 py-2 rounded-full font-serif italic shadow-sm backdrop-blur">
                                Zonder Zonwering
                            </div>
                        </div>

                        {/* SLIDER HANDLE */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition-transform text-green-800">
                                <MousePointer2 className="w-5 h-5 rotate-90" />
                            </div>
                        </div>

                        {/* Hover Hint */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-sm">
                            Sleep voor sfeer
                        </div>

                    </div>
                </div>

                {/* USPs & CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16">

                    {/* USPs */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-stone-100">
                            <Shield className="w-5 h-5 text-green-700" />
                            <span className="text-stone-700 font-medium text-sm">Zijkanten gesloten</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-stone-100">
                            <Brush className="w-5 h-5 text-green-700" />
                            <span className="text-stone-700 font-medium text-sm">Hout of Aluminium</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-stone-100">
                            <Star className="w-5 h-5 text-green-700" />
                            <span className="text-stone-700 font-medium text-sm">Authentieke details</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="bg-green-800 hover:bg-green-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-800/30 transition-all flex items-center gap-3 min-w-[240px] justify-center"
                    >
                        Bekijk de mogelijkheden
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default MarkiezenHero;
