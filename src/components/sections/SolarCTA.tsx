"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function SolarCTA() {
    return (
        <section className="bg-[#1F2D3A] py-24 relative overflow-hidden">
            {/* Abstract Background Pattern (Solar Rays) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="solar_rays" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#solar_rays)" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3A] via-transparent to-[#1F2D3A]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">

                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
                    >
                        <AlertCircle className="w-4 h-4" />
                        Tijdelijke Actie
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-robotoslab text-white mb-6 leading-tight"
                    >
                        Upgrade uw woning met <br className="hidden md:block" />
                        <span className="text-accent">15% Solar Voordeel.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Kies voor comfort, veiligheid en duurzaamheid. Ik kom persoonlijk bij u inmeten om de situatie te bekijken, zodat u 100% zeker weet dat het past.
                        <span className="block mt-4 font-medium text-white opacity-90">Nu tijdelijk extra scherp geprijsd.</span>
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Primary Button */}
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-3 bg-[#C76A3E] hover:bg-[#b05d35] text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-lg shadow-orange-900/20 transition-all hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10">Claim mijn 15% korting</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

                            {/* Shining effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                        </Link>

                        <p className="text-sm text-gray-500 font-medium">
                            Vrijblijvende offerte • Geen voorrijkosten in de regio
                        </p>

                        {/* Secondary WhatsApp Link */}
                        <a
                            href="https://wa.me/31620351766"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors border-b border-green-400/30 pb-0.5 hover:border-green-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-medium">Eerst een vraag stellen? App direct naar Albert Jan</span>
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
