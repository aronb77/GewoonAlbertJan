"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductItem {
    id: number;
    title: string;
    subtitle: string;
    imageSrc: string;
    className?: string; // For Tailwind grid spans
}

const products: ProductItem[] = [
    {
        id: 1,
        title: "Gordijnen & Inbetweens",
        subtitle: "Van linnen-look tot luxe velours. Voor sfeer en akoestiek in uw woonkamer.",
        imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-2", // Tall Item (Left)
    },
    {
        id: 2,
        title: "Duette® & Plissés",
        subtitle: "Isolerend en veelzijdig. Ideaal met het 'Top-down / Bottom-up' systeem.",
        imageSrc: "https://images.unsplash.com/photo-1594040291617-10d9da993cdf?q=80&w=1200&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-1", // Wide Item (Top Right)
    },
    {
        id: 3,
        title: "Houten Jaloezieën",
        subtitle: "De warme, luxe uitstraling van shutters met de flexibiliteit van jaloezieën.",
        imageSrc: "https://images.unsplash.com/photo-1505691938895-1758d7fabf41?q=80&w=800&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1", // Box Item (Bottom Mid)
    },
    {
        id: 4,
        title: "Vouwgordijnen",
        subtitle: "Tijdloze elegantie met een warme, stoffen uitstraling.",
        imageSrc: "https://images.unsplash.com/photo-1463620695885-8a91d87c5362?q=80&w=800&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1", // Box Item (Bottom Right)
    },
];

export default function RaamdecoratieGrid() {
    return (
        <section id="collectie" className="bg-white py-20">
            <div className="container mx-auto px-4">

                {/* SEO Introduction */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-4">
                        Raambekleding die uw interieur afmaakt.
                    </h2>
                    <p className="text-secondary opacity-70 text-lg leading-relaxed">
                        Of u nu zoekt naar de isolerende werking van Duettes of de sfeer van inbetweens: wij hebben de stoffen en systemen die passen bij uw stijl.
                    </p>
                </div>

                {/* Artistic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href="#"  // Link placeholder, usually would go to detail page
                            className={`group relative overflow-hidden rounded-2xl block ${product.className}`}
                        >
                            {/* Background Image */}
                            <motion.img
                                src={product.imageSrc}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-bold font-robotoslab text-white mb-2 group-hover:text-accent transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-md">
                                        {product.subtitle}
                                    </p>
                                </div>

                                {/* Subtle Arrow Hint on Hover */}
                                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-accent">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
