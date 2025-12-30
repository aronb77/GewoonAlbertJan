import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
    return (
        <section className="relative bg-gradient-to-r from-primary to-[#2C3E50] py-20 overflow-hidden text-white">
            {/* Creative Background Element: Sun Rays */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden md:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
                    <path d="M100 0C105 40 140 40 140 0" /> {/* Simplified abstract ray shapes for decoration */}
                    <circle cx="200" cy="0" r="100" />
                    <path d="M100 0 L200 100 L200 0 Z" />
                </svg>
            </div>
            <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay blur-3xl opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Text Content */}
                <div className="max-w-2xl space-y-6">
                    <div className="inline-block bg-accent/20 border border-accent text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                        Actie: 15% korting op Solar Rolluiken
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-robotoslab leading-tight">
                        Klaar voor meer comfort in huis?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                        Of u nu gaat voor duurzame solar screens of sfeervolle gordijnen: ik kom graag vrijblijvend bij u langs voor advies en inmeten.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center bg-accent hover:bg-opacity-90 text-white font-medium text-lg py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Maak direct een afspraak
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
