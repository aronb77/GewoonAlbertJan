"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, MapPin, Handshake } from "lucide-react";
import Image from "next/image";

const AboutHero = () => {
    return (
        <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                <span className="text-[40rem] font-bold text-slate-50 opacity-40 font-serif leading-none">W</span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: The Story (60%) */}
                    <div className="lg:col-span-7 pt-12 lg:pt-0">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="block text-secondary-500 font-bold tracking-[0.2em] mb-6 uppercase text-sm"
                        >
                            Aangenaam kennis te maken
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold font-robotoslab text-slate-900 leading-tight mb-8"
                        >
                            Geen snelle verkoper, <br className="hidden md:block" />
                            maar een <span className="text-secondary-500">vakman</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
                        >
                            Mijn naam is <strong>Albert Jan van de Werfhorst</strong>. Ik geloof in ouderwetse service: zelf opnemen, eerlijk adviseren en vakkundig monteren. U heeft bij mij één aanspreekpunt voor het hele traject. Wel zo duidelijk.
                        </motion.p>

                        {/* Signature Block */}
                        <div className="mb-12">
                            <motion.svg
                                width="250"
                                height="80"
                                viewBox="0 0 300 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-slate-800"
                            >
                                <motion.path
                                    d="M20,60 C40,40 20,90 50,70 C70,50 90,50 110,60 C130,70 120,40 100,50 C80,60 140,40 160,50 C180,60 170,90 190,70 C210,50 230,60 250,50"
                                    // Note: This is a simplified path for demonstration. In production, this would be the actual SVG path of the signature.
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
                                />
                                <motion.text
                                    x="40"
                                    y="90"
                                    className="font-handwriting text-sm fill-slate-500 font-normal opacity-0"
                                    animate={{ opacity: 0 }} // Hide generic text, relying on path, or use a font-based signature if path is too generic
                                >
                                    Albert Jan
                                </motion.text>
                            </motion.svg>
                        </div>

                        {/* Value Props Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100"
                        >
                            {[
                                { title: "Eén gezicht", desc: "Van advies tot montage", icon: Handshake },
                                { title: "Lokaal betrokken", desc: "Thuis op de Veluwe", icon: MapPin },
                                { title: "Afspraak is afspraak", desc: "Geen kleine lettertjes", icon: ShieldCheck }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-start">
                                    <div className="mt-1 text-secondary-500">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                        <p className="text-slate-500 text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: The Visual (40%) */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            {/* Image Frame */}
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" // Professional portrait placeholder
                                    alt="Albert Jan van de Werfhorst"
                                    fill
                                    className="object-cover"
                                />
                                {/* Gradient Overlay at bottom for better text readability if we add text over image (not currently using) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent mix-blend-multiply" />
                            </div>

                            {/* Floating Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-50 max-w-[200px]"
                            >
                                <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center text-secondary-600 shrink-0">
                                    <CalendarCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-slate-900 leading-none">10+</span>
                                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Jaar Ervaring</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative background element behind image */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-2 border-secondary-100 rounded-2xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
