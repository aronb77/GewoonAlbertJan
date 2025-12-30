"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductItem {
    id: number;
    title: string;
    subtitle: string;
    imageSrc: string;
    link: string;
    colSpan?: string; // Tailwind class for column span
}

const products: ProductItem[] = [
    {
        id: 1,
        title: "Solar Rolluiken",
        subtitle: "Verduisterend, isolerend & inbraakwerend. 100% Solar.",
        imageSrc: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200&auto=format&fit=crop",
        link: "/buitenzonwering/rolluiken",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Solar Screens",
        subtitle: "Filter het zonlicht, behoud uw uitzicht. Windvast & strak.",
        imageSrc: "https://images.unsplash.com/photo-1629814408089-7fcc2e947700?q=80&w=1200&auto=format&fit=crop",
        link: "/buitenzonwering/screens",
        colSpan: "md:col-span-2 md:col-start-2", // Start at col 2 on row 2 (or flow naturally depending on desired bento shape, let's try standard flow optimization first)
        // Actually, to make a nice bento:
        // Row 1: [Large 2 cols] [Small 1 col]
        // Row 2: [Small 1 col] [Large 2 cols] -> This creates asymmetry.
        // Let's adjust the order/span logic slightly for a purely defined grid if user wants exact 3-col layout.
        // User logic: "The first two items... span 2 columns".
        // "Desktop: 3-column grid."
        // Item 1 (Solar Rolluiken): span-2.
        // Item 2 (Solar Screens): span-2.
        // Item 3, 4, 5: span-1.
        // Total slots needed: 2 + 2 + 1 + 1 + 1 = 7 slots?
        // 3 column grid:
        // [ Item 1 (2) ] [ Item 3 (1) ]
        // [ Item 4 (1) ] [ Item 2 (2) ]  <-- Nice asymmetric balance
        // [ Item 5 (1) ] [ ... empty? ]
        // Wait, with 5 items and 3 cols:
        // Row 1: Item 1 (span 2), Item 3 (span 1) -> Full row.
        // Row 2: Item 2 (span 2), Item 4 (span 1) -> Full row.
        // Row 3: Item 5 (span 1) -> Floating?
        // Let's re-read: "The first two items... span 2 columns... The traditional products fill the remaining 1-column slots."
        // Let's stick to a balanced flow or let CSS Grid auto-flow dense do its magic if possible, but manual is safer for specific design.
        // I will use explicit classes for nice layout.
    },
    {
        id: 3,
        title: "Knikarmschermen",
        subtitle: "Creëer een schaduwrijk terras.",
        imageSrc: "https://images.unsplash.com/photo-1595428774781-5d644be2576b?q=80&w=800&auto=format&fit=crop",
        link: "/buitenzonwering/knikarmschermen",
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        title: "Markiezen",
        subtitle: "Klassieke, sfeervolle uitstraling.",
        imageSrc: "https://images.unsplash.com/photo-1621256428731-0eace3656127?q=80&w=800&auto=format&fit=crop",
        link: "/buitenzonwering/markiezen",
        colSpan: "md:col-span-1",
    },
    {
        id: 5,
        title: "Uitvalschermen",
        subtitle: "Effectieve zonwering voor elk raam.",
        imageSrc: "https://images.unsplash.com/photo-1509644851321-284838e63ed9?q=80&w=800&auto=format&fit=crop",
        link: "/buitenzonwering/uitvalschermen",
        colSpan: "md:col-span-1",
    },
];

// Re-ordering for the "Bento" look within a 3-column grid:
// 1. [Solar Rolluiken (2)]
// 2. [Knikarmschermen (1)]
// 3. [Markiezen (1)]
// 4. [Solar Screens (2)] --> Creates a zig-zag feature pattern
// 5. [Uitvalschermen (1)] --> This feels unbalanced (2+1, 1+2, 1...). 
// Let's try to fit them differently or just accept the last row isn't full?
// Or maybe specific responsive grid...
// Actually, with 5 items:
// Row 1: [Solar Rolluiken (2)] [Knikarmschermen (1)]
// Row 2: [Markiezen (1)] [Solar Screens (2)]
// Row 3: [Uitvalschermen (3? or centered?)]
// Let's manually assign classes in the map or data to ensure this "Pattern".

const bentoItems = [
    { ...products[0], className: "md:col-span-2 md:row-span-2" }, // Big Feature 1
    { ...products[2], className: "md:col-span-1 md:row-span-1" }, // Small 1
    { ...products[3], className: "md:col-span-1 md:row-span-1" }, // Small 2
    // Wait, if item 1 is row-span-2, col-span-2, it takes 2x2=4 slots.
    // Using just col-span-2 is safer for text readability (landscape).

    // Revised Setup:
    // Item 1 (Solar Rolluiken): md:col-span-2
    // Item 2 (Knikarm): md:col-span-1
    // Item 3 (Solar Screens): md:col-span-2
    // Item 4 (Markiezen): md:col-span-1
    // Item 5 (Uitval): md:col-span-3 (Full width footer?) OR md:col-span-1 and centered.

    // Let's stick to user request roughly:
    // "First two items (Solar) ... span 2 columns"
    // Let's map them simply and let grid-auto-flow handle or force specific grid-areas.
];


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BentoProductGrid() {
    return (
        <section id="producten" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-2">Onze Collectie</h2>
                    <p className="text-secondary opacity-70">Maatwerk oplossingen voor elke situatie.</p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Custom Rendering to achieve the specific Bento Layout */}

                    {/* 1. Solar Rolluiken (Span 2) */}
                    <BentoCard item={products[0]} className="md:col-span-2" />

                    {/* 3. Knikarmschermen (Span 1) - Swapped position to fill Row 1 */}
                    <BentoCard item={products[2]} className="md:col-span-1" />

                    {/* 4. Markiezen (Span 1) - Start of Row 2 */}
                    <BentoCard item={products[3]} className="md:col-span-1" />

                    {/* 2. Solar Screens (Span 2) - Fill Row 2 */}
                    <BentoCard item={products[1]} className="md:col-span-2" />

                    {/* 5. Uitvalschermen (Span 3 - Banner style or Span 1 Centered?) 
              Let's make it Span 3 (Full width) for a nice footer effect, or Span 1 if image doesn't support wide.
              Given standard images, let's keep it 1 and maybe empty space? 
              Actually, let's make it Span 3 to close the grid cleanly.
          */}
                    <BentoCard item={products[4]} className="md:col-span-3" />

                </motion.div>
            </div>
        </section>
    );
}

function BentoCard({ item, className }: { item: ProductItem, className?: string }) {
    return (
        <motion.div
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${className}`}
        >
            <Link href={item.link} className="block w-full h-full">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                    <motion.img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-end justify-between">
                    {/* Text Area */}
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                        <h3 className="text-2xl font-bold font-robotoslab text-white mb-1">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm font-medium">
                            {item.subtitle}
                        </p>
                    </div>

                    {/* Action Icon */}
                    <div className="bg-accent text-white p-3 rounded-full transform transition-all duration-300 group-hover:rotate-[-45deg] md:group-hover:rotate-0 md:group-hover:translate-x-1 shadow-lg">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
