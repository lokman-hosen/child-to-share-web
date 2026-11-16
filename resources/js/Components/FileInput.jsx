import React from "react";

const FileInput = ({ id, label, helpText, className = '', error, onFileChange, currentFileUrl, onRemoveCurrentFile, required, ...props }) => {
    const handleFileChange = (e) => {
        onFileChange(e.target.files ? e.target.files[0] : null);
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <input
                id={id}
                type="file"
                className={`mt-1.5 block w-full cursor-pointer rounded-lg border border-dashed bg-slate-50 p-2 text-sm text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-primary-600 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 ${
                    error ? 'border-danger-600' : 'border-slate-300'
                }`}
                onChange={handleFileChange}
                required={required}
                {...props}
            />
            {helpText &&  <p className="mt-1.5 text-xs text-slate-500">{helpText}</p> }
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
};
export default FileInput
