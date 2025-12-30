"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Werken Solar rolluiken ook in de winter of bij bewolking?",
        answer: "Jazeker. De accu is krachtig genoeg om maandenlang te werken zonder direct zonlicht. Daglicht is voldoende om de accu op peil te houden, dus ook in de Nederlandse winter werkt het perfect."
    },
    {
        question: "Zijn de screens bestand tegen harde wind?",
        answer: "Wij werken met rits-screens (zip-screens). Hierbij zit het doek 'geritst' in de geleiders. Dit maakt ze extreem windvast en voorkomt klapperen, zelfs bij stevige wind."
    },
    {
        question: "Moet er geboord worden in mijn kozijnen?",
        answer: "Bij Solar producten hoeven we niet naar binnen te boren voor stroomkabels. We monteren de geleiders meestal op de muur ('op de dag') of op het kozijn, afhankelijk van uw situatie. Dit gaat altijd in overleg."
    },
    {
        question: "Wat is de levertijd?",
        answer: "Omdat wij maatwerk leveren, moet u rekening houden met een gemiddelde levertijd van 4 tot 6 weken na het inmeten."
    },
    {
        question: "Zit er garantie op de motoren?",
        answer: "Ja, op de Somfy motoren en de Solar-systemen zit standaard fabrieksgarantie (vaak 5 of 7 jaar, afhankelijk van het type). Wij lichten dit toe in de offerte."
    }
];

export default function ProductFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column: Sticky Headings */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <h2 className="text-3xl font-bold font-robotoslab text-primary mb-4">
                                Veelgestelde vragen
                            </h2>
                            <p className="text-secondary opacity-70 text-lg mb-8 leading-relaxed">
                                Alles wat u moet weten over rolluiken en screens.
                            </p>

                            {/* Support Box */}
                            <div className="bg-background rounded-xl p-6 border border-gray-100 shadow-sm inline-block w-full">
                                <h4 className="font-bold text-primary mb-2">Staat uw vraag er niet bij?</h4>
                                <p className="text-sm text-secondary opacity-70 mb-4">
                                    Stuur ons gerust een berichtje, we reageren snel.
                                </p>
                                <Link
                                    href="https://wa.me/31612345678" // Replace with actual number if known, placeholder for now
                                    target="_blank"
                                    className="inline-flex items-center text-accent font-bold hover:underline transition-all"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Stuur een WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:w-2/3">
                        <div className="divide-y divide-gray-100">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-2">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-start text-left py-6 group bg-transparent hover:bg-gray-50/50 rounded-lg transition-colors px-2 -mx-2"
                                    >
                                        <span className={`text-lg font-medium pr-8 transition-colors ${activeIndex === index ? "text-accent" : "text-primary"}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`flex-shrink-0 mt-1 transition-transform duration-300 ${activeIndex === index ? "rotate-45" : "rotate-0"}`}>
                                            <Plus className={`w-6 h-6 ${activeIndex === index ? "text-accent" : "text-gray-400 group-hover:text-accent"}`} />
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pl-0 md:pl-2 pr-8 text-secondary opacity-80 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
