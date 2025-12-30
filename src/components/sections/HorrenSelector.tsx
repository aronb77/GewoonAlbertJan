"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, MoveVertical, Square, Minimize2, ArrowLeftRight, DoorOpen, ShieldCheck, Leaf } from "lucide-react";

type Category = "ramen" | "deuren";

interface Scenario {
    id: string;
    category: Category;
    icon: any;
    title: string;
    solution: string;
    usp: string;
    seoTag?: string;
}

const scenarios: Scenario[] = [
    // Ramen
    {
        id: "draaikiep",
        category: "ramen",
        icon: Minimize2,
        title: "Draaikiepraam",
        solution: "De Inzethor",
        usp: "De ultieme oplossing. U klemt hem erin zonder boren of schroeven. Het raam kan gewoon dicht.",
        seoTag: "Ideaal voor kunststof kozijnen",
    },
    {
        id: "dakraam",
        category: "ramen",
        icon: MoveVertical,
        title: "Dakraam / Tuimel",
        solution: "De Rolhor (met cassette)",
        usp: "Strak weggewerkt in een cassette. Trek hem naar beneden als u wilt luchten, laat hem verdwijnen als hij niet nodig is.",
    },
    {
        id: "vastraam",
        category: "ramen",
        icon: Square,
        title: "Vast / Normaal Raam",
        solution: "De Voorzethor",
        usp: "Eenvoudig te monteren (met klemmen of scharnieren). Kan de hele zomer blijven zitten.",
    },
    // Deuren
    {
        id: "schuifpui",
        category: "deuren",
        icon: ArrowLeftRight,
        title: "Schuifpui",
        solution: "De Plissé Hordeur",
        usp: "De populairste keuze. Het zwarte geplisseerde gaas is zichtbaar (dus u loopt er niet doorheen) en blijft op elke stand staan.",
    },
    {
        id: "tuindeur",
        category: "deuren",
        icon: DoorOpen,
        title: "Openslaande Deuren",
        solution: "Dubbele Plissé of Rolhordeur",
        usp: "Voor elke breedte een oplossing. Kindvriendelijk en drempelvrij.",
    },
    {
        id: "achterdeur",
        category: "deuren",
        icon: Maximize2,
        title: "Standaard Achterdeur",
        solution: "De Vaste Hordeur",
        usp: "Een solide deur die zelfsluitend kan worden gemaakt. Ideaal voor intensief gebruik en huisdieren (extra stevig gaas mogelijk).",
    },
];

