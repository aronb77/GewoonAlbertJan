"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle } from "lucide-react";

export default function RaambekledingHero() {
    const scrollToContent = () => {
        const element = document.getElementById("collectie");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full min-h-[90vh] md:h-[85vh] bg-background flex flex-col justify-end overflow-hidden pb-10 md:pb-0">

            {/* 1. Base Layer: Image Container */}
            <div className="absolute top-0 left-0 w-full h-[75%] md:h-[85%] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-0">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1.0 }}
                    transition={{ duration: 10, ease: "linear" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3A]/50 to-transparent z-10 pointer-events-none" />
                    <img
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
                        alt="Sfeervolle raamdecoratie in woonkamer"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* 2. Content Card */}
            <div className="container mx-auto px-4 relative z-20 pointer-events-none md:pointer-events-auto h-full flex flex-col justify-end md:block">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="md:absolute md:bottom-20 md:left-4 pointer-events-auto"
                >
                    <div className="bg-background max-w-xl rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
                        {/* Accent Top Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-highlight rounded-t-2xl"></div>

                        <div className="space-y-6">
                            <div>
                                <span className="block text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                    SFEERVOLLE RAAMDECORATIE REGIO OLDEBROEK & WEZEP
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold font-robotoslab text-primary leading-tight">
                                    Gordijnen, <span className="text-accent">Duettes</span> & <span className="text-accent">Shutters</span>: Perfect op maat.
                                </h1>
                            </div>

                            <p className="text-secondary opacity-80 text-lg leading-relaxed">
                                Zoekt u een oplossing voor een erker of draaikiepraam? Of sfeervolle inbetweens? Albert Jan komt gratis inmeten met de nieuwste stalen.
                            </p>

                            {/* Specialist Badge */}
                            <div className="inline-flex items-center bg-highlight/20 text-primary px-4 py-2 rounded-lg border border-highlight/30">
                                <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                <span className="text-sm font-bold">Specialist in erkers & afwijkende ramen</span>
                            </div>

                            <div className="pt-2">
                                <button
                                    onClick={scrollToContent}
                                    className="group inline-flex items-center text-white bg-accent hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Bekijk collectie
                                    <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
