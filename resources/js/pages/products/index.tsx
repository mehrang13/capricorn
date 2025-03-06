import Pagination from '@/components/pagination';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Page() {
    const { products, search } = usePage().props;

    const handleSearch = (e) => {
        router.get(
            route('products.index'),
            {
                search: e.target.value,
            },
            {
                replace: true,
                preserveState: true,
            },
        );
    };

    return (
        <>
            <Head title="Products" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Products</h1>
                    <div className="divider"></div>
                    <div className="mb-4 flex items-center gap-2">
                        <Link href={route('products.create')} className="btn btn-primary">
                            Create
                        </Link>
                        <input type="search" className="input" placeholder="Search..." defaultValue={search} onChange={handleSearch} />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <Pagination links={products.links} />
                    </div>
                    <div className="mb-4 overflow-x-auto">
                        <table className="table-sm table-zebra table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.data.map((product: any) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td className="uppercase">{product.code}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>
                                            <Link href={route('products.edit', product)} className="btn btn-secondary btn-sm btn-circle">
                                                Edit
                                            </Link>
                                            <Link href={route('products.show', product)} className="btn btn-primary btn-sm btn-circle">
                                                Show
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
