import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, router, useForm} from '@inertiajs/react';
import React, { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faEdit,
    faList, faSquarePlus,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import TextareaInput from "@/Components/TextareaInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions} from "@/utils.jsx";
import DateTimePicker from "@/Components/DateTimePicker.jsx";

export default function Detail({module, wish, donations}) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        wish_id: wish.id,
        donation_id: '',
        need_admin_assistance: false,
        note: '',
        scheduled_at: null, // Changed from empty string to null
        status: 'requested',
    });

    const donationOptions = getDropdownOptions(donations, 'id', 'name');

    // Convert scheduled_at string to Date object if it exists
    const getSelectedDate = () => {
        if (!data.scheduled_at) return null;
        if (data.scheduled_at instanceof Date) return data.scheduled_at;
        if (typeof data.scheduled_at === 'string') {
            const date = new Date(data.scheduled_at);
            return isNaN(date.getTime()) ? null : date;
        }
        return null;
    };

    // Handle date change
    const handleDateChange = (date) => {
        setData('scheduled_at', date);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Wish Detail"/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-700 px-6 py-8 sm:px-8 sm:py-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            {/* Title Section */}
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="h-12 w-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        Fulfill Wish for "{wish.title}"
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        <span
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-1">
                                            {wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link
                                href={route('wish.fulfill.list')}
                                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                            >
                                <FontAwesomeIcon icon={faList} className="text-blue-600" />
                                <span>View {module} List</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="border-t border-gray-200">
                                <form className="space-y-1">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                                        <SelectInput
                                            id="donation_id"
                                            label="Select Donation"
                                            value={data.donation_id}
                                            onChange={(e) => setData('donation_id', e.target.value)}
                                            error={errors.donation_id}
                                            options={donationOptions}
                                            required
                                        />

                                        {/* Fixed Date & Time Picker */}
                                        <DateTimePicker
                                            selected={getSelectedDate()} // Pass Date object or null
                                            onChange={handleDateChange} // Pass function that receives Date object
                                            label="Deliver at"
                                            placeholder="Select date and time"
                                            required
                                            id="scheduled_at" // Optional: you can keep this if DateTimePicker accepts it
                                            error={errors.scheduled_at}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 px-6 py-2">
                                        <TextareaInput
                                            id="note"
                                            label="Description/Note for wisher"
                                            value={data.note}
                                            onChange={(e) => setData('note', e.target.value)}
                                            error={errors.note}
                                            placeholder="Write note for wisher or anything you like"
                                            required
                                        />
                                    </div>

                                    <div className="mt-8 flex justify-center space-x-4">
                                        {/* Back Button */}
                                        <button
                                            type="button"
                                            onClick={() => window.history.back()}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faArrowLeft}/>
                                                <span>Back</span>
                                            </div>
                                        </button>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faStar}/>
                                                <span>Requested Wisher</span>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}