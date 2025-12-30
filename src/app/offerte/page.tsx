import React from "react";
import { Metadata } from 'next';
import QuoteWizard from '@/components/offerte/QuoteWizard';

export const metadata: Metadata = {
    title: 'Offerte Aanvragen | Gewoon Albert Jan',
    description: 'Bereken direct uw prijs of vraag een offerte aan voor rolluiken, screens of markiezen.',
};

const OffertePage = () => {
    return (
        <main className="min-h-screen bg-stone-50 py-32 px-4 font-sans selection:bg-green-100 selection:text-green-900">

            {/* HEADER */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <span className="text-green-800 font-serif italic text-lg tracking-wide mb-2 block">
                    Vrijblijvend & Persoonlijk
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-robotoslab text-stone-900 mb-4">
                    Stel uw aanvraag samen.
                </h1>
                <p className="text-stone-500 text-lg font-serif">
                    In 4 simpele stappen naar een gericht voorstel. Ik denk graag met u mee voor de beste oplossing bij u thuis.
                </p>
            </div>

            {/* WIZARD CONTAINER */}
            <div className="container mx-auto">
                <QuoteWizard />
            </div>

            {/* TRUST INDICATORS */}
            <div className="text-center mt-16 text-stone-400 text-sm font-serif">
                <p>✓ Geen voorrijkosten in de regio Oldebroek</p>
                <p className="mt-1">✓ Altijd een eerlijk advies aan huis</p>
            </div>

        </main>
    );
};

export default OffertePage;
