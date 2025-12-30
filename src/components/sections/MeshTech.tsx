"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, PawPrint, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface MeshType {
    title: string;
    subtitle: string;
    badge: string;
    text: string;
    icon: any;
    color: string;
    bgColor: string;
    borderColor: string;
    imageSrc: string;
}

const meshes: MeshType[] = [
    {
        title: "Stop Hooikoorts & Pollen",
        subtitle: "Poll-tex® Gaas",
        badge: "ECARF Gecertificeerd",
        text: "Gecertificeerd Poll-tex® gaas filtert 99% van de graspollen uit de lucht. Slaap weer met het raam open zonder niezen of jeukende ogen.",
        icon: ShieldCheck,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        imageSrc: "https://images.unsplash.com/photo-1621961048732-b6722ca388d1?q=80&w=400&auto=format&fit=crop", // Abstract Green/Mesh texture
    },
    {
        title: "Vrijwel Onzichtbaar",
        subtitle: "ClearView™ Gaas",
        badge: "20% Meer Ventilatie",
        text: "Geniet van uw uitzicht. Dit gaas is dunner geweven voor een hogere doorkijk en meer luchtstroom, terwijl insecten geen schijn van kans maken.",
        icon: Eye,
        color: "text-sky-600",
        bgColor: "bg-sky-50",
        borderColor: "border-sky-200",
        imageSrc: "https://images.unsplash.com/photo-1595246140561-12502f9261cb?q=80&w=400&auto=format&fit=crop", // Airy/Sky texture
    },
    {
        title: "Extra Sterk (Petscreen)",
        subtitle: "Heavy Duty Gaas",
        badge: "7x Sterker",
        text: "Heeft u katten of honden? Dit gaas is tot 7x sterker dan standaard gaas. Bestand tegen nagels en enthousiaste huisdieren.",
        icon: PawPrint,
        color: "text-orange-700",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        imageSrc: "https://images.unsplash.com/photo-1548235838-58383fbdb32d?q=80&w=400&auto=format&fit=crop", // Texture implying durability
    },
];

export default function MeshTech() {
    return (
        <section className="bg-[#F9FAFB] py-20 border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-robotoslab text-primary mb-4">
                        Meer dan alleen insecten weren.
                    </h2>
                    <p className="text-secondary opacity-70 text-lg">
                        Kies het gaas dat past bij uw leven. Van hooikoorts tot huisdieren.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {meshes.map((mesh, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative bg-white rounded-2xl p-8 border hover:shadow-xl transition-shadow group overflow-hidden ${mesh.borderColor}`}
                        >
                            {/* Top Icons */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl ${mesh.bgColor} ${mesh.color}`}>
                                    <mesh.icon className="w-8 h-8" />
                                </div>

                                {/* Magnifying Glass Visual */}
                                <div className="relative w-16 h-16 rounded-full border-4 border-gray-100 overflow-hidden shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <img
                                        src={mesh.imageSrc}
                                        alt="Texture Close-up"
                                        className="w-full h-full object-cover scale-150 group-hover:scale-[2.5] transition-transform duration-700"
                                    />
                                    {/* Glossy Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold font-robotoslab text-primary mb-1">
                                {mesh.title}
                            </h3>
                            <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${mesh.color}`}>
                                {mesh.subtitle}
                            </p>

                            <p className="text-secondary opacity-70 mb-6 leading-relaxed text-sm min-h-[80px]">
                                {mesh.text}
                            </p>

                            {/* Badge */}
                            <div className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full ${mesh.bgColor} ${mesh.color}`}>
                                <CheckCircle2 className="w-3 h-3 mr-2" />
                                {mesh.badge}
                            </div>

                            {/* Pollen Certified Tooltip (Specific for first card) */}
                            {index === 0 && (
                                <div className="absolute top-4 right-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[10px] font-bold text-primary shadow px-2 py-1 rounded border border-gray-100">
                                    ECARF Certified
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors text-lg"
                    >
                        Welk gaas past bij mij? Vraag advies
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
