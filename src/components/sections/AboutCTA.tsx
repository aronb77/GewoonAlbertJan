"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutCTA = () => {
    return (
        <section className="py-24 bg-[#F3F4F6] relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">

                {/* 1. Header Content */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                            Ik kom graag bij u langs.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Bent u benieuwd wat er mogelijk is voor uw woning? Ik kom vrijblijvend langs om de situatie te bekijken en de stalen te laten zien. <span className="font-semibold text-slate-800">Zorg ik voor het advies, zorgt u voor de koffie?</span>
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-green-600 shadow-sm border border-green-100">
                            <MapPin className="w-4 h-4" />
                            Geen voorrijkosten in de regio
                        </div>
                    </motion.div>
                </div>

                {/* 2. The Digital Business Card */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    >
                        {/* Card Top Border */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-400 to-secondary-600" />

                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Albert Jan</h3>
                                <p className="text-slate-500 font-medium">Eigenaar & Vakman</p>
                            </div>
                            {/* Logo Placeholder */}
                            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-secondary-500 font-serif font-black text-xl">
                                W.
                            </div>
                        </div>

                        <div className="space-y-4">
                            <a href="tel:0383769188" className="flex items-center gap-4 text-slate-600 hover:text-secondary-600 transition-colors group/link p-2 -mx-2 rounded-lg hover:bg-slate-50">
                                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover/link:bg-secondary-100 group-hover/link:text-secondary-600 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-mono font-bold text-lg">038 - 376 91 88</span>
                            </a>

                            <a href="mailto:info@werfhorst-zonwering.nl" className="flex items-center gap-4 text-slate-600 hover:text-secondary-600 transition-colors group/link p-2 -mx-2 rounded-lg hover:bg-slate-50">
                                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover/link:bg-secondary-100 group-hover/link:text-secondary-600 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium">info@werfhorst-zonwering.nl</span>
                            </a>
                        </div>

                        {/* Card Bottom: Website */}
                        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                            <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">www.gewoonalbertjan.nl</span>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Action Buttons */}
                <div className="flex flex-col items-center gap-4">
                    <Link
                        href="https://wa.me/31383769188"
                        target="_blank"
                        className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3 text-lg"
                    >
                        <MessageCircle className="w-6 h-6 fill-white" />
                        Stuur mij een Appje
                    </Link>

                    <Link href="/contact" className="text-slate-500 font-medium hover:text-slate-800 flex items-center gap-2 group transition-colors">
                        Of vul het contactformulier in
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default AboutCTA;
