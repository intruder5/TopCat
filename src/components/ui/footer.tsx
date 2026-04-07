export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 px-24 py-16 font-mono">
            <div className="flex flex-col md:flex-row justify-between gap-10">

                {/* tagline */}
                <div className="flex flex-col gap-3 max-w-xs">
                    <p className="font-bold text-black text-lg">TopCat</p>
                    <p className="text-sm text-neutral-800 leading-relaxed">
                        Premium mobile pet grooming delivered straight to your driveway.
                    </p>
                </div>

                {/* links */}
                <div className="flex flex-row gap-16">
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

            {/* bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-black mt-12 pt-6 gap-4">
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