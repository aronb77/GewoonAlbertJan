import BuitenzonweringHero from "@/components/sections/BuitenzonweringHero";
import BentoProductGrid from "@/components/sections/BentoProductGrid";
import ProductSpecs from "@/components/sections/ProductSpecs";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ProductFAQ from "@/components/sections/ProductFAQ";
import ProcessCta from "@/components/sections/ProcessCta";


export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <BuitenzonweringHero />

            {/* Placeholder for Product Grid Section (Target for scroll) */}
            <section id="producten" className="container mx-auto px-4 py-20 min-h-screen bg-white">
                <h2 className="text-3xl font-bold font-robotoslab text-primary mb-8 text-center">Onze Producten</h2>
                <div className="text-center text-secondary opacity-50">
                    <p>Product categories coming soon...</p>
                    {/* Product Grid Section */}
                    <BentoProductGrid />

                    <ProductSpecs />

                    <ProjectShowcase />

                    <ProductFAQ />

                    <ProcessCta />
                </div>
            </section>
        </div>
    );
}
