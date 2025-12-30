"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

// Since this is a client component, we omit standard metadata export.
// In a real Next.js app, we'd ideally have a layout.tsx for metadata or a server component wrapper.

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <main className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900">

            {/* 1. COMPACT HERO */}
            <section className="pt-32 pb-12 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-robotoslab text-stone-900 mb-4">
                        Start uw project.
                    </h1>
                    <p className="text-xl text-stone-500 font-serif max-w-2xl mx-auto leading-relaxed">
                        Of u nu precies weet wat u wilt, of eerst even wilt sparren over de mogelijkheden. Ik denk graag met u mee.
                    </p>
                </motion.div>
            </section>


            {/* 2. MAIN GRID */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* LEFT: DIRECT CONTACT */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-12"
                        >
                            {/* Phone */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-stone-50 rounded-full text-stone-900 group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider">Bel direct</h3>
                                </div>
                                <div className="pl-[60px]">
                                    <a href="tel:0612345678" className="text-3xl md:text-4xl font-bold font-robotoslab text-stone-900 hover:text-green-700 transition-colors block mb-1">
                                        038 - 88 88 888
                                    </a>
                                    <p className="text-stone-500 font-serif">Bereikbaar van ma-za, 08:00 - 18:00.</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-stone-50 rounded-full text-stone-900 group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider">Mail mij</h3>
                                </div>
                                <div className="pl-[60px]">
                                    <a href="mailto:info@werfhorst-zonwering.nl" className="text-xl md:text-2xl font-bold font-robotoslab text-stone-900 hover:text-green-700 transition-colors block mb-1">
                                        info@werfhorst-zonwering.nl
                                    </a>
                                    <p className="text-stone-500 font-serif">Ik probeer altijd binnen 24 uur te reageren.</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-stone-50 rounded-full text-stone-900 group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider">Werkgebied</h3>
                                </div>
                                <div className="pl-[60px]">
                                    <p className="text-lg text-stone-900 font-bold mb-2">
                                        Oldebroek, Elburg, Wezep, 't Harde, Nunspeet, Zwolle en omgeving.
                                    </p>
                                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Geen voorrijkosten in de regio
                                    </div>
                                </div>
                            </div>

                        </motion.div>


                        {/* RIGHT: THE FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone-100 relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center min-h-[400px] text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-stone-900 mb-4 font-robotoslab">Bedankt!</h3>
                                        <p className="text-stone-500 font-serif text-lg max-w-xs mx-auto mb-8">
                                            Ik heb uw bericht ontvangen en neem zo snel mogelijk contact met u op.
                                        </p>
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="text-green-700 font-bold hover:underline"
                                        >
                                            Nog een bericht sturen
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-6"
                                    >
                                        <div>
                                            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Uw Naam</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-stone-50 border-transparent focus:border-green-500 focus:bg-white focus:ring-0 rounded-lg p-3 transition-all font-serif"
                                                placeholder="Bijv. Jan de Vries"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-stone-50 border-transparent focus:border-green-500 focus:bg-white focus:ring-0 rounded-lg p-3 transition-all font-serif"
                                                    placeholder="jan@voorbeeld.nl"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Telefoon (Optioneel)</label>
                                                <input
                                                    type="tel"
                                                    className="w-full bg-stone-50 border-transparent focus:border-green-500 focus:bg-white focus:ring-0 rounded-lg p-3 transition-all font-serif"
                                                    placeholder="06 12345678"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Onderwerp</label>
                                            <select
                                                className="w-full bg-stone-50 border-transparent focus:border-green-500 focus:bg-white focus:ring-0 rounded-lg p-3 transition-all font-serif appearance-none"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Maak een keuze...</option>
                                                <option value="advies">Advies aan huis</option>
                                                <option value="offerte">Offerte aanvraag</option>
                                                <option value="reparatie">Service / Reparatie</option>
                                                <option value="anders">Anders</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Bericht</label>
                                            <textarea
                                                rows={4}
                                                required
                                                className="w-full bg-stone-50 border-transparent focus:border-green-500 focus:bg-white focus:ring-0 rounded-lg p-3 transition-all font-serif resize-none"
                                                placeholder="Vertel kort waar u naar op zoek bent..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="w-full bg-stone-900 text-white rounded-xl py-4 font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? (
                                                <span className="animate-pulse">Versturen...</span>
                                            ) : (
                                                <>
                                                    Verstuur Bericht
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>

                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. VISUAL ANCHOR (SERVICE AREA MAP REPRESENTATION) */}
            <section className="bg-stone-50 py-12 border-t border-stone-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-stone-200 bg-white relative h-80 flex items-center justify-center">

                        {/* Abstract Map Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />

                        {/* Pins */}
                        <div className="relative z-10 text-center">
                            <div className="relative inline-block">
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-[2px]" />
                                <MapPin className="w-12 h-12 text-green-700 fill-green-100 animate-bounce" />
                            </div>
                            <h4 className="mt-4 font-bold text-stone-900 text-xl font-robotoslab">Werfhorst HQ</h4>
                            <p className="text-stone-500 font-serif">Oldebroek (Gelderland)</p>
                        </div>

                        {/* Nearby Towns Labels (Decorative) */}
                        <div className="absolute top-1/4 left-1/4 opacity-50 text-xs font-bold text-stone-400 uppercase tracking-widest rotate-[-10deg]">Elburg</div>
                        <div className="absolute bottom-1/3 right-1/4 opacity-50 text-xs font-bold text-stone-400 uppercase tracking-widest rotate-[5deg]">Wezep</div>
                        <div className="absolute top-1/3 right-1/3 opacity-50 text-xs font-bold text-stone-400 uppercase tracking-widest rotate-[15deg]">Zwolle</div>
                        <div className="absolute bottom-1/4 left-1/3 opacity-50 text-xs font-bold text-stone-400 uppercase tracking-widest rotate-[-5deg]">Nunspeet</div>

                    </div>
                    <div className="text-center mt-6">
                        <p className="text-sm text-stone-400 font-serif italic">
                            Wij werken voornamelijk in deze regio om onze servicegarantie waar te kunnen maken.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ContactPage;
