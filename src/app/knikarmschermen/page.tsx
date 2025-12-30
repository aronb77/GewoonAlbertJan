import AwningsHero from "@/components/sections/AwningsHero";
import AwningsFreeSpace from "@/components/sections/AwningsFreeSpace";
import AwningsTech from "@/components/sections/AwningsTech";
import AwningsDesign from "@/components/sections/AwningsDesign";
import AwningsFeatures from "@/components/sections/AwningsFeatures";
import AwningsGallery from "@/components/sections/AwningsGallery";
import AwningsFAQ from "@/components/sections/AwningsFAQ";

export default function AwningsPage() {
    return (
        <main>
            <AwningsHero />
            <AwningsFreeSpace />
            <AwningsTech />
            <AwningsDesign />
            <AwningsFeatures />
            <AwningsGallery />
            <AwningsFAQ />
        </main>
    );
}
