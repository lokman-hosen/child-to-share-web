import React from 'react';
import {textLimit} from "@/utils.jsx";

const Hero = ({title, subTitle}) => {
    return (
        <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary-dark text-white py-12 md:py-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    {title ? title : 'Available Gifts'}
                </h1>

                <div className="flex items-center justify-center mb-6">
                    <div className="h-1 w-16 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                    <div className="h-1 w-8 bg-gradient-to-r from-secondary-dark to-secondary rounded-full ml-2"></div>
                </div>

                <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed">
                    {subTitle ? textLimit(subTitle, 20) : 'Browse items that generous contributors are sharing with children in their community'}
                </p>

                {/* Decorative Elements */}
                <div className="flex justify-center space-x-4 mt-8">
                    <div className="h-2 w-2 bg-secondary rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-secondary/70 rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-secondary/50 rounded-full animate-pulse delay-150"></div>
                </div>
            </div>

            {/* Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                          opacity=".25"
                          className="fill-current text-white"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                          opacity=".5"
                          className="fill-current text-white"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
