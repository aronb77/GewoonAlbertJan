"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, Calculator, Ruler, FileCheck } from "lucide-react";
import Link from "next/link";

const PergolaFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Hoe groot kan het?",
            answer: "Enorm. Tot wel **6 meter breed en 5 meter uitval** uit één stuk. Heeft u een nog breder terras? Dan kunnen we systemen naadloos koppelen, zodat u zelfs de grootste horeca-terrassen kunt overkappen."
        },
        {
            question: "Heb ik een vergunning nodig?",
            answer: "Meestal niet. Omdat het een **demontabel systeem** is (het doek kan volledig in, in tegenstelling tot een vaste aanbouw), valt het vaak buiten de vergunningsplicht. Het blijft 'zonwering'. Check wel altijd even de regels in uw eigen gemeente (omgevingsloket)."
        },
        {
            question: "Is het waterdicht?",
            answer: "Ja, wij gebruiken speciale waterafstotende doeken. Cruciaal is de hellingshoek: we zorgen voor minimaal 15 cm afschot per meter óf gebruiken een speciaal 'water-block' systeem. Hierdoor loopt regenwater direct weg naar de goten en zit u droog tijdens een bui."
        }
    ];

    return (
        <section className="bg-white">

            {/* FAQ SECTION */}
            <div className="py-24 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-amber-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Veelgestelde vragen
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-stone-900">
                        Alles over Pergolazonwering.
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
                                    <HelpCircle className="w-5 h-5 text-stone-300 group-hover:text-amber-500 transition-colors" />
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-500 group-hover:bg-stone-300'}`}>
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
                                            {/* Render markdown-like bold text */}
                                            <p dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>


            {/* FINAL CTA SECTION */}
            <div className="bg-stone-900 py-24 relative overflow-hidden text-center">

                {/* Background Texture/Gradient */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-stone-900 z-10" />

                {/* Amber Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/20 rounded-full blur-[100px] z-0" />


                <div className="container mx-auto px-4 relative z-20 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-robotoslab text-white mb-6">
                        Vergroot uw woonkamer <span className="text-amber-500">naar buiten.</span>
                    </h2>
                    <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Een pergola is maatwerk tot op de millimeter. Ik kom de situatie graag vrijblijvend bij u bekijken om te zien wat er mogelijk is.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-amber-500 hover:bg-amber-400 text-stone-900 text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-3 group"
                        >
                            Vraag offerte aan
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white font-bold flex items-center gap-2 hover:text-amber-400 transition-colors"
                        >
                            <Calculator className="w-5 h-5" />
                            Direct een prijsindicatie?
                        </Link>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-stone-400">
                        <div className="flex items-center gap-2">
                            <Ruler className="w-5 h-5 text-amber-500" /> Tot op de mm nauwkeurig
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCheck className="w-5 h-5 text-amber-500" /> 5 Jaar volledige garantie
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PergolaFAQ;
