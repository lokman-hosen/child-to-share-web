import React from 'react';

const RegistrationCTA = () => {
    return (
        <section id="register" className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">Join ThreeWish today and become part of a community that
                    believes in the power of sharing and caring</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="registration-new.html"
                       className="px-6 py-3 border-2 border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-purple-600 transition duration-300">
                        Sign Up as Donor
                    </a>
                    <a href="registration-new.html"
                       className="px-6 py-3 border-2 border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-purple-600 transition duration-300">
                        Sign Up as Wisher
                    </a>
                </div>
                <p className="mt-6 text-purple-100">Already have an account? <a target="_blank" href="login-new.html"
                                                                                className="text-white font-semibold underline">Log
                    in</a></p>
            </div>
        </section>
    );
};

export default RegistrationCTA;
