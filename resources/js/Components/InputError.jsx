export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={'text-xs font-medium text-danger-700 ' + className}
        >
            {message}
        </p>
    ) : null;
}
