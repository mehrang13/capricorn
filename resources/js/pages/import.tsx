import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

export default function Page() {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        file: '',
    });

    function submit(e) {
        e.preventDefault();
        clearErrors();
        post(route('import.store'));
    }

    return (
        <>
            <Head title="Import" />
            <AppLayout>
                <h1 className="text-2xl">Import</h1>
                <div className="divider"></div>
                <form onSubmit={submit} className="space-y-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Pick a file</legend>
                        <input type="file" className="file-input" onChange={(e) => setData('file', e.target.files[0])} />
                        {errors.file && <p className="fieldset-label text-error">{errors.file}</p>}
                    </fieldset>

                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        Import
                    </button>
                </form>
            </AppLayout>
        </>
    );
}
