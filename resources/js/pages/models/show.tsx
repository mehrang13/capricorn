import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Page() {
    const model = usePage().props.model;
    return (
        <>
            <Head title="Show model" />
            <AppLayout>
                <h1 className="text-xl uppercase">
                    {model.code} - {model.name}
                </h1>
                <div className="divider"></div>
                <div>
                    <table className="tabs-sm table-zebra table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Season</th>
                                <th>Gender</th>
                                <th>Group</th>
                                <th>Category</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Barcode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {model.barcodes.map((barcode: any) => (
                                <tr key={barcode.id}>
                                    <td>{barcode.year.name}</td>
                                    <td>{barcode.season.name}</td>
                                    <td>{barcode.gender.name}</td>
                                    <td>{barcode.group.name}</td>
                                    <td>{barcode.category.name}</td>
                                    <td>{barcode.color.name}</td>
                                    <td>{barcode.size.name}</td>
                                    <td>{barcode.code}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AppLayout>
        </>
    );
}
