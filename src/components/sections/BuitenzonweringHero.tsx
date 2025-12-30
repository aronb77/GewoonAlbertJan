"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function BuitenzonweringHero() {
    const scrollToProducts = () => {
        const element = document.getElementById("producten");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full min-h-[90vh] md:h-[85vh] bg-background flex flex-col justify-end overflow-hidden pb-10 md:pb-0">

            {/* 1. Base Layer: The Image Container */}
            {/* Takes full width, 80% height relative to view, rounded bottom corners */}
            <div className="absolute top-0 left-0 w-full h-[75%] md:h-[85%] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-0">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1.0 }}
                    transition={{ duration: 10, ease: "linear" }}
                >
                    {/* Gradient Overlay for text readability/mood */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3A]/50 to-transparent z-10 pointer-events-none" />

                    {/* Image */}
                    <img
                        src="https://images.unsplash.com/photo-1615873968403-89e0618d910d?auto=format&fit=crop&q=80&w=1600"
                        alt="Luxe buitenzonwering sfeerimpressie"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* 2. The Content Card (Layered overlap) */}
            <div className="container mx-auto px-4 relative z-20 pointer-events-none md:pointer-events-auto h-full flex flex-col justify-end md:block">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="md:absolute md:bottom-20 md:left-4 pointer-events-auto"
                >
                    {/* Visual Connector Line */}
                    <div className="hidden md:block absolute -top-16 left-10 w-[2px] h-16 bg-highlight/50"></div>

                    <div className="bg-background max-w-lg rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
                        {/* Accent Top Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-highlight rounded-t-2xl"></div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold font-robotoslab text-primary leading-tight">
                                Regie over zon, <br />
                                <span className="text-accent">licht en warmte.</span>
                            </h1>
                            <p className="text-secondary opacity-80 text-lg leading-relaxed">
                                Van verkoelende screens tot sfeervolle knikarmschermen voor uw terras. Ontdek de perfecte, op maat gemaakte oplossing voor uw gevel.
                            </p>

                            <button
                                onClick={scrollToProducts}
                                className="group inline-flex items-center text-white bg-accent hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Bekijk alle mogelijkheden
                                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
