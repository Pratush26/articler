import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full bg-zinc-900">
            <nav className="flex items-center justify-between gap-3 text-sm font-medium w-11/12 mx-auto my-4">
                <Link href='/' className="text-xl font-semibold">Articler</Link>
                <div className="space-x-2">
                    <Link href='/'>Home</Link>
                    <Link href='/explore'>Explore</Link>
                </div>
                <div className="space-x-2">
                    <Link href='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}