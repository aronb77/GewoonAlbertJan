"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Shield, Check, Info, ArrowLeftRight } from "lucide-react";
import Image from "next/image";

type Openness = "1%" | "3%" | "5%";
type ViewMode = "inside" | "outside";

const colors = [
    { id: "black", name: "Zwart", hex: "#1a1a1a", glare: 0.05, label: "Meest rustig" },
    { id: "anthracite", name: "Antraciet", hex: "#374151", glare: 0.1, label: "Populair" },
    { id: "grey", name: "Grijs", hex: "#9CA3AF", glare: 0.25, label: "Neutraal" },
    { id: "sand", name: "Zand", hex: "#D6C0B0", glare: 0.4, label: "Sfeervol" },
];

const opennessOptions: { value: Openness; label: string; desc: string }[] = [
    { value: "5%", label: "5% (Standaard)", desc: "Veel uitzicht, goede ventilatie. Ideaal voor de woonkamer." },
    { value: "3%", label: "3% (Balans)", desc: "De gulden middenweg tussen zicht en warmtewering." },
    { value: "1%", label: "1% (Privacy)", desc: "Maximale privacy, minder inkijk. Perfect voor slaapkamers." },
];

const ScreensFabric = () => {
    const [openness, setOpenness] = useState<Openness>("5%");
    const [selectedColor, setSelectedColor] = useState(colors[1]); // Default Anthracite
    const [viewMode, setViewMode] = useState<ViewMode>("inside");

    return (
        <section className="py-24 bg-white" id="kleuren">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Experience Center</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Ervaar het verschil.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Kies de juiste transparantie en kleur. Gebruik de simulator om te zien hoe u naar buiten kijkt, én hoe uw huis er van buiten uitziet.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: SIMULATOR */}
                    <div className="lg:col-span-7 relative group">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">

                            {/* Background Image (Swaps based on Toggle) */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={viewMode}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={viewMode === 'inside'
                                            ? "https://images.unsplash.com/photo-1600210492486-bcc2b66a6a1e?q=80&w=2000&auto=format&fit=crop"
                                            : "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                                        }
                                        alt={viewMode === 'inside' ? "Uitzicht naar buiten" : "Huis van buitenaf"}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* OVERLAY: The Screen Mesh Effect */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                animate={{
                                    backgroundColor: viewMode === 'inside' ? selectedColor.hex : selectedColor.hex,
                                    // Inside view logic:
                                    // - Opacity depends on "openness" (more open = lower opacity)
                                    // - "Glare" (white tint) depends on color brightness (handled by another layer or mix-blend)
                                    opacity: viewMode === 'inside'
                                        ? (openness === "1%" ? 0.75 : openness === "3%" ? 0.55 : 0.35) // Darker simulation
                                        : 0.9, // Outside view is mostly opaque looking in
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Glare/Haze Layer (Only relevant for inside view light colors) */}
                            <motion.div
                                className="absolute inset-0 mix-blend-screen pointer-events-none"
                                animate={{
                                    backgroundColor: viewMode === 'inside' ? selectedColor.hex : 'transparent',
                                    opacity: viewMode === 'inside' ? selectedColor.glare : 0
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Texture Overlay (Mesh Grid) */}
                            <div
                                className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{
                                    backgroundImage: `radial-gradient(circle, transparent ${viewMode === 'inside' ? '2px' : '0px'}, #000 1px)`,
                                    backgroundSize: '3px 3px'
                                }}
                            />

                            {/* Labels */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-slate-800 shadow-sm z-20">
                                {viewMode === 'inside' ? "Uw Uitzicht (Binnen)" : "Gevelaanzicht (Buiten)"}
                            </div>

                            {viewMode === 'outside' && (
                                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-white shadow-sm flex items-center gap-2 z-20">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    Privé: Geen inkijk
                                </div>
                            )}

                        </div>

                        {/* View Toggle Button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={() => setViewMode(viewMode === 'inside' ? 'outside' : 'inside')}
                                className="bg-white text-slate-900 font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                            >
                                <ArrowLeftRight className="w-5 h-5" />
                                {viewMode === 'inside' ? "Bekijk van buiten" : "Bekijk van binnen"}
                            </button>
                        </div>
                        <p className="text-center text-slate-400 text-sm mt-4 italic">
                            {viewMode === 'inside'
                                ? "Tip: Donkere doeken zorgen voor beter contrast en zicht."
                                : "Overdag kijkt u wel naar buiten, maar voorbijgangers niet naar binnen."}
                        </p>
                    </div>


                    {/* RIGHT: CONTROLS */}
                    <div className="lg:col-span-5 space-y-10">

                        {/* 1. Transparency Control */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Eye className="w-5 h-5 text-secondary-500" />
                                1. Kies uw zicht (Openheid)
                            </h3>
                            <div className="space-y-3">
                                {opennessOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setOpenness(opt.value)}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 relative overflow-hidden ${openness === opt.value
                                                ? "border-secondary-500 bg-secondary-50 shadow-md"
                                                : "border-slate-100 bg-slate-50 hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`font-bold ${openness === opt.value ? "text-secondary-700" : "text-slate-700"}`}>
                                                {opt.label}
                                            </span>
                                            {openness === opt.value && <div className="bg-secondary-500 text-white rounded-full p-0.5"><Check className="w-3 h-3" /></div>}
                                        </div>
                                        <p className="text-sm text-slate-500">{opt.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Color Control */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">2</span>
                                    Kleur van het doek
                                </h3>
                                <div className="bg-secondary-100 text-secondary-700 text-xs px-2 py-1 rounded font-bold">
                                    Expert Tip!
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6 flex gap-3 text-blue-800 text-sm leading-relaxed">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <p>
                                    <strong>Tegenintuïtief, maar waar:</strong> door een donker doek (antraciet/zwart) kijkt u makkelijker naar buiten dan door een licht doek. Lichte kleuren weerkaatsen zonlicht en creëren een mistig effect.
                                </p>
                            </div>

                            <div className="grid grid-cols-4 gap-4">
                                {colors.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color)}
                                        className={`flex flex-col items-center gap-2 group`}
                                    >
                                        <div className={`w-14 h-14 rounded-full border-2 shadow-sm transition-all duration-200 ${selectedColor.id === color.id
                                                ? "border-secondary-500 scale-110 ring-2 ring-secondary-200 ring-offset-2"
                                                : "border-slate-200 hover:border-slate-300"
                                            }`}
                                            style={{ backgroundColor: color.hex }}
                                        >
                                            {selectedColor.id === color.id &&
                                                <div className="w-full h-full flex items-center justify-center text-white drop-shadow-md">
                                                    <Check className="w-6 h-6" />
                                                </div>
                                            }
                                        </div>
                                        <span className={`text-xs font-bold ${selectedColor.id === color.id ? "text-secondary-600" : "text-slate-500"}`}>
                                            {color.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA Context */}
                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-sm text-slate-500 mb-2">
                                Geselecteerde configuratie: <strong className="text-slate-900">Screendoek {openness} - {selectedColor.name}</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScreensFabric;
