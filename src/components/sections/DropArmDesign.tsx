"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Info, CheckCircle2, SlidersHorizontal, ArrowLeftRight } from "lucide-react";

const DropArmDesign = () => {
    // Mode: 'classic' or 'modern'
    const [style, setStyle] = useState<'classic' | 'modern'>('classic');

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* 1. CONTENT HEADER */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <span className="text-secondary-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Design & Uitstraling
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Van Jaren '30 tot <span className="text-secondary-500">Nieuwbouw.</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Het uitvalscherm is een kameleon. Met een golvende volant en een streepdoek haalt u de nostalgie terug. Kiest u voor een strakke cassette zonder volant? Dan heeft u een ultra-modern design-element aan uw gevel.
                    </p>
                </div>

                {/* 2. STYLE SWITCHER INTERFACE */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT: Controls & Story */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">

                        {/* Switcher Component */}
                        <div className="bg-slate-100 p-2 rounded-full flex relative mb-12">
                            {/* Sliding Background */}
                            <motion.div
                                className="absolute top-2 bottom-2 bg-white rounded-full shadow-md z-0"
                                initial={false}
                                animate={{
                                    left: style === 'classic' ? '8px' : '50%',
                                    width: 'calc(50% - 12px)'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />

                            <button
                                onClick={() => setStyle('classic')}
                                className={`flex-1 py-3 text-center font-bold z-10 transition-colors relative ${style === 'classic' ? 'text-secondary-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Klassiek Karakter
                            </button>
                            <button
                                onClick={() => setStyle('modern')}
                                className={`flex-1 py-3 text-center font-bold z-10 transition-colors relative ${style === 'modern' ? 'text-secondary-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Modern Design
                            </button>
                        </div>

                        {/* Story Text based on Selection */}
                        <div className="min-h-[160px]">
                            <AnimatePresence mode="wait">
                                {style === 'classic' ? (
                                    <motion.div
                                        key="classic-text"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-8 bg-amber-600 rounded-full" />
                                            Authentieke Sfeer
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            De **ronde cassette** en de klassieke **volant** (de golvende strook stof) geven uw gevel charme. Perfect voor vooroorlogse woningen, boerderijen en klassieke panden.
                                        </p>
                                        <div className="flex gap-4 text-sm text-slate-500 font-medium">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Ronde vormen
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Met Volant
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="modern-text"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-8 bg-slate-800 rounded-full" />
                                            Minimalistisch Strak
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            Kies voor de **vierkante (Carré) cassette** en laat de volant weg. Het resultaat is een strakke lijn die perfect aansluit bij moderne architectuur en renovaties.
                                        </p>
                                        <div className="flex gap-4 text-sm text-slate-500 font-medium">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Vierkante cassette
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Geen volant
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Expert Tip - Modern only */}
                        <div className={`mt-8 transition-opacity duration-500 ${style === 'modern' ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex gap-3 transform -rotate-1 relative shadow-sm">
                                <div className="absolute -top-3 left-6 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-200 uppercase tracking-wide">
                                    Tip van Albert Jan
                                </div>
                                <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-700 font-medium italic">
                                    "Voor een écht tijdloze look kiezen we steeds vaker 'Solid Grey' doek zonder volant. Dat verveelt nooit."
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* RIGHT: THE VISUAL MORPH */}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-square md:aspect-[4/3] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex items-center justify-center p-8">

                            {/* Background Context (Wall) */}
                            <motion.div
                                className="absolute inset-0 z-0 bg-cover bg-center"
                                initial={false}
                                animate={{
                                    backgroundImage: style === 'classic'
                                        ? "url('https://www.transparenttextures.com/patterns/brick-wall.png')" // Represents classic brick
                                        : "url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')" // Represents smooth stucco
                                    ,
                                    backgroundColor: style === 'classic' ? '#fcf0e3' : '#e2e8f0'
                                }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Window Frame */}
                            <div className="relative z-10 w-3/4 h-3/4 bg-sky-100 border-8 border-white shadow-inner flex items-center justify-center overflow-hidden">
                                {/* Window Reflection/Glass */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />

                                {/* The Awning Visual Construction */}
                                <div className="absolute top-0 left-0 right-0 h-full">

                                    {/* 1. CASSETTE BOX */}
                                    {/* We animate border-radius to morph shape */}
                                    <motion.div
                                        className="h-16 w-[110%] -ml-[5%] absolute top-0 z-30 shadow-lg flex items-center justify-center"
                                        initial={false}
                                        animate={{
                                            borderRadius: style === 'classic' ? '0 0 20px 20px' : '0px',
                                            backgroundColor: style === 'classic' ? '#fef3c7' : '#334155', // Cream vs Anthracite
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Cassette Detail lines */}
                                        <div className="w-3/4 h-1 bg-black/10 rounded-full" />
                                    </motion.div>

                                    {/* 2. THE FABRIC */}
                                    <motion.div
                                        className="absolute top-14 left-0 right-0 h-3/4 origin-top z-20 shadow-md"
                                        style={{ transform: "perspective(500px) rotateX(20deg)" }}
                                        animate={{
                                            backgroundColor: style === 'classic' ? '#fff7ed' : '#94a3b8',
                                            backgroundImage: style === 'classic'
                                                ? "linear-gradient(90deg, transparent 50%, #ea580c 50%)" // Striped
                                                : "none", // Solid
                                            backgroundSize: style === 'classic' ? "40px 100%" : "auto"
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* 3. THE VOLANT (Bottom Flap) */}
                                    <motion.div
                                        className="absolute top-[calc(14px+75%)] left-0 right-0 h-16 origin-top z-20"
                                        style={{ transform: "perspective(500px) rotateX(20deg)" }}
                                        initial={false}
                                        animate={{
                                            opacity: style === 'classic' ? 1 : 0,
                                            y: style === 'classic' ? 0 : -20
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Wavy Shape (SVG) */}
                                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                                            <motion.path
                                                d="M0,0 L100,0 L100,10 C90,15 80,10 70,15 C60,20 50,15 40,20 C30,15 20,20 10,15 C5,12 0,15 0,10 Z"
                                                fill={style === 'classic' ? "#ea580c" : "transparent"} // Orange stripe color base
                                                animate={{ fill: style === 'classic' ? "#ea580c" : "transparent" }}
                                            />
                                            {/* Only showing stripe color for simplicity in SVG, normally complex pattern */}
                                        </svg>
                                    </motion.div>

                                    {/* 4. THE ARMS */}
                                    <div className="absolute top-[40%] left-2 w-2 h-[80%] bg-white shadow-sm -rotate-12 z-10" />
                                    <div className="absolute top-[40%] right-2 w-2 h-[80%] bg-white shadow-sm rotate-12 z-10" />

                                </div>
                            </div>

                            {/* Context Label */}
                            <motion.div
                                className="absolute bottom-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide shadow-sm text-slate-600"
                                key={style}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {style === 'classic' ? "Configuratie: Jaren '30 Stijl" : "Configuratie: Modern Renvoatie"}
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DropArmDesign;
