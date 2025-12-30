"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Box } from "lucide-react";
import Image from "next/image";

type ShutterShape = "afgeschuind" | "rond";

interface Color {
    id: string;
    name: string;
    ral: string;
    hex: string;
    description: string;
}

const colors: Color[] = [
    {
        id: "antraciet",
        name: "Antraciet",
        ral: "RAL 7016",
        hex: "#383E42",
        description: "De absolute bestseller. Modern, tijdloos en past bij vrijwel elke gevelsteen."
    },
    {
        id: "zwart",
        name: "Gitzwart",
        ral: "RAL 9005",
        hex: "#1a1a1a",
        description: "Stoer & Industrieel. Dé trendkleur van dit moment voor moderne woningen."
    },
    {
        id: "wit",
        name: "Zuiver Wit",
        ral: "RAL 9010",
        hex: "#F5F5F0",
        description: "Fris en klassiek. Ideaal als u het rolluik wilt laten wegvallen op witte kozijnen."
    },
    {
        id: "zilver",
        name: "Technisch Zilver",
        ral: "Anodized Look",
        hex: "#A5A9B4",
        description: "High-tech uitstraling. Zeer goed bestand tegen krassen en vuil."
    },
];

export default function SolarDesign() {
    const [activeShape, setActiveShape] = useState<ShutterShape>("afgeschuind");
    const [activeColor, setActiveColor] = useState<Color>(colors[0]);

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT: Visualizer */}
                    <div className="lg:col-span-7 relative">
                        {/* Header above image (Mobile only) - for better UX */}
                        <div className="lg:hidden mb-6">
                            <span className="text-accent font-bold uppercase tracking-wider text-xs block mb-1">Design Studio</span>
                            <h2 className="text-3xl font-bold font-robotoslab text-primary">Stel uw look samen.</h2>
                        </div>

                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 group">
                            {/* Unique USP: Invisible Panel Badge */}
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-white/50">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Flush Solar Panel</span>
                                </div>
                            </div>

                            {/* The Base Image (Grayscale/Neutral Shutter for tinting) */}
                            {/* Using a neutral image that works well with multiply blending */}
                            <Image
                                src="https://images.unsplash.com/photo-1613545325251-d30b923623dc?q=80&w=1000&auto=format&fit=crop"
                                alt="Solar Rolluik Visualisatie"
                                fill
                                className="object-cover grayscale-[0.5] contrast-[1.1]"
                            />

                            {/* The Tint Overlay - The "Magic" Visualizer */}
                            <motion.div
                                initial={false}
                                animate={{ backgroundColor: activeColor.hex }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
                            />

                            {/* Shape Overlay (Simulated via SVG mask or just illustrative text for now as masking complex images is hard without specific assets) */}
                            {/* Instead of complex masking, we use a label to indicate the shape change visually in the UI context */}
                        </div>

                        {/* Reflection/Grounding Shadow */}
                        <div className="w-[90%] h-4 mx-auto bg-black/20 blur-xl rounded-[100%] mt-2"></div>
                    </div>


                    {/* RIGHT: Configuration Panel */}
                    <div className="lg:col-span-5">
                        <div className="hidden lg:block mb-8">
                            <span className="text-accent font-bold uppercase tracking-wider text-xs block mb-2">Design Studio</span>
                            <h2 className="text-4xl font-bold font-robotoslab text-primary mb-4">Krachtig, maar onopvallend.</h2>
                            <p className="text-secondary opacity-70 leading-relaxed">
                                Vergeet uitstekende zonnepanelen. Bij onze Solar-lijn is het paneel strak verzonken in de voorlijst ('Flush'). Nauwelijks zichtbaar, wel maximaal rendement.
                            </p>
                        </div>

                        {/* Option 1: Shape */}
                        <div className="mb-10">
                            <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wide">
                                1. Kies uw kastvorm
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setActiveShape("afgeschuind")}
                                    className={`p-4 rounded-xl border-2 text-left transition-all relative flex flex-col items-center text-center ${activeShape === "afgeschuind"
                                            ? "border-accent bg-accent/5"
                                            : "border-gray-100 hover:border-gray-200"
                                        }`}
                                >
                                    {/* Icon illustrating 45 degree angle */}
                                    <div className="w-12 h-12 mb-3 border-2 border-current rounded-tr-lg rounded-bl-lg rounded-br-lg relative" style={{
                                        color: activeShape === "afgeschuind" ? "#C76A3E" : "#9CA3AF"
                                    }}>
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-current origin-top-left rotate-45"></div>
                                    </div>
                                    <span className={`font-bold ${activeShape === "afgeschuind" ? "text-primary" : "text-secondary"}`}>Afgeschuind</span>
                                    <span className="text-[10px] text-secondary opacity-60">Standaard (Modern)</span>
                                    {activeShape === "afgeschuind" && <div className="absolute top-2 right-2 text-accent"><Check className="w-4 h-4" /></div>}
                                </button>

                                <button
                                    onClick={() => setActiveShape("rond")}
                                    className={`p-4 rounded-xl border-2 text-left transition-all relative flex flex-col items-center text-center ${activeShape === "rond"
                                            ? "border-accent bg-accent/5"
                                            : "border-gray-100 hover:border-gray-200"
                                        }`}
                                >
                                    {/* Icon illustrating Round shape */}
                                    <div className="w-12 h-12 mb-3 border-2 border-current rounded-tr-[20px] rounded-bl-lg rounded-br-lg border-t-0 border-l-0 relative" style={{
                                        color: activeShape === "rond" ? "#C76A3E" : "#9CA3AF"
                                    }}>
                                        <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-current rounded-tl-[24px]"></div>
                                    </div>
                                    <span className={`font-bold ${activeShape === "rond" ? "text-primary" : "text-secondary"}`}>Rond</span>
                                    <span className="text-[10px] text-secondary opacity-60">Klassiek</span>
                                    {activeShape === "rond" && <div className="absolute top-2 right-2 text-accent"><Check className="w-4 h-4" /></div>}
                                </button>
                            </div>
                            <p className="text-xs text-secondary opacity-60 mt-3 flex items-center gap-1">
                                <Box className="w-3 h-3" />
                                Beschikbaar in maten vanaf slechts 13,7 cm hoog.
                            </p>
                        </div>

                        {/* Option 2: Color */}
                        <div>
                            <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wide">
                                2. Kies uw kleur
                            </label>

                            <div className="flex gap-3 mb-6">
                                {colors.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setActiveColor(color)}
                                        className={`w-12 h-12 rounded-full shadow-sm flex items-center justify-center transition-transform hover:scale-110 relative ${activeColor.id === color.id ? "ring-4 ring-accent/20 scale-110" : ""
                                            }`}
                                        style={{ backgroundColor: color.hex, border: color.hex === "#F5F5F0" ? "1px solid #e5e7eb" : "none" }}
                                        title={color.name}
                                    >
                                        {activeColor.id === color.id && (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                                <Check className={`w-6 h-6 ${color.hex === "#F5F5F0" ? "text-gray-900" : "text-white"}`} />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic Description Box */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeColor.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="bg-gray-50 border border-gray-100 p-6 rounded-xl"
                                >
                                    <h4 className="font-bold text-primary mb-1 flex items-center gap-2">
                                        Uw keuze: {activeColor.name}
                                        <span className="text-xs font-normal text-secondary opacity-50 bg-white px-2 py-1 rounded border border-gray-100">
                                            {activeColor.ral}
                                        </span>
                                    </h4>
                                    <p className="text-sm text-secondary opacity-70">
                                        {activeColor.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
