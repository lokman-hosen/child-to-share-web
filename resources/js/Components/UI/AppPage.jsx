import cn from './cn';

const widths = { default: 'max-w-7xl', form: 'max-w-4xl', narrow: 'max-w-3xl' };

/** Standard padded content area for app pages. `width`: default | form | narrow. */
export default function AppPage({ width = 'default', children, className = '' }) {
    return <div className={cn('mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-8', widths[width], className)}>{children}</div>;
}
