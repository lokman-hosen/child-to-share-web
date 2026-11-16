import React from 'react';

const TextareaInput = ({ id, label, className = '', error, required, ...props }) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <textarea
                id={id}
                className={`form-control mt-1.5 ${error ? 'form-control-error' : ''}`}
                rows="4" // You can adjust this to your preferred default number of rows
                {...props}
            />
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
};

export default TextareaInput;
