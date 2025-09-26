export default function Pagination() {
    return (
        <div className="mt-4 flex justify-between items-center">
            <p
                className="text-sm text-gray-600">Showing 1 to 5 of 17 users</p>
            <div className="flex space-x-1"><a
                className="px-3 py-1 rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-not-allowed opacity-50"
                href="">« Previous</a><a className="px-3 py-1 rounded text-sm bg-indigo-600 text-white "
                                         href="http://127.0.0.1:8000/users?page=1">1</a><a
                className="px-3 py-1 rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 "
                href="http://127.0.0.1:8000/users?page=2">2</a><a
                className="px-3 py-1 rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 "
                href="http://127.0.0.1:8000/users?page=3">3</a><a
                className="px-3 py-1 rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 "
                href="http://127.0.0.1:8000/users?page=4">4</a><a
                className="px-3 py-1 rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 "
                href="http://127.0.0.1:8000/users?page=2">Next »</a></div>
        </div>
    );
}
