"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Smartphone, ShieldCheck, Ruler, CheckCircle2 } from "lucide-react";

const AwningsFeatures = () => {
    // Wind Simulation State
    const [windStep, setWindStep] = useState(0); // 0: Calm, 1: Storm, 2: Alarm, 3: Retracting, 4: Safe
    const [widthInput, setWidthInput] = useState(5.0);

    // Auto-loop the wind simulation
    useEffect(() => {
        const sequence = async () => {
            // 0: Calm (Stay for 3s)
            setWindStep(0);
            await new Promise(r => setTimeout(r, 3000));

            // 1: Storm (Gusts for 2s)
            setWindStep(1);
            await new Promise(r => setTimeout(r, 2000));

            // 2: Alarm (Flash for 1s)
            setWindStep(2);
            await new Promise(r => setTimeout(r, 1000));

            // 3: Retracting (Move for 2s)
            setWindStep(3);
            await new Promise(r => setTimeout(r, 2000));

            // 4: Safe (Stay for 2s)
            setWindStep(4);
            await new Promise(r => setTimeout(r, 2500));

            // Loop back
            sequence();
        }
        sequence();
    }, []);

    const getRecommendation = (width: number) => {
        if (width <= 5) return "Standaard 2 knikarmen - Perfect voor de meeste woningen.";
        if (width <= 6.5) return "3 knikarmen of extra sterke uitvoering geadviseerd.";
        return "Gekoppeld systeem - Wij maken een constructie op maat.";
    };

    return (
        <section className="py-24 bg-[#F0F9FF] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT: THE WIND WATCHER SIMULATION (Visual) */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
                            <div className="mb-6 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-blue-500" />
                                    Wind Sensor Simulatie
                                </h3>
                                {/* Status Indicator */}
                                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-colors duration-300 
                                    ${windStep === 0 ? "bg-green-100 text-green-600" :
                                        windStep === 1 ? "bg-blue-100 text-blue-600" :
                                            windStep === 2 ? "bg-orange-100 text-orange-600 animate-pulse" :
                                                windStep === 4 ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"
                                    }`}>
                                    {windStep === 0 && "Rustig weer"}
                                    {windStep === 1 && "Windvlaag!"}
                                    {windStep === 2 && "Alarm Detectie"}
                                    {windStep === 3 && "Sluiten..."}
                                    {windStep === 4 && "Veilig"}
                                </div>
                            </div>

                            {/* The Stage */}
                            <div className="relative h-64 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-end items-center">
                                {/* Sky Background */}
                                <div className={`absolute inset-0 transition-colors duration-1000 ${windStep >= 1 ? "bg-slate-200" : "bg-sky-100"}`} />

                                {/* Wind Particles */}
                                <AnimatePresence>
                                    {(windStep === 1 || windStep === 2) && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-10">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute bg-slate-400/30 h-1 rounded-full"
                                                    style={{ top: `${20 + i * 15}%`, width: `${50 + Math.random() * 50}px` }}
                                                    animate={{ x: ["-100%", "200%"] }}
                                                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random() * 0.5 }}
                                                />
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* House Wall */}
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-slate-300 border-l border-slate-400 z-20" />

                                {/* The Awning */}
                                <motion.div
                                    className="absolute right-8 top-12 h-2 bg-secondary-500 origin-right rounded-l-full z-20"
                                    animate={{
                                        width: windStep === 3 || windStep === 4 ? 20 : 200, // Retract
                                        rotate: windStep === 1 ? [0, 2, -1, 0] : 0 // Shake on wind
                                    }}
                                    transition={{
                                        width: { duration: 2, ease: "easeInOut" },
                                        rotate: { duration: 0.2, repeat: windStep === 1 ? Infinity : 0 }
                                    }}
                                >
                                    {/* Fabric hanging down slightly */}
                                    <motion.div
                                        className="absolute left-0 top-full w-full h-12 bg-secondary-500/20 origin-top skew-x-12"
                                        animate={{ opacity: windStep === 3 || windStep === 4 ? 0 : 1 }}
                                    />
                                </motion.div>

                                {/* The Sensor Icon on the Wall */}
                                <div className="absolute right-1 top-8 w-6 h-6 z-30 flex items-center justify-center">
                                    <motion.div
                                        animate={{ backgroundColor: windStep === 2 ? "#f97316" : "#94a3b8", scale: windStep === 2 ? [1, 1.2, 1] : 1 }}
                                        transition={{ repeat: windStep === 2 ? Infinity : 0, duration: 0.5 }}
                                        className="w-2 h-4 rounded-full"
                                    />
                                </div>

                                {/* Safe Checkmark */}
                                <AnimatePresence>
                                    {windStep === 4 && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            className="absolute inset-0 z-40 flex items-center justify-center bg-white/50 backdrop-blur-sm"
                                        >
                                            <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-green-600 font-bold border border-green-100">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Veilig gesloten
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <p className="mt-4 text-xs text-slate-500 text-center italic">
                                "De trillingssensor grijpt in, ook als u niet thuis bent."
                            </p>
                        </div>
                    </div>


                    {/* RIGHT: FEATURES CONTENT */}
                    <div className="order-1 lg:order-2">
                        <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Comfort & Controle</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-8">
                            Slim, Veilig & <br className="hidden md:block" />
                            <span className="text-blue-500">Volledig op Maat.</span>
                        </h2>

                        <div className="space-y-10">

                            {/* Feature 1: Somfy */}
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-500">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Luxe zonder zwengelen.</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Al onze schermen zijn voorzien van fluisterstille **Somfy-motoren**. U bedient ze met één druk op de afstandsbediening of via uw smartphone (TaHoma app).
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2: Sensor */}
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-500">
                                    <Wind className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Stormbeveiliging inbegrepen.</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Bang dat het scherm stukwaait? Wij installeren standaard een **trillingssensor** op de voorlijst. Zodra het scherm te veel beweegt door wind, gaat het automatisch dicht.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3: Interactive Size Check */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 z-0" />

                                <div className="relative z-10">
                                    <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                                        <Ruler className="w-5 h-5 text-secondary-500" />
                                        Check uw situatie
                                    </h4>

                                    <div className="mb-4">
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Breedte van uw terras: <span className="text-slate-900 text-sm ml-1">{widthInput.toFixed(1)} meter</span></label>
                                        <input
                                            type="range"
                                            min="3"
                                            max="12"
                                            step="0.5"
                                            value={widthInput}
                                            onChange={(e) => setWidthInput(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-secondary-500"
                                        />
                                        <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                                            <span>3m</span>
                                            <span>12m</span>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100 text-sm text-blue-900 font-medium">
                                        💡 {getRecommendation(widthInput)}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AwningsFeatures;
