import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navItems = [
    { label: "Services", href: "#pricing" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
]

export default function Nav() {
    return (
        <div className="flex items-center w-screen justify-around px-10 sticky top-0 bg-white/80 h-15 backdrop-blur-md border-b border-neutral-200 z-50">
            <Logo />
            <NavigationMenu>
                <NavigationMenuList className="gap-10">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuLink
                                href={item.href}
                                className="font-mono text-xs text-neutral-600 cursor-pointer hover:text-black transition-colors duration-150 hover:bg-transparent">
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Book />
        </div>
    )
}

function Book() {
    return (
        <button className="rounded-full text-xs cursor-pointer bg-black px-4  py-2.5 font-medium font-mono text-white transition-all duration-200 hover:bg-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-black/30">
            Book Now
        </button>
    )
}

function Logo() {
    return (
        <img className="h-24 w-auto" src="/topcat.png" alt="TopCat logo" />
    )
}