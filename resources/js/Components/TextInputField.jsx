import React from "react";

const TextInput = ({ id, label, className = '', error, required, ...props }) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                className={`mt-1 block w-full rounded-md text-dark border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    error ? 'border-red-500' : ''
                }`}
                required={required}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};
export default TextInput;