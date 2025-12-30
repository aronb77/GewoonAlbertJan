"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const productsOutdoor = [
        { name: "Solar Rolluiken", href: "/solar-rolluiken" },
        { name: "Solar Screens", href: "/screens" },
        { name: "Knikarmschermen", href: "/knikarmschermen" },
        { name: "Uitvalschermen", href: "/uitvalschermen" },
        { name: "Markiezen", href: "/markiezen" },
        { name: "Pergola's", href: "/pergola" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "h-16 bg-primary shadow-lg" : "h-20 bg-primary"
                    }`}
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between">

                    {/* 1. Logo */}
                    <Link href="/" className="flex flex-col group relative z-50">
                        <span className="text-white font-robotoslab font-bold text-xl md:text-2xl tracking-wide leading-none group-hover:text-accent transition-colors">
                            GEWOON ALBERT JAN
                        </span>
                        <span className="text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase leading-none mt-1">
                            Zonwering & Interieur
                        </span>
                    </Link>

                    {/* 2. Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/" className={`text-sm font-medium transition-colors hover:text-accent ${pathname === "/" ? "text-white font-bold" : "text-gray-300"}`}>
                            Home
                        </Link>

                        {/* Dropdown: Buitenzonwering */}
                        <div
                            className="relative"
                            onMouseEnter={() => setHoveredMenu("outdoor")}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <Link
                                href="/buitenzonwering"
                                className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 py-4 ${pathname.includes("solar") || pathname.includes("scherm") || pathname.includes("pergola") || pathname.includes("markiez") ? "text-white font-bold" : "text-gray-300"}`}
                            >
                                Buitenzonwering
                                <ChevronDown className={`w-4 h-4 transition-transform ${hoveredMenu === "outdoor" ? "rotate-180" : ""}`} />
                            </Link>

                            <AnimatePresence>
                                {hoveredMenu === "outdoor" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                                        {productsOutdoor.map((prod) => (
                                            <Link
                                                key={prod.href}
                                                href={prod.href}
                                                className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors font-medium text-sm"
                                            >
                                                {prod.name}
                                            </Link>
                                        ))}
                                        <div className="border-t border-slate-100 mt-2 pt-2 px-4 pb-2">
                                            <Link href="/buitenzonwering" className="text-xs font-bold text-slate-400 hover:text-accent uppercase tracking-wider">
                                                Alle Buitenzonwering &rarr;
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/raambekleding" className={`text-sm font-medium transition-colors hover:text-accent ${pathname.includes("gordijnen") || pathname === "/raambekleding" ? "text-white font-bold" : "text-gray-300"}`}>
                            Raambekleding
                        </Link>
                        <Link href="/horren" className={`text-sm font-medium transition-colors hover:text-accent ${pathname === "/horren" ? "text-white font-bold" : "text-gray-300"}`}>
                            Horren
                        </Link>
                        <Link href="/over-ons" className={`text-sm font-medium transition-colors hover:text-accent ${pathname === "/over-ons" ? "text-white font-bold" : "text-gray-300"}`}>
                            Over ons
                        </Link>
                    </nav>

                    {/* 3. CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center bg-accent text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5"
                        >
                            Offerte Aanvragen
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-primary z-50 shadow-2xl flex flex-col overflow-y-auto"
                        >
                            <div className="p-6 pt-24 flex flex-col gap-6">
                                <Link href="/" className={`text-xl font-bold ${pathname === "/" ? "text-accent" : "text-white"}`}>Home</Link>

                                {/* Mobile Outdoor Group */}
                                <div>
                                    <Link href="/buitenzonwering" className="text-xl font-bold text-white mb-3 block">Buitenzonwering</Link>
                                    <div className="pl-4 border-l-2 border-white/10 space-y-3 flex flex-col">
                                        {productsOutdoor.map(prod => (
                                            <Link key={prod.href} href={prod.href} className={`text-base font-medium ${pathname === prod.href ? "text-accent" : "text-gray-400"}`}>
                                                {prod.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/raambekleding" className={`text-xl font-bold ${pathname.includes("raam") ? "text-accent" : "text-white"}`}>Raambekleding</Link>
                                <Link href="/horren" className={`text-xl font-bold ${pathname === "/horren" ? "text-accent" : "text-white"}`}>Horren</Link>
                                <Link href="/over-ons" className={`text-xl font-bold ${pathname === "/over-ons" ? "text-accent" : "text-white"}`}>Over ons</Link>
                                <Link href="/contact" className={`text-xl font-bold ${pathname === "/contact" ? "text-accent" : "text-white"}`}>Contact</Link>
                            </div>

                            <div className="mt-auto p-6 bg-black/20">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full bg-accent text-white py-4 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
                                >
                                    Offerte Aanvragen
                                </Link>

                                <div className="mt-6 flex items-center justify-center text-gray-400 gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">06 - 20 35 17 66</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
