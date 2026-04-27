import Half from "./half"

export default function ImageBlock() {
    return (
        <div className="flex flex-row gap-3 w-full max-w-[320px] sm:max-w-[380px] mx-auto">
            <Half />
            <img className="rounded-2xl pr-5 flex-1 h-auto object-cover self-stretch" src="fou.jpg" />
        </div>
    )
}