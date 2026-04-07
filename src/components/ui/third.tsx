import Imgblock from "@/components/ui/imgblock"

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

export default function Third() {
    return (
        <div className="flex flex-col md:flex-row gap-96 px-24 items-center justify-center">

            {/* left side - image */}
            <div className="flex justify-center">
                <Imgblock />
            </div>

            {/* right side - steps */}
            <div className="flex flex-col font-mono max-w-lg">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-4xl md:text-3xl text-center md:text-left">Simplicity at its finest.</h2>
                    <p className=" text-gray-600 text-m leading-relaxed text-center md:text-left">
                        We've streamlined the entire process so you can focus on what matters most — spending time with your happy, clean pet.
                    </p>
                </div>

                <div className="flex flex-col gap-10 mt-16">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col gap-2 text-center md:text-left">
                            <span className="text-sm text-gray-400">{step.number}</span>
                            <h3 className="font-bold text-xl">{step.title}</h3>
                            <p className="text-sm text-gray-500 max-w-xs leading-relaxed mx-auto md:mx-0">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}