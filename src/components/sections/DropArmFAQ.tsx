"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Ban, Wind, RefreshCw, Building2, Phone, ArrowRight, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

const DropArmFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Kan ik onder een uitvalscherm doorlopen?",
            answer: (
                <div className="space-y-4">
                    <p>
                        <span className="font-bold text-amber-600 flex items-center gap-2 mb-2">
                            <Ban className="w-4 h-4" /> Let op: Nee, meestal niet.
                        </span>
                        Omdat de armen schuin naar de muur lopen, blokkeren ze de doorloop. De armen zitten vast aan de gevel en zakken mee naar beneden.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-800">
                        <strong>Advies:</strong> Moet u vaak langs het raam lopen (bijvoorbeeld bij een terrasdeur of tuinpad)? Kies dan voor een <strong>Knikarmscherm</strong>; daar loopt u moeiteloos onderdoor omdat de armen vlak onder het scherm blijven.
                    </p>
                </div>
            ),
            icon: <Ban className="w-5 h-5 text-slate-400 group-hover:text-secondary-500 transition-colors" />
        },
        {
            question: "Hoe windvast is 'windvast'?",
            answer: (
                <div className="space-y-4">
                    <p>
                        Uitvalschermen met stormvaste gasveer-armen zijn onze <strong>sterkste schermen (Windklasse 3)</strong>. Ze kunnen door hun driehoeksconstructie veel meer hebben dan een knikarmscherm en blijven stabieler hangen.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-slate-500 italic">
                        <Wind className="w-4 h-4" />
                        <span>Bij windkracht 7 of hoger (storm) adviseren we wel om in te halen om schade aan het doek te voorkomen.</span>
                    </div>
                </div>
            ),
            icon: <Wind className="w-5 h-5 text-slate-400 group-hover:text-secondary-500 transition-colors" />
        },
        {
            question: "Mijn frame is nog goed, kan ik alleen het doek vervangen?",
            answer: (
                <div className="space-y-3">
                    <p>
                        <strong>Absoluut.</strong> Uitvalschermen zijn oersterk en gaan vaak decennia mee. Is het frame nog netjes, maar het doek vies, gescheurd of ouderwets?
                    </p>
                    <p>
                        Wij kunnen het doek vervangen voor een moderne kleur uit de nieuwste collectie. Dat scheelt aanzienlijk in de kosten én is een duurzame keuze. Uw scherm ziet er daarna weer als nieuw uit.
                    </p>
                </div>
            ),
            icon: <RefreshCw className="w-5 h-5 text-slate-400 group-hover:text-secondary-500 transition-colors" />
        },
        {
            question: "Kan dit op een balkon van een VvE?",
            answer: (
                <div className="space-y-3">
                    <p>
                        <strong>Vaak wel.</strong> Uitvalschermen zijn ideaal voor balkons omdat ze steil naar beneden kunnen (tot 90 graden) en dus binnen uw eigen balkonruimte blijven. Ze steken niet uit naar de buren.
                    </p>
                    <p className="text-sm text-slate-500">
                        Voor balkons waar niet gepoord mag worden in de bovenbalk, werken we vaak met speciale klemsteunen (in overleg met de VvE).
                    </p>
                </div>
            ),
            icon: <Building2 className="w-5 h-5 text-slate-400 group-hover:text-secondary-500 transition-colors" />
        }
    ];

    return (
        <section className="bg-white">

            {/* FAQ SECTION */}
            <div className="py-24 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-secondary-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Veelgestelde vragen
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-slate-900">
                        Eerlijk advies vooraf.
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className="text-lg font-bold text-slate-800 flex items-center gap-4">
                                    {faq.icon}
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-secondary-100 text-secondary-600' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'}`}>
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
                                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed pl-16">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>


            {/* CTA SECTION */}
            <div className="bg-[#1F2937] py-20 border-t border-slate-800 relative overflow-hidden">
                {/* Background Texture/Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-white mb-6">
                        Kies voor de <span className="text-amber-500">oersterke klassieker.</span>
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Effectieve zonwering hoeft niet ingewikkeld te zijn. Bescherm uw woning tegen hitte en nieuwsgierige blikken. Ik kom graag bij u inmeten om te kijken welk type arm het beste bij uw situatie past.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-3 group"
                        >
                            Vraag offerte aan
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="tel:0612345678" // Placeholder number
                            className="flex items-center gap-3 text-white font-medium hover:text-amber-400 transition-colors px-6 py-4"
                        >
                            <div className="bg-slate-700 p-2 rounded-full">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span>Of bel direct: <span className="font-bold">038 - 123 45 67</span></span>
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center gap-8 text-slate-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2Icon className="w-4 h-4 text-green-500" /> Gratis advies aan huis
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2Icon className="w-4 h-4 text-green-500" /> 5 jaar fabrieksgarantie
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Helper Icon for the bottom features
function CheckCircle2Icon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}

export default DropArmFAQ;
