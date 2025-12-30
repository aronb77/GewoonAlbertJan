"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Maximize2 } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        id: 1,
        title: "Modern Minimalisme",
        location: "Zwolle Stadshagen",
        desc: "Een brede, strakke cassette (antraciet) die wegvalt tegen de gevel.",
        image: "https://images.unsplash.com/photo-1632924045507-6c2e361d7637?q=80&w=1000&auto=format&fit=crop", // Modern clean
        size: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 2,
        title: "Klassieke Gezelligheid",
        location: "Elburg Vesting",
        desc: "Warm oranje streepdoek met volant voor die echte zomerse sfeer.",
        image: "https://images.unsplash.com/photo-1596238696860-26466f217822?q=80&w=800&auto=format&fit=crop", // Warm terrace
        size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "Horeca Allure",
        location: "Nunspeet",
        desc: "Grote uitval van 3,5 meter voor een compleet schaduwterras.",
        image: "https://images.unsplash.com/photo-1559869601-524dc8e05c6d?q=80&w=800&auto=format&fit=crop", // Large shading
        size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "Avondsetting met LED",
        location: "Wezep",
        desc: "Geïntegreerde verlichting in de armen voor lange zomeravonden.",
        image: "https://images.unsplash.com/photo-1542456073-61fcbb8c7c9f?q=80&w=800&auto=format&fit=crop", // Night feeling
        size: "col-span-1 md:col-span-1 row-span-1"
    },
];

const AwningsGallery = () => {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-orange-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Inspiratie
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Buitenleven, zoals het hoort.
                    </h2>
                    <p className="text-stone-600 text-lg">
                        Elk terras is anders. Laat u inspireren door recente projecten in de regio. Van strakke nieuwbouw in Zwolle tot sfeervolle boerderijen in Oldebroek.
                    </p>
                </div>

                {/* MASONRY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`relative group rounded-3xl overflow-hidden shadow-md cursor-pointer ${project.size}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Image Placeholder - In real app, use next/image properly */}
                            <div className="absolute inset-0 bg-stone-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1 block">
                                    {project.location}
                                </span>
                                <h3 className="text-2xl font-robotoslab font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-serif leading-relaxed line-clamp-2">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Icon */}
                            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-stone-900">
                                <Maximize2 className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}

                    {/* "More" Card */}
                    <div className="relative bg-white rounded-3xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center p-8 text-center group hover:border-orange-300 hover:bg-orange-50 transition-colors">
                        <div className="bg-stone-100 p-4 rounded-full mb-4 group-hover:bg-white text-stone-400 group-hover:text-orange-500 transition-colors">
                            <Plus className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-stone-900 font-robotoslab text-xl">Bekijk meer</h3>
                        <p className="text-stone-500 text-sm mt-2 font-serif">
                            Volg ons op Instagram voor de laatste projecten.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AwningsGallery;
