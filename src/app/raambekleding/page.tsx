import RaambekledingHero from "@/components/sections/RaambekledingHero";
import RaamdecoratieGrid from "@/components/sections/RaamdecoratieGrid";
import ComplexWindows from "@/components/sections/ComplexWindows";
import CurtainDetails from "@/components/sections/CurtainDetails";
import InteriorFAQ from "@/components/sections/InteriorFAQ";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <RaambekledingHero />

            {/* Collection Grid */}
            <RaamdecoratieGrid />

            {/* Specialist Solutions (Erkers/Bends) */}
            <ComplexWindows />

            {/* Finishing Touches (Rails/Wave/Smart) */}
            <CurtainDetails />

            {/* FAQ & Final CTA */}
            <InteriorFAQ />
        </div>
    );
}
