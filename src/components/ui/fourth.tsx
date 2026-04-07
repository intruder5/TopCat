import Add from "@/components/ui/adderfor"

export default function Wall() {
    return (
        <div className="flex flex-col items-center pt-40 outline outline-neutral-400 pb-70 mb-20  px-6 gap-6">
            <h3 className="font-mono text-black text-4xl font-bold text-center">Happy Pets, Happy People</h3>
            <p className="font-mono text-lg text-gray-900 text-center mb-5">Don't just take our word for it.</p>
            <Add />
        </div>
    )
}