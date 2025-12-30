"use client";

import React from "react";
import { MoveVertical, Smartphone, Sun, BatteryCharging, Zap } from "lucide-react";

const MarkiezenControl = () => {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-green-800 font-serif italic text-lg tracking-wide mb-2 block">
                        Traditie ontmoet Techniek
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-6">
                        Hoe bedient u de markies?
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed font-serif">
                        Of u nu houdt van het nostalgische ritueel van optrekken met een koord, of kiest voor het gemak van onzichtbare technologie.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                    {/* OPTION 1: CLASSIC CORD */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-8 border-2 border-stone-100 group-hover:border-stone-300 transition-colors">
                            {/* Stylized Cleat (Kikker) Icon Representation */}
                            <div className="relative">
                                <MoveVertical className="w-10 h-10 text-stone-400" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-stone-300 rounded-full -rotate-45" /> {/* Rope wrap hint */}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold font-robotoslab text-stone-900 mb-4">
                            Klassiek Koord
                        </h3>
                        <p className="text-stone-600 leading-relaxed max-w-md mx-auto mb-8 font-serif">
                            De authentieke ervaring. U trekt de markies zelf op en wikkelt het koord om de traditionele 'kikker' op het kozijn. Voordelig, charmant en bewezen betrouwbaar.
                        </p>

                        <div className="mt-auto pt-8 border-t border-stone-100 w-full">
                            <ul className="text-sm text-stone-500 space-y-2 inline-block text-left">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Geen stroom nodig
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Nostalgisch gevoel
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* OPTION 2: SOMFY SOLAR */}
                    <div className="bg-stone-900 rounded-3xl p-8 lg:p-12 border border-stone-800 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center relative overflow-hidden group">

                        {/* Solar Glow Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />

                        <div className="w-24 h-24 bg-stone-800 rounded-full flex items-center justify-center mb-8 border-2 border-stone-700 group-hover:border-amber-500/50 transition-colors relative z-10">
                            <Smartphone className="w-10 h-10 text-white" />
                            <div className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-2 border-4 border-stone-900">
                                <Sun className="w-4 h-4 text-stone-900 fill-stone-900" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold font-robotoslab text-white mb-4 relative z-10">
                            Somfy Solar (Elektrisch)
                        </h3>
                        <p className="text-stone-400 leading-relaxed max-w-md mx-auto mb-8 font-serif relative z-10">
                            Luxe zonder gedoe. Een onzichtbare motor doet het werk. Dankzij het zonnepaneeltje hoeven we <strong>niet</strong> door uw kozijn of muur te boren. Wel zo fijn voor uw (monumentale) stucwerk.
                        </p>

                        <div className="mt-auto pt-8 border-t border-stone-800 w-full relative z-10">
                            <ul className="text-sm text-stone-400 space-y-2 inline-block text-left">
                                <li className="flex items-center gap-2">
                                    <BatteryCharging className="w-4 h-4 text-amber-500" /> 100% Draadloos (Geen boren)
                                </li>
                                <li className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-amber-500" /> Bediening via App of Afstandsbediening
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MarkiezenControl;
