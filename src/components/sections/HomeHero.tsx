import Image from "next/image";
import Link from "next/link";

interface HomeHeroProps {
    prehader?: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageSrc: string;
}

export default function HomeHero({
    prehader = "UW SPECIALIST IN REGIO OLDEBROEK & ZWOLLE",
    title,
    subtitle,
    ctaText,
    ctaLink,
    imageSrc,
}: HomeHeroProps) {
    return (
        <section className="bg-background min-h-[600px] flex items-center py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Content */}
                <div className="space-y-6 z-10">
                    <span className="text-secondary opacity-80 uppercase tracking-widest text-sm font-medium block mb-2">
                        {prehader}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight font-robotoslab">
                        {title}
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed max-w-lg font-roboto">
                        {subtitle}
                    </p>
                    <div className="pt-4">
                        <Link
                            href={ctaLink}
                            className="inline-block bg-accent hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wider transform hover:-translate-y-0.5"
                        >
                            {ctaText}
                        </Link>
                    </div>
                </div>

                {/* Right Column: Visual */}
                <div className="relative flex justify-center md:justify-end">
                    {/* Decorative Block */}
                    <div className="absolute top-[-20px] left-[-20px] w-full h-full bg-highlight rounded-xl transform -translate-x-4 -translate-y-4 md:translate-x-[-20px] md:translate-y-[-20px] z-0" style={{ width: '90%', height: '100%' }}></div>

                    {/* Main Image */}
                    <div className="relative z-10 w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
                        {/* Using standard img tag as requested to avoid domain issues for now */}
                        <img
                            src={imageSrc}
                            alt="Sfeervolle zonwering interieur"
                            className="w-full h-auto object-cover min-h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
