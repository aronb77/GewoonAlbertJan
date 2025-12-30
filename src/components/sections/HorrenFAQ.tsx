"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Kan mijn raam nog wel dicht met een inzethor?",
        answer: "Ja, absoluut. De flens (rand) van de inzethor is extreem dun (0,8mm). Uw raam sluit en vergrendelt gewoon zoals u gewend bent, zonder dat het tocht. De hor kan dus zomer en winter blijven zitten.",
    },
    {
        question: "Ik heb kunststof kozijnen, moet er geboord worden?",
        answer: "Nee. Voor draaikiepramen gebruiken we klem-inzethorren. Die klemmen zichzelf vast in de opening d.m.v. RVS veerklemmen. Er komt geen boormachine aan te pas, dus uw kozijn blijft 100% intact.",
    },
    {
        question: "Hoe maak ik het gaas schoon (bijv. pollen)?",
        answer: "U kunt de hor eenvoudig uit het raam klikken. Vervolgens kunt u het gaas afspoelen onder de douche met lauw water of afnemen met een zachte borstel of vochtige doek. Gebruik geen agressieve schoonmaakmiddelen.",
    },
    {
        question: "Mijn kat klimt in de gordijnen, gaat het gaas niet kapot?",
        answer: "Voor huisdierbezitters adviseren wij 'Petscreen' gaas. Dit is extra sterk geweven polyester met een vinyl coating. Het is tot 7x sterker dan standaard gaas en bestand tegen de nagels van honden en katten.",
    },
];

export default function HorrenFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white">
            {/* FAQ Part */}
            <div className="py-24 max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm">Veelgestelde Vragen</span>
                    <h2 className="text-3xl font-bold font-robotoslab text-primary">
                        Twijfelt u nog?
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-primary text-lg pr-8">{faq.question}</span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-accent/10 text-accent" : "bg-gray-50 text-secondary"}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                                        <div className="px-6 pb-6 text-secondary opacity-70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA Banner (Dark Blue) */}
            <div className="bg-[#15202B] py-20 px-4 text-center relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-[radial-gradient(circle,white,transparent_70%)] opacity-20" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-white mb-6">
                        Klaar voor een insectenvrije zomer?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                        Wacht niet tot de eerste muggen binnen zijn. Ik kom nu <span className="text-white font-medium">gratis inmeten</span> in Oldebroek, Hattem en Zwolle, zodat u er straks koel en rustig bij zit.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            Plan mijn inmeet-afspraak
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <p className="text-sm text-white/40 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Levertijd in het voorjaar loopt snel op. Wees er op tijd bij.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
