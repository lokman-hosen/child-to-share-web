import cn from './cn';

/**
 * Split-screen auth container used inside GuestLayout.
 * Left: brand photo + mission line (lg+ only). Right: the form card.
 * `wide` gives the form more room (Register).
 */
export default function AuthShell({ title, subtitle, children, footer, wide = false }) {
    return (
        <div className="relative bg-gradient-to-b from-primary-50 via-canvas to-canvas">
            <div className={cn('container-page py-10 sm:py-14', wide ? 'max-w-6xl' : 'max-w-5xl')}>
                <div className={cn(
                    'grid overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-pop',
                    wide ? 'lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]' : 'lg:grid-cols-2',
                )}>
                    <aside className="relative hidden lg:block" aria-hidden="true">
                        <img src="/images/banner/2.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-200">Circle of Kindness</p>
                            <p className="mt-2 text-2xl font-bold leading-snug">Where Children Learn the Joy of Giving</p>
                        </div>
                    </aside>
                    <div className="p-6 sm:p-10">
                        <img src="/images/3wish.png" alt="ThreeWish" width="781" height="312" className="h-10 w-auto lg:hidden" />
                        <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:mt-0">{title}</h1>
                        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
                        <div className="mt-8">{children}</div>
                        {footer && <div className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-600">{footer}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
