'use client'

import Imgblock from "@/components/ui/imgblock"
import { useScrollAnimation } from "@/components/ui/anim"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
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

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-neutral-400 font-mono text-xs">
            <div className="border border-neutral-700 rounded p-0.5 shrink-0">
                <Check className="w-2.5 h-2.5 text-neutral-300" />
            </div>
            {text}
        </div>
    )
}

function SectionLabel({ text }: { text: string }) {
    return (
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">{text}</p>
    )
}

function Logo() {
    return <img className="h-20 w-auto" src="/topcat.png" alt="TopCat logo" />
}

function BookButton({ className, label = "Book Now" }: { className?: string; label?: string }) {
    return (
        <button className={`inline-flex items-center gap-2 rounded-full text-xs cursor-pointer bg-black px-5 py-2.5 font-medium font-mono text-white border border-transparent transition-all duration-200 hover:bg-neutral-900 hover:shadow-md ${className ?? ""}`}>
            {label}
            <ArrowRight className="w-3 h-3" />
        </button>
    )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

export function Navbar() {
    return (
        <header className="flex items-center w-screen justify-between px-6 sm:px-10 sticky top-0 bg-white/90 h-14 backdrop-blur-md border-b border-neutral-100 z-50">
            <Logo />
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-8">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuLink
                                href={item.href}
                                className="font-mono text-xs text-neutral-500 cursor-pointer hover:text-black transition-colors duration-150 hover:bg-transparent"
                            >
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <BookButton className="hidden md:flex" />
            <div className="md:hidden" id="mobile-menu-trigger" />
        </header>
    )
}

export function Hero() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} className="flex flex-col md:flex-row items-center min-h-[calc(100vh-56px)] px-6 sm:px-12 md:px-16 lg:px-28 py-20 md:py-0 gap-12 md:gap-16">
            {/* Copy */}
            <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-3.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <p className="font-mono text-[10px] text-neutral-500 tracking-wide">Now available in your area</p>
                </div>

                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl font-mono leading-[1.1] tracking-tight">
                    Premium pet<br />grooming,{" "}
                    <span className="underline decoration-wavy decoration-pink-400 decoration-[3px] underline-offset-[6px]">delivered.</span>
                </h1>

                <p className="font-mono text-sm text-neutral-500 leading-[1.8] max-w-sm">
                    No more stressful car rides. Our mobile grooming vans come directly to your driveway for a stress-free, one-on-one spa experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-black hover:bg-neutral-900 font-mono font-bold rounded-full text-white text-sm px-6 py-3 w-full sm:w-fit cursor-pointer transition-colors duration-200">
                        Book Appointment
                    </button>
                    <button className="border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 font-mono font-bold rounded-full text-sm px-6 py-3 w-full sm:w-fit cursor-pointer transition-colors duration-200">
                        View Services
                    </button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-2">
                        {["bg-pink-200", "bg-blue-200", "bg-yellow-200", "bg-green-200"].map((color, i) => (
                            <div key={i} className={`w-7 h-7 rounded-full border-2 border-white ${color}`} />
                        ))}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Stars />
                        <p className="font-mono text-[11px] text-neutral-500">
                            <span className="text-black font-bold">2,000+</span> happy pet owners
                        </p>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center relative w-full max-w-sm md:max-w-none">
                <div className="absolute inset-0 bg-pink-100 rounded-3xl blur-3xl opacity-40 scale-90" />
                <img
                    src="/demo.jpg"
                    alt="Pet grooming"
                    className="relative w-full max-w-sm md:max-w-md aspect-square object-cover rounded-2xl ring-1 ring-neutral-200"
                />
            </div>
        </section>
    )
}

export function Reviews() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="reviews" className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 bg-neutral-950">
            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-14">
                <SectionLabel text="Customer stories" />
                <h2 className="font-mono font-bold text-2xl sm:text-3xl text-white text-center">Trusted by pet owners everywhere</h2>
                <Stars />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-800">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="bg-neutral-950 p-7 flex flex-col gap-5 hover:bg-neutral-900 transition-colors duration-300"
                    >
                        <Stars />
                        <p className="font-mono text-neutral-400 text-xs leading-[1.9] flex-1">{review.quote}</p>
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

