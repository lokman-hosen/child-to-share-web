import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateTimePicker.css'; // Optional custom styles

const DateTimePicker = forwardRef(({
                                       selected,
                                       onChange,
                                       label = "Select Date & Time",
                                       placeholder = "Select date and time",
                                       minDate = new Date(),
                                       maxDate,
                                       timeIntervals = 15,
                                       dateFormat = "MMMM d, yyyy h:mm aa",
                                       showTimeSelect = true,
                                       isClearable = true,
                                       showYearDropdown = true,
                                       scrollableYearDropdown = true,
                                       yearDropdownItemNumber = 15,
                                       disabled = false,
                                       required = false,
                                       error = null,
                                       className = "",
                                       ...props
                                   }, ref) => {

    // Custom input component for better styling
    const CustomInput = forwardRef(({ value, onClick }, inputRef) => (
        <button
            type="button"
            className={`custom-date-input ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            ref={inputRef}
            disabled={disabled}
        >
            {value || placeholder}
            {required && <span className="required-asterisk">*</span>}
        </button>
    ));

    return (
        <div className={`date-time-picker-container ${className}`}>
            {label && (
                <label className="date-time-picker-label">
                    {label}
                    {required && <span className="required-asterisk">*</span>}
                </label>
            )}

            <DatePicker
                selected={selected}
                onChange={onChange}
                showTimeSelect={showTimeSelect}
                timeFormat="HH:mm"
                timeIntervals={timeIntervals}
                timeCaption="Time"
                dateFormat={dateFormat}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText={placeholder}
                customInput={<CustomInput />}
                isClearable={isClearable && !disabled}
                showYearDropdown={showYearDropdown}
                scrollableYearDropdown={scrollableYearDropdown}
                yearDropdownItemNumber={yearDropdownItemNumber}
                disabled={disabled}
                popperClassName="date-time-picker-popper"
                {...props}
            />

            {error && <div className="error-message">{error}</div>}
        </div>
    );
});

DateTimePicker.displayName = 'DateTimePicker';

export default DateTimePicker;