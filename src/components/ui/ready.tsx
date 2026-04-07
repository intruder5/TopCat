export default function Ready() {
    return (
        <div className="flex flex-col items-center pb-80 gap-6">
            <h3 className="font-mono font-bold text-5xl pt-30 text-center">Ready to treat your pet?</h3>
            <p className="font-mono text-center text-gray-500 max-w-md leading-relaxed">
                Join thousands of happy pets and owners who have switched to stress-free mobile grooming.
            </p>
            <div className="flex flex-row gap-4 pt-4">
                <button className="bg-black hover:bg-gray-900 hover:shadow-lg hover:shadow-black/50 hover:scale-105 transition-all duration-200 ease-in-out font-mono font-bold rounded-full text-white px-6 py-3 w-fit cursor-pointer">
                    Book Appointment
                </button>
                <button className="border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 ease-in-out font-mono font-bold rounded-full px-6 py-3 w-fit cursor-pointer">
                    View Services
                </button>
            </div>
            <p className="font-mono text-xs text-gray-400">No commitment · Cancel anytime · Same-day booking available</p>
        </div>
    )
}