"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Sun, Lightbulb, Info } from "lucide-react";
import Image from "next/image";

const fabrics = [
    {
        id: "chic",
        title: "Modern Chic",
        desc: "Strak & Rustig. Geeft een koel, modern licht.",
        color: "bg-slate-800",
        texture: "https://www.transparenttextures.com/patterns/fabric-of-squares.png", // Dark Grey
        ambience: "mix-blend-multiply bg-slate-400/20", // Cool neutral
        overlayColor: "bg-slate-900",
        btnColor: "bg-slate-800"
    },
    {
        id: "timeless",
        title: "Tijdloos",
        desc: "Levendig & Klassiek. Maskeert eventuele vlekjes beter.",
        color: "bg-orange-100",
        texture: "https://www.transparenttextures.com/patterns/diagmonds-light.png", // Beige light pattern
        ambience: "mix-blend-overlay bg-orange-200/30", // Warm soft
        overlayColor: "bg-[#eaddcf]", // Beige
        btnColor: "bg-[#D8C8B8]"
    },
    {
        id: "statement",
        title: "Statement",
        desc: "Sfeervol. Geeft een warme gloed over uw terras.",
        color: "bg-amber-600",
        texture: "https://www.transparenttextures.com/patterns/woven.png", // Orange/Ochre
        ambience: "mix-blend-overlay bg-amber-500/40", // Strong warm glow
        overlayColor: "bg-amber-600",
        btnColor: "bg-amber-600"
    }
];

