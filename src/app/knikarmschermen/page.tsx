import AwningsHero from "@/components/sections/AwningsHero";
import AwningsFreeSpace from "@/components/sections/AwningsFreeSpace";
import AwningsTech from "@/components/sections/AwningsTech";

export default function AwningsPage() {
    return (
        <main>
            <AwningsHero />
            <AwningsFreeSpace />
            <AwningsTech />
            {/* Placeholder for future sections */}
            <div className="py-24 text-center text-slate-400 bg-slate-50 border-t border-slate-200">
                <p>Meer secties (Benefits, Gallery, Tech Specs) volgen binnenkort...</p>
            </div>
        </main>
    );
}
