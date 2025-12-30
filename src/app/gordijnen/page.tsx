import CurtainsHero from "@/components/sections/CurtainsHero";
import CurtainsTypes from "@/components/sections/CurtainsTypes";
import CurtainsConfection from "@/components/sections/CurtainsConfection";
import CurtainsRails from "@/components/sections/CurtainsRails";

export const metadata = {
    title: 'Gordijnen op Maat | Gewoon Albert Jan',
    description: 'Creëer sfeer en warmte met onze prachtige collectie gordijnen en inbetweens. Van perfecte wave-plooi tot verduisterend. Gratis inmeten in Oldebroek en omgeving.',
};

export default function GordijnenPage() {
    return (
        <main>
            <CurtainsHero />
            <CurtainsTypes />
            <CurtainsConfection />
            <CurtainsRails />

            {/* Placeholder for future sections */}
            <div className="py-24 text-center text-stone-400 bg-stone-50 border-t border-stone-200 font-robotoslab">
                <p>Meer secties (Collectie, Stoffen, Advies) volgen binnenkort...</p>
            </div>
        </main>
    );
}
