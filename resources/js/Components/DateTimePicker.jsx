import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import './DateTimePicker.css';

// Custom Input Component - Fixed
const CustomInput = forwardRef(({ value, onClick, placeholder, error, disabled, required }, ref) => {
    return (
        <div
            className={`custom-input-wrapper ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            ref={ref}
        >
            <input
                type="text"
                className="custom-date-input"
                value={value || ''}
                placeholder={placeholder}
                readOnly
                disabled={disabled}
                onClick={onClick}
            />
            <span className="calendar-icon">
        📅
      </span>
            {required && !value && <span className="required-asterisk">*</span>}
        </div>
    );
});

CustomInput.displayName = 'CustomInput';

// Main DateTimePicker Component
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

    return (
        <div className={`date-time-picker-container ${className}`}>
            {label && (
                <label className="date-time-picker-label text-gray-700">
                    {label}
                    {required && <span className="required-asterisk">*</span>}
                </label>
            )}

            <DatePicker
                selected={selected}
                onChange={onChange}
                showTimeSelect={showTimeSelect}
                showTimeSelectOnly={!showTimeSelect}
                timeFormat="HH:mm"
                timeIntervals={timeIntervals}
                timeCaption="Time"
                dateFormat={dateFormat}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText={placeholder}
                customInput={
                    <CustomInput
                        error={error}
                        disabled={disabled}
                        required={required}
                        placeholder={placeholder}
                    />
                }
                wrapperClassName="date-picker-wrapper"
                className="date-picker-input "
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