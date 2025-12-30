import PergolaHero from "@/components/sections/PergolaHero";
import PergolaConcept from "@/components/sections/PergolaConcept";

export const metadata = {
    title: 'Pergolazonwering | Gewoon Albert Jan',
    description: 'Het robuuste alternatief voor een overkapping. Windvast, grote oppervlaktes en regenbestendig. Ontdek de stabiliteit van pergolazonwering.',
};

export default function PergolaPage() {
    return (
        <main>
            <PergolaHero />
            <PergolaConcept />

            {/* Placeholder for future sections */}
            <div className="py-24 text-center text-stone-400 bg-stone-50 border-t border-stone-200 font-robotoslab">
                <p>Meer secties (Construction, Usage, Projects) volgen binnenkort...</p>
            </div>
        </main>
    );
}
