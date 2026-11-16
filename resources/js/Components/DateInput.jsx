import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS

const DateInput = ({ id, label, value, onChange, error, placeholder, required, className = '' }) => {
    // Parse 'YYYY-MM-DD' (optionally followed by a time) as a LOCAL date.
    // `new Date('YYYY-MM-DD')` is UTC midnight, which shows the previous day west of UTC.
    const parseLocal = (v) => {
        const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(v));
        return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(v);
    };
    const selectedDate = value ? parseLocal(value) : null;

    // Format the picked date as 'YYYY-MM-DD' in LOCAL time.
    // (toISOString() converts to UTC, which saved the previous day for users east of UTC, e.g. UTC+6.)
    const pad = (n) => String(n).padStart(2, '0');
    const handleDateChange = (date) => {
        onChange(date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : '');
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <DatePicker
                id={id}
                selected={selectedDate} // Value for the date picker
                onChange={handleDateChange} // Handle date changes
                dateFormat="yyyy-MM-dd" // Format the date displayed in the input
                // Apply Tailwind CSS classes directly to the DatePicker's input field
                className={`form-control mt-1.5 ${error ? 'form-control-error' : ''}`}
                // This ensures the DatePicker wrapper takes full width
                wrapperClassName="w-full"
                placeholderText={placeholder}
                isClearable // Allows clearing the date
                showYearDropdown // Show dropdown for year selection
                showMonthDropdown // Show dropdown for month selection
                dropdownMode="select" // Use select dropdowns for year/month
            />
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
};

export default DateInput;
