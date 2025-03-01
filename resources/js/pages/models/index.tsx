import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function Page() {
    return (
        <>
            <Head title="Models" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Models</h1>
                    <div className="divider"></div>
                    <Link href={route('models.create')} className="btn btn-primary">
                        Create
                    </Link>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
