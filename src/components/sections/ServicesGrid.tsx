import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
    badge?: string;
}

const services: ServiceItem[] = [
    {
        title: "Solar Rolluiken & Screens",
        description: "Specialist in rolluiken en screens op zonne-energie. Geen boorgaten voor stroomdraden, 100% draadloos en duurzaam.",
        imageSrc: "https://images.unsplash.com/photo-1615873968403-89e0618d910d?q=80&w=800&auto=format&fit=crop", // Modern exterior shading example
        link: "/buitenzonwering",
        badge: "Duurzame Keuze"
    },
    {
        title: "Sfeervolle Gordijnen",
        description: "Van inbetweens tot verduisterende overgordijnen. Perfect op maat gemaakt voor een warme uitstraling in uw interieur.",
        imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", // Curtains example (reusing hero image as fallback if needed, but clearer interior shot is better)
        link: "/raambekleding"
    },
    {
        title: "Horren op Maat",
        description: "Houd insecten en pollen buiten. Voor elk raam en elke deur de perfecte oplossing, strak gemonteerd.",
        imageSrc: "https://images.unsplash.com/photo-1505624194680-d035bd87d0e8?q=80&w=800&auto=format&fit=crop", // Window/garden view associated with screens
        link: "/horren"
    }
];

export default function ServicesGrid() {
    return (
        <section className="bg-background py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-3">
                        Waarmee kan ik u helpen?
                    </h2>
                    <p className="text-lg text-secondary opacity-70">
                        Kwaliteit en maatwerk voor binnen en buiten.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full ${service.badge ? 'ring-2 ring-highlight/50' : ''}`}
                        >
                            {/* Image Area */}
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                {service.badge && (
                                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md z-10">
                                        {service.badge}
                                    </div>
                                )}
                                {/* Standard img for now */}
                                <img
                                    src={service.imageSrc}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold font-robotoslab text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-secondary opacity-80 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center text-accent font-medium hover:text-primary transition-colors group"
                                    >
                                        Lees meer
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
