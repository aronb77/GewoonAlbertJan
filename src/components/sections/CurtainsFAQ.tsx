"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Palette, Ruler, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CurtainsFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Moeten de gordijnen op de grond hangen of vrij?",
            answer: (
                <div className="space-y-4">
                    <p>
                        Dat is een smaakkwestie. De trend is momenteel <strong>'Kissing the floor'</strong>: de stof tikt net de vloer aan voor een luxe, rijke uitstraling.
                    </p>
                    <p>
                        Voor het praktische gemak (stofzuigen) adviseren we vaak <strong>1 cm vrij</strong> van de vloer. Wij meten dit tijdens de montage met lasers precies voor u uit, zodat het overal gelijk is.
                    </p>
                </div>
            )
        },
        {
            question: "Kunnen de gordijnen in de wasmachine?",
            answer: (
                <div className="space-y-4">
                    <p>
                        <strong>Inbetweens</strong> kunnen vaak wel gewassen worden (op 30 graden, wolwas, en nat ophangen).
                    </p>
                    <p>
                        <strong>Gevoerde overgordijnen</strong> en velours stoffen adviseren wij echter te laten <strong>stomen</strong> om krimp (tot wel 3%) te voorkomen. U krijgt bij levering altijd een specifiek wasadvies voor uw gekozen stof.
                    </p>
                </div>
            )
        },
        {
            question: "Kan ik mijn rails elektrisch maken?",
            answer: (
                <div className="space-y-4">
                    <p>
                        <strong>Jazeker.</strong> Wij zijn specialist in <strong>Somfy Glydea</strong> rails. Hiermee opent u de gordijnen via een app, afstandsbediening of spraaksturing.
                    </p>
                    <p className="flex items-center gap-2 text-sm text-secondary-600 font-bold">
                        <Sparkles className="w-4 h-4" /> Feature: Touch Motion
                    </p>
                    <p className="text-sm text-stone-600">
                        Deze motoren hebben ook 'Touch Motion': geef een klein rukje aan de stof, en de motor neemt het direct over en schuift het gordijn open of dicht. Ideaal voor zware, hoge gordijnen.
                    </p>
                </div>
            )
        },
        {
            question: "Wat is de levertijd?",
            answer: (
                <p>
                    Omdat het echt maatwerk confectie is (handwerk in het Nederlandse atelier), moet u rekenen op circa <strong>3 tot 4 weken</strong>. Zodra ze klaar zijn, maken we een afspraak om ze direct bij u op te hangen, inclusief het stomen van de plooien indien nodig.
                </p>
            )
        }
    ];

    return (
        <section className="bg-white">

            {/* FAQ SECTION */}
            <div className="py-24 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-[#D2B48C] font-bold uppercase tracking-wider mb-2 block text-sm">
                        Veelgestelde vragen
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-stone-900">
                        Expert advies.
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className="text-lg font-bold text-stone-800 flex items-center gap-4">
                                    <HelpCircle className="w-5 h-5 text-stone-300 group-hover:text-[#D2B48C] transition-colors" />
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#D2B48C] text-white' : 'bg-stone-200 text-stone-500 group-hover:bg-stone-300'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-stone-600 leading-relaxed pl-16">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>


            {/* CTA SECTION - MOBILE SHOWROOM */}
            <div className="bg-[#E5E5E0] py-20 relative overflow-hidden">
                {/* Texture Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D2B48C]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <div className="inline-block bg-white/80 backdrop-blur px-4 py-2 rounded-full text-stone-600 text-sm font-bold mb-6 border border-white">
                        <Palette className="w-4 h-4 inline-block mr-2 text-[#D2B48C]" />
                        De "Mobiele Showroom"
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Kleuren kiest u niet <span className="text-[#D2B48C]">vanaf een scherm.</span>
                    </h2>
                    <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Lichtinval en textuur bepalen alles. Daarom kom ik niet alleen met een meetlint, maar met koffers vol grote stalenboeken bij u langs. Houd de stof tegen uw bank en zie direct of het matcht.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-stone-900 hover:bg-stone-800 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group"
                        >
                            Plan advies met stalen
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-stone-500 font-medium">
                        <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg">
                            <Ruler className="w-5 h-5 text-[#D2B48C]" /> Gratis inmeten & advies
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg">
                            <Palette className="w-5 h-5 text-[#D2B48C]" /> Grote stalen (A4+)
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-[#D2B48C]" /> Montage met stofzuiger
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurtainsFAQ;
