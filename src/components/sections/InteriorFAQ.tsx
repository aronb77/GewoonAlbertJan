"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Palette } from "lucide-react";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Hebben jullie ook verduisterende gordijnen voor de slaapkamer?",
        answer: "Jazeker. Wij hebben stoffen die 100% lichtdicht zijn (blackout) of dim-out stoffen die het meeste licht filteren. Ideaal voor een goede nachtrust."
    },
    {
        question: "Kan ik de stoffen zelf wassen?",
        answer: "Dat verschilt per stof. Bij de montage krijgt u van ons een passend wasadvies. Veel inbetweens kunnen prima op 30 graden gewassen worden."
    },
    {
        question: "Wat is de levertijd van gordijnen op maat?",
        answer: "Reken gemiddeld op 3 tot 5 weken. De stoffen worden besteld en daarna in het atelier op maat gemaakt (geconfectioneerd)."
    },
    {
        question: "Komen jullie ook de rails ophangen?",
        answer: "Absoluut. Wij leveren 'all-in'. We meten in, leveren de rails en de stof, en monteren alles vakkundig. Ook in betonplafonds."
    }
];

export default function InteriorFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white">

            {/* 1. FAQ Section */}
            <div className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-robotoslab text-primary mb-12 text-center">
                        Veelgestelde vragen over Raamdecoratie
                    </h2>

                    <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-2">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left py-6 group bg-transparent hover:bg-gray-50/50 rounded-lg transition-colors px-4 -mx-4"
                                >
                                    <span className={`text-lg font-medium pr-8 transition-colors ${activeIndex === index ? "text-accent" : "text-primary"}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-45" : "rotate-0"}`}>
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
                                            <div className="pb-8 pl-4 pr-8 text-secondary opacity-80 leading-relaxed max-w-2xl">
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

            {/* 2. Final CTA Banner */}
            <div className="bg-[#4B5563] py-20 relative overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-white mb-6">
                            Twijfelt u over de kleur?
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                            Lichtinval doet alles. Daarom kom ik met de stalenboeken naar u toe. Zo ziet u direct hoe de stof kleurt in uw eigen woonkamer.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 hover:-translate-y-1 transition-all group"
                        >
                            <Palette className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Plan gratis stalen-advies
                        </Link>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
