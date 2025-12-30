import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

interface Review {
    name: string;
    text: string;
}

const reviews: Review[] = [
    {
        name: "Dennis J.",
        text: "Vanaf het eerste gesprek merkten we dat we met een echte vakman te maken hadden. Hij dacht mee over kleuren en materialen. Binnen no-time hingen de gordijnen perfect. We genieten elke dag van een prachtig aangekleed huis.",
    },
    {
        name: "Ligia R.",
        text: "Albert Jan heeft bij ons horren en duette's gemonteerd. Het is mooier geworden dan wat wij hadden gedacht! Hij doet wat hij belooft, werkt netjes en ruimt alles op. Communicatie verliep goed.",
    },
    {
        name: "Jannette H.",
        text: "Wij hebben buitenscreens en overgordijnen gekocht. De prettige manier van zaken doen sprak ons erg aan. Er wordt kwaliteit geleverd, want goedkoop = duurkoop. Gewoon Albert Jan is gewoon een goede keuze.",
    },
    {
        name: "Christiaan G.",
        text: "Uitstekende ervaring! Het is een leuke kerel die zich uitstekend in de klant verplaatst, met goed advies komt en een nette prijs neerlegt. Daarnaast levert hij snel en netjes werk. Wij zijn dik tevreden!",
    },
    {
        name: "Kirsten P.",
        text: "Ik wist niet zo goed wat ik wilde, maar met zijn advies hebben we een keuze gemaakt waar we enorm blij mee zijn. Ook zorgde hij voor prachtige rails. Alles paste perfect zonder dat wij er omkijken naar hadden!",
    },
    {
        name: "Gerda v. O.",
        text: "Ontzettend blij met onze zonwering! Goed advies en vriendelijke benadering. Hij weet waar hij het over heeft, luistert naar de wensen en denkt mee. Goed ingemeten en gemonteerd. Een echte vakman!",
    },
    {
        name: "Secretaris Revas",
        text: "Gewoon Albert Jan heeft ons enorm geholpen en precies de juiste hor geleverd waar we al jaren naar op zoek waren. Hij heeft keurig gewerkt!",
    },
    {
        name: "Fam. van Dijk",
        text: "Erg prettig dat Albert Jan thuis langskomt met de stalen. Zo konden we de kleur van de rolluiken perfect afstemmen op onze gevel. De montage verliep vlekkeloos en snel.",
    },
    {
        name: "P. Bakker",
        text: "Geen gladde verkooppraatjes, maar eerlijk advies waar je wat aan hebt. De screens hangen er strak bij en houden de warmte goed buiten. Aanrader voor iedereen in de regio.",
    },
];

export default function TestimonialsGrid() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-primary mb-3">
                        Vertrouwd in de regio
                    </h2>
                    <p className="text-lg text-secondary opacity-70">
                        Al vele tevreden klanten in Oldebroek, Elburg en Zwolle.
                    </p>
                </div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-primary font-robotoslab">{review.name}</span>
                                <div className="flex space-x-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed text-sm flex-grow">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Google Link */}
                <div className="text-center">
                    <Link
                        href="https://www.google.com/search?q=gewoon+albert+jan+reviews" // Placeholder query link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors underline decoration-2 underline-offset-4"
                    >
                        Bekijk ook onze andere reviews op Google
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
