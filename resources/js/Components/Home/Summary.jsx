import React, { useState, useEffect, useRef } from 'react';

const Summary = ({activeDonorCount, activeWisherCount,totalWishCount,fulfilWishCount,community}) => {
    const [inView, setInView] = useState(false);
    const [counts, setCounts] = useState({
        totalWishes: 0,
        fulfilledWishes: 0,
        activeDonors: 0,
        happyWishers: 0,
        organizations: 0
    });

    const sectionRef = useRef(null);

    // Configure animation duration and delay
    const animationConfig = {
        duration: 2000, // 2 seconds for counting animation
        delay: 100, // slight delay between counters
        startDelay: 300, // delay after component comes into view
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of component is visible
                rootMargin: '0px 0px -50px 0px' // Trigger 50px before element enters viewport
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!inView) return;

        const startAnimations = () => {
            const steps = 60; // Number of animation steps
            const increment = (target, start, duration) => {
                let current = start;
                const stepTime = duration / steps;
                const incrementValue = (target - start) / steps;

                const timer = setInterval(() => {
                    current += incrementValue;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    return current;
                }, stepTime);

                return timer;
            };

            // Start animations with slight delays between each counter
            const timers = [
                increment(totalWishCount || 0, 0, animationConfig.duration),
                setTimeout(() => increment(fulfilWishCount || 0, 0, animationConfig.duration), animationConfig.delay * 1),
                setTimeout(() => increment(activeDonorCount || 0, 0, animationConfig.duration), animationConfig.delay * 2),
                setTimeout(() => increment(activeWisherCount || 0, 0, animationConfig.duration), animationConfig.delay * 3),
                setTimeout(() => increment(community || 0, 0, animationConfig.duration), animationConfig.delay * 4)
            ];

            // Animate the counts
            const animateCount = (targetValue, key, startDelay = 0) => {
                const target = targetValue || 0;
                const duration = animationConfig.duration;
                const steps = 60;
                const increment = target / steps;
                let current = 0;

                setTimeout(() => {
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            setCounts(prev => ({ ...prev, [key]: Math.round(current) }));
                            clearInterval(timer);
                        } else {
                            setCounts(prev => ({ ...prev, [key]: Math.round(current) }));
                        }
                    }, duration / steps);
                }, startDelay);
            };

            // Start each animation with delays
            animateCount(totalWishCount, 'totalWishes', animationConfig.startDelay);
            animateCount(fulfilWishCount, 'fulfilledWishes', animationConfig.startDelay + animationConfig.delay);
            animateCount(activeDonorCount, 'activeDonors', animationConfig.startDelay + animationConfig.delay * 2);
            animateCount(activeWisherCount, 'happyWishers', animationConfig.startDelay + animationConfig.delay * 3);
            animateCount(community, 'organizations', animationConfig.startDelay + animationConfig.delay * 4);

            return () => {
                timers.forEach(timer => {
                    if (typeof timer === 'number') {
                        clearTimeout(timer);
                    } else {
                        clearInterval(timer);
                    }
                });
            };
        };

        // Use setTimeout to ensure the animation starts after the component is fully in view
        const animationTimer = setTimeout(startAnimations, animationConfig.startDelay);

        return () => clearTimeout(animationTimer);
    }, [inView, totalWishCount, fulfilWishCount, activeDonorCount, activeWisherCount, community]);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 text-center">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-black mb-3">
                            {inView ? counts.totalWishes : 0}
                        </div>
                        <div className="text-accent font-medium">Total Wishes</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-black to-primary mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                            {inView ? counts.fulfilledWishes : 0}
                        </div>
                        <div className="text-accent font-medium">Wishes Fulfilled</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/70 mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-3">
                            {inView ? counts.activeDonors : 0}
                        </div>
                        <div className="text-accent font-medium">Active Donors</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary/70 mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-primary/80 mb-3">
                            {inView ? counts.happyWishers : 0}
                        </div>
                        <div className="text-accent font-medium">Happy Wishers</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-primary/80 to-primary mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-neutral mb-3">
                            {inView ? counts.organizations : 0}
                        </div>
                        <div className="text-accent font-medium">Organizations</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-neutral to-neutral/70 mx-auto mt-3 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;