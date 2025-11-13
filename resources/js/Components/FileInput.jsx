import React from "react";

const FileInput = ({ id, label, helpText, className = '', error, onFileChange, currentFileUrl, onRemoveCurrentFile, required, ...props }) => {
    const handleFileChange = (e) => {
        onFileChange(e.target.files ? e.target.files[0] : null);
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                type="file"
                className={`mt-1 block w-full text-sm text-gray-900 border p-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none ${
                    error ? 'border-red-500' : ''
                }`}
                onChange={handleFileChange}
                required={required}
                {...props}
            />
            {helpText &&  <div className="mt-1 text-sm text-indigo-600">{helpText}</div> }
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};
export default FileInput
