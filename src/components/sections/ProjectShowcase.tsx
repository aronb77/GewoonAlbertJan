"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
    id: number;
    location: string;
    title: string;
    tag: string;
    imageSrc: string;
}

const projects: Project[] = [
    {
        id: 1,
        location: "ELBURG",
        title: "Terrasoverkapping met Rits-screens",
        tag: "Buitenleven",
        imageSrc: "https://images.unsplash.com/photo-1595428774781-5d644be2576b?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        location: "ZWOLLE",
        title: "Verduisterende Solar Rolluiken",
        tag: "Solar",
        imageSrc: "https://images.unsplash.com/photo-1629814408089-7fcc2e947700?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        location: "'T HARDE",
        title: "Knikarmscherm 5 meter breed",
        tag: "Schaduw",
        imageSrc: "https://images.unsplash.com/photo-1615873968403-89e0618d910d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        location: "WEZEP",
        title: "Houten Jaloezieën & Inbetweens",
        tag: "Raambekleding",
        imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
];

export default function ProjectShowcase() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-3">
                            Recent gemonteerd in de regio.
                        </h2>
                        <p className="text-secondary opacity-70 text-lg">
                            Van rijtjeshuis in Zwolle tot woonboerderij in Oldebroek.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-accent hover:text-accent transition-all duration-300"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-accent hover:text-accent transition-all duration-300"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="min-w-[300px] md:min-w-[350px] aspect-[3/4] relative rounded-xl overflow-hidden group cursor-pointer snap-start"
                        >
                            {/* Image */}
                            <motion.img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-3 h-3 text-accent" />
                                    <span className="text-accent text-xs font-bold uppercase tracking-widest leading-none">
                                        {project.location}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold font-robotoslab text-white mb-2 leading-tight">
                                    {project.title}
                                </h3>
                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded border border-white/10">
                                    {project.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
