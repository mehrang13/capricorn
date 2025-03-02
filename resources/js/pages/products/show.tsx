import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Page() {
    const { product } = usePage().props;
    return (
        <>
            <Head title="Show product" />
            <AppLayout>
                <h1 className="text-xl uppercase">
                    {product.code} - {product.name}
                </h1>
                <p className="text-sm opacity-50">{product.description}</p>
                <div className="divider"></div>
                <div></div>
            </AppLayout>
        </>
    );
}
