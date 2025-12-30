"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Eye, Sun, ArrowRight, MousePointerClick, Thermometer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ScreensHero() {
    const [screenDown, setScreenDown] = useState(false);

    // Auto-play animation on load for initial impact
    useEffect(() => {
        const timer = setTimeout(() => {
            setScreenDown(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-orange-50/50 to-white overflow-hidden min-h-[90vh] flex items-center">

            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-100/30 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="max-w-xl pt-20 lg:pt-0 order-2 lg:order-1">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="block text-[#C76A3E] font-bold tracking-[0.2em] mb-4 text-sm"
                    >
                        HET ALTERNATIEF VOOR AIRCO
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-robotoslab text-primary leading-tight mb-6"
                    >
                        De toekomst is draadloos:<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                            Solar Screens.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-secondary opacity-80 mb-8 leading-relaxed"
                    >
                        Houd uw woning koel met de kracht van de zon. Onze windvaste rits-screens werken 100% op zonne-energie. Dat betekent: geen kabels, geen stroomkosten en geen gaten door uw kozijnen.
                    </motion.p>

                    {/* USPs Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-4 mb-10"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <Wind className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-primary group-hover:text-blue-600 transition-colors">Windvast (Zip-systeem)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                <Sun className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-primary">100% Draadloos & Duurzaam</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                                <Thermometer className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-primary">Weert 90% hitte</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 bg-[#C76A3E] hover:bg-[#b05d35] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                        >
                            Bereken mijn prijs
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#kleuren"
                            className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#C76A3E] text-secondary hover:text-[#C76A3E] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
                        >
                            Bekijk doekkleuren
                        </Link>
                    </motion.div>
                </div>

                {/* Right Visual (Interactive Window) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="order-1 lg:order-2 h-[500px] lg:h-[700px] w-full relative"
                >
                    <div
                        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                        onClick={() => setScreenDown(!screenDown)}
                    >
                        {/* 1. Base Image (Bright Outdoors) */}
                        <Image
                            src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop"
                            alt="Living room view to garden"
                            fill
                            className="object-cover"
                        />

                        {/* 2. Glare Layer (Fades out when screen is down) */}
                        <motion.div
                            animate={{ opacity: screenDown ? 0 : 1 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 bg-white/30 mix-blend-overlay pointer-events-none"
                            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }}
                        />

                        {/* 3. The Screen Mesh Layer (Slides down) */}
                        <motion.div
                            initial={{ height: "0%" }}
                            animate={{ height: screenDown ? "100%" : "0%" }}
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            className="absolute top-0 left-0 w-full bg-black/40 backdrop-blur-[1px] z-10 border-b-4 border-gray-800"
                            style={{
                                // Simulating mesh texture
                                backgroundImage: "radial-gradient(#000000 15%, transparent 16%)",
                                backgroundSize: "4px 4px"
                            }}
                        >
                            {/* Zip Guide Rails Visual (Left/Right Borders) */}
                            <div className="absolute top-0 left-0 h-full w-2 bg-gray-800"></div>
                            <div className="absolute top-0 right-0 h-full w-2 bg-gray-800"></div>
                        </motion.div>

                        {/* 4. Heat Blocked Badge (Appears when screen down) */}
                        <AnimatePresence>
                            {screenDown && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border-l-4 border-orange-500"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
                                            <Sun className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-secondary uppercase tracking-wider opacity-60">Resultaat</p>
                                            <p className="text-2xl font-bold text-primary">90% Hitte geweerd</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Click Hint */}
                        <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MousePointerClick className="w-3 h-3" />
                            {screenDown ? "Klik om te openen" : "Klik om te sluiten"}
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
