import { useEffect, useMemo, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

/**
 * Multi-image picker with thumbnail previews. `files` is an array of File objects;
 * `onChange(files)` receives the new array (appends on each pick).
 */
export default function ImageUploader({ id = 'attachments', label, hint, required, files = [], onChange, error, accept = 'image/png, image/jpg, image/jpeg' }) {
    const input = useRef(null);
    const previews = useMemo(() => files.map((f) => (f.type?.startsWith('image/') ? URL.createObjectURL(f) : null)), [files]);
    useEffect(() => () => previews.forEach((u) => u && URL.revokeObjectURL(u)), [previews]);

    const pick = (e) => {
        const picked = Array.from(e.target.files || []);
        if (picked.length) onChange([...files, ...picked]);
        e.target.value = '';
    };
    const remove = (i) => onChange(files.filter((_, idx) => idx !== i));

    return (
        <div>
            {label && (
                <p id={`${id}-label`} className="block text-sm font-medium text-slate-800">
                    {label}
                    {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
                </p>
            )}
            <input ref={input} id={id} type="file" multiple accept={accept} onChange={pick} className="sr-only" aria-labelledby={`${id}-label`} />

            {files.length === 0 ? (
                <button
                    type="button"
                    onClick={() => input.current?.click()}
                    className={cn(
                        'mt-1.5 flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-slate-50/60 px-6 py-8 text-center transition-colors hover:border-primary-400 hover:bg-primary-50/40',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
                        error ? 'border-danger-400' : 'border-slate-300',
                    )}
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                        <FontAwesomeIcon icon={faCloudArrowUp} className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-primary-700">Choose images</span>
                    {hint && <span className="text-xs text-slate-500">{hint}</span>}
                </button>
            ) : (
                <div className="mt-1.5">
                    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                        {files.map((f, i) => (
                            <li key={`${f.name}-${i}`} className="group relative aspect-square overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
                                {previews[i] ? (
                                    <img src={previews[i]} alt={f.name} className="h-full w-full object-cover" />
                                ) : (
                                    <span className="flex h-full items-center justify-center p-2 text-center text-xs text-slate-500">{f.name}</span>
                                )}
                                <span className="absolute inset-x-0 bottom-0 truncate bg-slate-900/60 px-1.5 py-0.5 text-[10px] text-white">
                                    {(f.size / 1024 / 1024).toFixed(1)} MB
                                </span>
                                <button
                                    type="button"
                                    onClick={() => remove(i)}
                                    aria-label={`Remove ${f.name}`}
                                    className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-xs hover:bg-danger-600 hover:text-white"
                                >
                                    <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                type="button"
                                onClick={() => input.current?.click()}
                                className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-slate-300 text-sm font-medium text-primary-700 hover:border-primary-400 hover:bg-primary-50/40"
                            >
                                <FontAwesomeIcon icon={faPlus} className="h-4 w-4" aria-hidden="true" />
                                Add more
                            </button>
                        </li>
                    </ul>
                    <div className="mt-2 flex items-center justify-between gap-3">
                        {hint && <p className="text-xs text-slate-500">{hint}</p>}
                        <button type="button" onClick={() => onChange([])} className="text-xs font-medium text-slate-600 hover:text-danger-700">Remove all</button>
                    </div>
                </div>
            )}
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
}
