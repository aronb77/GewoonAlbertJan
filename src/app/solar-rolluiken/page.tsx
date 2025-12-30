import SolarHero from "@/components/sections/SolarHero";
import SolarTech from "@/components/sections/SolarTech";
import SolarDesign from "@/components/sections/SolarDesign";
import SolarSecurity from "@/components/sections/SolarSecurity";
import SolarFAQ from "@/components/sections/SolarFAQ";
import SolarCTA from "@/components/sections/SolarCTA";

export default function Page() {
    return (
        <div className="overflow-x-hidden">
            <SolarHero />

            {/* Placeholder for future sections */}
            <section className="container mx-auto px-4 py-20 bg-gray-50 text-center min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">Meer specificaties volgen</h2>
                <p className="text-gray-500 max-w-md">
                    Binnenkort: Technische details over de Somfy en Brel motoren, isolatiewaardes en kleurmogelijkheden.
                </p>
            </section>
        </div>
    );
}
