"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Kan ik nog naar buiten kijken met screens?",
        answer:
            "Jazeker! Dit is het unieke voordeel van screens. Overdag kun je gewoon naar buiten kijken terwijl de warmte en schittering buiten blijven. Afhankelijk van de gekozen openheidsfactor (1% of 3%) heb je meer of minder zicht. Let wel: 's avonds, als het licht binnen aan is, kan men wel naar binnen kijken.",
    },
    {
        question: "Wat is het verschil tussen een screen en een rolluik?",
        answer:
            "Een rolluik sluit volledig af: het maakt de kamer 100% donker, isoleert ook tegen geluid en inbraak, maar je hebt geen zicht meer naar buiten. Een screen filtert het licht, houdt warmte tegen maar behoudt je uitzicht enDaglicht. Screens zijn ook compacter en eleganter.",
    },
    {
        question: "Zijn screens windvast?",
        answer:
            "Onze 'zip-screens' (ritsscreens) zijn extreem windvast (Windklasse 6). Doordat het doek in de zijgeleiders geritst zit, kan de wind er niet achter komen en blijft het strak hangen, zelfs bij harde wind.",
    },
    {
        question: "Kunnen screens elektrisch bediend worden?",
        answer:
            "Absoluut. Wij leveren onze screens standaard met hoogwaardige Somfy motoren. Je kunt kiezen voor wandbediening, afstandsbediening of volledige app-bediening via je smartphone (Somfy TaHoma).",
    },
    {
        question: "Hoeveel warmte houden screens echt tegen?",
        answer:
            "Buitenzonwering zoals screens is 5x effectiever dan binnenzonwering. Ze houden tot wel 90-95% van de warmte buiten omdat ze de zonnestralen blokkeren vóórdat ze het glas raken.",
    },
];

const ScreensFAQ = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-slate-900 mb-4">
                        Veelgestelde Vragen
                    </h2>
                    <p className="text-slate-600">
                        Alles wat je moet weten over screens en zonwering.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-slate-900 text-lg">
                                    {faq.question}
                                </span>
                                <span className="shrink-0 ml-4 rounded-full p-1 bg-white border border-slate-200 text-secondary-500">
                                    {openIndex === idx ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScreensFAQ;
