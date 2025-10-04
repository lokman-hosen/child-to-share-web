import React from 'react';
import CreatableSelect from 'react-select/creatable';

const components = {
    DropdownIndicator: null,
};

const createOption = (label) => ({
    label,
    value: label,
});

const MultiSelectTextField = ({
                         id,
                         label,
                         className = '',
                         error,
                         required,
                         value,
                         onChange,
                         placeholder = "Type something and press enter..."
                     }) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
            case ' ':
            case ',':
                onChange([...value, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <CreatableSelect
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={onChange}
                onInputChange={(newValue) => setInputValue(newValue)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={value}
                className={`mt-1 ${error ? 'border-red-500 rounded-md' : ''}`}
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: error ? '#ef4444' : '#d1d5db',
                        '&:hover': {
                            borderColor: error ? '#ef4444' : '#d1d5db',
                        },
                        boxShadow: state.isFocused && !error ? '0 0 0 1px #6366f1' : 'none',
                        borderWidth: '1px',
                        borderRadius: '0.375rem',
                        padding: '2px',
                    })
                }}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default MultiSelectTextField;
