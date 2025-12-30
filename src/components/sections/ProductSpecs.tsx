"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

type Tab = "solar" | "screens";

export default function ProductSpecs() {
    const [activeTab, setActiveTab] = useState<Tab>("solar");

    const content = {
        solar: {
            headline: "100% Privacy & Isolatie",
            features: [
                { title: "Draadloos", text: "Geen gaten boren in uw gevel of kozijnen." },
                { title: "Solar Motor", text: "Werkt op daglicht (ook bij bewolking), accu gaat maanden mee." },
                { title: "Isolerend", text: "Houdt 's winters de warmte binnen en 's zomers de hitte buiten." },
                { title: "Veilig", text: "Inbraakvertragend en privacy-verhogend." },
            ],
            imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", // Detailed shutter look placeholder
        },
        screens: {
            headline: "Wel uitzicht, geen warmte",
            features: [
                { title: "Windvast", text: "Dankzij de rits-technologie klappert het doek niet." },
                { title: "Transparant", text: "U kijkt wel naar buiten, maar niemand kijkt naar binnen." },
                { title: "Compact", text: "Kleine cassette die nauwelijks opvalt aan de gevel." },
                { title: "Warmtewering", text: "Filtert tot 90% van de zonnewarmte direct." },
            ],
            imageSrc: "https://images.unsplash.com/photo-1615873968403-89e0618d910d?q=80&w=800&auto=format&fit=crop", // Screen texture placeholder
        },
    };

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">

                {/* Tab Controls */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 inline-flex">
                        <button
                            onClick={() => setActiveTab("solar")}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${activeTab === "solar"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-secondary hover:bg-gray-100"
                                }`}
                        >
                            Solar Rolluiken
                        </button>
                        <button
                            onClick={() => setActiveTab("screens")}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${activeTab === "screens"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-secondary hover:bg-gray-100"
                                }`}
                        >
                            Screens (Zip)
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2"
                        >
                            {/* Visual Side */}
                            <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                                <img
                                    src={content[activeTab].imageSrc}
                                    alt={content[activeTab].headline}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>

                            {/* Text Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold font-robotoslab text-primary mb-6">
                                    {content[activeTab].headline}
                                </h3>

                                <ul className="space-y-4 mb-8">
                                    {content[activeTab].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="flex-shrink-0 bg-accent/10 p-1 rounded-full mr-3 mt-1">
                                                <Check className="w-4 h-4 text-accent" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-gray-900 block">{feature.title}</span>
                                                <span className="text-gray-500 text-sm leading-relaxed">{feature.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors group"
                                >
                                    Vraag een offerte aan voor deze producten
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
