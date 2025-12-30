"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface DetailBlock {
    title: string;
    text: string;
    imageSrc: string;
    reverse?: boolean; // If true, image is on the right
}

const details: DetailBlock[] = [
    {
        title: "De moderne Wave-plooi",
        text: "Voor die luxe, golvende hotel-uitstraling. Uw gordijnen hangen altijd strak en vallen soepel van plafond tot vloer. Perfect in combinatie met kamerhoge stoffen.",
        imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", // Placeholder for Wave Fold
        reverse: false,
    },
    {
        title: "Rails die gezien mogen worden",
        text: "Geen lelijke witte strips, maar stijlvolle zwarte design-rails of stoere roedes die passen bij uw kozijnen en interieur. Een detail dat het verschil maakt.",
        imageSrc: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop", // Placeholder for Black Rail/Interior
        reverse: true,
    },
    {
        title: "Elektrische bediening",
        text: "Open uw gordijnen vanuit bed of laat ze automatisch sluiten als u niet thuis bent. Wij zijn partner van Somfy en integreren dit naadloos in uw Smart Home.",
        imageSrc: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=800&auto=format&fit=crop", // Placeholder for Smart Home/Control
        reverse: false,
    },
];

export default function CurtainDetails() {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-4">
                        Kwaliteit zit in de details.
                    </h2>
                    <p className="text-secondary opacity-70 text-lg">
                        Het verschil tussen 'gewoon gordijnen' en een luxe interieur.
                    </p>
                </div>

                <div className="space-y-24">
                    {details.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full md:w-1/2"
                            >
                                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-xl">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Decorative Border */}
                                    <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none rounded-2xl"></div>
                                </div>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: item.reverse ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="w-full md:w-1/2"
                            >
                                <h3 className="text-3xl font-bold font-robotoslab text-primary mb-6 relative inline-block">
                                    {item.title}
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent rounded-full"></span>
                                </h3>
                                <p className="text-secondary opacity-80 text-lg leading-relaxed mb-8">
                                    {item.text}
                                </p>

                                <ul className="space-y-3">
                                    <li className="flex items-center text-primary font-medium">
                                        <Check className="w-5 h-5 text-accent mr-3" />
                                        {index === 0 ? "Altijd strakke plooien" : index === 1 ? "Meerdere kleuren leverbaar" : "Comfort & Veiligheid"}
                                    </li>
                                    <li className="flex items-center text-primary font-medium">
                                        <Check className="w-5 h-5 text-accent mr-3" />
                                        {index === 0 ? "Kamerhoge stoffen" : index === 1 ? "Tot 6 meter uit één stuk" : "App-bediening mogelijk"}
                                    </li>
                                </ul>
                            </motion.div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
