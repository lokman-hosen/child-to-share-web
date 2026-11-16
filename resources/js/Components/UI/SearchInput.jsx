import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

/** Labelled search box with a clear button. */
export default function SearchInput({ id = 'search', label = 'Search', value, onChange, placeholder = 'Search…', className = '' }) {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">{label}</label>
            <div className="relative mt-1.5">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                    id={id}
                    type="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={cn('form-control !pl-9', value && '!pr-9')}
                />
                {value && (
                    <button
                        type="button"
                        onClick={() => onChange('')}
                        className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Clear search"
                    >
                        <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                )}
            </div>
        </div>
    );
}
