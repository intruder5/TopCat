import Half from "./half"

export default function ImageBlock() {
    return (
        <div className="flex flex-row gap-3 w-full max-w-[320px] sm:max-w-[380px]">
            <Half />
            <img className="rounded-xl flex-1 h-auto object-cover self-stretch" src="fou.jpg" />
        </div>
    )
}