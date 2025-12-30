import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#15202B] text-gray-400 font-sans border-t-4 border-accent">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-white font-robotoslab font-bold text-2xl tracking-wide leading-none">
                                GEWOON ALBERT JAN
                            </span>
                            <span className="text-accent text-xs font-bold tracking-widest uppercase leading-none mt-1">
                                Zonwering & Interieur
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-80">
                            Uw specialist in raambekleding en insectenwering in regio Oldebroek, Elburg en Zwolle. Wij staan voor vakmanschap en persoonlijk advies.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Navigatie */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Snel naar</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacyverklaring</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Producten */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Onze Producten</h4>
                        <ul className="space-y-3">
                            <li><Link href="/buitenzonwering" className="hover:text-white transition-colors">Solar Rolluiken</Link></li>
                            <li><Link href="/buitenzonwering" className="hover:text-white transition-colors">Solar Screens</Link></li>
                            <li><Link href="/buitenzonwering" className="hover:text-white transition-colors">Knikarmschermen</Link></li>
                            <li><Link href="/raambekleding" className="hover:text-white transition-colors">Gordijnen & Inbetweens</Link></li>
                            <li><Link href="/horren" className="hover:text-white transition-colors">Horren op maat</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contactgegevens</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                                <span>Zuiderzeestraatweg 323,<br />8096 BM Oldebroek</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <a href="tel:0620351766" className="hover:text-white transition-colors">06 - 20 35 17 66</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <a href="mailto:info@gewoonalbertjan.nl" className="hover:text-white transition-colors">info@gewoonalbertjan.nl</a>
                            </li>
                            <li className="flex items-start pt-2 border-t border-white/10 mt-2">
                                <Clock className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p><span className="text-white w-12 inline-block">Ma-Vr:</span> 09:00 - 19:00</p>
                                    <p><span className="text-white w-12 inline-block">Za:</span> 09:00 - 14:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-[#0f171f]">
                <div className="container mx-auto px-4 py-6 text-center text-sm opacity-60">
                    <p>&copy; {new Date().getFullYear()} Gewoon Albert Jan. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
}
