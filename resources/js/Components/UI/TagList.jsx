/** Small tag chips. `tags` may be an array or a comma-separated string. */
export default function TagList({ tags, max = 3 }) {
    const list = (Array.isArray(tags) ? tags : String(tags || '').split(',')).map((t) => String(t).trim()).filter(Boolean);
    if (!list.length) return null;
    return (
        <span className="mt-1.5 flex flex-wrap gap-1">
            {list.slice(0, max).map((t, i) => (
                <span key={i} className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-600">{t}</span>
            ))}
            {list.length > max && <span className="px-1 text-[11px] text-slate-500">+{list.length - max}</span>}
        </span>
    );
}
