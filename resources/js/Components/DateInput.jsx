import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS

const DateInput = ({ id, label, value, onChange, error, placeholder, required, className = '' }) => {
    // Determine the selected date for the DatePicker (expects a Date object or null)
    const selectedDate = value ? new Date(value) : null;

    // Handle date change from DatePicker, converting it to YYYY-MM-DD string for your form data
    const handleDateChange = (date) => {
        // date will be a Date object or null. Convert it to 'YYYY-MM-DD' string.
        onChange(date ? date.toISOString().split('T')[0] : '');
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <DatePicker
                id={id}
                selected={selectedDate} // Value for the date picker
                onChange={handleDateChange} // Handle date changes
                dateFormat="yyyy-MM-dd" // Format the date displayed in the input
                // Apply Tailwind CSS classes directly to the DatePicker's input field
                className={`mt-1 block w-full rounded-md text-dark border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    error ? 'border-red-500' : ''
                }`}
                // This ensures the DatePicker wrapper takes full width
                wrapperClassName="w-full"
                placeholderText={placeholder}
                isClearable // Allows clearing the date
                showYearDropdown // Show dropdown for year selection
                showMonthDropdown // Show dropdown for month selection
                dropdownMode="select" // Use select dropdowns for year/month
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default DateInput;
