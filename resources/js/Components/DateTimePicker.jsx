import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
//import './DateTimePicker.css';

// Custom input: shared .form-control look with a calendar icon
const CustomInput = forwardRef(({ value, onClick, placeholder, error, disabled, required, id }, ref) => {
    return (
        <div className="relative w-full cursor-pointer" onClick={onClick} ref={ref}>
            <input
                id={id}
                type="text"
                className={`form-control cursor-pointer !pr-10 ${error ? 'form-control-error' : ''}`}
                value={value || ''}
                placeholder={placeholder}
                readOnly
                disabled={disabled}
                required={required}
                aria-invalid={error ? 'true' : undefined}
                onClick={onClick}
            />
            <FontAwesomeIcon icon={faCalendarDays} className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
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
        <div className={`w-full ${className}`}>
            {label && (
                <label htmlFor={props.id} className="mb-1.5 block text-sm font-medium text-slate-800">
                    {label}
                    {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
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
                        id={props.id}
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
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
});

DateTimePicker.displayName = 'DateTimePicker';

export default DateTimePicker;