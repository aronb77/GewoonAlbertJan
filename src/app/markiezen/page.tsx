import React from 'react';
import { Metadata } from 'next';
import MarkiezenHero from '@/components/sections/MarkiezenHero';
import MarkiezenFunction from '@/components/sections/MarkiezenFunction';
import MarkiezenMaterials from '@/components/sections/MarkiezenMaterials';
import MarkiezenDesign from '@/components/sections/MarkiezenDesign';
import MarkiezenControl from '@/components/sections/MarkiezenControl';
import MarkiezenFAQ from '@/components/sections/MarkiezenFAQ';

export const metadata: Metadata = {
    title: 'Markiezen | Gewoon Albert Jan',
    description: 'Geef uw woning karakter met onze handgemaakte markiezen. De ultieme klassieke zonwering met gesloten zijkanten. Bekijk onze collectie.',
};

export default function MarkiezenPage() {
    return (
        <main>
            <MarkiezenHero />
            <MarkiezenFunction />
            <MarkiezenMaterials />
            <MarkiezenDesign />
            <MarkiezenControl />
            <MarkiezenFAQ />
        </main>
    );
}
