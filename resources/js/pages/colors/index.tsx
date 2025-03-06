import Pagination from '@/components/pagination';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Page() {
    const { colors, search } = usePage().props;

    const handleSearch = (e) => {
        router.get(
            route('colors.index'),
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
            <Head title="Colors" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Colors</h1>
                    <div className="divider"></div>
                    <div className="mb-4 flex items-center gap-2">
                        <Link href={route('colors.create')} className="btn btn-primary">
                            Create
                        </Link>
                        <input type="search" className="input" placeholder="Search..." defaultValue={search} onChange={handleSearch} />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <Pagination links={colors.links} />
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
                                {colors.data.map((model: any) => (
                                    <tr key={model.id}>
                                        <td>{model.id}</td>
                                        <td>{model.name}</td>
                                        <td>
                                            <Link href={route('colors.edit', model)} className="btn btn-secondary btn-sm btn-circle">
                                                Edit
                                            </Link>
                                            <Link href={route('colors.show', model)} className="btn btn-primary btn-sm btn-circle">
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
