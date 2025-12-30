import Image from "next/image";
import { Check } from "lucide-react";

interface AboutPreviewProps {
    heading?: string;
    tagline?: string;
    bodyText?: string;
    imageSrc?: string;
}

export default function AboutPreview({
    heading = "Aangenaam, ik ben Albert Jan.",
    tagline = "Gewoon een goede keuze.",
    bodyText, // We'll handle the default detailed text inside the component for cleaner props usage if not provided
    imageSrc = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
}: AboutPreviewProps) {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Left Column: Image with Badge */}
                <div className="relative order-1">
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto md:mr-auto">
                        {/* Using img for now as per previous instruction to avoid domain config */}
                        <img
                            src={imageSrc}
                            alt="Albert Jan - Interieurspecialist"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Experience Badge */}
                    <div className="absolute bottom-4 right-4 md:right-auto md:left-[calc(100%-100px)] lg:left-[calc(100%-80px)] xl:left-[60%] bg-primary text-white p-4 rounded-lg shadow-lg z-20 max-w-[160px] text-center transform translate-y-4 md:translate-y-8 md:-translate-x-1/2">
                        <span className="block text-3xl font-bold font-robotoslab text-accent">20+</span>
                        <span className="text-xs uppercase tracking-wider font-medium">Jaar Ervaring</span>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="order-2 space-y-6">
                    <div className="relative">
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-accent mb-6 rounded-full"></div>

                        <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-2">
                            {heading}
                        </h2>
                        <p className="text-xl text-accent font-medium italic font-serif opacity-90">
                            {tagline}
                        </p>
                    </div>

                    <div className="text-secondary leading-relaxed space-y-4 font-roboto text-lg opacity-80">
                        <p>
                            Met meer dan 20 jaar ervaring als interieurspecialist bied ik geen snelle verkoopverhalen, maar eerlijk en persoonlijk advies. Ik kom graag bij u thuis om de situatie te bekijken, in te meten en mee te denken over de beste oplossing voor uw woning.
                        </p>
                        <p>
                            Of het nu gaat om zonwering of gordijnen: ik regel het van A tot Z zelf. Wel zo makkelijk.
                        </p>
                    </div>

                    <div className="pt-4 flex items-center font-bold text-primary">
                        <div className="bg-highlight/20 p-2 rounded-full mr-3">
                            <Check className="text-accent w-5 h-5" />
                        </div>
                        <span>Gratis inmeten & Vakkundige montage</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
