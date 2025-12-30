"use client";

import { motion } from "framer-motion";
import { MessageCircle, Minimize2, Move, Hammer } from "lucide-react";
import Link from "next/link";

export default function ComplexWindows() {
    const features = [
        {
            icon: Minimize2, // Representing corners/fitting into space
            title: "Specialist in Erkers",
            text: "Erkers zijn sfeervol maar lastig. Ik lever rails die perfect doorlopen in de bochten, zodat uw gordijnen soepel over de hele breedte sluiten.",
            highlight: "Gordijnen erker",
        },
        {
            icon: Move, // Representing movement/tilting
            title: "Draaikiepramen",
            text: "Raamdecoratie die meebeweegt met uw raam. Bijvoorbeeld met klemsteunen of een magneetkader, zodat boren in kunststof kozijnen vaak niet nodig is.",
            highlight: "Zonder boren",
        },
        {
            icon: Hammer, // Representing installation/tools
            title: "De 'Finishing Touch'",
            text: "Het resultaat valt of staat met de montage. Ik zorg voor strakke rails, onzichtbare steunen en hang de gordijnen direct perfect 'in de plooi' voor u op.",
            highlight: "Vakkundige montage",
        },
    ];

    return (
        <section className="bg-gray-50 py-20 border-t border-gray-100">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: The Problem & Context */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-6 leading-tight">
                                Lastige ramen? <br />
                                <span className="text-accent">Voor Albert Jan geen probleem.</span>
                            </h2>
                            <p className="text-secondary opacity-80 text-lg leading-relaxed mb-8">
                                Een <strong className="text-primary font-medium">erker</strong>, <strong className="text-primary font-medium">draaikiepraam</strong> of schuine wand vraagt om maatwerk. Standaard gordijnen passen vaak net niet. Ik zorg voor een oplossing die wél perfect aansluit.
                            </p>

                            <Link
                                href="https://wa.me/31620351766" // Using real number from footer context
                                target="_blank"
                                className="inline-flex items-center text-accent font-bold text-lg hover:underline group"
                            >
                                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                                Heeft u een uitdagend raam? Stuur een foto via WhatsApp →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: The Solutions (Grid of Cards) */}
                    <div className="grid gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4"
                            >
                                <div className="bg-primary/5 p-3 rounded-lg flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-robotoslab text-primary mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-secondary opacity-70 leading-relaxed mb-2">
                                        {feature.text}
                                    </p>
                                    <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider bg-accent/5 px-2 py-1 rounded">
                                        {feature.highlight}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
