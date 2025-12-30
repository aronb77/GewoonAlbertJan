import DropArmHero from "@/components/sections/DropArmHero";
import DropArmStability from "@/components/sections/DropArmStability";
import DropArmMechanics from "@/components/sections/DropArmMechanics";
import DropArmDesign from "@/components/sections/DropArmDesign";
import DropArmFAQ from "@/components/sections/DropArmFAQ";

export default function DropArmPage() {
    return (
        <main>
            <DropArmHero />
            <DropArmStability />
            <DropArmMechanics />
            <DropArmDesign />
            <DropArmFAQ />
        </main>
    );
}
