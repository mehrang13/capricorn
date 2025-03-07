import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <AppLayout>
                <div className='mb-4'>
                    <Link href={route('products.index')} className="btn">
                        Products
                    </Link>
                    <Link href="/years" className="btn">
                        Years
                    </Link>
                    <Link href="/colors" className="btn">
                        Colors
                    </Link>

                    <Link href="/groups" className="btn">
                        Groups
                    </Link>
                    <Link href="/categories" className="btn">
                        Categories
                    </Link>
                    <Link href="/sizes" className="btn">
                        Sizes
                    </Link>
                    <Link href="/genders" className="btn">
                        Genders
                    </Link>
                    <Link href="/seasons" className="btn">
                        Seasons
                    </Link>
                    <Link href="/barcodes" className="btn btn-primary">
                        Barcodes
                    </Link>
                </div>
                <div>
                    <Link href={route('import.create')} className="btn btn-primary">
                        Import
                    </Link>
                </div>
            </AppLayout>
        </>
    );
}
