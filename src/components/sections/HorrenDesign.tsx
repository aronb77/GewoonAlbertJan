"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, X } from "lucide-react";

interface ColorOption {
    ral: string;
    name: string;
    hex: string;
    textColor: string;
}

const colors: ColorOption[] = [
    { ral: "RAL 9005", name: "Gitzwart (Trend)", hex: "#1a1a1a", textColor: "text-white" }, // Slightly lighter than pure black for visibility
    { ral: "RAL 7016", name: "Antraciet", hex: "#383E42", textColor: "text-white" },
    { ral: "RAL 9010", name: "Zuiver Wit", hex: "#FFFFFF", textColor: "text-gray-900" },
    { ral: "RAL 9001", name: "Crème Wit", hex: "#FDF4E3", textColor: "text-gray-900" },
];

export default function HorrenDesign() {
    const [activeColor, setActiveColor] = useState<ColorOption>(colors[0]);

    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">

                    {/* Absolute Trust Badge - Centered on Desktop, Floating on Mobile */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            className="bg-accent text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white transform rotate-12"
                        >
                            <ShieldCheck className="w-8 h-8 mb-1" />
                            <span className="text-xl font-bold leading-none">100%</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Pasgarantie</span>
                        </motion.div>
                    </div>

                    {/* Left Block: Colors */}
                    <div className="flex flex-col justify-center">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 text-sm">Design & Afwerking</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-robotoslab text-primary mb-6">
                            Kies de kleur van uw kozijn.
                        </h2>
                        <p className="text-secondary opacity-70 mb-8 leading-relaxed">
                            Geen lelijke witte randen op uw zwarte kozijnen. Onze profielen zijn leverbaar in alle standaard RAL-kleuren, zodat de hor visueel wegvalt in het gevelbeeld.
                        </p>

                        {/* Interactive Color Selector */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="flex gap-4 mb-8 justify-center sm:justify-start">
                                {colors.map((color) => (
                                    <button
                                        key={color.ral}
                                        onClick={() => setActiveColor(color)}
                                        className={`w-12 h-12 rounded-full shadow-sm flex items-center justify-center transition-transform hover:scale-110 relative ${activeColor.ral === color.ral ? "ring-4 ring-accent/20 scale-110" : ""
                                            }`}
                                        style={{ backgroundColor: color.hex, border: color.hex === "#FFFFFF" ? "1px solid #e5e7eb" : "none" }}
                                        aria-label={`Selecteer kleur ${color.name}`}
                                    >
                                        {activeColor.ral === color.ral && (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                                <Check className={`w-6 h-6 ${color.hex === "#FFFFFF" || color.hex === "#FDF4E3" ? "text-gray-900" : "text-white"}`} />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-6">
                                {/* Profile Preview (Simulated Corner) */}
                                <div className="relative w-32 h-32">
                                    <motion.div
                                        animate={{ borderColor: activeColor.hex }}
                                        className="absolute top-0 left-0 w-full h-full border-t-[24px] border-l-[24px] rounded-tl-lg shadow-inner bg-white"
                                        style={{
                                            borderColor: activeColor.hex,
                                            filter: activeColor.hex === "#FFFFFF" ? "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" : "none"
                                        }}
                                    />
                                    {/* Miter Line */}
                                    <div className="absolute top-0 left-0 w-[42px] h-[42px] border-r border-b border-black/10 origin-top-left rotate-45 pointer-events-none"></div>
                                </div>

                                <div>
                                    <p className="font-bold text-lg text-primary">{activeColor.name}</p>
                                    <p className="text-sm text-secondary opacity-60 font-mono">{activeColor.ral}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Block: Fit & Quality */}
                    <div className="flex flex-col justify-center">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 text-sm">Kwaliteit</span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-robotoslab text-primary mb-6">
                            Strak in de hoek.
                        </h2>
                        <p className="text-secondary opacity-70 mb-8 leading-relaxed">
                            Geen goedkope kunststof hoekstukjes die na verloop van tijd vergelen. Wij werken met <strong>in verstek gezaagde</strong> aluminium hoeken voor een luxe uitstraling en extra stevigheid.
                        </p>

                        {/* Comparison Graphic */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Good */}
                            <div className="p-6 rounded-xl border-2 border-green-100 bg-green-50/50 flex flex-col items-center text-center">
                                <div className="w-16 h-16 mb-4 relative">
                                    {/* Abstract Mitered Corner graphic */}
                                    <div className="w-12 h-12 border-t-4 border-l-4 border-primary absolute top-2 left-2 rounded-tl-sm"></div>
                                    <div className="w-16 h-[1px] bg-primary/20 absolute top-2 left-2 rotate-45 origin-top-left"></div>
                                    <div className="absolute -right-2 -bottom-2 bg-green-500 text-white rounded-full p-1">
                                        <Check className="w-4 h-4" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-primary mb-1">Verstek Gezaagd</h4>
                                <p className="text-xs text-secondary opacity-70">Naadloos aluminium</p>
                            </div>

                            {/* Bad */}
                            <div className="p-6 rounded-xl border-2 border-red-50 bg-red-50/30 flex flex-col items-center text-center opacity-75 grayscale hover:grayscale-0 transition-all">
                                <div className="w-16 h-16 mb-4 relative">
                                    {/* Abstract Plastic Corner graphic */}
                                    <div className="w-12 h-12 border-t-4 border-l-4 border-gray-300 absolute top-2 left-2 rounded-tl-sm"></div>
                                    <div className="w-4 h-4 bg-gray-300 absolute top-2 left-2"></div>
                                    <div className="absolute -right-2 -bottom-2 bg-red-500 text-white rounded-full p-1">
                                        <X className="w-4 h-4" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-gray-400 mb-1">Kunststof Hoek</h4>
                                <p className="text-xs text-gray-400">Vergeelt & breekt</p>
                            </div>
                        </div>

                        {/* Mobile Trust Badge Reiteration (since absolute is hidden on small screens) */}
                        <div className="mt-8 lg:hidden bg-accent/10 p-4 rounded-lg flex items-center gap-4">
                            <ShieldCheck className="w-8 h-8 text-accent" />
                            <div>
                                <p className="font-bold text-primary">100% Pasgarantie</p>
                                <p className="text-sm text-secondary opacity-70">Ik meet zelf in. Past het niet? Mijn risico.</p>
                            </div>
                        </div>

                        {/* Desktop Text for Guarantee */}
                        <div className="hidden lg:block mt-8 p-4 border-l-4 border-accent bg-gray-50">
                            <p className="italic text-secondary opacity-80">
                                "Omdat ik persoonlijk kom inmeten, neem ik het volledige risico over. Een hor die niet past, hebben we allebei niets aan."
                            </p>
                            <p className="mt-2 font-bold text-primary">— Albert Jan</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
