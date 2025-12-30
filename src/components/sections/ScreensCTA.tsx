"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ScreensCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-secondary-400 mb-6 border border-white/10 uppercase tracking-widest">
                        Speciale Aanbieding
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-robotoslab mb-8 leading-tight">
                        Klaar voor een koel en comfortabel huis?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Ontvang nu tijdelijk <span className="text-white font-bold">15% korting</span> op alle elektrische ZIP-screens inclusief gratis montage. Vraag vandaag nog een vrijblijvende offerte aan.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-secondary-500/25 group"
                        >
                            <Calendar className="w-5 h-5" />
                            Gratis inmeetafspraak
                            <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <a
                            href="tel:0612345678"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/10"
                        >
                            <Phone className="w-5 h-5" />
                            Bel voor advies
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-slate-500">
                        * Actie geldig t/m 31 mei. Geen voorrijkosten binnen 25km.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ScreensCTA;
