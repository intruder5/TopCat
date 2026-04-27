'use client'

import Imgblock from "@/components/ui/imgblock"
import { useScrollAnimation } from "@/components/ui/anim"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Star, Check, Scissors, ShowerHead, Heart } from "lucide-react"

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
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
            ))}
        </div>
    )
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2.5 text-neutral-300 font-mono text-xs">
            <div className="border border-neutral-800 rounded-md p-0.5 shrink-0">
                <Check className="w-2.5 h-2.5 text-white" />
            </div>
            {text}
        </div>
    )
}

function Logo() {
    return <img className="h-14 sm:h-16 w-auto" src="/topcat.png" alt="TopCat logo" />
}

function BookButton({ className }: { className?: string }) {
    return (
        <button className={`rounded-full text-xs cursor-pointer bg-black px-4 py-2.5 font-medium font-mono text-white transition-all duration-200 hover:bg-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-black/30 ${className ?? ""}`}>
            Book Now
        </button>
    )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

export function Navbar() {
    return (
        <div className="flex items-center w-screen justify-between px-4 sm:px-10 sticky top-0 bg-white/80 h-15 backdrop-blur-md border-b border-neutral-200 z-50">
            <Logo />
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-6 lg:gap-10">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuLink
                                href={item.href}
                                className="font-mono text-xs text-neutral-600 cursor-pointer hover:text-black transition-colors duration-150 hover:bg-transparent"
                            >
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <BookButton className="hidden md:block" />
            {/* mobile trigger slot — wire your hamburger here */}
            <div className="md:hidden" id="mobile-menu-trigger" />
        </div>
    )
}

export function Hero() {
    const ref = useScrollAnimation()
    return (
        <div ref={ref} className="flex flex-col md:flex-row items-center min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-16 md:py-0 gap-8 md:gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col gap-5 items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-full px-4 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping shrink-0" />
                    <p className="font-mono text-xs text-neutral-600">Now available in your area</p>
                </div>
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl font-mono leading-tight">
                    Premium pet <br /> grooming,<br />
                    <span className="underline decoration-wavy decoration-pink-400 decoration-4 underline-offset-4">delivered.</span>
                </h1>
                <p className="font-mono text-sm sm:text-base max-w-md text-gray-500 leading-relaxed">
                    No more stressful car rides. Our state-of-the-art mobile grooming vans come directly to your driveway for a stress-free, one-on-one spa experience for your furry friend.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-black hover:bg-gray-900 hover:shadow-lg hover:shadow-black/50 hover:scale-105 transition-all duration-200 ease-in-out font-mono font-bold rounded-full text-white px-6 py-3 w-full sm:w-fit cursor-pointer">
                        Book Appointment
                    </button>
                    <button className="border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 ease-in-out font-mono font-bold rounded-full px-6 py-3 w-full sm:w-fit cursor-pointer">
                        View Services
                    </button>
                </div>
                <div className="flex items-center gap-3 pt-1">
                    <div className="flex -space-x-2">
                        {["bg-pink-300", "bg-blue-300", "bg-yellow-300", "bg-green-300"].map((color, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${color}`} />
                        ))}
                    </div>
                    <p className="font-mono text-xs text-neutral-500">
                        Loved by <span className="text-black">2,000+</span> pet owners
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center relative w-full">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 scale-75" />
                <img
                    src="/demo.jpg"
                    alt="pet grooming"
                    className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square object-cover rounded-2xl shadow-2xl ring-1 ring-neutral-200"
                />
            </div>
        </div>
    )
}

export function Reviews() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="reviews" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
            {/* section header */}
            <div className="flex flex-col items-center gap-2 mb-10">
                <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Proven love</p>
                <h2 className="font-mono font-bold text-2xl sm:text-3xl text-center">Across every client</h2>
                <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((review) => (
                    <Card
                        key={review.name}
                        className="bg-black border border-neutral-800 rounded-xl flex flex-col justify-between transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                    >
                        <CardHeader className="pb-2">
                            <Stars />
                        </CardHeader>
                        <CardContent className="py-2">
                            <p className="font-mono text-neutral-300 text-xs leading-relaxed">{review.quote}</p>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start gap-0.5 border-t border-neutral-800 bg-transparent pt-3 pb-3">
                            <p className="font-mono text-white font-bold text-xs">{review.name}</p>
                            <p className="font-mono text-neutral-500 text-xs">{review.title}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export function Pricing() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="pricing" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                <Card className="bg-black rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-2xl p-3">
                    <CardHeader className="pb-1">
                        <div className="flex items-center justify-between">
                            <div className="border border-neutral-800 p-1.5 rounded-lg">
                                <ShowerHead className="text-white w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-mono text-black bg-white px-2.5 py-0.5 rounded-md font-bold tracking-wide">$49</span>
                        </div>
                        <CardTitle className="font-mono text-white font-bold text-xl mt-3">Premium Bath</CardTitle>
                        <CardDescription className="font-mono text-neutral-400 text-xs leading-relaxed mt-1">
                            A thorough bath and dry with premium shampoo tailored to your pet's coat type and skin needs.
                        </CardDescription>
                    </CardHeader>
                    <hr className="border-neutral-800 mx-2 my-2" />
                    <CardContent className="flex flex-col gap-2.5 mt-1">
                        {["Shampoo & conditioner", "Blow dry & brush out", "Spritz & finishing touches"].map((f) => (
                            <CheckItem key={f} text={f} />
                        ))}
                    </CardContent>
                    <CardFooter className="mt-3 flex flex-col bg-black border-transparent gap-1.5">
                        <button className="w-full bg-white text-black font-mono font-bold py-2.5 text-sm rounded-md hover:bg-neutral-200 hover:cursor-pointer transition-colors">
                            Book Now
                        </button>
                        <p className="text-neutral-500 font-mono text-xs text-center">No commitment · Cancel anytime</p>
                    </CardFooter>
                </Card>

                <Card className="bg-black rounded-xl shadow-2xl border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 border-neutral-800 p-3">
                    <CardHeader className="pb-1">
                        <div className="flex items-center justify-between">
                            <div className="border border-neutral-800 p-1.5 rounded-lg">
                                <Scissors className="text-white w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-mono text-black bg-white px-2.5 py-0.5 rounded-md font-bold tracking-wide">$89</span>
                        </div>
                        <CardTitle className="font-mono text-white font-bold text-xl mt-3">Full Grooming</CardTitle>
                        <CardDescription className="font-mono text-neutral-400 text-xs leading-relaxed mt-1">
                            The complete spa package including a custom haircut to breed standards or your specific preferences.
                        </CardDescription>
                    </CardHeader>
                    <hr className="border-neutral-800 mx-2 my-2" />
                    <CardContent className="flex flex-col gap-2.5 mt-1">
                        {["Everything in Premium Bath", "Custom haircut", "Nail trim & ear clean"].map((f) => (
                            <CheckItem key={f} text={f} />
                        ))}
                    </CardContent>
                    <CardFooter className="mt-3 flex flex-col bg-black border-transparent gap-1.5">
                        <div className="relative w-full">
                            <button className="w-full bg-white text-black font-mono font-bold py-2.5 text-sm rounded-md hover:bg-neutral-200 hover:cursor-pointer transition-colors">
                                Popular Choice
                            </button>
                            <div className="absolute -top-1 -right-1 w-3 h-3">
                                <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping" />
                            </div>
                        </div>
                        <p className="text-neutral-500 font-mono text-xs text-center">No commitment · Cancel anytime</p>
                    </CardFooter>
                </Card>

                <Card className="bg-black rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 p-3 sm:col-span-2 lg:col-span-1">
                    <CardHeader className="pb-1">
                        <div className="flex items-center justify-between">
                            <div className="border border-neutral-800 p-1.5 rounded-lg">
                                <Heart className="text-white w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-mono text-black bg-white px-2.5 py-0.5 rounded-md font-bold tracking-wide">$29</span>
                        </div>
                        <CardTitle className="font-mono text-white font-bold text-xl mt-3">Puppy Intro</CardTitle>
                        <CardDescription className="font-mono text-neutral-400 text-xs leading-relaxed mt-1">
                            A gentle, positive introduction to grooming for puppies under 6 months to build confidence for future visits.
                        </CardDescription>
                    </CardHeader>
                    <hr className="border-neutral-800 mx-2 my-2" />
                    <CardContent className="flex flex-col gap-2.5 mt-1">
                        {["Gentle bath & dry", "Face & paw trim", "Lots of treats & love"].map((f) => (
                            <CheckItem key={f} text={f} />
                        ))}
                    </CardContent>
                    <CardFooter className="mt-3 flex flex-col bg-black border-transparent gap-1.5">
                        <button className="w-full bg-white text-black font-mono font-bold py-2.5 text-sm rounded-md hover:bg-neutral-200 hover:cursor-pointer transition-colors">
                            Book Now
                        </button>
                        <p className="text-neutral-500 font-mono text-xs text-center">No commitment · Cancel anytime</p>
                    </CardFooter>
                </Card>

            </div>
        </section>
    )
}

export function HowItWorks() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} id="how-it-works" className="flex flex-col lg:flex-row gap-12 lg:gap-20 px-4 sm:px-8 lg:px-24 py-16 sm:py-20 items-center justify-center">
            <div className="flex justify-center w-full lg:w-auto">
                <Imgblock />
            </div>
            <div className="flex flex-col font-mono w-full max-w-lg">
                <div className="flex flex-col gap-3 text-center lg:text-left">
                    <h2 className="font-bold text-3xl sm:text-4xl">Simplicity at its finest.</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We've streamlined the entire process so you can focus on what matters most — spending time with your happy, clean pet.
                    </p>
                </div>
                <div className="flex flex-col gap-8 mt-10">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col gap-1.5 text-center lg:text-left">
                            <span className="text-sm text-gray-400">{step.number}</span>
                            <h3 className="font-bold text-xl">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto lg:mx-0">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Ready() {
    const ref = useScrollAnimation()
    return (
        <section ref={ref} className="flex flex-col items-center py-20 sm:py-28 gap-5 px-4">
            <h3 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
                Ready to treat your pet?
            </h3>
            <p className="font-mono text-center text-gray-500 max-w-md leading-relaxed text-sm sm:text-base">
                Join thousands of happy pets and owners who have switched to stress-free mobile grooming.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <button className="bg-black hover:bg-gray-900 hover:shadow-lg hover:shadow-black/50 hover:scale-105 transition-all duration-200 ease-in-out font-mono font-bold rounded-full text-white px-6 py-3 w-full sm:w-fit cursor-pointer">
                    Book Appointment
                </button>
                <button className="border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 ease-in-out font-mono font-bold rounded-full px-6 py-3 w-full sm:w-fit cursor-pointer">
                    View Services
                </button>
            </div>
            <p className="font-mono text-xs text-gray-400 text-center">No commitment · Cancel anytime · Same-day booking available</p>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="border-t border-neutral-800 px-4 sm:px-10 lg:px-24 py-10 sm:py-14 lg:py-16 font-mono">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col gap-3 max-w-xs">
                    <p className="font-bold text-black text-lg">TopCat</p>
                    <p className="text-sm text-neutral-800 leading-relaxed">
                        Premium mobile pet grooming delivered straight to your driveway.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap gap-10 sm:gap-16">
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-black text-sm">Services</p>
                        <a href="#pricing" className="text-sm text-neutral-500 hover:text-black transition-colors">Premium Bath</a>
                        <a href="#pricing" className="text-sm text-neutral-500 hover:text-black transition-colors">Full Grooming</a>
                        <a href="#pricing" className="text-sm text-neutral-500 hover:text-black transition-colors">Puppy Intro</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-black text-sm">Company</p>
                        <a href="#how-it-works" className="text-sm text-neutral-500 hover:text-black transition-colors">How it Works</a>
                        <a href="#reviews" className="text-sm text-neutral-500 hover:text-black transition-colors">Reviews</a>
                        <a href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">Contact</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-sm text-black">Legal</p>
                        <a href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-black mt-10 sm:mt-12 pt-6 gap-4">
                <p className="text-xs text-black">© 2026 TopCat. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-xs text-neutral-500 hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="text-xs text-neutral-500 hover:text-black transition-colors">Facebook</a>
                    <a href="#" className="text-xs text-neutral-500 hover:text-black transition-colors">TikTok</a>
                </div>
            </div>
        </footer>
    )
}