import {Link} from "@inertiajs/react";

export default function RightSidebar() {
    return (
        <div className="w-full lg:w-1/6">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
                <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center">
                    <i className="fas fa-star mr-2 text-secondary"></i> Popular Wishes
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden mr-3 flex-shrink-0">
                            <img
                                src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-little-girl-600nw-2579821615.jpg"
                                alt="Child" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Jennifer C.</p>
                            <p className="text-xs text-gray-500 truncate">Art supplies</p>
                        </div>
                        <button className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-green-600">Donate
                        </button>
                    </div>

                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden mr-3 flex-shrink-0">
                            <img
                                src="https://static8.depositphotos.com/1101639/814/i/450/depositphotos_8146463-stock-photo-smiling-boy.jpg"
                                alt="Child" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Michael T.</p>
                            <p className="text-xs text-gray-500 truncate">Science kit</p>
                        </div>
                        <button className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-green-600">Donate
                        </button>
                    </div>

                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden mr-3 flex-shrink-0">
                            <img
                                src="https://st4.depositphotos.com/1372245/23901/i/450/depositphotos_239017380-stock-photo-portrait-emotional-boy-white-background.jpg"
                                alt="Child" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">David L.</p>
                            <p className="text-xs text-gray-500 truncate">Winter jacket</p>
                        </div>
                        <button className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-green-600">Donate
                        </button>
                    </div>

                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden mr-3 flex-shrink-0">
                            <img
                                src="https://st.depositphotos.com/1011643/4555/i/450/depositphotos_45553123-stock-photo-little-boy-looking-at-the.jpg"
                                alt="Child" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Alex K.</p>
                            <p className="text-xs text-gray-500 truncate">Books collection</p>
                        </div>
                        <button className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-green-600">Donate
                        </button>
                    </div>
                </div>

                <div className="my-6 border-t border-gray-200"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center">
                    <i className="fas fa-gift mr-2 text-accent"></i> Suggested Donations
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <div
                            className="w-12 h-12 rounded bg-gray-100 overflow-hidden mr-3 flex-shrink-0 flex items-center justify-center">
                            <i className="fas fa-book text-gray-500"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Children's Books</p>
                            <p className="text-xs text-gray-500">12 needed</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div
                            className="w-12 h-12 rounded bg-gray-100 overflow-hidden mr-3 flex-shrink-0 flex items-center justify-center">
                            <i className="fas fa-tshirt text-gray-500"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Winter Clothes</p>
                            <p className="text-xs text-gray-500">8 needed</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div
                            className="w-12 h-12 rounded bg-gray-100 overflow-hidden mr-3 flex-shrink-0 flex items-center justify-center">
                            <i className="fas fa-puzzle-piece text-gray-500"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Educational Toys</p>
                            <p className="text-xs text-gray-500">5 needed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
