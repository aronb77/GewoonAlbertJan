"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake } from "lucide-react";

const VALUES = [
    {
        icon: ShieldCheck,
        title: "Kwaliteit zonder concessies",
        desc: "Ik werk alleen met merken waar ik zelf 100% achter de sta, zoals Somfy, Tibelly en Heroal. Geen B-keuze, alleen materialen die de Hollandse seizoenen jarenlang doorstaan."
    },
    {
        icon: UserCheck,
        title: "Eén gezicht, van begin tot eind",
        desc: "Geen wisselende monteurs of externe verkoopteams. Ik kom zelf inmeten, ik geef het advies en ik hang het scherm ook zelf op. U weet precies wie u over de vloer krijgt."
    },
    {
        icon: HeartHandshake,
        title: "Service zoals vroeger",
        desc: "Een probleem na 5 jaar? Dan los ik het op. 'Niet lullen maar poetsen' is het motto. Ik ben pas tevreden als u met een glimlach onder uw scherm zit."
    }
];

const TeamValues = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-blue-600 font-bold uppercase tracking-wider mb-2 block text-sm">
                        Waar we voor staan
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-slate-900 mb-6">
                        Gewoon, goed geregeld.
                    </h2>
                    <p className="text-slate-600 text-lg font-serif">
                        In een wereld van snelle webshops en anonieme service, doe ik het liever anders. Persoonlijk, eerlijk en met ouderwetse vakkennis.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {VALUES.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-blue-600">
                                <val.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-robotoslab text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                                {val.title}
                            </h3>
                            <p className="text-slate-600 font-serif leading-relaxed">
                                {val.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamValues;
