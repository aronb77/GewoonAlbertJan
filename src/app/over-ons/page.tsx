import AboutHero from "@/components/sections/AboutHero";
import AboutWorkflow from "@/components/sections/AboutWorkflow";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutWorkflow />
            {/* Placeholder for future sections */}
            <div className="py-24 text-center text-slate-400 bg-slate-50 border-t border-slate-200">
                <p>Meer secties (Tijdlijn, Waarden, Werkplaats) volgen binnenkort...</p>
            </div>
        </main>
    );
}
