'use client'

import Imgblock from "@/components/ui/imgblock"
import { useScrollAnimation } from "@/components/ui/anim"
import { Star, Check, Scissors, ShowerHead, Heart, ArrowRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const navItems = [
    { label: "Services", href: "#pricing" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
]

const reviews = [
    {
        quote: "The convenience is unbeatable. My anxious rescue dog used to shake the entire car ride to the salon. Now, she happily walks out to the van in our driveway. The groomer was incredibly patient.",
        name: "Sarah Jenkins",
        title: "Dog Mom to Bella",
    },
    {
        quote: "I was skeptical at first but this is now the only way we groom our cats. No carriers, no stress, no chaos. They came out looking absolutely perfect and were so calm afterward.",
        name: "Marcus T.",
        title: "Cat Dad to Milo & Luna",
    },
    {
        quote: "Booked last minute and they fit us in the next day. The van was spotless and the groomer clearly loved what she was doing. Highly recommend to any pet owner who wants the best.",
        name: "Priya Nair",
        title: "Dog Mom to Cooper",
    },
    {
        quote: "Worth every penny. My golden retriever has never looked better and the groomer even sent me photos during the session. Such a personal touch you never get at a regular salon.",
        name: "James O.",
        title: "Dog Dad to Archie",
    },
    {
        quote: "I have three dogs and getting them all to a salon was a nightmare. This service changed everything. They handled all three back to back right in my driveway. Absolute lifesaver.",
        name: "Tanya Brooks",
        title: "Dog Mom to Rex, Daisy & Boo",
    },
    {
        quote: "My senior dog has joint pain and car rides were becoming impossible. Having the groomer come to us has been such a relief. She's calm, comfortable and always looks amazing.",
        name: "Linda Marsh",
        title: "Dog Mom to Rosie",
    },
]

const steps = [
    {
        number: "01",
        title: "Book Online",
        description: "Pick a package and a time. No phone calls needed.",
    },
    {
        number: "02",
        title: "We Come to You",
        description: "Our fully equipped, climate-controlled salon arrives at your home. No cages, no waiting, no car anxiety.",
    },
    {
        number: "03",
        title: "Pampering Time",
        description: "Your pet gets undivided, one-on-one attention from our certified groomers right in your driveway.",
    },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars() {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
    )
}

function CheckItem({ text, dark = true }: { text: string; dark?: boolean }) {
    return (
        <div className={`flex items-center gap-3 font-mono text-xs ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
            <div className={`border rounded p-0.5 shrink-0 ${dark ? "border-neutral-700" : "border-neutral-200"}`}>
                <Check className={`w-2.5 h-2.5 ${dark ? "text-neutral-300" : "text-neutral-700"}`} />
            </div>
            {text}
        </div>
    )
}

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
    return (
        <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-neutral-500" : "text-neutral-400"}`}>
            {text}
        </p>
    )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
    return (
        <header className="flex items-center w-full justify-between px-5 sm:px-10 sticky top-0 bg-white/90 h-14 backdrop-blur-md border-b border-neutral-300 z-50">
            <img className="h-20 w-auto" src="/topcat.png" alt="TopCat logo" />

            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="font-mono text-xs text-neutral-500 hover:text-black transition-colors duration-150"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            <a
                href="#pricing"
                className="hidden md:inline-flex items-center gap-2 rounded-full text-xs cursor-pointer bg-black px-5 py-2.5 font-medium font-mono text-white transition-colors duration-200 hover:bg-neutral-900"
            >
                Book Now <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile: wire your SheetTrigger here */}
            <div className="md:hidden" id="mobile-menu-trigger" />
        </header>
    )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} className="relative overflow-hidden border-b border-neutral-100">

            {/* Subtle dot-grid background */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Top headline band */}
            <div className="relative z-10 flex flex-col items-center text-center px-5 pt-16 pb-10 sm:pt-20 sm:pb-12 gap-5 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-3.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 animate-ping" />
                    <p className="font-mono text-[10px] text-neutral-500 tracking-wide">Now available in your area</p>
                </div>

                <h1 className="font-bold font-mono leading-[1.08] tracking-tight text-[2.8rem] sm:text-6xl lg:text-7xl">
                    Premium pet grooming,{" "}
                    <span className="underline  decoration-[3px] underline-offset-[8px]">
                        delivered.
                    </span>
                </h1>

                <p className="font-mono text-sm text-neutral-500 leading-[1.8] max-w-md">
                    No more stressful car rides. Our mobile grooming vans come directly to your driveway for a stress-free, one-on-one spa experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
                    <button className="bg-black hover:bg-neutral-900 font-mono font-bold rounded-full text-white text-sm px-7 py-3 cursor-pointer transition-colors duration-200 w-full sm:w-fit">
                        Book Appointment
                    </button>
                    <button className="border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 font-mono font-bold rounded-full text-sm px-7 py-3 cursor-pointer transition-colors duration-200 w-full sm:w-fit">
                        View Services
                    </button>
                </div>
            </div>

            {/* Image with floating chips */}
            <div className="relative z-10 px-5 sm:px-10 lg:px-16 pb-16 sm:pb-20">
                <div className="relative max-w-3xl mx-auto">

                    {/* Main image */}
                    <img
                        src="/demo.jpg"
                        alt="Pet grooming"
                        className="w-full h-[340px] sm:h-[460px] lg:h-[520px] object-cover rounded-2xl ring-1 ring-neutral-200"
                    />

                    {/* Chip — top left */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-xl px-3 py-2 shadow-sm">
                        <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Happy clients</p>
                        <p className="font-mono text-base font-bold text-black leading-tight">2,000+</p>
                    </div>

                    {/* Chip — top right */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-xl px-3 py-2 shadow-sm">
                        <div className="flex items-center gap-1 mb-0.5">
                            <Stars />
                        </div>
                        <p className="font-mono text-[10px] text-neutral-500">4.5 avg rating</p>
                    </div>

                    {/* Chip — bottom left */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                        <p className="font-mono text-[10px] text-white">Same-day booking available</p>
                    </div>

                    {/* Chip — bottom right */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-xl px-3 py-2 shadow-sm">
                        <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Experience</p>
                        <p className="font-mono text-base font-bold text-black leading-tight">10+ yrs</p>
                    </div>

                </div>
            </div>

        </section>
    )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

export function HowItWorks() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="how-it-works" className="px-5 sm:px-10 lg:px-16 py-20 sm:py-28 bg-neutral-50">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center max-w-5xl mx-auto">

                {/* Imgblock — constrained so fixed heights don't overflow */}
                <div className="flex justify-center items-center w-full lg:w-auto lg:shrink-0 mx-auto">
                    <Imgblock />
                </div>

                <div className="flex flex-col font-mono w-full text-center lg:text-left items-center lg:items-start">
                    <SectionLabel text="The process" light />
                    <h2 className="font-bold text-2xl sm:text-3xl mt-3 mb-2 leading-tight">Simplicity at its finest.</h2>
                    <p className="text-neutral-500 text-sm leading-[1.8] max-w-sm">
                        Streamlined from start to finish — so you can focus on your happy, freshly groomed pet.
                    </p>

                    <div className="flex flex-col mt-10 divide-y divide-neutral-200 w-full max-w-sm lg:max-w-none">
                        {steps.map((step) => (
                            <div key={step.number} className="flex gap-5 py-6 first:pt-0 last:pb-0 text-left">
                                <span className="text-xs text-neutral-300 font-bold shrink-0 mt-0.5 w-6">{step.number}</span>
                                <div>
                                    <h3 className="font-bold text-sm mb-1.5">{step.title}</h3>
                                    <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export function Pricing() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="pricing" className="px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
            <div className="flex flex-col items-center gap-3 mb-12">
                <SectionLabel text="Packages" light />
                <h2 className="font-mono font-bold text-2xl sm:text-3xl text-center">Simple, transparent pricing</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">

                {/* Bath */}
                <div className="bg-neutral-950 rounded-2xl p-6 flex flex-col gap-5 border border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start justify-between">
                        <div className="border border-neutral-800 p-2 rounded-lg">
                            <ShowerHead className="text-neutral-400 w-4 h-4" />
                        </div>
                        <span className="font-mono text-sm text-white font-bold">$49</span>
                    </div>
                    <div>
                        <h3 className="font-mono text-white font-bold text-lg">Premium Bath</h3>
                        <p className="font-mono text-neutral-500 text-xs leading-relaxed mt-2">
                            A thorough bath and dry with premium shampoo tailored to your pet's coat and skin needs.
                        </p>
                    </div>
                    <hr className="border-neutral-800" />
                    <div className="flex flex-col gap-3 flex-1">
                        {["Shampoo & conditioner", "Blow dry & brush out", "Spritz & finishing touches"].map((f) => (
                            <CheckItem key={f} text={f} />
                        ))}
                    </div>
                    <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-bold py-3 rounded-lg cursor-pointer transition-colors">
                        Book Now
                    </button>
                </div>

                {/* Full Grooming — featured */}
                <div className="bg-white rounded-2xl p-6 flex flex-col gap-5 border border-neutral-200 hover:-translate-y-1 transition-transform duration-300 relative shadow-xl shadow-black/10">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-black text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">
                            Most Popular
                        </span>
                    </div>
                    <div className="flex items-start justify-between">
                        <div className="border border-neutral-200 p-2 rounded-lg">
                            <Scissors className="text-neutral-700 w-4 h-4" />
                        </div>
                        <span className="font-mono text-sm text-black font-bold">$89</span>
                    </div>
                    <div>
                        <h3 className="font-mono text-black font-bold text-lg">Full Grooming</h3>
                        <p className="font-mono text-neutral-500 text-xs leading-relaxed mt-2">
                            The complete spa package including a custom haircut to breed standards or your preferences.
                        </p>
                    </div>
                    <hr className="border-neutral-100" />
                    <div className="flex flex-col gap-3 flex-1">
                        {["Everything in Premium Bath", "Custom haircut", "Nail trim & ear clean"].map((f) => (
                            <CheckItem key={f} text={f} dark={false} />
                        ))}
                    </div>
                    <button className="w-full bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold py-3 rounded-lg cursor-pointer transition-colors">
                        Book Now
                    </button>
                </div>

                {/* Puppy */}
                <div className="bg-neutral-950 rounded-2xl p-6 flex flex-col gap-5 border border-neutral-800 hover:-translate-y-1 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-start justify-between">
                        <div className="border border-neutral-800 p-2 rounded-lg">
                            <Heart className="text-neutral-400 w-4 h-4" />
                        </div>
                        <span className="font-mono text-sm text-white font-bold">$29</span>
                    </div>
                    <div>
                        <h3 className="font-mono text-white font-bold text-lg">Puppy Intro</h3>
                        <p className="font-mono text-neutral-500 text-xs leading-relaxed mt-2">
                            A gentle, positive introduction to grooming for puppies under 6 months to build confidence.
                        </p>
                    </div>
                    <hr className="border-neutral-800" />
                    <div className="flex flex-col gap-3 flex-1">
                        {["Gentle bath & dry", "Face & paw trim", "Lots of treats & love"].map((f) => (
                            <CheckItem key={f} text={f} />
                        ))}
                    </div>
                    <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-bold py-3 rounded-lg cursor-pointer transition-colors">
                        Book Now
                    </button>
                </div>

            </div>

            <p className="font-mono text-[11px] text-neutral-400 text-center mt-8">
                No commitment · Cancel anytime · Same-day booking available
            </p>
        </section>
    )
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

export function Reviews() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="reviews" className="px-5 sm:px-10 lg:px-16 py-20 sm:py-28 bg-neutral-950">
            <div className="flex flex-col items-center gap-3 mb-12">
                <SectionLabel text="Customer stories" />
                <h2 className="font-mono font-bold text-2xl sm:text-3xl text-white text-center">
                    Trusted by pet owners everywhere
                </h2>
                <Stars />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-800">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="bg-neutral-950 p-6 sm:p-7 flex flex-col gap-4 hover:bg-neutral-900 transition-colors duration-300"
                    >
                        <Stars />
                        <p className="font-mono text-neutral-400 text-xs leading-[1.9] flex-1">"{review.quote}"</p>
                        <div className="pt-4 border-t border-neutral-800">
                            <p className="font-mono text-white font-bold text-xs">{review.name}</p>
                            <p className="font-mono text-neutral-600 text-[11px] mt-0.5">{review.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// ─── Ready (CTA) ──────────────────────────────────────────────────────────────

export function Ready() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} className="px-5 sm:px-10 py-24 sm:py-32">
            <div className="max-w-lg mx-auto flex flex-col items-center gap-5 text-center">
                <SectionLabel text="Get started" light />
                <h3 className="font-mono font-bold text-3xl sm:text-4xl leading-tight">
                    Ready to treat your pet?
                </h3>
                <p className="font-mono text-neutral-500 text-sm leading-[1.8]">
                    Join thousands of happy pets and owners who have switched to stress-free mobile grooming.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
                    <button className="bg-black hover:bg-neutral-900 font-mono font-bold rounded-full text-white text-sm px-7 py-3 w-full sm:w-fit cursor-pointer transition-colors duration-200">
                        Book Appointment
                    </button>
                    <button className="border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 font-mono font-bold rounded-full text-sm px-7 py-3 w-full sm:w-fit cursor-pointer transition-colors duration-200">
                        View Services
                    </button>
                </div>
                <p className="font-mono text-[11px] text-neutral-400">
                    No commitment · Cancel anytime · Same-day booking available
                </p>
            </div>
        </section>
    )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
    const footerCols = [
        {
            heading: "Services",
            links: [
                { label: "Premium Bath", href: "#pricing" },
                { label: "Full Grooming", href: "#pricing" },
                { label: "Puppy Intro", href: "#pricing" },
            ],
        },
        {
            heading: "Company",
            links: [
                { label: "How it Works", href: "#how-it-works" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#" },
            ],
        },
        {
            heading: "Legal",
            links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
            ],
        },
    ]

    return (
        <footer className="border-t border-neutral-400 px-5 sm:px-10 lg:px-16 pt-12 pb-6 font-mono">
            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col gap-3 shrink-0 max-w-[200px]">
                    <p className="font-bold text-black text-base">TopCat</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                        Premium mobile pet grooming delivered straight to your driveway.
                    </p>
                </div>

                {/* Always 3 cols — shrinks naturally on mobile */}
                <div className="grid grid-cols-3 gap-6 sm:gap-12">
                    {footerCols.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-3">
                            <p className="font-bold text-black text-xs">{col.heading}</p>
                            {col.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-xs text-neutral-500 hover:text-black transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-neutral-400 mt-8 pt-5 gap-3 max-w-6xl mx-auto">
                <p className="text-[11px] text-neutral-400">© 2026 TopCat. All rights reserved.</p>
                <div className="flex gap-6">
                    {["Instagram", "Facebook", "TikTok"].map((s) => (
                        <a key={s} href="#" className="text-[11px] text-neutral-400 hover:text-black transition-colors">
                            {s}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}