"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Scissors, Layers, CheckCircle2, ZoomIn } from "lucide-react";

type ColorOption = {
    name: string;
    class: string;
    type: 'solid' | 'pattern';
};

const FABRICS: ColorOption[] = [
    { name: "Antraciet", class: "bg-slate-800", type: 'solid' },
    { name: "Klassiek Crème", class: "bg-[#Fdf4e3]", type: 'solid' },
    { name: "Flessengroen", class: "bg-[#1a4c33]", type: 'solid' },
    { name: "Rood-Wit", class: "bg-[repeating-linear-gradient(90deg,#8b0000,#8b0000_20px,#ffffff_20px,#ffffff_40px)]", type: 'pattern' },
];

const CASINGS: ColorOption[] = [
    { name: "Zuiver Wit", class: "bg-white", type: 'solid' },
    { name: "Crème Wit (RAL 9001)", class: "bg-[#Fdf4e3]", type: 'solid' },
    { name: "Grachtengroen", class: "bg-[#1a4c33]", type: 'solid' },
    { name: "Zwart", class: "bg-stone-900", type: 'solid' },
];

const MarkiezenDesign = () => {
    const [fabric, setFabric] = useState(FABRICS[2]); // Default Green
    const [casing, setCasing] = useState(CASINGS[1]); // Default Creme
    const [hasVolant, setHasVolant] = useState(true);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* 1. VISUALIZER (LEFT) */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-stone-100 rounded-3xl p-8 lg:p-12 shadow-inner border border-stone-200 aspect-square flex items-center justify-center relative overflow-hidden">

                            {/* Background Context (Wall) */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')]" />

                            {/* THE MARKIES VISUAL */}
                            <div className="relative w-full max-w-md aspect-square flex flex-col items-center justify-center drop-shadow-2xl">

                                {/* Markies Shape Container */}
                                <motion.div
                                    className="relative w-full h-[60%] z-10"
                                    layout
                                >
                                    {/* The Hood (Main Fabric) */}
                                    <div
                                        className={`w-full h-full rounded-t-lg rounded-b-[60px] shadow-2xl relative overflow-hidden transition-all duration-500 ${fabric.type === 'solid' ? fabric.class : ''}`}
                                        style={fabric.type === 'pattern' ? { background: 'repeating-linear-gradient(90deg, #8b0000 0px, #8b0000 20px, #ffffff 20px, #ffffff 40px)' } : {}}
                                    >
                                        {/* Fabric Texture Overlay */}
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />

                                        {/* Shadow shading for 3D effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                                        {/* Ribs (Skeleton) */}
                                        <div className="absolute top-0 bottom-0 left-[20%] w-[2px] bg-black/10" />
                                        <div className="absolute top-0 bottom-0 left-[40%] w-[2px] bg-black/10" />
                                        <div className="absolute top-0 bottom-0 left-[60%] w-[2px] bg-black/10" />
                                        <div className="absolute top-0 bottom-0 left-[80%] w-[2px] bg-black/10" />

                                        {/* Biesband & Siernagels (Binding & Nails) */}
                                        <div className="absolute bottom-4 left-0 right-0 h-4 border-t border-dashed border-white/50 flex justify-between px-4 items-center">
                                            {/* Just decorative line for nails */}
                                        </div>
                                    </div>

                                    {/* CASING (The Wood/Alu Frame) */}
                                    {/* Top Cover */}
                                    <div
                                        className={`absolute top-[-20px] left-[-10px] right-[-10px] h-6 rounded-t-sm shadow-md transition-colors duration-500 border-b border-black/10 flex items-center justify-center ${casing.class} ${casing.name === 'Zwart' || casing.name === 'Grachtengroen' ? 'text-white/50' : 'text-stone-400'}`}
                                    >
                                        <div className="w-1 h-1 rounded-full bg-current mx-1" />
                                        <div className="w-1 h-1 rounded-full bg-current mx-1" />
                                    </div>
                                    {/* Side Legs (Visualized as top corners for simplicity in 2D or just implied) */}

                                    {/* Volant (The Wavy Bottom) */}
                                    {hasVolant && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className={`absolute -bottom-16 left-0 right-0 h-16 z-0 ${fabric.type === 'solid' ? fabric.class : ''}`}
                                            style={fabric.type === 'pattern' ? { background: 'repeating-linear-gradient(90deg, #8b0000 0px, #8b0000 20px, #ffffff 20px, #ffffff 40px)' } : {}}
                                        >
                                            {/* Texture */}
                                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                                            {/* Wavy clip path */}
                                            <div
                                                className="absolute inset-0 bg-stone-100" // Acts as mask
                                                style={{
                                                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%, 0 0, 5% 20%, 10% 0, 15% 20%, 20% 0, 25% 20%, 30% 0, 35% 20%, 40% 0, 45% 20%, 50% 0, 55% 20%, 60% 0, 65% 20%, 70% 0, 75% 20%, 80% 0, 85% 20%, 90% 0, 95% 20%, 100% 0)'
                                                    // Inverted logic is hard in CSS clip-path without masking. Let's do simple white wavies overlay or just CSS radial gradients.
                                                }}
                                            />
                                            {/* Better Wavy Bottom approach:  */}
                                            <div className="absolute bottom-0 left-0 right-0 h-4 bg-stone-100"
                                                style={{
                                                    maskImage: 'radial-gradient(circle at 10px 0px, transparent 10px, black 11px)',
                                                    maskSize: '20px 20px',
                                                    maskPosition: '0 0',
                                                    maskRepeat: 'repeat-x',
                                                    WebkitMaskImage: 'radial-gradient(circle at 10px -5px, transparent 10px, black 11px)',
                                                    WebkitMaskSize: '20px 20px',
                                                    transform: 'rotate(180deg)'
                                                }}
                                            />
                                            {/* Let's Try a simpler CSS wave if mask is tricky */}
                                            <div className="absolute bottom-[-1px] left-0 right-0 h-4 bg-stone-100" style={{ '--mask': 'radial-gradient(10px at 50% 100%, #0000 98%, #000 101%)', WebkitMask: 'var(--mask)', mask: 'var(--mask)', maskSize: '20px 100%' } as React.CSSProperties}></div>
                                        </motion.div>
                                    )}

                                </motion.div>

                                {/* ZOOM BUBBLE (Detail) */}
                                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg border border-stone-100 animate-bounce-slow">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-stone-200">
                                        {/* Zoomed view of fabric + nails */}
                                        <div className={`absolute inset-0 scale-[3] origin-bottom-left ${fabric.class} ${fabric.type === 'pattern' ? 'bg-[repeating-linear-gradient(90deg,#8b0000,#8b0000_20px,#ffffff_20px,#ffffff_40px)]' : ''}`} />
                                        <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-stone-300 shadow-sm border border-stone-400" /> {/* Nail */}
                                        <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full bg-stone-300 shadow-sm border border-stone-400" /> {/* Nail */}
                                    </div>
                                    <div className="absolute -top-1 -left-1 bg-green-600 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-[10px]">
                                        <ZoomIn className="w-3 h-3" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* 2. CONFIGURATOR CONTROLS (RIGHT) */}
                    <div className="order-1 lg:order-2">
                        <span className="text-green-800 font-serif italic text-lg tracking-wide mb-2 block">
                            Atelier Kwaliteit
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                            Stel uw eigen stijl samen.
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8 font-serif">
                            Kiest u voor klassiek crème-wit met een groen biesje? Of gaat u voor een stoere, volledig zwarte 'black-on-black' look? Wij maken het in ons atelier exact zoals u wilt.
                        </p>

                        <div className="space-y-8">

                            {/* Color Selector */}
                            <div>
                                <label className="flex items-center gap-2 font-bold text-stone-900 mb-4">
                                    <Palette className="w-5 h-5 text-green-700" />
                                    Kleur Doek
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {FABRICS.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setFabric(color)}
                                            className={`p-1 rounded-full border-2 transition-all ${fabric.name === color.name ? 'border-green-600 scale-110' : 'border-transparent hover:border-stone-300'}`}
                                            title={color.name}
                                        >
                                            <div className={`w-12 h-12 rounded-full shadow-sm ${color.class}`} />
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-2 text-sm text-stone-500 font-serif italic">
                                    Gekozen: {fabric.name}
                                </p>
                            </div>

                            {/* Casing Selector */}
                            <div>
                                <label className="flex items-center gap-2 font-bold text-stone-900 mb-4">
                                    <Layers className="w-5 h-5 text-green-700" />
                                    Kleur Omkasting
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {CASINGS.map((opt) => (
                                        <button
                                            key={opt.name}
                                            onClick={() => setCasing(opt)}
                                            className={`p-1 rounded-full border-2 transition-all ${casing.name === opt.name ? 'border-green-600 scale-110' : 'border-transparent hover:border-stone-300'}`}
                                            title={opt.name}
                                        >
                                            <div className={`w-12 h-12 rounded-full shadow-sm border border-stone-100 ${opt.class}`} />
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-2 text-sm text-stone-500 font-serif italic">
                                    Gekozen: {casing.name}
                                </p>
                            </div>

                            {/* Toggle Volant */}
                            <div className="pt-6 border-t border-stone-100">
                                <label className="flex items-center gap-2 font-bold text-stone-900 mb-4">
                                    <Scissors className="w-5 h-5 text-green-700" />
                                    Afwerking
                                </label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setHasVolant(true)}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-bold ${hasVolant ? 'border-green-600 bg-green-50 text-green-800' : 'border-stone-200 text-stone-500 hover:border-stone-300'}`}
                                    >
                                        Met Volant (Klassiek)
                                    </button>
                                    <button
                                        onClick={() => setHasVolant(false)}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-bold ${!hasVolant ? 'border-green-600 bg-green-50 text-green-800' : 'border-stone-200 text-stone-500 hover:border-stone-300'}`}
                                    >
                                        Zonder Volant (Modern)
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarkiezenDesign;
