"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CloudRain, Info, CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "Kan ik onder het scherm blijven zitten als het regent?",
        answer: "Let op: een knikarmscherm is in de basis **zonwering**, geen regenbescherming. Een klein buitje is geen probleem (het doek is waterafstotend), maar bij harde regen kan er een waterzak ontstaan waardoor het scherm zwaar wordt. Ons advies: bij regen indraaien.",
        icon: CloudRain,
        alert: true
    },
    {
        question: "Hoe houd ik het doek schoon?",
        answer: "Simpel: borstel vuil droog af. Zit er een vlek in? Gebruik lauw water en een zachte borstel. Gebruik **nooit** een hogedrukreiniger en geen agressieve zeep, want dan beschadigt u de coating.",
        icon: Info
    },
    {
        question: "Mijn muur is oud/slecht, kan er wel een scherm aan?",
        answer: "Bijna altijd. Wij gebruiken chemische ankers die uitharden in de muur. Bij zwakke muren gebruiken we speciale 'verlengde muursteunen' om de kracht over een groter oppervlak te verdelen. Ik beoordeel dit altijd vooraf tijdens het inmeten.",
        icon: Info
    },
    {
        question: "Wat is de levertijd?",
        answer: "Omdat elk scherm op de millimeter nauwkeurig op maat wordt gemaakt in de fabriek, moet u rekenen op 4 tot 6 weken. Bestel dus op tijd in het voorjaar, dan zit u er in de zomer koel bij.",
        icon: CalendarCheck
    }
];

const AwningsFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white">

            {/* 1. FAQ SECTION */}
            <div className="py-24 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm text-center">Veelgestelde Vragen</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-12 text-center">
                        Eerlijk advies vooraf.
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors bg-slate-50/50"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-slate-900 flex items-center gap-3">
                                        {faq.alert && <faq.icon className="w-5 h-5 text-amber-500" />}
                                        {!faq.alert && <faq.icon className="w-5 h-5 text-slate-400" />}
                                        {faq.question}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} />
                                </button>

                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                                                <div className="pt-4" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. SUMMER CTA BANNER */}
            <div className="relative py-24 bg-gradient-to-r from-orange-500 to-amber-600 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                {/* Sun Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-robotoslab mb-6 drop-shadow-md">
                            Maak uw terras klaar <br className="hidden md:block" /> voor de zomer.
                        </h2>
                        <p className="text-orange-50 text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                            Wacht niet tot de eerste hittegolf. Plan nu uw inmeetafspraak, dan zorgen wij dat uw droomterras op tijd klaar is voor de eerste BBQ.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <Link
                                href="/contact"
                                className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 group"
                            >
                                <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Plan gratis adviesgesprek
                            </Link>

                            <Link
                                href="tel:0383761234"
                                className="text-white font-bold text-lg border-b-2 border-white/30 hover:border-white transition-colors flex items-center gap-2 pb-1"
                            >
                                <Phone className="w-5 h-5" />
                                Of bel direct
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-orange-100">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                                Gratis inmeten & advies aan huis
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                                Geen voorrijkosten in de regio
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default AwningsFAQ;
