const SelectInput = ({ id, label, className = '', error, options, required, ...props }) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <select
                id={id}
                className={`mt-1 block w-full bg-white text-dark rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    error ? 'border-red-500' : ''
                }`}
                required={required}
                {...props}
            >
                <option value="">-----Select please-----</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default SelectInput;