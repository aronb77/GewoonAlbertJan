"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Umbrella, Maximize, CheckCircle2, ShieldCheck, Wifi, VolumeX } from "lucide-react";
import Image from "next/image";

const useCases = [
    {
        icon: Home,
        title: "De redder van uw zolder",
        subtitle: "Dakkapel Special",
        problem: "Op zolder is het vaak het heetst, maar stroom aanleggen is daar lastig.",
        solution: "Met Solar Screens is boren door het dak verleden tijd. We monteren direct op de dakkapel. Binnen 1 uur geplaatst, direct koel.",
        image: "https://images.unsplash.com/photo-1593696140826-c58b5e636894?q=80&w=1000&auto=format&fit=crop", // Attic/Dormer vibe
    },
    {
        icon: Umbrella,
        title: "Windvrij buiten zitten",
        subtitle: "Overkapping & Veranda",
        problem: "U wilt langer buiten zitten, maar de wind en regen gooien roet in het eten.",
        solution: "Maak van uw overkapping een tuinkamer. Met een rits-screen sluit u de zijkant af tegen wind en regen, terwijl u wel naar uw tuin blijft kijken.",
        image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=1000&auto=format&fit=crop", // Patio vibe
    },
    {
        icon: Maximize,
        title: "Tot 6 meter breed",
        subtitle: "Grote Glaspartijen",
        problem: "Heeft u een grote schuifpui? Standaard zonwering is vaak te smal.",
        solution: "Onze screens kunnen kamerbreed (uit één stuk) geleverd worden. Strak, naadloos en zonder kieren. Perfect voor moderne woningen.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", // Large windows vibe
    },
];

const ScreensVersatility = () => {
    return (
        <section className="py-24 bg-[#F9FAFB]">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Toepassingen</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Voor elke situatie de slimste oplossing.
                    </h2>
                </div>

                {/* Use Case Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {useCases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                        >
                            {/* Hover Image Reveal */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-secondary-50 text-secondary-500 flex items-center justify-center mb-6 shadow-sm group-hover:bg-secondary-500 group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-7 h-7" />
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">{item.subtitle}</span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-secondary-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="space-y-4 mb-4 grow">
                                    {/* Problem */}
                                    <div className="flex gap-3 items-start opacity-70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                        <p className="text-sm text-slate-600 italic">"{item.problem}"</p>
                                    </div>
                                    {/* Solution */}
                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-700 font-medium leading-relaxed">{item.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Somfy Trust Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Brand Side */}
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg border border-white/5 mb-4">
                                <span className="font-bold text-white tracking-widest">somfy.</span>
                                <span className="text-slate-400 text-sm font-medium border-l border-slate-600 pl-2">Official Partner</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Aangedreven door <span className="text-secondary-400">Solar IO</span>.
                            </h3>
                            <p className="text-slate-400">
                                De stilste en slimste motoren op de markt.
                            </p>
                        </div>

                        {/* Features Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                            {[
                                { icon: VolumeX, text: "Fluisterstille motor" },
                                { icon: ShieldCheck, text: "Obstakeldetectie (veilig)" },
                                { icon: Wifi, text: "Bediening via App (TaHoma)" },
                                { icon: CheckCircle2, text: "7 Jaar Garantie" },
                            ].map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-200">
                                    <feat.icon className="w-5 h-5 text-secondary-500" />
                                    <span className="font-medium">{feat.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ScreensVersatility;
