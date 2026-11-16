import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

/**
 * <img> that falls back to a neutral placeholder when the src is missing or fails to load.
 * Lazy-loads by default. Pass `fallback` (any node) to render that instead of the placeholder.
 */
export default function SafeImage({ src, alt = '', className = '', fallbackIcon = faImage, fallbackClassName = '', fallback, ...props }) {
    const [failed, setFailed] = useState(false);

    if ((!src || failed) && fallback !== undefined) return <>{fallback}</>;

    if (!src || failed) {
        return (
            <div
                role={alt ? 'img' : undefined}
                aria-label={alt || undefined}
                className={cn('flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-300', className, fallbackClassName)}
            >
                <FontAwesomeIcon icon={fallbackIcon} className="h-8 w-8" aria-hidden="true" />
            </div>
        );
    }

    return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={className} {...props} />;
}
