"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Triangle, Eye, Calculator, ChevronRight, GripVertical } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DropArmHero = () => {
    // 0 = Closed (Up), 100 = Fully Down (Vertical)
    const [angle, setAngle] = useState(30);
    const [windActive, setWindActive] = useState(false);

    // Derived states
    // In typical drop arm, 0 deg is closed (vertical up against wall), but visually we show it extending.
    // Let's map 0-100 to the rotation of the arm.
    // 0 input -> Arm is UP (Closed).
    // 50 input -> Arm is 45 deg out.
    // 100 input -> Arm is 90 deg (Vertical down? Actually drop arms often go to 90 or 120).
    // Let's assume 0% = Closed, 100% = Fully dropped (covering full window).

    const rotation = angle * 1.2; // Max rotation simulation
    const extension = angle / 100; // 0 to 1

    return (
        <section className="relative min-h-[90vh] bg-slate-50 overflow-hidden flex flex-col lg:flex-row">

            {/* LEFT: Content (40%) */}
            <div className="lg:w-2/5 p-8 lg:p-20 flex flex-col justify-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary-600 font-bold uppercase tracking-wider mb-4 block text-sm">
                        Windvast & Effectief
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-robotoslab text-slate-900 leading-tight mb-6">
                        De sterkste zonwering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-amber-500">
                            voor uw ramen.
                        </span>
                    </h1>

                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Windvast, effectief en betaalbaar. Het uitvalscherm is de ideale oplossing voor balkons, voorramen en bovenverdiepingen waar u niet onderdoor hoeft te lopen.
                    </p>

                    {/* USP Tags */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {[
                            { icon: Triangle, text: "Oersterke constructie" },
                            { icon: Wind, text: "Stormvaste armen" },
                            { icon: Eye, text: "Behoud van uitzicht" }
                        ].map((usp, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                                <usp.icon className="w-4 h-4 text-secondary-500" />
                                {usp.text}
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="bg-[#1F2D3A] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            <Calculator className="w-4 h-4" />
                            Bereken uw prijs
                        </Link>
                        <Link
                            href="#types"
                            className="bg-transparent border border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center justify-center"
                        >
                            Bekijk arm-types
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT: Interactive Simulator (60%) */}
            <div className="lg:w-3/5 relative bg-sky-100/50 min-h-[500px] flex items-center justify-center overflow-hidden">

                {/* 1. Environment Background (Facade) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-sky-50 opacity-80" />
                    {/* Simulated Trees reflection or background motion */}
                    <AnimatePresence>
                        {windActive && (
                            <motion.div
                                className="absolute right-0 bottom-0 w-full h-full opacity-10 pointer-events-none"
                                animate={{ x: [-5, 5, -5] }}
                                transition={{ duration: 0.2, repeat: Infinity }}
                            >
                                <div className="absolute right-[-100px] bottom-[-100px] w-[600px] h-[600px] bg-green-800 rounded-full blur-[100px]" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 2. The Window & Awning Setup (CSS Construction) */}
                <div className="relative z-10 w-[500px] max-w-full aspect-[4/5] bg-white shadow-2xl rounded-lg overflow-hidden border-8 border-slate-800 flex flex-col mx-8">

                    {/* Window Pane relative container */}
                    <div className="relative flex-1 bg-sky-100 overflow-hidden">

                        {/* Outside View (Sky + Abstract Greenery) */}
                        <div className="absolute inset-0 flex items-end justify-center">
                            <div className="w-full h-1/3 bg-green-100/50 rounded-t-[100px] blur-xl transform scale-150" />
                        </div>

                        {/* Sunlight Ray (Changes with angle) */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 to-transparent pointer-events-none transition-opacity duration-300"
                            style={{ opacity: 1 - extension }}
                        />

                        {/* The Shadow Cast on Window */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-black/40 pointer-events-none blur-xl"
                            style={{ height: `${angle}%` }}
                        />

                        {/* Temperature / Comfort Indicator */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-center">
                            <div className={`text-2xl font-bold transition-colors duration-500 ${angle < 30 ? "text-red-500" : angle < 70 ? "text-orange-500" : "text-green-500"}`}>
                                {angle < 30 ? "28°C" : angle < 70 ? "23°C" : "19°C"}
                            </div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Binnen</div>
                        </div>

                        {/* View Context Label */}
                        <div className="absolute bottom-6 left-6 right-6 text-center">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-sm
                                ${angle < 20 ? "bg-red-100 text-red-600 opacity-100" :
                                    angle > 40 && angle < 80 ? "bg-blue-100 text-blue-600 opacity-100" :
                                        angle >= 80 ? "bg-slate-100 text-slate-600 opacity-100" : "opacity-0"}
                             `}>
                                {angle < 20 && "Volle zon - Hitte"}
                                {angle > 40 && angle < 80 && "Perfect zicht & Schaduw"}
                                {angle >= 80 && "Maximale Privacy"}
                            </span>
                        </div>
                    </div>

                    {/* The Awning Mechanism (Overlay) */}
                    {/* Cassette Top */}
                    <div className="h-12 bg-slate-900 w-full relative z-20 shadow-md flex items-center justify-center">
                        <div className="w-1/2 h-1 bg-slate-700 rounded-full" />
                    </div>

                    {/* Fabric & Drop Arm */}
                    <div className="absolute top-12 left-0 right-0 bottom-0 pointer-events-none z-20">
                        {/* Fabric Sheet */}
                        <motion.div
                            className="absolute top-0 left-4 right-4 bg-secondary-500 origin-top shadow-lg"
                            style={{
                                height: `${angle * 0.8}%`,
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px'
                            }}
                        >
                            {/* Fabric Texture Striping */}
                            <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.3)_20px,rgba(255,255,255,0.3)_40px)]" />
                        </motion.div>

                        {/* The Drop Arms (Visualized as lines/rects) */}
                        {[0, 1].map((side) => ( // Left and Right arms
                            <motion.div
                                key={side}
                                className={`absolute top-0 w-2 bg-slate-800 origin-top shadow-md ${side === 0 ? "left-4" : "right-4"}`}
                                style={{
                                    height: "60%", // Fixed arm length
                                    rotate: angle * 1.2 - 10, // Rotate based on angle
                                }}
                            // If Wind is active, NO SHAKE (Stability proof)
                            // Only the environment shakes, the arm stays rock solid
                            >
                                {/* Pivot Joint at bottom of arm */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-2 border-slate-600" />
                            </motion.div>
                        ))}

                    </div>

                </div>


                {/* 3. Controls */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-8 bg-white/90 backdrop-blur-md px-8 py-6 rounded-3xl shadow-2xl border border-white/50">

                    {/* Angle Slider */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-32 bg-slate-200 rounded-full w-2 relative">
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-secondary-500 rounded-full w-full"
                                style={{ height: `${angle}%` }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                orient="vertical"
                                value={angle}
                                onChange={(e) => setAngle(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none z-20"
                                style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' } as any}
                            />
                            {/* Thumb Handle */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-secondary-500 rounded-full shadow-md flex items-center justify-center pointer-events-none z-10 transition-all"
                                style={{ bottom: `calc(${angle}% - 16px)` }}
                            >
                                <GripVertical className="w-4 h-4 text-secondary-500" />
                            </div>
                        </div>
                        <span className="text-xs font-bold uppercase text-slate-500">Zonstand</span>
                    </div>

                    {/* Wind Toggle */}
                    <button
                        onClick={() => setWindActive(!windActive)}
                        className={`group flex flex-col items-center gap-2 transition-all ${windActive ? "scale-110" : "scale-100 hover:scale-105"}`}
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-colors ${windActive ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400"}`}>
                            <Wind className={`w-6 h-6 ${windActive ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""}`} />
                        </div>
                        <span className={`text-xs font-bold uppercase transition-colors ${windActive ? "text-blue-600" : "text-slate-500"}`}>
                            {windActive ? "Wind AAN" : "Wind UIT"}
                        </span>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default DropArmHero;
