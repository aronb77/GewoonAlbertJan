import ScreensHero from "@/components/sections/ScreensHero";
import ScreensHeatBlock from "@/components/sections/ScreensHeatBlock";
import ScreensSolar from "@/components/sections/ScreensSolar";
import ScreensFabrics from "@/components/sections/ScreensFabrics";
import ScreensWindSpecs from "@/components/sections/ScreensWindSpecs";
import ScreensFAQ from "@/components/sections/ScreensFAQ";
import ScreensCTA from "@/components/sections/ScreensCTA";

export default function Page() {
    return (
        <div className="overflow-x-hidden">
            <ScreensHero />

            <ScreensHeatBlock />
            <ScreensSolar />
            <ScreensFabrics />
            <ScreensWindSpecs />
            <ScreensFAQ />
            <ScreensCTA />
        </div>
    );
}
