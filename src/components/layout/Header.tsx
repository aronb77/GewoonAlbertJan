"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Buitenzonwering", href: "/buitenzonwering" },
        { name: "Raambekleding", href: "/raambekleding" },
        { name: "Horren", href: "/horren" },
        { name: "Over ons", href: "/over-ons" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "h-16 bg-primary shadow-lg" : "h-20 bg-primary"
                    }`}
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between">

                    {/* 1. Logo */}
                    <Link href="/" className="flex flex-col group">
                        <span className="text-white font-robotoslab font-bold text-xl md:text-2xl tracking-wide leading-none group-hover:text-accent transition-colors">
                            GEWOON ALBERT JAN
                        </span>
                        <span className="text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase leading-none mt-1">
                            Zonwering & Interieur
                        </span>
                    </Link>

                    {/* 2. Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors relative hover:text-accent ${isActive ? "text-white font-bold" : "text-gray-300"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent"
                                        />
                                    )}
                                </Link>
                            );
                        })}
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
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-primary z-50 shadow-2xl flex flex-col p-6 lg:hidden"
                        >
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2 hover:bg-white/10 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-xl font-bold ${pathname === link.href ? "text-accent" : "text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full bg-accent text-white py-4 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
                                >
                                    Offerte Aanvragen
                                </Link>

                                <div className="mt-6 flex items-center justify-center text-gray-400 gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">06 - 12 34 56 78</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
