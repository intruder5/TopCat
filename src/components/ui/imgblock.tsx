import Half from "./half"

export default function ImageBlock() {
    return (
        <div className="flex flex-row gap-4">
            <Half />
            <img className="rounded-2xl h-70 object-cover" src="fou.jpg" />
        </div>
    )
}