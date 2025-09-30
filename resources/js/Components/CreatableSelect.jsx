import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CustomCreatableSelect = ({
                                   id,
                                   label,
                                   value,
                                   onChange,
                                   options = [],
                                   error,
                                   placeholder = "Type to search or create...",
                                   required = false,
                                   className = ''
                               }) => {
    // Convert value to react-select format
    const selectValue = value ? { value: value, label: value } : null;

    // Handle change from react-select
    const handleChange = (selectedOption) => {
        if (selectedOption) {
            onChange(selectedOption.label);
        } else {
            onChange('');
        }
    };

    // Handle creation of new option
    const handleCreate = (inputValue) => {
        const newOption = { value: inputValue, label: inputValue };
        onChange(inputValue);
        return newOption;
    };

    // Convert options to react-select format
    const selectOptions = options.map(option => ({
        value: option.value || option.id?.toString() || option,
        label: option.label || option.name || option
    }));

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <CreatableSelect
                id={id}
                value={selectValue}
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={selectOptions}
                placeholder={placeholder}
                isClearable
                isSearchable
                className={`react-select-container ${error ? 'border-red-500 rounded-md' : ''}`}
                classNamePrefix="react-select"
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: error ? '#ef4444' : '#d1d5db',
                        borderRadius: '0.5rem',
                        padding: '2px 4px',
                        boxShadow: state.isFocused && !error ? '0 0 0 2px #6366f1' : 'none',
                        '&:hover': {
                            borderColor: error ? '#ef4444' : '#d1d5db',
                        },
                    }),
                    menu: (base) => ({
                        ...base,
                        borderRadius: '0.5rem',
                        zIndex: 10,
                    }),
                }}
            />

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default CustomCreatableSelect;
