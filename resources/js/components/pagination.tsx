import { Link } from '@inertiajs/react';

export default function Pagination({ links }: any) {
    return (
        <div>
            <div className="btn-group">
                {links.map((link: any, index: number) => (
                    <Link
                        key={index}
                        href={link.url}
                        disabled={!link.url}
                        className={`btn btn-sm ${link.active ? 'btn-active' : ''}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
}
