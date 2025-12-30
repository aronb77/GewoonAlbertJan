import { MessageSquare, Sun, Ruler, ThumbsUp } from "lucide-react";

interface FeatureItem {
    title: string;
    text: string;
    Icon: React.ElementType;
}

const features: FeatureItem[] = [
    {
        title: "Advies aan huis",
        text: "Bekijk stalen in uw eigen interieur en lichtinval.",
        Icon: MessageSquare, // Representing conversation/advice
    },
    {
        title: "Solar Specialist",
        text: "Duurzame rolluiken & screens. 100% draadloos.",
        Icon: Sun,
    },
    {
        title: "Gratis Inmeten",
        text: "Ik meet alles zelf in, dus 100% pasgarantie.",
        Icon: Ruler,
    },
    {
        title: "Gewoon Goed",
        text: "Geen verkoopverhalen, maar een eerlijke prijs.",
        Icon: ThumbsUp,
    },
];

export default function FeaturesBar() {
    return (
        <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="mb-4 p-4 rounded-full bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
                                <feature.Icon className="w-8 h-8 text-highlight" />
                            </div>
                            <h3 className="text-xl font-bold font-robotoslab mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
