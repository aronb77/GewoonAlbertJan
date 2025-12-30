"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Sun, Eye, Wind } from "lucide-react";

type OpennessOption = "1%" | "3%";

const fabrics = {
    "1%": {
        title: "Privacy & Maximale Bescherming",
        percentage: "1%",
        description:
            "De ideale keuze voor slaapkamers en ruimtes waar privacy essentieel is. Houdt tot 99% van de UV-straling tegen en blokkeert de meeste warmte.",
        features: [
            { icon: Eye, text: "Maximale privacy, beperkt zicht naar buiten" },
            { icon: Sun, text: "Blokkeert 99% UV-straling" },
            { icon: Shield, text: "Hoogste warmtewering" },
        ],
        viewClass: "bg-black/80", // Simulation of tighter weave
    },
    "3%": {
        title: "Balans tussen Zicht & Bescherming",
        percentage: "3%",
        description:
            "Perfect voor woonkamers en kantoren. Je behoudt het contact met buiten terwijl je hinderlijke schitteringen en warmte effectief weert.",
        features: [
            { icon: Eye, text: "Goed zicht naar buiten, overdag geen inkijk" },
            { icon: Sun, text: "Blokkeert 97% UV-straling" },
            { icon: Shield, text: "Optimale balans licht/warmte" },
        ],
        viewClass: "bg-black/60", // Simulation of looser weave
    },
};

const colors = [
    { name: "Antraciet (7016)", hex: "#374151" },
    { name: "Zwart-Grijs", hex: "#1F2937" },
    { name: "Lichtgrijs", hex: "#9CA3AF" },
    { name: "Wit", hex: "#F3F4F6" },
];

const ScreensFabrics = () => {
    const [openness, setOpenness] = useState<OpennessOption>("3%");
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-robotoslab"
                    >
                        Jouw Stijl, <span className="text-secondary-500">Jouw Keuze</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600">
                        Kies de juiste transparantie en kleur die past bij jouw woning. Van
                        maximale privacy tot optimaal uitzicht.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Simulator */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-slate-100 border border-slate-200"
                    >
                        {/* Background Landscape (Simulated View) */}
                        <div className="absolute inset-0 bg-[url('/garden-view.jpg')] bg-cover bg-center" />
                        {/* Note: In a real app we'd need a real image here. For now falling back to a colored div if image fails or just simulation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-blue-500 opacity-50" />

                        {/* Fabric Overlay */}
                        <motion.div
                            className={`absolute inset-0 backdrop-blur-[1px] transition-all duration-700`}
                            animate={{
                                backgroundColor: selectedColor.hex,
                                opacity: openness === "1%" ? 0.85 : 0.65, // Opacity simulates the openness
                            }}
                        >
                            {/* Texture/Weave Simulation */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    backgroundImage: `radial-gradient(circle, transparent ${openness === '1%' ? '1px' : '2px'}, #000 1px)`,
                                    backgroundSize: '4px 4px'
                                }}
                            />
                        </motion.div>

                        {/* Label Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex justify-between items-center">
                            <div>
                                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">
                                    Geselecteerd
                                </p>
                                <p className="text-slate-900 font-bold text-lg">
                                    {selectedColor.name} · {openness} Openheid
                                </p>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: selectedColor.hex }} />
                        </div>
                    </motion.div>

                    {/* Controls & Details */}
                    <div>
                        {/* Openness Selector */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Eye className="w-5 h-5 text-secondary-500" />
                                Kies je transparantie
                            </h3>
                            <div className="flex bg-slate-100 p-1.5 rounded-xl">
                                {(["1%", "3%"] as OpennessOption[]).map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setOpenness(opt)}
                                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 ${openness === opt
                                                ? "bg-white text-secondary-500 shadow-sm"
                                                : "text-slate-500 hover:text-slate-700"
                                            }`}
                                    >
                                        {opt} Openheid
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic Content Area */}
                        <div className="min-h-[200px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={openness}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h4 className="text-2xl font-bold text-slate-900 mb-3">
                                        {fabrics[openness].title}
                                    </h4>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {fabrics[openness].description}
                                    </p>
                                    <ul className="space-y-3">
                                        {fabrics[openness].features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3 text-slate-700"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-secondary-50 flex items-center justify-center shrink-0">
                                                    <feature.icon className="w-4 h-4 text-secondary-500" />
                                                </div>
                                                <span className="font-medium">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Color Selector */}
                        <div className="mt-10 pt-10 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Populaire Kleuren
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={`group relative w-12 h-12 rounded-full shadow-sm transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 ${selectedColor.name === color.name
                                                ? "ring-2 ring-secondary-500 ring-offset-2 scale-110"
                                                : ""
                                            }`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    >
                                        {/* Checkmark for selected */}
                                        {selectedColor.name === color.name && (
                                            <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                                                <Check className="w-6 h-6" />
                                            </span>
                                        )}
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                                            {color.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-slate-500 italic">
                                * Meer kleuren beschikbaar in onze stalen waaiers tijdens adviesgesprek.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScreensFabrics;
