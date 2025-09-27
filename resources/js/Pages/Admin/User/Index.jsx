import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function Index({ users }) {
    return (
        <AuthenticatedLayout>
            <Head title="User List" />
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">User List</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="w-2xl space-y-8">
                        <div className="overflow-x-auto bg-white shadow rounded-lg">
                            <table className="wish-table w-full">
                                <thead>
                                <tr>
                                    <th className="text-left p-3">#</th>
                                    <th className="text-left p-3">Name</th>
                                    <th className="text-left p-3">Email</th>
                                    <th className="text-left p-3">Mobile</th>
                                    <th className="text-left p-3">User Type</th>
                                    <th className="text-left p-3">Created At</th>
                                    <th className="text-left p-3">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {users.data.length > 0 ? (
                                    users.data.map((user, index) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="p-3">
                                                {users.from + index}
                                            </td>
                                            <td className="px-4 py-2 text-sm font-medium text-gray-800">
                                                {user.name}
                                            </td>
                                            <td className="p-3">
                                                {user.email ?? "-"}
                                            </td>
                                            <td className="p-3">
                                                {user.mobile}
                                            </td>
                                            <td className="px-4 py-2 text-sm">
                                                    <span
                                                        className={`px-2 py-1 rounded text-white text-xs ${
                                                            user.role === "super_admin"
                                                                ? "bg-red-600"
                                                                : user.role === "admin"
                                                                    ? "bg-blue-600"
                                                                    : user.role === "donor"
                                                                        ? "bg-green-600"
                                                                        : user.role === "wisher"
                                                                            ? "bg-purple-600"
                                                                            : "bg-yellow-500"
                                                        }`}
                                                    >
                                                        {user.role.replace("_", " ")}
                                                    </span>
                                            </td>
                                            <td className="p-3">
                                                {new Date(user.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="p-3">
                                                <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                                    className="fas fa-edit"></i></button>
                                                <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                                    className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="px-4 py-3 text-center text-gray-500 text-sm"
                                        >
                                            No users found
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                                Showing {users.from} to {users.to} of {users.total} users
                            </p>
                            <div className="flex space-x-1">
                                {users.links.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.url || "#"}
                                        className={`px-3 py-1 rounded text-sm ${
                                            link.active
                                                ? "bg-indigo-600 text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        } ${!link.url ? "cursor-not-allowed opacity-50" : ""}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </AuthenticatedLayout>
    );
}