export function Pricing() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="pricing" className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-14">
                <SectionLabel text="Packages" />
                <h2 className="font-mono font-bold text-2xl sm:text-3xl text-center">Simple, transparent pricing</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">

                {/* Bath */}
                <div className="bg-neutral-950 rounded-2xl p-7 flex flex-col gap-6 border border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start justify-between">
                        <div className="border border-neutral-800 p-2 rounded-lg">
                            <ShowerHead className="text-neutral-400 w-4 h-4" />
                        </div>
                        <span className="font-mono text-sm text-white font-bold">$49</span>
                    </div>
                    <div>
                        <h3 className="font-mono text-white font-bold text-lg">Premium Bath</h3>
                        <p className="font-mono text-neutral-500 text-xs leading-relaxed mt-2">
                            A thorough bath and dry with premium shampoo tailored to your pet's coat type and skin needs.
                        </p>
                    </div>
                    <hr className="border-neutral-800" />
                    <div className="flex flex-col gap-3 flex-1">
                        {["Shampoo & conditioner", "Blow dry & brush out", "Spritz & finishing touches"].map((f) => (
                            <CheckItem key={f} text={f} />
                        ))}
                    </div>
                    <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-bold py-3 rounded-lg cursor-pointer transition-colors mt-2">
                        Book Now
                    </button>
                </div>

                {/* Full Grooming — featured */}
                <div className="bg-white rounded-2xl p-7 flex flex-col gap-6 border border-neutral-200 hover:-translate-y-1 transition-transform duration-300 relative shadow-xl shadow-black/10">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-black text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">Most Popular</span>
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
                            The complete spa package including a custom haircut to breed standards or your specific preferences.
                        </p>
                    </div>
                    <hr className="border-neutral-100" />
                    <div className="flex flex-col gap-3 flex-1">
                        {["Everything in Premium Bath", "Custom haircut", "Nail trim & ear clean"].map((f) => (
                            <div key={f} className="flex items-center gap-3 text-neutral-600 font-mono text-xs">
                                <div className="border border-neutral-200 rounded p-0.5 shrink-0">
                                    <Check className="w-2.5 h-2.5 text-neutral-700" />
                                </div>
                                {f}
                            </div>
                        ))}
                    </div>
                    <button className="w-full bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold py-3 rounded-lg cursor-pointer transition-colors mt-2">
                        Book Now
                    </button>
                </div>

                {/* Puppy */}
                <div className="bg-neutral-950 rounded-2xl p-7 flex flex-col gap-6 border border-neutral-800 hover:-translate-y-1 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
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
                    <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-bold py-3 rounded-lg cursor-pointer transition-colors mt-2">
                        Book Now
                    </button>
                </div>

            </div>

            <p className="font-mono text-[11px] text-neutral-400 text-center mt-8">No commitment · Cancel anytime · Same-day booking available</p>
        </section>
    )
}

export function HowItWorks() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="how-it-works" className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 bg-neutral-50">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
                <div className="flex justify-center w-full lg:w-auto shrink-0">
                    <Imgblock />
                </div>

                <div className="flex flex-col font-mono w-full">
                    <SectionLabel text="The process" />
                    <h2 className="font-bold text-2xl sm:text-3xl mt-3 mb-2 leading-tight">Simplicity at its finest.</h2>
                    <p className="text-neutral-500 text-sm leading-[1.8] max-w-sm">
                        Streamlined from start to finish — so you can focus on your happy, freshly groomed pet.
                    </p>

                    <div className="flex flex-col mt-12 divide-y divide-neutral-200">
                        {steps.map((step, i) => (
                            <div key={step.number} className="flex gap-6 py-7 first:pt-0 last:pb-0">
                                <span className="text-xs text-neutral-300 font-bold shrink-0 mt-0.5">{step.number}</span>
                                <div>
                                    <h3 className="font-bold text-base mb-1.5">{step.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Ready() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} className="px-6 sm:px-10 py-28 sm:py-36">
            <div className="max-w-xl mx-auto flex flex-col items-center gap-6 text-center">
                <SectionLabel text="Get started" />
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
                <p className="font-mono text-[11px] text-neutral-400">No commitment · Cancel anytime · Same-day booking available</p>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 px-6 sm:px-10 lg:px-16 pt-14 pb-10 font-mono">
            <div className="flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex flex-col gap-3 max-w-55">
                    <p className="font-bold text-black text-base">TopCat</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                        Premium mobile pet grooming delivered straight to your driveway.
                    </p>
                </div>

                <div className="flex flex-row flex-wrap gap-12 sm:gap-20">
                    {[
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
                    ].map((col) => (
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

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-100 mt-12 pt-6 gap-3 max-w-6xl mx-auto">
                <p className="text-[11px] text-neutral-400">© 2026 TopCat. All rights reserved.</p>
                <div className="flex gap-6">
                    {["Instagram", "Facebook", "TikTok"].map((s) => (
                        <a key={s} href="#" className="text-[11px] text-neutral-400 hover:text-black transition-colors">{s}</a>
                    ))}
                </div>
            </div>
        </footer>
    )
}