import { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';

const readUrl = (keys) => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    return Object.fromEntries(keys.map((k) => [k, params.get(k) ?? '']));
};

/**
 * Listing filters kept in the URL query string (same param names the backend already reads).
 * - initial values come from the URL, then `fallback` (e.g. a `filters` prop), then ''.
 * - keys in `debounce` (text search) wait 350ms before reloading.
 */
export default function useListFilters(routeName, keys, { fallback = {}, debounce = [], routeParams } = {}) {
    const fromUrl = readUrl(keys);
    const [values, setValues] = useState(() =>
        Object.fromEntries(keys.map((k) => [k, fromUrl[k] || (fallback[k] ?? '')])),
    );
    const first = useRef(true);
    const lastChanged = useRef(null);

    useEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        const query = Object.fromEntries(Object.entries(values).filter(([, v]) => v !== '' && v !== null && v !== undefined));
        const go = () => router.get(route(routeName, routeParams), query, { preserveState: true, preserveScroll: true, replace: true });
        if (debounce.includes(lastChanged.current)) {
            const t = setTimeout(go, 350);
            return () => clearTimeout(t);
        }
        go();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const set = (key, value) => {
        lastChanged.current = key;
        setValues((v) => ({ ...v, [key]: value }));
    };
    const clear = () => {
        lastChanged.current = null;
        setValues(Object.fromEntries(keys.map((k) => [k, ''])));
    };
    const activeCount = Object.values(values).filter((v) => v !== '' && v !== null && v !== undefined).length;

    return { values, set, clear, activeCount };
}
