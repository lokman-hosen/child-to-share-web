import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// forwardRef so callers (e.g. UpdatePasswordForm) can focus the input on validation errors.
const TextInput = forwardRef(({ id, label, helpText, className = '', error, required, isFocused = false, value, ...props }, ref) => {
    const localRef = useRef(null);
    useImperativeHandle(ref, () => localRef.current);
    // Breeze-style `isFocused`: focus the field on mount.
    useEffect(() => { if (isFocused) localRef.current?.focus(); }, [isFocused]);

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                {label}
                {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
            </label>
            <input
                id={id}
                ref={localRef}
                // null from the database -> controlled empty input
                value={value === null ? '' : value}
                className={`form-control mt-1.5 ${error ? 'form-control-error' : ''}`}
                required={required}
                aria-invalid={error ? 'true' : undefined}
                {...props}
            />
            {helpText &&  <p className="mt-1.5 text-xs text-slate-500">{helpText}</p> }
            {error && <p className="mt-1.5 text-xs font-medium text-danger-700">{error}</p>}
        </div>
    );
});
TextInput.displayName = 'TextInputField';
export default TextInput;
