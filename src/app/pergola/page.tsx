import PergolaHero from "@/components/sections/PergolaHero";
import PergolaConcept from "@/components/sections/PergolaConcept";
import PergolaTech from "@/components/sections/PergolaTech";
import PergolaUpgrade from "@/components/sections/PergolaUpgrade";
import PergolaFAQ from "@/components/sections/PergolaFAQ";

export const metadata = {
    title: 'Pergolazonwering | Gewoon Albert Jan',
    description: 'Het robuuste alternatief voor een overkapping. Windvast, grote oppervlaktes en regenbestendig. Ontdek de stabiliteit van pergolazonwering.',
};

export default function PergolaPage() {
    return (
        <main>
            <PergolaHero />
            <PergolaConcept />
            <PergolaTech />
            <PergolaUpgrade />
            <PergolaFAQ />
        </main>
    );
}
