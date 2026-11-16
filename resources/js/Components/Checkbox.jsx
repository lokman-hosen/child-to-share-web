export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'h-4 w-4 rounded border-slate-300 text-primary-600 shadow-xs focus:ring-2 focus:ring-primary-500/30 ' +
                className
            }
        />
    );
}
