import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-900">
            <section className="flex justify-between gap-3 text-sm font-medium w-11/12 mx-auto my-6">
                <Link href='/' className="text-xl font-semibold">Articler</Link>
                <div className="flex flex-col gap-2">
                    <Link href='/'>Home</Link>
                    <Link href='/explore'>Explore</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Socials</p>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </section>
        </footer>
    )
}