"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, ArrowDown, Info } from "lucide-react";

// Helper for animating numbers
function Counter({ value }: { value: number }) {
    const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
}

export default function ScreensHeatBlock() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isInView) {
            setTimeout(() => setIsPlaying(true), 500);
        }
    }, [isInView]);

    return (
        <section className="bg-[#F0F9FF] py-24 overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-wider mb-2 block text-sm">Fysica in actie</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-primary mb-6">
                        Laat de zon het werk doen.
                    </h2>
                    <p className="text-secondary opacity-70 text-lg leading-relaxed">
                        Het is ironisch: de zon die uw huis verhit, levert nu de energie om het koel te houden. Zodra de zon schijnt, laadt de accu op. U gebruikt <span className="font-bold text-primary">gratis, groene energie</span> om de hitte buiten te sluiten.
                    </p>

                </div>

                {/* The Animated Comparison */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* CARD A: The Problem (Curtains) */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-red-100 flex flex-col items-center relative overflow-hidden group">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-orange-300 to-red-400"></div>
                        <h3 className="text-xl font-bold text-red-900 mb-2">Airco & Stroom</h3>
                        <p className="text-sm text-red-400 mb-8 font-medium">Hoge kosten, droge lucht</p>

                        {/* VISUAL SCENE */}
                        <div className="relative w-64 h-64 bg-gray-50 rounded-xl border-2 border-gray-100 flex items-center justify-center p-4 shadow-inner">

                            {/* The Window Frame */}
                            <div className="w-4 h-full bg-gray-200 absolute left-1/2 -ml-2 z-10"></div>

                            {/* The Glass (Glows Red) */}
                            <motion.div
                                className="absolute inset-y-4 left-1/2 w-2 h-[90%] bg-blue-100/50 backdrop-blur-sm z-20 border-l border-white/50"
                                animate={{
                                    backgroundColor: isPlaying ? "rgba(239, 68, 68, 0.2)" : "rgba(219, 234, 254, 0.5)",
                                    boxShadow: isPlaying ? "0 0 30px rgba(239, 68, 68, 0.4)" : "none"
                                }}
                                transition={{ delay: 1.5, duration: 1 }}
                            ></motion.div>

                            {/* The Curtain (Inside/Right) */}
                            <div className="absolute top-4 bottom-4 right-12 w-2 bg-red-100 border-l-2 border-red-300 z-0 shadow-lg"></div>

                            {/* Sun Ray Animation */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible">
                                <defs>
                                    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                                    </marker>
                                </defs>
                                {/* Path: From Left (Outside) -> Through Glass -> Hits Curtain */}
                                {isPlaying && (
                                    <motion.path
                                        d="M -20,30 L 150,80"
                                        stroke="#EF4444"
                                        strokeWidth="4"
                                        fill="none"
                                        markerEnd="url(#arrowhead-red)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, ease: "linear" }}
                                    />
                                )}
                                {/* Heat Radiation (Squiggles inside) */}
                                {isPlaying && (
                                    <motion.g
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.6, duration: 0.5 }}
                                    >
                                        <motion.circle cx="160" cy="80" r="10" fill="#EF4444" opacity="0.2" animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} />
                                        <motion.circle cx="160" cy="80" r="20" fill="#EF4444" opacity="0.1" animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
                                    </motion.g>
                                )}
                            </svg>

                            {/* Labels */}
                            <span className="absolute left-2 top-2 text-[10px] uppercase font-bold text-gray-400">Buiten</span>
                            <span className="absolute right-2 top-2 text-[10px] uppercase font-bold text-gray-400">Binnen</span>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center border-4 border-red-100">
                                <Zap className={`w-8 h-8 transition-colors duration-1000 ${isPlaying ? "text-red-600" : "text-gray-400"}`} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase">Stroomkosten</p>
                                <p className={`text-4xl font-bold font-mono transition-colors duration-1000 ${isPlaying ? "text-red-500" : "text-primary"}`}>
                                    <Counter value={isPlaying ? 150 : 0} /> €
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* CARD B: The Solution (Screens) */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-200 flex flex-col items-center relative overflow-hidden ring-4 ring-blue-50/50">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Solar Screen</h3>
                        <p className="text-sm text-blue-600 mb-8 font-medium">De zon koelt uw huis</p>

                        {/* VISUAL SCENE */}
                        <div className="relative w-64 h-64 bg-blue-50/30 rounded-xl border-2 border-blue-100 flex items-center justify-center p-4 shadow-inner">

                            {/* The Window Frame */}
                            <div className="w-4 h-full bg-gray-200 absolute left-1/2 -ml-2 z-10"></div>

                            {/* The Screen (Outside/Left) + Solar Panel */}
                            <div className="absolute top-4 bottom-4 left-24 w-1 bg-gray-800 z-30 shadow-sm border-r border-gray-600">
                                {/* Solar strip on cassette */}
                                <div className="absolute -top-1 -left-1 w-3 h-2 bg-black rounded-sm"></div>
                            </div>

                            {/* The Glass (Stays Cool) */}
                            <div className="absolute inset-y-4 left-1/2 w-2 h-[90%] bg-blue-100/30 backdrop-blur-sm z-20 border-l border-white/50"></div>


                            {/* Sun Ray Animation */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-40 overflow-visible">
                                <defs>
                                    <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#F97316" />
                                    </marker>
                                </defs>
                                {/* Path: From Left -> Hits Screen -> Bounces Back */}
                                {isPlaying && (
                                    <>
                                        <motion.path
                                            d="M -20,30 L 96,65"
                                            stroke="#F97316"
                                            strokeWidth="4"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "linear" }}
                                        />
                                        <motion.path
                                            d="M 96,65 L -30,120"
                                            stroke="#F97316"
                                            strokeWidth="3"
                                            strokeDasharray="4 4"
                                            fill="none"
                                            markerEnd="url(#arrowhead-orange)"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ delay: 0.8, duration: 0.8, ease: "linear" }}
                                        />
                                    </>
                                )}
                            </svg>

                            {/* Labels */}
                            <span className="absolute left-2 top-2 text-[10px] uppercase font-bold text-gray-400">Buiten</span>
                            <span className="absolute right-2 top-2 text-[10px] uppercase font-bold text-gray-400">Binnen</span>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border-4 border-blue-100">
                                <Zap className="w-8 h-8 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase">Gratis Energie</p>
                                <p className="text-4xl font-bold font-mono text-green-500">
                                    <Counter value={0} /> €
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
