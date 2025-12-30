"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, VolumeX, ShieldCheck, Power, Lock } from "lucide-react";
import Image from "next/image";

export default function SolarSecurity() {
    const [shutterDown, setShutterDown] = useState(true);

    return (
        <section
            className={`py-24 transition-colors duration-1000 relative overflow-hidden ${shutterDown ? "bg-[#111827]" : "bg-[#1F2D3A]" // Darker black-blue vs Brand Night Blue
                }`}
        >
            {/* Interactive Toggle for "Night Mode" */}
            <div className="absolute top-8 right-8 z-20">
                <button
                    onClick={() => setShutterDown(!shutterDown)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all ${shutterDown
                            ? "bg-accent text-white border-accent shadow-[0_0_20px_rgba(199,106,62,0.4)]"
                            : "bg-white/10 text-white/50 border-white/20 hover:bg-white/20"
                        }`}
                >
                    <Power className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                        {shutterDown ? "Rolluik Omlaag" : "Rolluik Omhoog"}
                    </span>
                </button>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        animate={{ opacity: shutterDown ? 1 : 0.6 }}
                        className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm"
                    >
                        Comfort & Veiligheid
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-white mb-6">
                        Een veilig fort in de nacht.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Sluit de wereld buiten met één druk op de knop.
                        Onze Solar rolluiken bieden meer dan alleen zonwering.
                    </p>
                </div>

                {/* The Triple Shield Grid */}
                <div className="grid md:grid-cols-3 gap-8 text-white">

                    {/* Pillar 1: Darkness */}
                    <motion.div
                        className={`p-8 rounded-2xl border transition-all duration-700 ${shutterDown
                                ? "bg-white/5 border-white/10 shadow-lg"
                                : "bg-transparent border-transparent opacity-60"
                            }`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-6">
                            <Moon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Pikdonker slapen</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Of u nu in ploegendienst werkt of uitslapers heeft: onze rolluiken sluiten de kamer 100% af van licht. Ook straatverlichting maakt geen kans.
                        </p>
                    </motion.div>

                    {/* Pillar 2: Silence */}
                    <motion.div
                        className={`p-8 rounded-2xl border transition-all duration-700 delay-100 ${shutterDown
                                ? "bg-white/5 border-white/10 shadow-lg"
                                : "bg-transparent border-transparent opacity-60"
                            }`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-6">
                            <VolumeX className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Oorverdovend stil</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Het pantser vormt een extra buffer vol isolerend schuim. Het dempt geluiden van verkeer, regen en buren aanzienlijk. Heerlijk rustig.
                        </p>
                    </motion.div>

                    {/* Pillar 3: Security */}
                    <motion.div
                        className={`p-8 rounded-2xl border transition-all duration-700 delay-200 ${shutterDown
                                ? "bg-white/5 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                                : "bg-transparent border-transparent opacity-60"
                            }`}
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            Inbraakvertragend
                            {shutterDown && <Lock className="w-4 h-4 text-green-500" />}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Onze motoren blokkeren de as automatisch bij tegendruk. Inbrekers krijgen het pantser niet omhoog, wat een sterke preventieve werking heeft.
                        </p>
                    </motion.div>

                </div>

            </div>

            {/* Atmospheric Background Image/Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Stars / Noise texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                {/* Smooth gradient from bottom */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-1000 ${shutterDown ? "from-black/80 via-black/40 to-transparent" : "from-[#1F2D3A] via-[#1F2D3A]/50 to-transparent"
                    }`}></div>
            </div>
        </section>
    );
}
