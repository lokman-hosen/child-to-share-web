import { Link } from '@inertiajs/react';
import SafeImage from './SafeImage';

/** Thumbnail + title + meta line, used as the primary cell of wish/gift tables. */
export default function ItemCell({ href, image, title, meta, fallbackIcon }) {
    const body = (
        <>
            <SafeImage src={image} alt="" fallbackIcon={fallbackIcon} className="h-12 w-12 shrink-0 rounded-lg object-cover ring-1 ring-slate-200 [&>svg]:h-5 [&>svg]:w-5" />
            <span className="min-w-0">
                <span className="line-clamp-2 font-medium text-slate-900 group-hover:text-primary-700">{title}</span>
                {meta && <span className="mt-0.5 block text-xs font-normal text-slate-500">{meta}</span>}
            </span>
        </>
    );
    return href ? (
        <Link href={href} className="group flex min-w-0 items-center gap-3">{body}</Link>
    ) : (
        <div className="flex min-w-0 items-center gap-3">{body}</div>
    );
}
