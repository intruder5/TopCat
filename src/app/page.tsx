"use client"
import Nav from "@/components/ui/Nav"
import Hero from "@/components/ui/hero"
import Second from "@/components/ui/second"
import Third from "@/components/ui/third"
import Addin from "@/components/ui/addin"
import Wall from "@/components/ui/fourth"
import Ready from "@/components/ui/ready"
import Footer from "@/components/ui/footer"
import { useScrollAnimation } from "@/components/ui/anim"

export default function Home() {
    const featuresRef = useScrollAnimation()
    const pricingRef = useScrollAnimation()
    const howItWorksRef = useScrollAnimation()
    const reviewsRef = useScrollAnimation()
    const readyRef = useScrollAnimation()

    return (
        <main className="max-w-7xl mx-auto w-full">
            <Nav />
            <section id="hero">
                <Hero />
            </section>
            <section id="features" className="py-24" ref={featuresRef}>
                <Addin />
            </section>
            <section id="pricing" className="py-24" ref={pricingRef}>
                <Second />
            </section>
            <section id="how-it-works" className="py-24" ref={howItWorksRef}>
                <Third />
            </section>
            <section id="reviews" className="py-24" ref={reviewsRef}>
                <Wall />
            </section>
            <section id="ready" ref={readyRef}>
                <Ready />
            </section>
            <Footer />
        </main>
    )
}