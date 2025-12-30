"use client";

import { MessageSquare, Ruler, Hammer, Calendar } from "lucide-react"; // Using MessageSquare instead of Coffee for clarity of "Advice", Hammer for tools
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProcessCta() {
    const steps = [
        {
            number: "1",
            icon: MessageSquare,
            title: "Advies & Stalen",
            text: "We bespreken uw wensen. Ik neem stalen en kleurstalen mee, zodat u precies ziet wat u koopt.",
        },
        {
            number: "2",
            icon: Ruler,
            title: "Gratis Inmeten",
            text: "Geen meetfouten. Ik meet alles nauwkeurig in voor een 100% pasgarantie. Geheel kosteloos.",
        },
        {
            number: "3",
            icon: Hammer,
            title: "Montage & Service",
            text: "Vakkundige montage zonder rommel. Ik ga pas weg als alles perfect werkt en u tevreden bent.",
        },
    ];

    return (
        <section className="bg-background py-20 border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Steps Row */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative text-center px-4"
                        >
                            {/* Large Background Number */}
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-9xl font-bold text-highlight opacity-30 select-none z-0 font-robotoslab">
                                {step.number}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-white p-4 rounded-full shadow-md">
                                        <step.icon className="w-8 h-8 text-accent" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-robotoslab text-primary mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-secondary opacity-80 leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-16 opacity-50"></div>

                {/* Final CTA */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-8">
                        Klaar voor de volgende stap?
                    </h2>

                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 hover:-translate-y-1 transition-all group"
                    >
                        <Calendar className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                        Plan direct uw gratis meet-afspraak
                    </Link>

                    <p className="mt-6 text-sm text-secondary opacity-60 font-medium">
                        Vrijblijvend advies in de hele regio (Oldebroek, Elburg, Zwolle e.o.)
                    </p>
                </div>

            </div>
        </section>
    );
}