const AwningsDesign = () => {
    const [selectedFabric, setSelectedFabric] = useState(fabrics[1]);
    const [ledOn, setLedOn] = useState(false);

    return (
        <section className="bg-white min-h-screen py-24 lg:py-0 overflow-hidden relative flex flex-col lg:flex-row">

            {/* LEFT COLUMN: Controls (40%) */}
            <div className="lg:w-2/5 p-8 lg:p-20 flex flex-col justify-center relative z-20 bg-white/95 backdrop-blur-sm lg:bg-white">
                <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Design Studio</span>
                <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                    Bepaal uw sfeer.
                </h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                    Het doek bepaalt niet alleen de uitstraling van uw gevel, maar ook het licht op uw terras. Wij werken met de topcollecties van **Tibelly** en **Dickson**.
                </p>

                {/* Fabric Selector */}
                <div className="space-y-4 mb-12">
                    {fabrics.map((fabric) => (
                        <div
                            key={fabric.id}
                            onClick={() => setSelectedFabric(fabric)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 group ${selectedFabric.id === fabric.id ? "border-secondary-500 bg-secondary-50" : "border-slate-100 hover:border-slate-300"}`}
                        >
                            {/* Color Swatch */}
                            <div className={`w-12 h-12 rounded-full shadow-sm shrink-0 border border-slate-200 ${fabric.btnColor}`} style={{ backgroundImage: `url(${fabric.texture})` }} />

                            <div>
                                <h4 className={`font-bold transition-colors ${selectedFabric.id === fabric.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>{fabric.title}</h4>
                                <p className="text-xs text-slate-500">{fabric.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Specs */}
                <ul className="space-y-2 mb-12">
                    {[
                        "100% Rot- en schimmelvrij (Acryl)",
                        "Hoge UV-filter (Beschermt uw huid)",
                        "Waterafstotend behandeld"
                    ].map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            {spec}
                        </li>
                    ))}
                </ul>

                {/* LED Toggle Area */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden group">
                    {/* Glow effect */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full bg-blend-screen filter blur-3xl opacity-20 transition-opacity duration-1000 ${ledOn ? 'opacity-40' : 'opacity-0'}`} />

                    <div className="flex items-start justify-between relative z-10">
                        <div>
                            <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                                <Lightbulb className={`w-5 h-5 ${ledOn ? "text-amber-400 fill-amber-400" : "text-slate-500"}`} />
                                Verleng de avond
                            </h4>
                            <p className="text-sm text-slate-400">Optioneel: Geïntegreerde LED-spots.</p>
                        </div>

                        {/* Toggle Switch */}
                        <div
                            onClick={() => setLedOn(!ledOn)}
                            className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-500 ${ledOn ? "bg-amber-500" : "bg-slate-700"}`}
                        >
                            <motion.div
                                className="w-6 h-6 bg-white rounded-full shadow-md"
                                animate={{ x: ledOn ? 24 : 0 }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <Info className="w-4 h-4 shrink-0" />
                    Twijfelt u? Ik heb grote stalenboeken bij me tijdens de afspraak.
                </div>
            </div>


            {/* RIGHT COLUMN: The Immersive Visual (60%) */}
            <div className="lg:w-3/5 relative min-h-[500px] lg:min-h-auto overflow-hidden">

                {/* Base Layer: Sky (Day vs Night) */}
                <div
                    className={`absolute inset-0 transition-colors duration-1000 z-0 ${ledOn ? 'bg-[#0f172a]' : 'bg-[#38bdf8]'}`} // Deep Slate (Night) vs Sky Blue (Day)
                >
                    {/* Clouds (faint) */}
                    <div className="absolute top-10 right-20 w-32 h-12 bg-white/20 blur-xl rounded-full" />
                </div>

                {/* Ambient Light Overlay representing the fabric glow */}
                <div className={`absolute inset-0 z-10 transition-all duration-700 pointer-events-none ${selectedFabric.ambience} ${ledOn ? 'opacity-10' : 'opacity-60'}`} />

                {/* Main Visual: Looking UP at an awning */}
                {/* We use a CSS simulation for the awning shape since we specifically need dynamic texture */}
                <div className="absolute inset-0 z-20 flex items-start justify-center perspective-1000">

                    {/* The Awning Fabric */}
                    <motion.div
                        initial={false}
                        animate={{
                            backgroundColor: selectedFabric.id === 'chic' ? '#334155' : selectedFabric.id === 'timeless' ? '#e5e5e5' : '#d97706'
                        }}
                        className="w-[120%] h-[80%] bg-slate-200 shadow-2xl origin-top relative"
                        style={{
                            transform: "rotateX(25deg) translateY(-10%)",
                            backgroundImage: `url(${selectedFabric.texture})`,
                            backgroundSize: "200px"
                        }}
                    >
                        {/* Fabric Shadow/Gradient for realism */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10 pointer-events-none" />

                        {/* Arms (Silhouette) */}
                        <div className="absolute left-[20%] top-[40%] w-4 h-[120%] bg-slate-800 rotate-12 opacity-90" />
                        <div className="absolute right-[20%] top-[40%] w-4 h-[120%] bg-slate-800 -rotate-12 opacity-90" />

                        {/* LED Lights (If ON) */}
                        <AnimatePresence>
                            {ledOn && (
                                <>
                                    {/* Arm Spots */}
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute left-[21%] top-[50%] w-4 h-4 bg-amber-100 rounded-full shadow-[0_0_40px_10px_rgba(251,191,36,0.8)] filter blur-[2px]" />
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute right-[21%] top-[50%] w-4 h-4 bg-amber-100 rounded-full shadow-[0_0_40px_10px_rgba(251,191,36,0.8)] filter blur-[2px]" />

                                    {/* Cassette Strip Spots */}
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[5%] left-1/3 w-3 h-3 bg-amber-100 rounded-full shadow-[0_0_30px_8px_rgba(251,191,36,0.6)]" />
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[5%] right-1/3 w-3 h-3 bg-amber-100 rounded-full shadow-[0_0_30px_8px_rgba(251,191,36,0.6)]" />
                                </>
                            )}
                        </AnimatePresence>

                    </motion.div>
                </div>

                {/* Foreground: Lounge Chair / POV */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent z-40 pointer-events-none mix-blend-overlay" />

                {/* Text hint in Visual */}
                <div className="absolute bottom-8 right-8 text-right z-30 opacity-70">
                    <p className={`font-handwriting text-2xl ${ledOn ? 'text-white' : 'text-slate-800'}`}>
                        {ledOn ? "...en lekker lang blijven zitten." : "Heerlijk die schaduw..."}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AwningsDesign;
