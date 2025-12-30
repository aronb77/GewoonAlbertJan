"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wind, ShieldCheck, Minimize2, CheckCircle2, ChevronRight } from "lucide-react";

const PergolaTech = () => {
    return (
        <section className="py-24 bg-[#F3F4F6] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* 1. VISUAL: THE ZIPPER (LEFT) */}
                    <div className="relative">
                        {/* Technical Grid Background */}
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />

                        {/* The Window/Profile Container */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200 relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">

                            <div className="relative w-full h-full flex items-center justify-center p-8">

                                {/* 1. The RAIL / Profile (Cross Section) */}
                                {/* Simple C-Shape or U-Shape Profile */}
                                <div className="absolute left-[30%] top-[20%] bottom-[20%] w-16 bg-stone-300 border-2 border-stone-400 rounded-l-lg z-20 flex flex-col justify-center">
                                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-stone-200 border-l border-stone-300" />

                                    {/* Inner Grip Mechanism */}
                                    <div className="absolute right-2 top-0 bottom-0 w-2 bg-stone-800/20" />
                                </div>

                                {/* 2. The FABRIC with ZIPPER */}
                                {/* It enters the rail and expands */}
                                <motion.div
                                    className="absolute left-[calc(30%+16px)] right-8 top-[30%] bottom-[30%] bg-[#D2B48C] z-10 flex items-center shadow-lg"
                                    animate={{
                                        x: [0, 2, 0] // Subtle vibration to show tension
                                    }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                >
                                    {/* Texture */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />

                                    {/* The "Zipper" inside the rail (The Bulb) */}
                                    <div className="absolute left-[-12px] top-0 bottom-0 w-4 bg-black rounded-l-full" />

                                    {/* Tension Arrows (Force) */}
                                    <div className="absolute inset-0 flex flex-col justify-center gap-4 pl-8">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center text-white/50"
                                                animate={{ x: [-5, 0, -5], opacity: [0.5, 0.8, 0.5] }}
                                                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                                <ChevronRight className="w-4 h-4 -ml-2" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* 3. WIND SIMULATION (HITTING THE FABRIC) */}
                                <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30">
                                    <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg shadow-blue-500/30">
                                        Winddruk
                                    </div>
                                    <motion.div
                                        animate={{ x: [-10, -5, -10] }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                                    >
                                        <Wind className="w-12 h-12 text-blue-400" />
                                    </motion.div>
                                </div>

                                {/* Annotations */}
                                <div className="absolute left-[15%] top-[15%]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-stone-800 rounded-full animate-ping absolute opacity-20" />
                                        <div className="w-3 h-3 bg-stone-800 rounded-full relative" />
                                        <span className="bg-stone-800 text-white text-xs px-2 py-1 rounded font-bold">Unieke Rits-techniek</span>
                                    </div>
                                    <div className="w-0.5 h-16 bg-stone-800 ml-1.5 mt-1" />
                                </div>

                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-green-200">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Windklasse 3 (Stormvast)
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* 2. CONTENT: BENEFITS (RIGHT) */}
                    <div>
                        <span className="text-secondary-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                            Technische Perfectie
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                            Geen geklapper. <br /><span className="text-secondary-600">Geen kieren.</span>
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8">
                            Het geheim zit in de geleiders. Dankzij de unieke <strong>Zipp-techniek</strong> zit het doek over de volledige lengte verankerd in de profielen.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-stone-200 h-fit">
                                    <ShieldCheck className="w-6 h-6 text-secondary-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg">Windvast & Insectenwerend</h4>
                                    <p className="text-stone-500">
                                        Doordat het doek 'geritst' zit, krijgt wind geen vat op de zijkanten. Als bonus houdt het muggen en vliegen buiten.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-stone-200 h-fit">
                                    <Minimize2 className="w-6 h-6 text-secondary-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg">Strak als een trommel</h4>
                                    <p className="text-stone-500">
                                        Geen hangende doeken. De spanning wordt gelijkmatig verdeeld, wat zorgt voor een strak plafond-effect.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-stone-300">
                            <p className="text-sm font-mono text-stone-500 uppercase tracking-widest">
                                Technology: <span className="text-stone-900 font-bold">ZippScreen® System</span>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default PergolaTech;
