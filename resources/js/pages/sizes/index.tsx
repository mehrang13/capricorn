import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Page() {
    const { sizes } = usePage().props;

    return (
        <>
            <Head title="Sizes" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Sizes</h1>
                    <div className="divider"></div>
                    <div className="mb-4 flex items-center gap-2">
                        <Link href={route('sizes.create')} className="btn btn-primary">
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
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes.map((model: any) => (
                                    <tr key={model.id}>
                                        <td>{model.id}</td>
                                        <td>{model.name}</td>
                                        <td>
                                            <Link href={route('sizes.edit', model)} className="btn btn-secondary btn-sm btn-circle">
                                                Edit
                                            </Link>
                                            <Link href={route('sizes.show', model)} className="btn btn-primary btn-sm btn-circle">
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
