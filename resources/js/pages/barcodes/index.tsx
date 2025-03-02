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
                                    <th>Model</th>
                                    <th>Barcode</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {barcodes.map((model: any) => (
                                    <tr key={model.id}>
                                        <td>{model.id}</td>
                                        <td>{model.year?.name}</td>
                                        <td>{model.season?.name}</td>
                                        <td>{model.gender?.name}</td>
                                        <td>{model.group?.name}</td>
                                        <td>{model.category?.name}</td>
                                        <td>{model.color?.name}</td>
                                        <td>{model.size?.name}</td>
                                        <td>
                                            <div className="flex flex-col">
                                                <div>{model.factory_model?.name}</div>
                                                <div className="text-xs uppercase opacity-50">{model.factory_model?.code}</div>
                                            </div>
                                        </td>
                                        <td>{model.code}</td>
                                        <td>
                                            <Link href={route('barcodes.edit', model)} className="btn btn-secondary btn-sm btn-circle">
                                                Edit
                                            </Link>
                                            <Link href={route('barcodes.show', model)} className="btn btn-primary btn-sm btn-circle">
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
