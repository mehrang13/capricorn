import Pagination from '@/components/pagination';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Page() {
    const { barcodes } = usePage().props;

    return (
        <>
            <Head title="Barcodes" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Barcodes</h1>
                    <div className="divider"></div>
                    <div className="mb-4 flex items-center gap-2">
                        <Link href={route('barcodes.create')} className="btn btn-primary">
                            Create
                        </Link>
                        <input type="text" className="input" placeholder="Search..." />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <Pagination links={barcodes.links} />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-sm table-zebra table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Year</th>
                                    <th>Season</th>
                                    <th>Gender</th>
                                    <th>Group</th>
                                    <th>Category</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Product</th>
                                    <th>Barcode</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {barcodes.data.map((barcode: any) => (
                                    <tr key={barcode.id}>
                                        <td>{barcode.id}</td>
                                        <td>{barcode.year?.name}</td>
                                        <td>{barcode.season?.name}</td>
                                        <td>{barcode.gender?.name}</td>
                                        <td>{barcode.group?.name}</td>
                                        <td>{barcode.category?.name}</td>
                                        <td>{barcode.color?.name}</td>
                                        <td>{barcode.size?.name}</td>
                                        <td>
                                            <div>
                                                <div>{barcode.product?.name}</div>
                                                <Link href={route('products.show', barcode.product)} className="btn btn-link btn-xs uppercase">
                                                    {barcode.product?.code}
                                                </Link>
                                            </div>
                                        </td>
                                        <td>{barcode.code}</td>
                                        <td>
                                            <Link href={route('barcodes.edit', barcode)} className="btn btn-secondary btn-sm btn-circle">
                                                Edit
                                            </Link>
                                            <Link href={route('barcodes.show', barcode)} className="btn btn-primary btn-sm btn-circle">
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
