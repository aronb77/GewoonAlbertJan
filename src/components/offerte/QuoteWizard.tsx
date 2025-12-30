"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check, ChevronRight, ChevronLeft, Camera, UploadCloud,
    Blinds, Sun, Umbrella, Shield, Grid, Home, Ruler, Zap, BatteryCharging, Hand
} from "lucide-react";

// --- TYPES ---
type ProductType = 'rolluiken' | 'screens' | 'knikarm' | 'uitval' | 'markies' | 'gordijn' | 'overig';

interface FormData {
    product: ProductType | null;
    quantity: number;
    width: string;
    operation: 'hand' | 'elektrisch' | 'solar' | null;
    color: string;
    housing: 'bestaand' | 'nieuw' | 'dakkapel' | 'appartement' | null;
    floor: 'begane_grond' | '1e_verdieping' | 'hoger' | null;
    name: string;
    email: string;
    phone: string;
    postcode: string;
    remarks: string;
}

// --- CONFIG ---
const PRODUCTS = [
    { id: 'rolluiken', label: 'Rolluiken', icon: Shield, desc: 'Veiligheid & Isolatie' },
    { id: 'screens', label: 'Solar Screens', icon: Sun, desc: 'Zonwering & Privacy' },
    { id: 'knikarm', label: 'Knikarmscherm', icon: Umbrella, desc: 'Terraszonwering' },
    { id: 'uitval', label: 'Uitvalscherm', icon: ChevronRight, desc: 'Voor het raam' }, // Using generic icon if spec icon missing, simplistic representation
    { id: 'markies', label: 'Markiezen', icon: Blinds, desc: 'Klassieke uitstraling' },
    { id: 'gordijn', label: 'Gordijnen', icon: Grid, desc: 'Interieur & Sfeer' }, // Grid as placeholder for textile/pattern
];

const STEPS = [
    { id: 1, label: 'Product' },
    { id: 2, label: 'Details' },
    { id: 3, label: 'Situatie' },
    { id: 4, label: 'Gegevens' }
];

