import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExpand, faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import SafeImage from './SafeImage';
import cn from './cn';

/**
 * Image/video gallery for wish & gift detail pages.
 * `files`: [{ id, file_path, file_type: 'image'|'video', mime_type, is_featured }]
 * `fileActions(file)`: optional node rendered under the main image (e.g. owner tools for the current file).
 */
export default function MediaGallery({ files = [], title = '', fileActions }) {
    const [current, setCurrent] = useState(0);
    const count = files?.length || 0;

    if (!count) {
        return (
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-card border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                <FontAwesomeIcon icon={faImage} className="h-8 w-8 text-slate-300" aria-hidden="true" />
                <p className="mt-2 text-sm">No media available</p>
            </div>
        );
    }

    const file = files[current];
    const go = (i) => setCurrent((i + count) % count);
    const src = `/storage/${file.file_path}`;

    return (
        <div>
            <div
                className="group relative overflow-hidden rounded-card bg-slate-100 ring-1 ring-slate-200"
                onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft') go(current - 1);
                    if (e.key === 'ArrowRight') go(current + 1);
                }}
                role="region"
                aria-roledescription="carousel"
                aria-label={`${title} media`}
            >
                <div className="flex aspect-[4/3] items-center justify-center">
                    {file.file_type === 'image' ? (
                        <SafeImage
                            key={file.id}
                            src={src}
                            alt={`${title} - Image ${current + 1}`}
                            className="h-full w-full object-contain"
                            fallbackClassName="h-full w-full"
                        />
                    ) : (
                        <video key={file.id} controls className="h-full w-full bg-black object-contain">
                            <source src={src} type={file.mime_type} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
                    {count > 1 ? (
                        <span className="rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-white tabular-nums" aria-live="polite">
                            {current + 1} / {count}
                        </span>
                    ) : <span />}
                    {file.is_featured === 1 && (
                        <span className="rounded-full bg-secondary-200 px-2.5 py-1 text-xs font-semibold text-secondary-900">Featured</span>
                    )}
                </div>

                {count > 1 && (
                    <>
                        <button type="button" onClick={() => go(current - 1)} aria-label="Previous image"
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-card transition hover:bg-white">
                            <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button type="button" onClick={() => go(current + 1)} aria-label="Next image"
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-card transition hover:bg-white">
                            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" aria-hidden="true" />
                        </button>
                    </>
                )}

                <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-card hover:bg-white"
                >
                    <FontAwesomeIcon icon={faExpand} className="h-3 w-3" aria-hidden="true" />
                    {file.file_type === 'image' ? 'View Full Image' : 'Download Video'}
                </a>
            </div>

            {fileActions && <div className="mt-3 flex flex-wrap items-center gap-2">{fileActions(file)}</div>}

            {count > 1 && (
                <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Choose image">
                    {files.map((f, i) => (
                        <li key={f.id} className="shrink-0">
                            <button
                                type="button"
                                onClick={() => setCurrent(i)}
                                aria-label={`Show item ${i + 1}`}
                                aria-current={i === current ? 'true' : undefined}
                                className={cn(
                                    'h-16 w-16 overflow-hidden rounded-lg ring-2 transition sm:h-20 sm:w-20',
                                    i === current ? 'ring-primary-500' : 'ring-transparent opacity-70 hover:opacity-100',
                                )}
                            >
                                {f.file_type === 'image' ? (
                                    <SafeImage src={`/storage/${f.file_path}`} alt="" className="h-full w-full object-cover" fallbackClassName="h-full w-full" />
                                ) : (
                                    <span className="flex h-full w-full items-center justify-center bg-slate-800 text-white">
                                        <FontAwesomeIcon icon={faVideo} className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
