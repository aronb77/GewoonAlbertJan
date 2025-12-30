"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Coffee, Ruler, HeartHandshake, Truck } from "lucide-react";

const steps = [
    {
        icon: Coffee,
        title: "Koffie & Stalen",
        subtitle: "Aan de keukentafel",
        desc: "Ik kom bij u langs met de stalenboeken. Geen snelle verkooppraatjes of agressieve targets, maar rustig kijken wat past bij uw huis en situatie. We bespreken uw wensen en ik meet alles direct nauwkeurig in."
    },
    {
        icon: Ruler,
        title: "Vakkundige Montage",
        subtitle: "De Vakman",
        desc: "Ik boor niet zomaar gaten. Ik kijk naar de constructie, gebruik de beste bevestigingsmaterialen en werk alles netjes af. Geen rommel achterlaten, maar gewoon even de stofzuiger erdoorheen na afloop."
    },
    {
        icon: HeartHandshake,
        title: "Altijd Bereikbaar",
        subtitle: "Service & Garantie",
        desc: "Is er na een jaar iets mis? U belt mij rechtstreeks op 06, en ik los het op. Geen wachttijden bij een callcenter, maar korte lijntjes en een snelle oplossing."
    }
];

const AboutWorkflow = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Animate the bus moving down the line based on scroll
    // Range: Starts slightly above the first dot, ends at the last dot
    const yRange = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "90%"]);
    const smoothY = useSpring(yRange, { stiffness: 100, damping: 20 });

    return (
        <section ref={containerRef} className="py-24 bg-[#F9FAFB] relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Mijn Werkwijze</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Van advies tot de laatste schroef.
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Bij grote ketens ziet u vaak drie verschillende gezichten: de verkoper, de inmeter en de monteur. Dat zorgt voor ruis.
                        Bij mij ziet u <span className="font-bold text-slate-900">één gezicht</span>. Ik meet zelf in, ik bestel de materialen en ik kom het zelf monteren. Zo weet ik zeker dat wat ik beloof, ook waargemaakt wordt.
                    </p>
                </div>

                {/* The Roadmap */}
                <div className="relative max-w-4xl mx-auto">

                    {/* Central Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:translate-x-0 border-l-2 border-dashed border-slate-300 h-full z-0" />

                    {/* The Travelling Bus */}
                    <motion.div
                        style={{ top: smoothY }}
                        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white"
                    >
                        <Truck className="w-6 h-6" />
                    </motion.div>

                    {/* Steps */}
                    <div className="space-y-16 md:space-y-24 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Icon Bubble (Center) */}
                                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 shadow-md flex items-center justify-center text-secondary-500 z-10 shrink-0 ml-16 md:ml-0">
                                    <step.icon className="w-8 h-8" />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? "md:text-right pr-4" : "md:text-left pl-4"}`}>
                                    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 max-w-lg ${idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                                            {step.subtitle}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for the other side */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutWorkflow;
