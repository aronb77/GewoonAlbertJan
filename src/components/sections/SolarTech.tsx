"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Snowflake, Shield, Drill, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

interface TechPoint {
    id: number;
    title: string;
    subtitle: string;
    text: string;
    icon: any;
    position: { top: string; left: string }; // Position of the hotspot on the image
}

const techPoints: TechPoint[] = [
    {
        id: 0,
        title: "Het Zonnepaneel",
        subtitle: "Daglicht is genoeg",
        text: "Onze panelen zijn gevoelig voor daglicht. Directe zon is niet nodig. Zelfs op een bewolkte winterdag druppelt de energie de accu binnen via het monokristallijne paneel.",
        icon: Sun,
        position: { top: "15%", left: "50%" },
    },
    {
        id: 1,
        title: "De Slimme Motor",
        subtitle: "Bestand tegen vorst",
        text: "Bang dat het rolluik vastvriest? De slimme motor (Somfy of Brel) voelt weerstand. Als de lamellen vastgevroren zitten, stopt de motor direct om schade te voorkomen.",
        icon: Snowflake,
        position: { top: "45%", left: "50%" },
    },
    {
        id: 2,
        title: "De Pantser-blokkering",
        subtitle: "Inbraakvertragend",
        text: "De motor blokkeert de as automatisch bij tegendruk. Hierdoor is het rolluik van buitenaf niet op te tillen. Een veilig gevoel als u 's avonds op de bank zit.",
        icon: Shield,
        position: { top: "75%", left: "50%" },
    },
];

export default function SolarTech() {
    const [activePoint, setActivePoint] = useState<number>(0);

    return (
        <section className="bg-[#F9FAFB] py-24">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm">Technologie</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-4">
                        De anatomie van een Solar Rolluik.
                    </h2>
                    <p className="text-secondary opacity-70 text-lg">
                        Geen gadgets, maar bewezen technologie die uw comfort en veiligheid verhoogt.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

                    {/* Left: Interactive Visual */}
                    <div className="relative h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex items-center justify-center group">
                        {/* Background Image (Abstract Shutter/Tech) */}
                        <div className="absolute inset-0 bg-gray-100">
                            <Image
                                src="https://images.unsplash.com/photo-1510526084045-8135be362702?q=80&w=800&auto=format&fit=crop"
                                alt="Technical Shutter Close-up"
                                fill
                                className="object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                        </div>

                        {/* Hotspots */}
                        {techPoints.map((point) => (
                            <button
                                key={point.id}
                                onClick={() => setActivePoint(point.id)}
                                className="absolute w-8 h-8 -ml-4 -mt-4 z-20 group/hotspot focus:outline-none"
                                style={{ top: point.position.top, left: point.position.left }}
                            >
                                <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${activePoint === point.id ? "bg-accent" : "bg-white"}`}></span>
                                <span className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 transition-colors ${activePoint === point.id ? "bg-accent border-white text-white" : "bg-white border-accent text-accent"
                                    }`}>
                                    <span className="w-2 h-2 bg-current rounded-full"></span>
                                </span>

                                {/* Tooltip Label (Visible on Hover if not active) */}
                                {activePoint !== point.id && (
                                    <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover/hotspot:opacity-100 transition-opacity">
                                        {point.title}
                                    </span>
                                )}
                            </button>
                        ))}

                        {/* Connecting Lines (Decorative) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
                            <line x1="50%" y1="15%" x2="50%" y2="75%" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    {/* Right: Technical Content */}
                    <div className="space-y-4">
                        {techPoints.map((point) => (
                            <motion.div
                                key={point.id}
                                initial={false}
                                animate={{
                                    backgroundColor: activePoint === point.id ? "#ffffff" : "transparent",
                                    boxShadow: activePoint === point.id ? "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)" : "none",
                                    borderColor: activePoint === point.id ? "#e5e7eb" : "transparent"
                                }}
                                className={`p-6 rounded-2xl border transition-all cursor-pointer ${activePoint === point.id ? "border-gray-200" : "border-transparent opacity-60 hover:opacity-100 hover:bg-white/50"
                                    }`}
                                onClick={() => setActivePoint(point.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl transition-colors ${activePoint === point.id ? "bg-accent/10 text-accent" : "bg-gray-100 text-gray-500"
                                        }`}>
                                        <point.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-1 transition-colors ${activePoint === point.id ? "text-primary" : "text-secondary"
                                            }`}>
                                            {point.title}
                                        </h3>
                                        <p className="text-xs font-bold uppercase tracking-wider text-secondary opacity-50 mb-3">
                                            {point.subtitle}
                                        </p>
                                        <AnimatePresence>
                                            {activePoint === point.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                >
                                                    <p className="text-secondary opacity-80 leading-relaxed">
                                                        {point.text}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* No-Drill Comparison Visual */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-bold text-sm">
                                <CheckCircle2 className="w-4 h-4" />
                                Montage Zonder Boren
                            </div>
                            <h3 className="text-3xl font-bold font-robotoslab text-primary">
                                Uw muren blijven <span className="text-green-600">100% intact</span>.
                            </h3>
                            <p className="text-secondary opacity-80 leading-relaxed text-lg">
                                Omdat de batterij en motor volledig in de aluminium kast zijn verwerkt, boren wij <strong>niet</strong> door uw gevel naar binnen. Geen stof, geen gaten in uw stucwerk, en geen koudebruggen.
                            </p>
                        </div>

                        {/* Visual Comparison */}
                        <div className="flex justify-center items-center gap-8 md:gap-12">
                            {/* The Old Way */}
                            <div className="flex flex-col items-center opacity-40 grayscale">
                                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 relative">
                                    <Drill className="w-10 h-10 text-gray-500" />
                                    <div className="absolute -top-2 -right-2 bg-gray-200 p-1.5 rounded-full">
                                        <XCircle className="w-5 h-5 text-gray-500" />
                                    </div>
                                </div>
                                <span className="font-bold text-gray-500 text-sm line-through">Gaten Boren</span>
                            </div>

                            <div className="w-16 h-0.5 bg-gray-200"></div>

                            {/* The New Way */}
                            <div className="flex flex-col items-center">
                                <div className="w-28 h-28 rounded-full bg-green-50 flex items-center justify-center mb-4 relative shadow-lg ring-4 ring-green-50">
                                    <Shield className="w-12 h-12 text-green-600" />
                                    <div className="absolute -top-2 -right-2 bg-white p-1.5 rounded-full shadow-sm">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                </div>
                                <span className="font-bold text-primary text-sm">Schadevrije Montage</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
