import HorrenHero from "@/components/sections/HorrenHero";
import HorrenSelector from "@/components/sections/HorrenSelector";
import MeshTech from "@/components/sections/MeshTech";
import HorrenDesign from "@/components/sections/HorrenDesign";
import HorrenFAQ from "@/components/sections/HorrenFAQ";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <HorrenHero />

            {/* Interactive Selector */}
            <HorrenSelector />

            {/* Mesh Technology (Poll-tex etc) */}
            <MeshTech />

            {/* Design & Fit */}
            <HorrenDesign />

            {/* FAQ & Final CTA */}
            <HorrenFAQ />
        </div>
    );
}
