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
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>

            <CreatableSelect
                inputId={id}
                aria-invalid={error ? true : undefined}
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
                        borderColor: error ? '#E11D48' : state.isFocused ? '#3D97BA' : '#CBD5E1',
                        borderRadius: '0.5rem',
                        minHeight: '2.75rem',
                        padding: '0 4px',
                        fontSize: '0.875rem',
                        boxShadow: state.isFocused ? `0 0 0 3px ${error ? 'rgb(225 29 72 / 0.2)' : 'rgb(61 151 186 / 0.25)'}` : '0 1px 2px 0 rgb(15 23 42 / 0.05)',
                        '&:hover': {
                            borderColor: error ? '#E11D48' : '#94A3B8',
                        },
                    }),
                    menu: (base) => ({
                        ...base,
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        boxShadow: '0 12px 32px -8px rgb(15 23 42 / 0.18)',
                        zIndex: 30,
                    }),
                    option: (base, state) => ({
                        ...base,
                        fontSize: '0.875rem',
                        backgroundColor: state.isSelected ? '#2A7898' : state.isFocused ? '#EEF7FB' : 'white',
                        color: state.isSelected ? 'white' : '#0F172A',
                    }),
                }}
            />

            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
};

export default CustomCreatableSelect;
