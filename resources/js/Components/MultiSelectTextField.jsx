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

    const handleInputChange = (input) => {
        // Check if user typed comma or space
        if (input.endsWith(',') || input.endsWith(' ')) {
            const cleanValue = input.slice(0, -1).trim(); // remove last comma/space
            if (cleanValue) {
                onChange([...value, createOption(cleanValue)]);
            }
            setInputValue(''); // clear input field
        } else {
            setInputValue(input);
        }
    };

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <CreatableSelect
                inputId={id}
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={onChange}
                onInputChange={handleInputChange}
                //onInputChange={(newValue) => setInputValue(newValue)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={value}
                className="mt-1.5"
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: error ? '#E11D48' : state.isFocused ? '#3D97BA' : '#CBD5E1',
                        '&:hover': {
                            borderColor: error ? '#E11D48' : '#94A3B8',
                        },
                        boxShadow: state.isFocused ? `0 0 0 3px ${error ? 'rgb(225 29 72 / 0.2)' : 'rgb(61 151 186 / 0.25)'}` : '0 1px 2px 0 rgb(15 23 42 / 0.05)',
                        borderWidth: '1px',
                        borderRadius: '0.5rem',
                        minHeight: '2.75rem',
                        fontSize: '0.875rem',
                        padding: '0 4px',
                    })
                }}
            />
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
};

export default MultiSelectTextField;
