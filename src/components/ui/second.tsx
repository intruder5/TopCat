import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Check, Scissors, ShowerHead, Heart } from 'lucide-react';

export default function Second() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-30 mb-100 px-6 md:px-0">

            <Card className="w-130 bg-black rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-2xl p-4">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="border border-neutral-800 p-2 rounded-lg">
                            <ShowerHead className="text-white w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-black bg-white px-3 py-1 rounded-md font-bold tracking-wide">$49</span>
                    </div>
                    <CardTitle className="font-mono text-white font-bold text-2xl mt-4">Premium Bath</CardTitle>
                    <CardDescription className="font-mono text-neutral-400 text-sm leading-relaxed mt-1">
                        A thorough bath and dry with premium shampoo tailored to your pet's coat type and skin needs.
                    </CardDescription>
                </CardHeader>

                <hr className="border-neutral-200 mx-2 my-2" />

                <CardContent className="flex flex-col gap-3 mt-2">
                    {[
                        "Shampoo & conditioner",
                        "Blow dry & brush out",
                        "Spritz & finishing touches",
                    ].map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-neutral-300 font-mono text-sm">
                            <div className="border border-neutral-800 rounded-md p-1">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            {feature}
                        </div>
                    ))}
                </CardContent>

                <CardFooter className="mt-4 flex flex-col bg-black border-transparent gap-2">
                    <button className="w-full bg-white text-black font-mono font-bold py-3 rounded-md hover:bg-neutral-200 hover:cursor-pointer transition-colors">
                        Book Now
                    </button>
                    <p className="text-neutral-300 font-mono text-xs text-center">No commitment · Cancel anytime</p>
                </CardFooter>
            </Card>

            <Card className="w-130 bg-black rounded-2xl shadow-2xl border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border-neutral-800 p-4">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="border border-neutral-800 p-2 rounded-lg">
                            <Scissors className="text-white w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-black bg-white px-3 py-1 rounded-md font-bold tracking-wide">$89</span>
                    </div>
                    <CardTitle className="font-mono text-white font-bold text-2xl mt-4">Full Grooming</CardTitle>
                    <CardDescription className="font-mono text-neutral-400 text-sm leading-relaxed mt-1">
                        The complete spa package including a custom haircut to breed standards or your specific preferences.
                    </CardDescription>
                </CardHeader>

                <hr className="border-neutral-300 mx-2 my-2" />

                <CardContent className="flex flex-col gap-3 mt-2">
                    {[
                        "Everything in Premium Bath",
                        "Custom haircut",
                        "Nail trim & ear clean",
                    ].map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-neutral-300 font-mono text-sm">
                            <div className="border border-neutral-800 rounded-md p-1">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            {feature}
                        </div>
                    ))}
                </CardContent>

                <CardFooter className="mt-4 flex flex-col bg-black border-transparent gap-2">
                    <button className="w-full bg-white text-black font-mono font-bold py-3 rounded-md hover:bg-neutral-200 hover:cursor-pointer transition-colors">
                        Popular Choice
                    </button>
                    <p className="text-neutral-300 font-mono text-xs text-center">No commitment · Cancel anytime</p>
                </CardFooter>
            </Card>

            <Card className="w-130 bg-black rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-4">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="border border-neutral-800 p-2 rounded-lg">
                            <Heart className="text-white w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-black bg-white px-3 py-1 rounded-md font-bold tracking-wide">$29</span>
                    </div>
                    <CardTitle className="font-mono text-white font-bold text-2xl mt-4">Puppy Intro</CardTitle>
                    <CardDescription className="font-mono text-neutral-400 text-sm leading-relaxed mt-1">
                        A gentle, positive introduction to grooming for puppies under 6 months to build confidence for future visits.
                    </CardDescription>
                </CardHeader>

                <hr className="border-neutral-300 mx-2 my-2" />

                <CardContent className="flex flex-col gap-3 mt-2">
                    {[
                        "Gentle bath & dry",
                        "Face & paw trim",
                        " Lots of treats & love",
                    ].map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-neutral-300 font-mono text-sm">
                            <div className="border border-neutral-800 rounded-md p-1">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            {feature}
                        </div>
                    ))}
                </CardContent>

                <CardFooter className="-mt-1 flex flex-col bg-black border-transparent gap-2">
                    <button className="w-full bg-white text-black font-mono font-bold py-3 rounded-md hover:bg-neutral-200 hover:cursor-pointer transition-colors">
                        Book Now
                    </button>
                    <p className="text-neutral-300 font-mono text-xs text-center">No commitment · Cancel anytime</p>
                </CardFooter>
            </Card>

        </div>
    )
}