export default function HorrenSelector() {
    const [activeCategory, setActiveCategory] = useState<Category>("ramen");
    const [selectedId, setSelectedId] = useState<string>("draaikiep");
    const [isPollenMode, setIsPollenMode] = useState(false);

    const filteredScenarios = scenarios.filter((s) => s.category === activeCategory);
    const activeScenario = scenarios.find((s) => s.id === selectedId);

    return (
        <section className="bg-white py-20" id="keuzehulp">
            <div className="container mx-auto px-4">

                {/* Header Area */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold font-robotoslab text-primary mb-4">
                        Kies uw raam, zie uw match.
                    </h2>
                    <p className="text-secondary opacity-70">
                        Elk kozijn is anders. Selecteer hieronder uw situatie voor direct advies.
                    </p>
                </div>

                {/* Controls Row */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">

                    {/* Category Toggle */}
                    <div className="bg-gray-100 p-1 rounded-xl inline-flex">
                        {(["ramen", "deuren"] as Category[]).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    // Default selection when switching category
                                    setSelectedId(cat === "ramen" ? "draaikiep" : "schuifpui");
                                }}
                                className={`px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === cat
                                        ? "bg-white text-primary shadow-sm"
                                        : "text-secondary opacity-50 hover:opacity-100"
                                    }`}
                            >
                                {cat === "ramen" ? "Voor Ramen" : "Voor Deuren"}
                            </button>
                        ))}
                    </div>

                    {/* Pollen Toggle */}
                    <button
                        onClick={() => setIsPollenMode(!isPollenMode)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all ${isPollenMode
                                ? "border-green-500 bg-green-50 text-green-800"
                                : "border-gray-200 bg-transparent text-secondary hover:border-green-200"
                            }`}
                    >
                        <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isPollenMode ? "bg-green-500" : "bg-gray-300"}`}>
                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${isPollenMode ? "translate-x-4" : ""}`} />
                        </div>
                        <div className="text-left leading-none">
                            <span className="block font-bold text-sm">Heeft u hooikoorts?</span>
                            {isPollenMode && <span className="text-[10px] opacity-80 font-medium">Poll-tex® modus actief</span>}
                        </div>
                        {isPollenMode && <Leaf className="w-5 h-5 text-green-600 animate-pulse" />}
                    </button>
                </div>

                {/* Grid & Result Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Visual Grid (Left/Top) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4">
                            <AnimatePresence mode="popLayout">
                                {filteredScenarios.map((scenario) => (
                                    <motion.button
                                        key={scenario.id}
                                        layoutId={scenario.id}
                                        onClick={() => setSelectedId(scenario.id)}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className={`p-6 rounded-xl border-2 text-left transition-all relative overflow-hidden group ${selectedId === scenario.id
                                                ? "border-accent bg-accent/5 ring-4 ring-accent/10"
                                                : "border-gray-100 bg-white hover:border-accent/30"
                                            }`}
                                    >
                                        <div className={`mb-4 p-3 rounded-lg inline-block transition-colors ${selectedId === scenario.id ? "bg-accent text-white" : "bg-gray-100 text-gray-500 icon-transition"
                                            }`}>
                                            <scenario.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className={`font-bold transition-colors ${selectedId === scenario.id ? "text-primary" : "text-secondary"}`}>
                                            {scenario.title}
                                        </h3>

                                        {selectedId === scenario.id && (
                                            <motion.div
                                                layoutId="active-marker"
                                                className="absolute top-4 right-4 text-accent"
                                            >
                                                <div className="w-3 h-3 bg-accent rounded-full shadow-sm ring-2 ring-white"></div>
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Result Area (Right/Bottom) */}
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden min-h-[300px] flex items-center">

                            {/* Pollen Mode Overlay Background */}
                            <AnimatePresence>
                                {isPollenMode && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-[#E8F5E9]/50 pointer-events-none z-0"
                                    />
                                )}
                            </AnimatePresence>

                            <AnimatePresence mode="wait">
                                {activeScenario ? (
                                    <motion.div
                                        key={activeScenario.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10 w-full"
                                    >
                                        {activeScenario.seoTag && (
                                            <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-4">
                                                {activeScenario.seoTag}
                                            </span>
                                        )}

                                        <span className="block text-secondary opacity-60 font-medium mb-1 uppercase tracking-wide text-xs">
                                            Beste keuze voor {activeScenario.title}
                                        </span>
                                        <h3 className="text-3xl font-bold font-robotoslab text-primary mb-4">
                                            {activeScenario.solution}
                                        </h3>
                                        <p className="text-lg text-secondary opacity-80 leading-relaxed mb-8">
                                            {activeScenario.usp}
                                        </p>

                                        {/* Pollen Dynamic Content */}
                                        {isPollenMode && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="bg-white border border-green-200 rounded-lg p-4 mb-6 shadow-sm flex items-start gap-3"
                                            >
                                                <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-bold text-green-800 text-sm">Beschikbaar met Poll-tex®</p>
                                                    <p className="text-green-700 text-sm opacity-90">
                                                        Dit gepatenteerde gaas filtert 99% van alle graspollen uit de lucht.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="h-1 w-20 bg-accent/20 rounded-full">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.8 }}
                                                className="h-full bg-accent rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="w-full text-center text-gray-400">Selecteer een situatie</div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
