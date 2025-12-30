import AboutHero from "@/components/sections/AboutHero";
import AboutWorkflow from "@/components/sections/AboutWorkflow";
import AboutLocal from "@/components/sections/AboutLocal";
import CompanyTimeline from "@/components/sections/CompanyTimeline";
import TeamValues from "@/components/sections/TeamValues";
import Werkplaats from "@/components/sections/Werkplaats";
import AboutCTA from "@/components/sections/AboutCTA";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutWorkflow />
            <AboutLocal />
            <TeamValues />
            <CompanyTimeline />
            <Werkplaats />
            <AboutCTA />
        </main>
    );
}
