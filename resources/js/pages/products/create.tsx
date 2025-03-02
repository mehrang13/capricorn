import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

export default function Page() {
    const { data, setData, post, processing, errors } = useForm({
        code: '',
        name: '',
        description: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('products.store'));
    }

    return (
        <>
            <Head title="Create product" />
            <AppLayout>
                <div>
                    <h1 className="text-2xl">Create product</h1>
                    <div className="divider"></div>
                    <form onSubmit={submit} className="space-y-2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Code</legend>
                            <input
                                type="text"
                                id="code"
                                name="code"
                                className="input"
                                value={data.code}
                                onChange={(e) => setData('code', e.target.value)}
                            />
                            {errors.code && <p className="fieldset-label text-error">{errors.code}</p>}
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            {errors.name && <p className="fieldset-label text-error">{errors.name}</p>}
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                className="input"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            {errors.description && <p className="fieldset-label text-error">{errors.description}</p>}
                        </fieldset>

                        <button type="submit" className="btn btn-primary" disabled={processing}>
                            Create
                        </button>
                    </form>
                </div>
            </AppLayout>
        </>
    );
}
