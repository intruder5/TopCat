import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Star } from "lucide-react"

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

function Stars() {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            ))}
        </div>
    )
}

export default function Add() {
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center px-6">
            {reviews.map((review) => (
                <Card key={review.name} className="bg-black border border-neutral-800 rounded-2xl w-80 flex flex-col justify-between transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                    <CardHeader>
                        <Stars />
                    </CardHeader>
                    <CardContent>
                        <p className="font-mono text-neutral-300 text-sm leading-relaxed">"{review.quote}"</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-1 border-t bg-transparent pt-4">
                        <p className="font-mono text-white font-bold text-sm">{review.name}</p>
                        <p className="font-mono text-neutral-500 text-xs">{review.title}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}