import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '@/Components/UI/Button';

/**
 * Home hero: mission copy + two CTAs on the left, photo collage on the right.
 * Copy is unchanged from the previous hero; the auto-rotating carousel was replaced
 * by a static collage of the same photos (better for performance and accessibility).
 */
const Hero = ({ user, wisherImages = [], fulfilWishCount }) => {
    const faces = (wisherImages || []).slice(0, 5);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-canvas to-canvas">
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-secondary-100/70 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary-100/70 blur-3xl" />

            <div className="container-page relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
                {/* Copy */}
                <div className="lg:col-span-6">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-700 shadow-xs ring-1 ring-primary-100">
                        <FontAwesomeIcon icon={faHeart} className="h-3 w-3 text-secondary-500" aria-hidden="true" />
                        Circle of Kindness
                    </p>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                        Where Children Learn the{' '}
                        <span className="relative whitespace-nowrap text-primary-600">
                            Joy of Giving
                            <svg aria-hidden="true" viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-3 w-full text-secondary-300" preserveAspectRatio="none">
                                <path d="M2 9c60-6 150-8 296-3" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                        ThreeWish connects children who have items to share with those who have wishes to fulfill.
                        Our platform creates meaningful connections and teaches valuable lessons about generosity
                        and community.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button href={route('wish.index')} size="lg" iconRight={faArrowRight}>
                            Browse Wishes
                        </Button>
                        {user ? (
                            <Button href={route('donation.index')} size="lg" variant="secondary">
                                Browse Gifts
                            </Button>
                        ) : (
                            <Button href={route('login')} size="lg" variant="secondary">
                                Sign In ThreeWish
                            </Button>
                        )}
                    </div>
                    <a href="#how-it-works" className="mt-4 inline-block text-sm font-semibold text-primary-700 underline-offset-4 hover:underline">
                        How It Works
                    </a>

                    {faces.length > 0 && (
                        <div className="mt-10 flex items-center gap-4">
                            <div className="flex shrink-0 -space-x-3">
                                {faces.map((w) => (
                                    <img
                                        key={w.id}
                                        src={`/storage/${w.image}`}
                                        alt=""
                                        loading="lazy"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-slate-600">
                                <span className="font-semibold text-slate-900">Our Happy Wish Creators</span>
                                <br className="hidden sm:block" />{' '}
                                <a href={route('wisher.list')} className="font-medium text-primary-700 hover:underline">Meet them</a>
                            </p>
                        </div>
                    )}
                </div>

                {/* Collage */}
                <div className="lg:col-span-6">
                    <div className="relative mx-auto grid max-w-xl grid-cols-5 grid-rows-6 gap-3 sm:gap-4 lg:max-w-none" style={{ aspectRatio: '5 / 4.4' }}>
                        <figure className="relative col-span-3 row-span-6 overflow-hidden rounded-3xl shadow-pop">
                            <img src="/images/banner/2.jpeg" alt="A smiling girl carrying a bucket of flowers" width="928" height="1600" fetchpriority="high" className="h-full w-full object-cover" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 pb-12 text-right text-sm font-medium text-white sm:pb-4">
                                Children learning the joy of giving
                            </figcaption>
                        </figure>
                        <figure className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl shadow-card">
                            <img src="/images/banner/hero.jpeg" alt="Two children hugging and smiling" width="512" height="768" className="h-full w-full object-cover" />
                        </figure>
                        <figure className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl shadow-card">
                            <img src="/images/banner/1.jpeg" alt="Children receiving gifts" width="1366" height="2048" loading="lazy" className="h-full w-full object-cover" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-xs font-medium text-white">
                                Making wishes come true
                            </figcaption>
                        </figure>

                        {Number(fulfilWishCount) > 0 && (
                            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-pop ring-1 ring-slate-900/5 sm:left-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                                    <FontAwesomeIcon icon={faStar} className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-xl font-bold leading-none text-slate-900 tabular-nums">{fulfilWishCount}</p>
                                    <p className="mt-1 text-xs font-medium text-slate-500">Wishes Fulfilled</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
