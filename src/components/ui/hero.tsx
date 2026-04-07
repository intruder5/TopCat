export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center min-h-screen px-6 md:px-100 py-16 md:py-0 gap-10">

            <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left">

                {/* badge */}
                <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-full px-4 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                    <p className="font-mono text-xs text-neutral-600">Now available in your area</p>
                </div>

                <h1 className="font-bold text-5xl md:text-8xl font-mono leading-tight">
                    Premium pet <br/> grooming,<br/> <span className="underline decoration-dashed decoration-blue-400 decoration-4 underline-offset-4">delivered.</span>
                </h1>

                <p className="font-mono text-base md:text-lg max-w-md text-gray-500 leading-relaxed">
                    No more stressful car rides. Our state-of-the-art mobile
                    grooming vans come directly to your driveway for a
                    stress-free, one-on-one spa experience for your furry friend.
                </p>

                <div className="flex flex-row gap-4">
                    <button className="bg-black hover:bg-gray-900 hover:shadow-lg hover:shadow-black/50 hover:scale-105 transition-all duration-200 ease-in-out font-mono font-bold rounded-full text-white px-6 py-3 w-fit cursor-pointer">
                        Book Appointment
                    </button>
                    <button className="border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 ease-in-out font-mono font-bold rounded-full px-6 py-3 w-fit cursor-pointer">
                        View Services
                    </button>
                </div>

                {/* social proof */}
                <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-2">
                        {["bg-pink-300", "bg-blue-300", "bg-yellow-300", "bg-green-300"].map((color, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${color}`} />
                        ))}
                    </div>
                    <p className="font-mono text-xs text-neutral-500">Loved by <span className=" text-black">2,000+</span> pet owners</p>
                </div>

            </div>

            <div className="flex-1 flex justify-center relative">
                {/* glow behind image */}
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 scale-75" />
                <img src="/demo.jpg" alt="pet grooming" className="relative w-200 h-170 object-cover rounded-2xl shadow-2xl ring-1 ring-neutral-200" />
            </div>

        </div>
    )
}