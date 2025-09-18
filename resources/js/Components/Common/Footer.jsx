import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">ThreeWish</h3>
                        <p className="text-gray-400">Building compassionate communities through the joy of giving.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                            <li><a href="#wishes" className="text-gray-400 hover:text-white">Wishes</a></li>
                            <li><a href="#donations" className="text-gray-400 hover:text-white">Donations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Safety Guidelines</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Community Rules</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i
                                className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i
                                className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
                    <p>&copy; 2023 ThreeWish. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
