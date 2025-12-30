import HomeHero from "@/components/sections/HomeHero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SolarSpotlight from "@/components/sections/SolarSpotlight";
import FeaturesBar from "@/components/sections/FeaturesBar";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HomeHero
        title="Breng sfeer en comfort in uw woning."
        subtitle="Van stijlvolle raambekleding tot duurzame zonwering. Eerlijk advies aan huis, vakkundig gemeten en gemonteerd door Albert Jan."
        ctaText="Advies aan huis aanvragen"
        ctaLink="/contact"
        imageSrc="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
      />

      {/* Placeholder for future sections */}
      <section className="container mx-auto px-4 py-8 text-center text-secondary opacity-50">
        <p>More content coming soon...</p>
      </section>
    </div>
  );
}