const QuoteWizard = () => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0); // For slide direction
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [data, setData] = useState<FormData>({
        product: null,
        quantity: 1,
        width: 'standard',
        operation: null,
        color: '',
        housing: null,
        floor: null,
        name: '',
        email: '',
        phone: '',
        postcode: '',
        remarks: ''
    });

    // --- HANDLERS ---
    const nextStep = () => {
        if (step < 4) {
            setDirection(1);
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setDirection(-1);
            setStep(step - 1);
        }
    };

    const updateData = (field: keyof FormData, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    // --- VALIDATION (Simple) ---
    const isStepValid = () => {
        switch (step) {
            case 1: return !!data.product;
            case 2: return !!data.operation; // Minimal requirement check
            case 3: return !!data.housing; // Minimal requirement check
            case 4: return data.name && data.email && data.postcode;
            default: return false;
        }
    };


    // --- RENDER HELPERS ---
    const StepContent = () => {
        switch (step) {
            // STEP 1: PRODUCT
            case 1:
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {PRODUCTS.map((prod) => {
                            const Icon = prod.icon;
                            const isSelected = data.product === prod.id;
                            return (
                                <button
                                    key={prod.id}
                                    onClick={() => updateData('product', prod.id)}
                                    className={`relative p-6 rounded-2xl border-2 transition-all text-left flex flex-col items-center text-center gap-4 group ${isSelected
                                            ? 'border-green-600 bg-green-50 shadow-md'
                                            : 'border-stone-100 bg-white hover:border-stone-300 hover:shadow-sm'
                                        }`}
                                >
                                    {isSelected && (
                                        <div className="absolute top-3 right-3 bg-green-600 text-white p-1 rounded-full">
                                            <Check className="w-3 h-3" />
                                        </div>
                                    )}
                                    <div className={`p-4 rounded-full ${isSelected ? 'bg-white text-green-700' : 'bg-stone-50 text-stone-500 group-hover:text-stone-800'} transition-colors`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className={`font-bold font-robotoslab ${isSelected ? 'text-green-900' : 'text-stone-900'}`}>{prod.label}</h4>
                                        <p className="text-xs text-stone-500 mt-1">{prod.desc}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                );

            // STEP 2: DETAILS
            case 2:
                return (
                    <div className="space-y-8 max-w-2xl mx-auto">

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">Aantal</label>
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={() => updateData('quantity', Math.max(1, data.quantity - 1))}
                                    className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 font-bold text-xl"
                                >
                                    -
                                </button>
                                <span className="text-3xl font-bold font-robotoslab text-stone-900 w-12 text-center">{data.quantity}</span>
                                <button
                                    onClick={() => updateData('quantity', data.quantity + 1)}
                                    className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-green-700 transition-colors font-bold text-xl"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Operation */}
                        <div>
                            <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">Bediening</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: 'hand', label: 'Handbediend', icon: Hand },
                                    { id: 'elektrisch', label: 'Elektrisch', icon: Zap },
                                    { id: 'solar', label: 'Solar (Draadloos)', icon: BatteryCharging }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => updateData('operation', opt.id)}
                                        className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${data.operation === opt.id
                                                ? 'border-green-600 bg-green-50 text-green-900 shadow-sm'
                                                : 'border-stone-100 hover:border-stone-300 text-stone-600'
                                            }`}
                                    >
                                        <opt.icon className={`w-5 h-5 ${data.operation === opt.id ? 'text-green-600' : 'text-stone-400'}`} />
                                        <span className="font-bold">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color */}
                        <div>
                            <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">Kleurwens (Optioneel)</label>
                            <input
                                type="text"
                                value={data.color}
                                onChange={(e) => updateData('color', e.target.value)}
                                className="w-full p-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white transition-all font-serif"
                                placeholder="Bijv. Antraciet, Wit, of 'Nog geen idee'"
                            />
                        </div>
                    </div>
                );

            // STEP 3: SITUATION
            case 3:
                return (
                    <div className="space-y-8 max-w-2xl mx-auto">

                        {/* Housing Type */}
                        <div>
                            <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">Type Woning</label>
                            <div className="flex flex-wrap gap-3">
                                {['bestaand', 'nieuw', 'dakkapel', 'appartement'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => updateData('housing', opt)}
                                        className={`px-6 py-3 rounded-full border transition-all font-bold ${data.housing === opt
                                                ? 'bg-stone-900 text-white border-stone-900'
                                                : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                                            }`}
                                    >
                                        {opt.charAt(0).toUpperCase() + opt.slice(1).replace('_', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Floor */}
                        <div>
                            <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">Verdieping</label>
                            <select
                                value={data.floor || ''}
                                onChange={(e) => updateData('floor', e.target.value)}
                                className="w-full p-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white transition-all font-serif"
                            >
                                <option value="" disabled>Maak een keuze...</option>
                                <option value="begane_grond">Begane grond</option>
                                <option value="1e_verdieping">1e verdieping</option>
                                <option value="hoger">Hoger / Anders</option>
                            </select>
                        </div>

                        {/* Photo Upload (Visual Only) */}
                        <div>
                            <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">Foto van de situatie (Optioneel)</label>
                            <div className="border-2 border-dashed border-stone-300 rounded-2xl p-8 hover:bg-stone-50 transition-colors cursor-pointer group text-center flex flex-col items-center">
                                <div className="p-4 bg-stone-100 rounded-full mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
                                    <Camera className="w-8 h-8 text-stone-400 group-hover:text-green-600" />
                                </div>
                                <p className="font-bold text-stone-700 mb-1">Klik om een foto te uploaden</p>
                                <p className="text-sm text-stone-500">Of sleep een bestand hierheen</p>
                            </div>
                        </div>

                    </div>
                );

            // STEP 4: CONTACT
            case 4:
                return (
                    <div className="space-y-6 max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Naam</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => updateData('name', e.target.value)}
                                    className="w-full p-3 rounded-lg bg-stone-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500"
                                    placeholder="Uw naam"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => updateData('email', e.target.value)}
                                    className="w-full p-3 rounded-lg bg-stone-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500"
                                    placeholder="uw@email.nl"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Postcode</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={data.postcode}
                                        onChange={(e) => updateData('postcode', e.target.value)}
                                        className="w-full p-3 rounded-lg bg-stone-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 uppercase"
                                        placeholder="1234 AB"
                                    />
                                    {data.postcode.length >= 4 && (
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                                            <Check className="w-3 h-3" /> Regio OK
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Telefoon</label>
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => updateData('phone', e.target.value)}
                                    className="w-full p-3 rounded-lg bg-stone-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500"
                                    placeholder="06..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 block">Opmerkingen (Optioneel)</label>
                            <textarea
                                rows={3}
                                value={data.remarks}
                                onChange={(e) => updateData('remarks', e.target.value)}
                                className="w-full p-3 rounded-lg bg-stone-50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 resize-none font-serif"
                                placeholder="Bijzonderheden..."
                            />
                        </div>
                    </div>
                );

            default: return null;
        }
    };


    // --- MAIN RENDER ---
    if (isSuccess) {
        return (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-2xl mx-auto border border-stone-100 py-24">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <Check className="w-12 h-12 text-green-600" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold font-robotoslab text-stone-900 mb-4">
                    Bedankt, {data.name.split(' ')[0]}!
                </h2>
                <p className="text-stone-600 text-lg font-serif mb-8 leading-relaxed">
                    Ik heb uw aanvraag voor <strong>{PRODUCTS.find(p => p.id === data.product)?.label}</strong> in goede orde ontvangen. Ik ga er direct mee aan de slag.
                </p>
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-stone-400">Binnen 24 uur antwoord.</p>
                    <a href="/" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-700 transition w-fit mx-auto">
                        Terug naar Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 max-w-4xl mx-auto min-h-[600px] flex flex-col relative">

            {/* PROGRESS BAR */}
            <div className="bg-stone-50 border-b border-stone-200 p-6 md:p-8">
                <div className="flex justify-between relative">
                    {/* Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200 -z-0 -translate-y-1/2 mx-4 md:mx-12" />

                    {STEPS.map((s) => {
                        const isActive = step === s.id;
                        const isCompleted = step > s.id;

                        return (
                            <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                                <div
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 font-bold text-sm ${isActive
                                            ? 'bg-stone-900 border-stone-900 text-white scale-110 shadow-lg'
                                            : isCompleted
                                                ? 'bg-green-500 border-green-500 text-white'
                                                : 'bg-white border-stone-300 text-stone-400'
                                        }`}
                                >
                                    {isCompleted ? <Check className="w-5 h-5" /> : s.id}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider hidden md:block ${isActive ? 'text-stone-900' : 'text-stone-400'}`}>
                                    {s.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* STEP CONTENT */}
            <div className="flex-1 p-6 md:p-12 overflow-y-auto">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -50 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                    >
                        <h3 className="text-2xl font-bold font-robotoslab text-stone-900 mb-8 text-center">
                            {step === 1 && "Waar bent u naar op zoek?"}
                            {step === 2 && "Vertel iets meer over uw wensen"}
                            {step === 3 && "Hoe is de situatie?"}
                            {step === 4 && "Waar mag de offerte naar toe?"}
                        </h3>
                        <StepContent />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* FOOTER NAV */}
            <div className="p-6 md:p-8 border-t border-stone-100 bg-white flex justify-between items-center z-10">
                <button
                    onClick={prevStep}
                    disabled={step === 1 || isSubmitting}
                    className={`flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'}`}
                >
                    <ChevronLeft className="w-5 h-5" /> Vorige
                </button>

                <button
                    onClick={nextStep}
                    disabled={!isStepValid() || isSubmitting}
                    className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl w-40 justify-center"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">...</span>
                    ) : step === 4 ? (
                        <>Versturen <UploadCloud className="w-5 h-5" /></>
                    ) : (
                        <>Volgende <ChevronRight className="w-5 h-5" /></>
                    )}
                </button>
            </div>

        </div>
    );
};

export default QuoteWizard;
