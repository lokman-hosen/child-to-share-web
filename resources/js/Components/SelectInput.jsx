const SelectInput = ({ id, label, className = '', error, options, required, value, ...props }) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <select
                id={id}
                className={`form-control mt-1.5 ${error ? 'form-control-error' : ''}`}
                required={required}
                value={value === null ? '' : value}
                {...props}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
};

export default SelectInput;