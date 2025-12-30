"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Drill, Sun, CloudRain, CheckCircle2, CloudSnow } from "lucide-react";

const AwningsTech = () => {
    const [winterMode, setWinterMode] = useState(true);
    const [mountingStep, setMountingStep] = useState(0); // 0: Drill, 1: Chemical, 2: Anchor, 3: Secure

    // Cycle through mounting steps automatically for the demo
    React.useEffect(() => {
        const timer = setInterval(() => {
            setMountingStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-[#F3F4F6] overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Veiligheid & Kwaliteit</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900">
                        Techniek waar u op kunt bouwen.
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* BLOCK 1: THE TIME CAPSULE (Cassette) */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
                        <div className="mb-6 flex justify-between items-center">
                            <h3 className="text-2xl font-bold text-slate-900">De Tijd-Kluis</h3>
                            <button
                                onClick={() => setWinterMode(!winterMode)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors ${winterMode ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}
                            >
                                {winterMode ? <><CloudSnow className="w-4 h-4" /> Wintermodus</> : <><Sun className="w-4 h-4" /> Zomermodus</>}
                            </button>
                        </div>

                        {/* Visual Stage */}
                        <div className="relative h-64 bg-slate-100 rounded-2xl overflow-hidden mb-8 border border-slate-200">
                            {/* Background Weather */}
                            <div className={`absolute inset-0 transition-colors duration-1000 ${winterMode ? 'bg-slate-300' : 'bg-sky-200'}`} />

                            {/* Rain/Snow Particle Animation (Winter Only) */}
                            <AnimatePresence>
                                {winterMode && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-10"
                                    >
                                        {[...Array(20)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-3 bg-white/60 rounded-full"
                                                initial={{ y: -10, x: Math.random() * 400, opacity: 0 }}
                                                animate={{ y: 300, opacity: [0, 1, 0] }}
                                                transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
                                            />
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Sun Animation (Summer Only) */}
                            <AnimatePresence>
                                {!winterMode && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, x: 200, y: -50 }}
                                        animate={{ opacity: 1, scale: 1, x: 250, y: 20 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        className="absolute right-10 top-10"
                                    >
                                        <Sun className="w-16 h-16 text-amber-400 fill-amber-400 animate-spin-slow" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* The Cassette (Cross Section) */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
                                {/* Housing */}
                                <div className="relative z-20 w-48 h-32 bg-slate-800 rounded-l-3xl rounded-r-lg flex items-center justify-center shadow-xl">
                                    {/* The Fabric Roll (Inside) */}
                                    <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full shadow-inner flex items-center justify-center relative">
                                        <div className="w-8 h-8 bg-slate-200 rounded-full" />
                                        {/* Glow indicating safety */}
                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 rounded-full bg-secondary-400 blur-md -z-10"
                                        />
                                    </div>

                                    {/* Front Profile (The Lid) */}
                                    <motion.div
                                        animate={{ x: winterMode ? 0 : 40, rotate: winterMode ? 0 : 10 }}
                                        className="absolute right-0 top-0 bottom-0 w-4 bg-slate-700 rounded-r-lg border-l border-slate-600 cursor-pointer"
                                    />
                                </div>

                                {/* Extending Arm (Summer Mode) */}
                                <motion.div
                                    className="h-4 bg-slate-400 rounded-full origin-left z-10 ml-[-10px]"
                                    animate={{ width: winterMode ? 0 : 150 }}
                                />
                            </div>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-2">Uw doek veilig in een kluis.</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Wij leveren uitsluitend <strong>volledig gesloten cassettes</strong>. Als het scherm dicht is, is het doek 100% beschermd tegen regen, sneeuw, fijnstof en insecten. Hierdoor blijft uw doek jarenlang fris en kleurvast.
                        </p>
                    </div>


                    {/* BLOCK 2: THE ANCHOR (Mounting) */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
                        <div className="mb-6 flex justify-between items-center">
                            <h3 className="text-2xl font-bold text-slate-900">Muurvast Gemonteerd</h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-bold uppercase">
                                <ShieldCheck className="w-4 h-4" />
                                100% Veilig
                            </div>
                        </div>

                        {/* Visual Stage */}
                        <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden mb-8 border border-slate-200 flex items-center justify-center">

                            {/* Wall Cross Section */}
                            <div className="w-32 h-full bg-[url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')] bg-slate-300 border-r-4 border-slate-400 relative flex flex-col justify-center">
                                {/* Drill Hole */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 bg-slate-800 rounded-l-sm w-24 overflow-hidden">
                                    {/* Step 2: Chemical Injection */}
                                    <motion.div
                                        className="h-full bg-blue-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: mountingStep >= 1 ? "100%" : "0%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    {/* Step 3: Anchor Insert */}
                                    <motion.div
                                        className="absolute top-1/2 -translate-y-1/2 right-0 h-2 bg-slate-400 rounded-l-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: mountingStep >= 2 ? "90%" : "0%" }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                </div>
                            </div>

                            {/* Montage Bracket */}
                            <motion.div
                                className="w-16 h-24 bg-slate-800 rounded-r-lg border-l-4 border-slate-600 ml-[-4px] relative z-10 flex items-center justify-center"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: mountingStep >= 3 ? 1 : 0.5, x: 0 }}
                            >
                                {mountingStep >= 3 && (
                                    <CheckCircle2 className="w-8 h-8 text-green-500 animate-bounce" />
                                )}
                            </motion.div>

                            {/* Status Text Overlay */}
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <span className="text-xs font-mono font-bold uppercase text-slate-400">
                                    {mountingStep === 0 && "1. Boren"}
                                    {mountingStep === 1 && "2. Chemisch Anker Injecteren"}
                                    {mountingStep === 2 && "3. Draadeind Plaatsen"}
                                    {mountingStep === 3 && "4. Uitharden & Monteren"}
                                </span>
                            </div>

                        </div>

                        <h4 className="font-bold text-slate-900 mb-2">Chemische verankering.</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Een scherm vangt veel wind. Daarom monteren wij nooit zomaar met pluggen. Wij gebruiken <strong>chemische ankers</strong> om de kracht over de binnenmuur te verdelen.
                            <span className="block mt-2 text-secondary-600 font-medium text-xs uppercase tracking-wide">
                                Montage door Albert Jan
                            </span>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AwningsTech;
