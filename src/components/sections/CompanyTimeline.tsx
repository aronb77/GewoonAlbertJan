"use client";

import React from "react";
import { motion } from "framer-motion";

const MILESTONES = [
    {
        year: "2010",
        title: "De Start",
        desc: "Na jaren ervaring in de montage besluit Albert Jan voor zichzelf te beginnen. Met een eigen bus en een koffer vol gereedschap de regio in."
    },
    {
        year: "2015",
        title: "Werfhorst Zonwering",
        desc: "De naam wordt een begrip in Oldebroek. De focus verschuift van puur montage naar ook verkoop van kwaliteitsproducten."
    },
    {
        year: "2020",
        title: "Nieuwe Werkplaats",
        desc: "Verhuizing naar een groter pand. Meer ruimte voor opslag, assemblage en het showen van doekstalen."
    },
    {
        year: "2024",
        title: "Gewoon Albert Jan",
        desc: "Een frisse wind, maar dezelfde vertrouwde service. focus op totale ontzorging en 'Smart Home' oplossingen met Somfy."
    }
];

const CompanyTimeline = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Onze Reis
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900">
                        Van vakman tot begrip.
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {MILESTONES.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Time Marker (Mobile: Left, Desktop: Center) */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg md:-translate-x-1/2 mt-1.5 z-10" />

                                {/* Content Side */}
                                <div className={`pl-12 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <span className="text-blue-600 font-bold text-lg block mb-1">{item.year}</span>
                                    <h3 className="text-2xl font-bold font-robotoslab text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-500 font-serif leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Empty Side for alignment */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CompanyTimeline;
