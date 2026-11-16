import cn from './cn';

/** Surface container. `interactive` adds hover elevation for clickable cards. */
export default function Card({ as: Tag = 'div', interactive = false, padded = true, className = '', children, ...props }) {
    return (
        <Tag
            className={cn(
                'rounded-card border border-slate-200/80 bg-white shadow-card',
                interactive && 'transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover',
                padded && 'p-5 sm:p-6',
                className,
            )}
            {...props}
        >
            {children}
        </Tag>
    );
}
