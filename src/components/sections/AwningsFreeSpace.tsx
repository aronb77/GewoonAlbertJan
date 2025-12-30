"use client";

import React from "react";
import { motion } from "framer-motion";
import { Umbrella, Warehouse, CheckCircle, XCircle, AlertTriangle, Maximize } from "lucide-react";

const options = [
    {
        title: "De Parasol",
        subtitle: "Het Obstakel",
        icon: Umbrella,
        status: "Sta-in-de-weg",
        statusColor: "text-red-500",
        statusIcon: XCircle,
        desc: "Een parasolvoet staat altijd precies waar u uw tuinstoel wilt zetten. Bovendien waait hij snel om en dekt hij nooit het hele terras.",
        bg: "bg-slate-50",
        border: "border-slate-100",
        textColor: "text-slate-500"
    },
    {
        title: "Vaste Overkapping",
        subtitle: "Het Lichtverlies",
        icon: Warehouse, // Using Warehouse as a proxy for a solid structure/veranda
        status: "Permanent Donker",
        statusColor: "text-amber-500",
        statusIcon: AlertTriangle,
        desc: "Prachtig, maar het neemt in de winter veel kostbaar daglicht weg uit uw woonkamer. En u zit altijd 'opgesloten' tussen palen.",
        bg: "bg-slate-50",
        border: "border-slate-100",
        textColor: "text-slate-500"
    },
    {
        title: "Het Knikarmscherm",
        subtitle: "De Oplossing",
        icon: Maximize, // Represents expansion/awning
        status: "Ultieme Vrijheid",
        statusColor: "text-green-500",
        statusIcon: CheckCircle,
        desc: "De sterke armen duwen het doek horizontaal naar buiten. U heeft een volledig vrije doorloop op uw terras. En in de winter? Dan rolt u hem in en geniet u van de zon binnen.",
        bg: "bg-white",
        border: "border-secondary-200 ring-4 ring-secondary-50",
        textColor: "text-slate-800",
        highlight: true
    }
];

const AwningsFreeSpace = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* 1. Header Content */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary-500 font-bold uppercase tracking-wider mb-2 block text-sm">Vrije Doorloop</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                            Schaduw waar u wilt. <br className="hidden md:block" />
                            <span className="text-secondary-500">Weg als het moet.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Waarom kiezen voor een knikarmscherm? Omdat het de enige zonwering is die u maximale bewegingsvrijheid geeft. Geen palen, geen obstakels, en 's winters gewoon het licht weer in huis.
                        </p>
                    </motion.div>
                </div>

                {/* 2. The Comparison Cards */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {options.map((opt, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`relative rounded-3xl p-8 flex flex-col items-center text-center border transition-all duration-300 ${opt.bg} ${opt.border} ${opt.highlight ? "shadow-xl scale-105 z-10" : "shadow-sm hover:shadow-md"}`}
                        >
                            {/* Icon Circle */}
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl ${opt.highlight ? "bg-secondary-100 text-secondary-600" : "bg-slate-200 text-slate-400"}`}>
                                <opt.icon className="w-10 h-10" />
                            </div>

                            <h3 className={`text-xl font-bold mb-1 ${opt.highlight ? "text-slate-900" : "text-slate-400"}`}>
                                {opt.title}
                            </h3>
                            <span className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-6 block">
                                {opt.subtitle}
                            </span>

                            {/* Status Badge */}
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 border ${opt.highlight ? "bg-green-50 text-green-700 border-green-200" : "bg-slate-100 text-slate-500 border-slate-200"}`}>
                                <opt.statusIcon className={`w-3 h-3 ${opt.statusColor}`} />
                                {opt.status}
                            </div>

                            <p className={`text-sm leading-relaxed mb-6 ${opt.textColor}`}>
                                {opt.desc}
                            </p>

                            {/* Extra Feature Highlight for Awning */}
                            {opt.highlight && (
                                <div className="mt-auto pt-6 border-t border-secondary-100 w-full animate-pulse-slow">
                                    <p className="text-xs font-bold text-secondary-600">
                                        ✨ Sterke aluminium armen dragen het gewicht moeiteloos.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AwningsFreeSpace;
