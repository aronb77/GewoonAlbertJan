"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HorrenHero() {
    const scrollToContent = () => {
        const element = document.getElementById("horren-collectie");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-[#E8F5E9]/30 overflow-hidden">

            {/* Background Decor (Subtle Breath of Fresh Air) */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#E0F2F1] rounded-l-[100px] z-0 opacity-50 transform translate-x-20"></div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-20 lg:py-0">

                {/* Left Column: Content */}
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="block text-[#1F2D3A] font-bold tracking-widest text-sm uppercase mb-4">
                            DE HORRENSPECIALIST VAN DE VELUWE
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold font-robotoslab text-[#1F2D3A] leading-tight mb-6">
                            Frisse lucht <span className="text-accent">naar binnen</span>, insecten & pollen <span className="text-accent">buiten</span>.
                        </h1>

                        <p className="text-secondary opacity-70 text-lg leading-relaxed mb-8">
                            Slaap weer heerlijk met het raam open. Wij leveren maatwerk horren in <strong>Oldebroek</strong>, <strong>Hattem</strong>, <strong>Wezep</strong> en <strong>Zwolle</strong>. Ook speciaal voor hooikoorts-patiënten.
                        </p>

                        {/* Pollen Badge */}
                        <div className="inline-flex items-center bg-white border border-green-100 shadow-sm rounded-full px-4 py-1.5 mb-8">
                            <ShieldCheck className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-green-800">Tip: Bekijk onze Pollenhorren</span>
                        </div>

                        {/* CTA & Trust */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-[#1F2D3A] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                Gratis inmeten aan huis
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {["100% Kier-vrij", "Windvast gaas", "Past op elk kozijn"].map((item, i) => (
                                <div key={i} className="flex items-center text-sm font-medium text-secondary/80">
                                    <div className="bg-green-100 rounded-full p-1 mr-2">
                                        <Check className="w-3 h-3 text-green-700" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual */}
                <div className="relative h-[60vh] lg:h-[80vh] w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1595246140625-573b715e9818?q=80&w=1200&auto=format&fit=crop"
                            alt="Open tuindeur met hor naar groene tuin"
                            className="w-full h-full object-cover"
                        />

                        {/* Subtle Breeze Effect Overlay */}
                        <motion.div
                            animate={{ opacity: [0, 0.1, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white pointer-events-none"
                        />
                    </motion.div>

                    {/* Floating Detail Card */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs hidden md:block"
                    >
                        <p className="font-robotoslab font-bold text-[#1F2D3A] mb-1">Genieten van de zomer</p>
                        <p className="text-xs text-secondary">Houd ongedierte buiten en laat de frisse lucht circuleren.</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
