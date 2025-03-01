import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div>Home page</div>
            <Link href="/models" className='btn'>Models</Link>
        </>
    );
}
