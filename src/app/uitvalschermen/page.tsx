import DropArmHero from "@/components/sections/DropArmHero";
import DropArmStability from "@/components/sections/DropArmStability";
import DropArmMechanics from "@/components/sections/DropArmMechanics";
import DropArmDesign from "@/components/sections/DropArmDesign";

export default function DropArmPage() {
    return (
        <main>
            <DropArmHero />
            <DropArmStability />
            <DropArmMechanics />
            <DropArmDesign />
            {/* Placeholder for future sections */}
            <div className="py-24 text-center text-slate-400 bg-slate-50 border-t border-slate-200">
                <p>Meer secties (Types, Benefits, CTA) volgen binnenkort...</p>
            </div>
        </main>
    );
}
