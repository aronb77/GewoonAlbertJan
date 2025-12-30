"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Cpu, Battery, Sun, Thermometer, Smartphone, ShieldCheck } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Wat als de accu leeg is (bijv. na jaren)?",
        answer: "Geen paniek. De Somfy accu's gaan gemiddeld 8 tot 10 jaar mee. Mocht hij ooit op zijn, dan kunnen we de accu eenvoudig vervangen zonder dat het hele rolluik van de muur hoeft. De motor blijft gewoon zitten.",
    },
    {
        question: "Moet ik de accu zelf opladen?",
        answer: "Nee, dat gaat volledig automatisch via het zonnepaneel. Alleen bij extreem uitzonderlijk gebruik (bijv. 10x per dag open/dicht in het donker) zou u hem kunnen bijladen met een losse lader, maar in de praktijk komt dit bijna nooit voor.",
    },
    {
        question: "Hoe lang heb ik garantie?",
        answer: "Wij zijn Somfy Expert. U krijgt bij ons standaard **7 jaar fabrieksgarantie** op de motor, de accu en het zonnepaneel. Dat is 2 jaar langer dan de standaard fabrieksgarantie.",
    },
    {
        question: "Past dit op elk raam?",
        answer: "Bijna wel. Omdat we geen gaten hoeven te boren voor kabels, kunnen we Solar rolluiken ook plaatsen op plekken waar geen stroompunt in de buurt is (zoals dakkapellen, schuurtjes of ramen op zolder).",
    },
];

export default function SolarFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left: FAQ Accordion */}
                    <div className="lg:col-span-7">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm">Veelgestelde Vragen</span>
                        <h2 className="text-3xl font-bold font-robotoslab text-primary mb-8">
                            Alles over de accu & levensduur.
                        </h2>

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
                                                <div className="px-6 pb-6 text-secondary opacity-70 leading-relaxed text-[15px] prose prose-strong:text-accent prose-strong:font-bold">
                                                    {/* Using dangerouslySetInnerHTML to allow bold tags in answer if needed, or just parsing simplified MD */}
                                                    {faq.answer.split("**").map((part, i) =>
                                                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Technical Specs Card */}
                    <div className="lg:col-span-5 relative">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
                            {/* Decorative Background Icon */}
                            <Cpu className="absolute -bottom-12 -right-12 w-48 h-48 text-gray-200/50 pointer-events-none" />

                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-accent" />
                                Technische Specificaties
                            </h3>

                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-secondary opacity-50">Motor</p>
                                        <p className="font-bold text-primary">Somfy RS100 Solar io</p>
                                        <p className="text-xs text-secondary opacity-70">Fluisterstil & Obstakeldetectie</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400">
                                        <Battery className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-secondary opacity-50">Accu Capaciteit</p>
                                        <p className="font-bold text-primary">2200 mAh NiMH</p>
                                        <p className="text-xs text-secondary opacity-70">45 dagen autonomie (in het donker)</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400">
                                        <Sun className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-secondary opacity-50">Zonnepaneel</p>
                                        <p className="font-bold text-primary">Monokristallijn Hars</p>
                                        <p className="text-xs text-secondary opacity-70">Gevoelig voor diffuus daglicht</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400">
                                        <Thermometer className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-secondary opacity-50">Bereik</p>
                                        <p className="font-bold text-primary">-20°C tot +70°C</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-secondary opacity-50">Bediening</p>
                                        <p className="font-bold text-primary">Afstandsbediening of App</p>
                                        <p className="text-xs text-secondary opacity-70">Compatibel met Somfy TaHoma</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Somfy Expert Badge */}
                            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                                <span className="text-xs font-bold text-secondary opacity-60 uppercase">Certified Partner</span>
                                <div className="font-bold text-[#1F2D3A] text-lg italic tracking-tighter">somfy.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
