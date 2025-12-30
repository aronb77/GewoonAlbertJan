import CurtainsHero from "@/components/sections/CurtainsHero";
import CurtainsTypes from "@/components/sections/CurtainsTypes";
import CurtainsConfection from "@/components/sections/CurtainsConfection";
import CurtainsRails from "@/components/sections/CurtainsRails";
import CurtainsComfort from "@/components/sections/CurtainsComfort";
import CurtainsFAQ from "@/components/sections/CurtainsFAQ";

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
            <CurtainsComfort />
            <CurtainsFAQ />
        </main>
    );
}
