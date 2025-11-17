import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, router, useForm} from '@inertiajs/react';
import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faList,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import TextareaInput from "@/Components/TextareaInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions} from "@/utils.jsx";
import DateInput from "@/Components/DateInput.jsx";
import DateTimePicker from "@/Components/DateTimePicker.jsx";

export default function Detail({module, wish, donations}) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        wish_id: wish.id,
        donation_id: '',
        need_admin_assistance: false,
        note: '',
        scheduled_at: '',
        status: 'requested',
    });

    const donationOptions = getDropdownOptions(donations, 'id', 'name');

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
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                                        <SelectInput
                                            id="donation_id"
                                            label="Select Donation"
                                            value={data.donation_id}
                                            onChange={(e) => setData('donation_id', e.target.value)}
                                            error={errors.donation_id}
                                            options={donationOptions}
                                            required
                                        />
                                        {/*<DateInput*/}
                                        {/*    id="dob"*/}
                                        {/*    label="Deliver at"*/}
                                        {/*    value={data.scheduled_at}*/}
                                        {/*    onChange={(value) => setData('scheduled_at', value)}*/}
                                        {/*    error={errors.scheduled_at}*/}
                                        {/*    placeholder="Select date time to deliver"*/}
                                        {/*    required*/}
                                        {/*/>*/}


                                        {/* Start Date & Time */}
                                        <DateTimePicker
                                            id="scheduled_at"
                                            label="Deliver at"
                                            value={data.scheduled_at}
                                            //selected={formData.dateTime}
                                            //onChange={(date) => handleDateTimeChange(date, 'dateTime')}
                                            onChange={(value) => setData('scheduled_at', value)}
                                            placeholder="Select start date and time"
                                            required
                                        />


                                        <TextareaInput
                                            id="note"
                                            label="Description"
                                            value={data.note}
                                            onChange={(e) => setData('note', e.target.value)}
                                            error={errors.note}
                                            placeholder="Write note for wisher or anything you like"
                                            required
                                        />
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
