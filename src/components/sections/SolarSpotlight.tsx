"use client";

import { motion } from "framer-motion";
import { PlugZap, Leaf, Smartphone } from "lucide-react";

export default function SolarSpotlight() {
    const featureList = [
        {
            icon: PlugZap,
            title: "Geen stroomdraden nodig",
            text: "Volledig draadloze montage, dus geen gaten boren naar binnen.",
        },
        {
            icon: Leaf,
            title: "Duurzaam & Zuinig",
            text: "Bespaar op uw energierekening en kies voor een groene oplossing.",
        },
        {
            icon: Smartphone, // Representing smart/remote control
            title: "Slimme bediening",
            text: "Eenvoudig te bedienen met afstandsbediening of app (optioneel).",
        },
    ];

    return (
        <section className="bg-primary py-20 overflow-hidden text-white relative">
            {/* Background Gradient overlay for subtle depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#15202b] z-0"></div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-robotoslab leading-tight">
                            De toekomst is draadloos: <span className="text-accent">Solar Rolluiken & Screens.</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Geniet van maximaal comfort zonder hak- en breekwerk in uw gevel. De slimme motor werkt 100% op daglicht, zelfs bij bewolking.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {featureList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.2), duration: 0.5 }}
                                className="flex items-start space-x-4 group"
                            >
                                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 font-robotoslab">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Energy Flow Animation */}
                <div className="relative flex justify-center items-center h-[500px]">
                    {/* SVG Visualization */}
                    <svg viewBox="0 0 400 600" className="w-full h-full max-w-[400px]">

                        {/* 1. THE SUN (Top) */}
                        <motion.g
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <circle cx="200" cy="80" r="40" fill="#C76A3E" className="drop-shadow-[0_0_15px_rgba(199,106,62,0.6)]" />
                            {/* Sun Rays pulsating */}
                            <motion.circle
                                cx="200" cy="80" r="50"
                                stroke="#C76A3E" strokeWidth="2" fill="none"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            />
                            <motion.circle
                                cx="200" cy="80" r="60"
                                stroke="#C76A3E" strokeWidth="1" fill="none"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                            />
                        </motion.g>

                        {/* 2. THE SHUTTER (Bottom) */}
                        <motion.g
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Window Frame */}
                            <rect x="100" y="350" width="200" height="220" rx="4" fill="#2F2F2F" stroke="#4a5568" strokeWidth="4" />
                            {/* Shutter Slats */}
                            {[...Array(6)].map((_, i) => (
                                <rect key={i} x="110" y={360 + (i * 30)} width="180" height="25" fill="#4a5568" rx="2" />
                            ))}

                            {/* Solar Strip / Receiver */}
                            <rect x="120" y="330" width="160" height="15" fill="#A3C6D6" className="drop-shadow-[0_0_10px_rgba(163,198,214,0.3)]">
                                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                            </rect>

                            {/* Battery Indicator (Internal) */}
                            <motion.rect
                                x="180" y="450" width="40" height="80" rx="4" fill="#22c55e" opacity="0.8"
                                initial={{ height: 0, y: 530 }}
                                whileInView={{ height: 80, y: 450 }}
                                transition={{ duration: 2, delay: 1 }}
                            />
                        </motion.g>

                        {/* 3. ENERGY FLOW LINES (Connecting Sun to Solar Strip) */}
                        <motion.path
                            d="M 200 130 C 200 130, 200 230, 200 330"
                            fill="none"
                            stroke="#A3C6D6" // Light Blue Energy Color
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0, opacity: 0.2 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />

                        {/* Active Flowing Energy Particle */}
                        <motion.circle r="6" fill="#FFFFFF" filter="url(#glow)">
                            <motion.animateMotion
                                path="M 200 130 C 200 130, 200 230, 200 330"
                                dur="2s"
                                repeatCount="indefinite"
                                rotate="auto"
                            />
                        </motion.circle>

                        {/* Defs for Glow Filter */}
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                    </svg>
                </div>
            </div>
        </section>
    );
}
