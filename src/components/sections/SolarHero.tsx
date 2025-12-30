"use client";

import { motion } from "framer-motion";
import { Battery, Leaf, ShieldCheck, Sun, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SolarHero() {
    return (
        <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Graphic (Subtle Tech Grid) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="max-w-2xl pt-20 lg:pt-0">
                    {/* Promo Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-orange-200"
                    >
                        <Zap className="w-4 h-4 fill-orange-500" />
                        ACTIE: 15% KORTING OP SOLAR
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold font-robotoslab text-primary leading-tight mb-6"
                    >
                        100% Zonne-energie. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                            0% Stroomkosten.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-secondary opacity-80 mb-8 leading-relaxed"
                    >
                        Kies voor de duurzame standaard van de toekomst. Onze Solar motoren werken volledig onafhankelijk van het stroomnet. Dankzij de krachtige accu functioneert uw rolluik tot wel <strong>45 dagen in totale duisternis</strong>.
                    </motion.p>

                    {/* USPs Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid sm:grid-cols-3 gap-6 mb-10"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                <Battery className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-primary text-sm">45 dagen zonder zon</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-primary text-sm">Geen stroomverbruik</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-primary text-sm">Werkt bij stroomuitval</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 bg-[#C76A3E] hover:bg-[#b05d35] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                        >
                            Bereken mijn besparing
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <span className="text-sm text-secondary opacity-60 font-medium">
                            Gratis inmeten in Oldebroek, Elburg & Zwolle
                        </span>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl group"
                >
                    {/* Main Image */}
                    <Image
                        src="https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?q=80&w=1000&auto=format&fit=crop"
                        alt="Solar Rolluik Detail"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Animated Solar Indicator */}
                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex flex-col items-center gap-2">
                        <Sun className="w-8 h-8 text-orange-400 animate-[spin_10s_linear_infinite]" />
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Charging</span>
                        </div>
                    </div>

                    {/* Tech Specs Floating Card (Bottom Left) */}
                    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 max-w-[200px] border-l-4 border-green-500">
                        <p className="text-xs font-bold text-secondary uppercase opacity-60 mb-1">Motor Technology</p>
                        <p className="font-bold text-primary">Somfy Solar RTS</p>
                        <p className="text-xs text-secondary opacity-80 mt-1">100% Draadloos</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
