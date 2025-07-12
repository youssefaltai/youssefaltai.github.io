import clsx from "clsx";
import { forwardRef } from "react";

type InputFieldProps = {
    label?: string;
    labelNote?: string;
    placeholder?: string;
    required?: boolean;
    multiline?: boolean;
    rows?: number;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
    prefixIcon?: React.ReactNode;
};

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
    ({ label, labelNote, placeholder, required = false, multiline = false, rows = 4, className, value, onChange, disabled = false, error, prefixIcon }, ref) => {
        const containerClasses = clsx(
            "bg-gray-50 hover:bg-white text-gray-800 border rounded-sm transition-all duration-300 focus-within:ring-2 focus-within:border-transparent",
            error 
                ? "border-red-400 focus-within:ring-red-400" 
                : "border-spring-400 hover:shadow focus-within:ring-spring-400",
            disabled && "opacity-50 cursor-not-allowed",
            className
        );

        const inputClasses = "w-full bg-transparent border-none outline-none placeholder-gray-500 resize-none";

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label className="text-sm font-bold text-gray-700">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                        {labelNote && <span className="text-gray-500 font-normal ml-2">({labelNote})</span>}
                    </label>
                )}
                <div className={clsx(
                    containerClasses, 
                    "px-4 py-3",
                    prefixIcon && !multiline && "flex items-center gap-3"
                )}>
                    {prefixIcon && !multiline && (
                        <div className="flex-shrink-0 text-gray-400">
                            {prefixIcon}
                        </div>
                    )}
                    {multiline ? (
                        <textarea
                            ref={ref as React.Ref<HTMLTextAreaElement>}
                            placeholder={placeholder}
                            required={required}
                            rows={rows}
                            value={value}
                            onChange={handleChange}
                            disabled={disabled}
                            className={inputClasses}
                        />
                    ) : (
                        <input
                            ref={ref as React.Ref<HTMLInputElement>}
                            type="text"
                            placeholder={placeholder}
                            required={required}
                            value={value}
                            onChange={handleChange}
                            disabled={disabled}
                            className={inputClasses}
                        />
                    )}
                </div>
                {error && (
                    <div className="text-red-600 text-sm animate-in slide-in-from-top-2 duration-200">
                        {error}
                    </div>
                )}
            </div>
        );
    }
);

InputField.displayName = "InputField";

export default InputField; 