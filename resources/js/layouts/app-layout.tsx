import { Link } from "@inertiajs/react"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="bg-primary flex h-16 items-center p-2">
                <Link href={route('home')} className="btn btn-ghost text-xl">Capricorn</Link>
            </div>
            <div className="container mx-auto mt-8">{children}</div>
        </div>
    );
}
