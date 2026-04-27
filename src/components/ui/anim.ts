// hooks/useScrollAnimation.ts
"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        gsap.fromTo(el,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 65%",
                    toggleActions: "play none none none"
                }
            }
        )
    }, [])

    return ref
}