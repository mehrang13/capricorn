import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Page() {
    const { models } = usePage().props;

    return (
        <>
            <Head title="Models" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Models</h1>
                    <div className="divider"></div>
                    <div className="mb-4 flex items-center gap-2">
                        <Link href={route('models.create')} className="btn btn-primary">
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
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {models.map((model: any) => (
                                    <tr key={model.id}>
                                        <td>{model.id}</td>
                                        <td className='uppercase'>{model.code}</td>
                                        <td>{model.name}</td>
                                        <td>{model.description}</td>
                                        <td>
                                            <Link href={route('models.edit', model)} className="btn btn-secondary btn-sm btn-circle">
                                                Edit
                                            </Link>
                                            <Link href={route('models.show', model)} className="btn btn-primary btn-sm btn-circle">
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
