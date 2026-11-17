import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faLocationDot, faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

const GOOGLE_KEY = 'AIzaSyAiV7CEW81cpKDTZtZ_AR3hL1BcW4b6PzM';

/**
 * Address search (Google Places, falling back to OpenStreetMap Nominatim), restricted to Bangladesh.
 * Calls onSelect({ latitude, longitude, address }) when a suggestion is picked, onClear() when cleared.
 */
export default function LocationSearch({ id = 'location', label = 'Location', required, address, hasCoordinates, error, onSelect, onClear, hint = 'Search and pick your address from the list.' }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searching, setSearching] = useState(false);
    const [active, setActive] = useState(-1);
    const timer = useRef(null);
    const autocomplete = useRef(null);
    const places = useRef(null);

    useEffect(() => {
        const init = () => {
            autocomplete.current = new window.google.maps.places.AutocompleteService();
            places.current = new window.google.maps.places.PlacesService(document.createElement('div'));
        };
        if (window.google?.maps?.places) {
            init();
        } else if (!document.querySelector('script[data-gmaps]')) {
            const s = document.createElement('script');
            s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`;
            s.async = true;
            s.defer = true;
            s.dataset.gmaps = '1';
            s.onload = init;
            document.head.appendChild(s);
        }
        return () => clearTimeout(timer.current);
    }, []);

    const useGoogle = () => !!autocomplete.current;

    const search = (q) => {
        setQuery(q);
        clearTimeout(timer.current);
        if (q.length < (useGoogle() ? 2 : 3)) return setSuggestions([]);
        timer.current = setTimeout(async () => {
            setSearching(true);
            if (useGoogle()) {
                autocomplete.current.getPlacePredictions(
                    { input: q, componentRestrictions: { country: 'bd' }, types: ['geocode', 'establishment'] },
                    (preds, status) => {
                        const ok = status === window.google.maps.places.PlacesServiceStatus.OK && preds;
                        setSuggestions(ok ? preds.map((p) => ({ key: p.place_id, main: p.structured_formatting.main_text, sub: p.structured_formatting.secondary_text, google: p })) : []);
                        setSearching(false);
                    },
                );
                return;
            }
            try {
                const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&countrycodes=bd&limit=8&addressdetails=1`);
                const res = await r.json();
                setSuggestions(res.map((s, i) => ({
                    key: i,
                    main: s.display_name.split(',').slice(0, 2).join(','),
                    sub: s.display_name.split(',').slice(2).join(','),
                    osm: s,
                })));
            } catch {
                setSuggestions([]);
            } finally {
                setSearching(false);
            }
        }, useGoogle() ? 300 : 500);
    };

    const pick = (s) => {
        if (s.osm) {
            onSelect({ latitude: parseFloat(s.osm.lat), longitude: parseFloat(s.osm.lon), address: s.osm.display_name });
            setQuery(s.osm.display_name);
            setSuggestions([]);
            return;
        }
        setSearching(true);
        places.current.getDetails({ placeId: s.google.place_id, fields: ['geometry', 'formatted_address', 'name'] }, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                const addr = place.formatted_address || s.google.description;
                onSelect({ latitude: place.geometry.location.lat(), longitude: place.geometry.location.lng(), address: addr });
                setQuery(addr);
                setSuggestions([]);
            }
            setSearching(false);
        });
    };

    // Combobox keyboard support (WAI-ARIA APG): arrows move the active option, Enter picks, Escape closes
    const onKeyDown = (e) => {
        if (!suggestions.length) return;
        if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => (i + 1) % suggestions.length); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1)); }
        else if (e.key === 'Enter' && active >= 0) { e.preventDefault(); pick(suggestions[active]); }
        else if (e.key === 'Escape') { e.preventDefault(); setSuggestions([]); }
    };
    useEffect(() => setActive(-1), [suggestions]);
    const optionId = (i) => `${id}-opt-${i}`;

    const clear = () => {
        setQuery('');
        setSuggestions([]);
        clearTimeout(timer.current);
        onClear?.();
    };

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <div className="relative mt-1.5">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                    id={id}
                    type="text"
                    role="combobox"
                    aria-expanded={suggestions.length > 0}
                    aria-controls={`${id}-list`}
                    aria-autocomplete="list"
                    aria-activedescendant={active >= 0 ? optionId(active) : undefined}
                    autoComplete="off"
                    value={query}
                    onChange={(e) => search(e.target.value)}
                    onKeyDown={onKeyDown}
                    onBlur={() => setSuggestions([])}
                    placeholder="Search address, area or landmark…"
                    className={cn('form-control !pl-9 !pr-16', error && 'form-control-error')}
                />
                <span className="absolute right-1.5 top-1/2 flex -translate-y-1/2 items-center gap-1">
                    {searching && <FontAwesomeIcon icon={faSpinner} spin className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
                    {query && (
                        <button type="button" onClick={clear} aria-label="Clear location" className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                            <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                    )}
                </span>
                {suggestions.length > 0 && (
                    <ul id={`${id}-list`} role="listbox" className="absolute z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                        {suggestions.map((s, i) => (
                            // Options are not focusable: focus stays in the input (aria-activedescendant).
                            // mousedown is prevented so the input's blur doesn't close the list before the click lands.
                            <li
                                key={s.key}
                                id={optionId(i)}
                                role="option"
                                aria-selected={i === active}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => pick(s)}
                                onMouseEnter={() => setActive(i)}
                                className={cn('flex w-full cursor-pointer items-start gap-3 px-3 py-2.5 text-left', i === active && 'bg-primary-50')}
                            >
                                <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-500" aria-hidden="true" />
                                <span className="min-w-0">
                                    <span className="block text-sm font-medium text-slate-900">{s.main}</span>
                                    {s.sub && <span className="block truncate text-xs text-slate-500">{s.sub}</span>}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
                <span className="sr-only" aria-live="polite">
                    {suggestions.length ? `${suggestions.length} suggestion${suggestions.length === 1 ? '' : 's'}, use up and down arrows to choose` : ''}
                </span>
            </div>
            {error ? (
                <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>
            ) : (
                <p className="mt-1.5 text-xs text-slate-500">{hint}</p>
            )}
            {address && (
                <p className="mt-2 flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200">
                    <FontAwesomeIcon icon={hasCoordinates ? faCircleCheck : faLocationDot} className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', hasCoordinates ? 'text-success-600' : 'text-slate-400')} aria-hidden="true" />
                    <span><span className="font-medium">Current address:</span> {address}</span>
                </p>
            )}
        </div>
    );
}
