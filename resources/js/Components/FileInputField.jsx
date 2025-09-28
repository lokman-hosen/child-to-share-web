import React from "react";

const FileInputField = ({ id, label, className = '', error, onFileChange, currentFileUrl, onRemoveCurrentFile, required, ...props }) => {
    const handleFileChange = (e) => {
        onFileChange(e.target.files ? e.target.files[0] : null);
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                            <span className="ml-5">Upload files</span>
                            <input className="sr-only"
                                   id={id}
                                   type="file"
                                   onChange={handleFileChange}
                                   required={required}
                                   {...props}
                                   multiple
                            />

                        </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    <p className="text-xs text-gray-500">Video length limit: 10 seconds</p>
                </div>
            </div>


            {/*<input*/}
            {/*    id={id}*/}
            {/*    type="file"*/}
            {/*    className={`mt-1 block w-full text-sm text-gray-900 border p-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none ${*/}
            {/*        error ? 'border-red-500' : ''*/}
            {/*    }`}*/}
            {/*    onChange={handleFileChange}*/}
            {/*    required={required}*/}
            {/*    {...props}*/}
            {/*/>*/}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};
export default FileInputField
