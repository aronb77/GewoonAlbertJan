"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: FAQItem[] = [
    {
        question: "Is 'nep-hout' (aluminium) niet lelijk?",
        answer: "Absoluut niet meer. Vroeger zag aluminium er soms plastic-achtig uit, maar de moderne structuurlakken zijn mat en hebben een korrel. Hierdoor is het vanaf een meter afstand nauwelijks van echt hout te onderscheiden. U behoudt de klassieke uitstraling, maar bent voorgoed van het schilderwerk af."
    },
    {
        question: "Kan ik mijn oude markies opnieuw laten bekleden?",
        answer: "Jazeker. Markiezen zijn hier heel geschikt voor. Als het frame (hout of aluminium) nog in goede staat is, kunnen wij er in ons atelier een nieuw doek op zetten. Dat is een duurzame keuze en vaak voordeliger dan een compleet nieuw scherm."
    },
    {
        question: "Tot welke breedte kunnen markiezen?",
        answer: "Markiezen zijn door hun vorm iets windgevoeliger dan bijvoorbeeld screens. We gaan meestal tot maximaal 5 of 6 meter breed uit één stuk, afhankelijk van de situatie. Voor grotere breedtes koppelen we vaak meerdere markiezen naast elkaar, wat ook esthetisch vaak mooier oogt op de gevel."
    }
];

const MarkiezenFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-16">
                    <span className="text-green-800 font-serif italic text-lg tracking-wide mb-2 block">
                        Veelgestelde Vragen
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Goed om te weten
                    </h2>
                </div>

                {/* ACCORDION */}
                <div className="space-y-4 mb-24">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-green-600 bg-green-50/30' : 'border-stone-200 hover:border-stone-300 bg-white'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg font-robotoslab ${openIndex === index ? 'text-green-800' : 'text-stone-800'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-stone-600 leading-relaxed font-serif">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA BOX */}
                <div className="bg-stone-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-white mb-6">
                            Geef uw huis de <br className="hidden md:block" />
                            <span className="text-green-400">'Werfhorst' uitstraling.</span>
                        </h2>
                        <p className="text-stone-400 text-lg md:text-xl font-serif max-w-2xl mx-auto mb-10">
                            Benieuwd wat markiezen met uw gevel doen? Wij komen graag langs om de mogelijkheden te bekijken en de stoffen te laten voelen.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-900/50 flex items-center justify-center gap-2">
                                Vraag offerte aan
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-transparent border-2 border-stone-700 text-stone-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-800 hover:text-white transition-colors">
                                Bel mij terug
                            </button>
                        </div>

                        <p className="mt-8 text-sm text-stone-500 font-serif italic">
                            Altijd vrijblijvend advies aan huis.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MarkiezenFAQ;
