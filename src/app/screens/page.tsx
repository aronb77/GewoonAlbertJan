import ScreensHero from "@/components/sections/ScreensHero";
import ScreensHeatBlock from "@/components/sections/ScreensHeatBlock";

export default function Page() {
    return (
        <div className="overflow-x-hidden">
            <ScreensHero />

            {/* Placeholder for future sections */}
            <section className="container mx-auto px-4 py-20 bg-gray-50 text-center min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">Screens Collectie</h2>
                <p className="text-gray-500 max-w-md">
                    Binnenkort: Collectie doekkleuren, technische specificaties en montage-informatie.
                </p>
            </section>
        </div>
    );
}
