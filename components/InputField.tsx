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
};

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
    ({ label, labelNote, placeholder, required = false, multiline = false, rows = 4, className, value, onChange, disabled = false }, ref) => {
        const baseClasses = "bg-gray-50 hover:bg-white text-gray-800 border border-spring-400 hover:shadow rounded-sm px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spring-400 focus:border-transparent";

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
                {multiline ? (
                    <textarea
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        placeholder={placeholder}
                        required={required}
                        rows={rows}
                        value={value}
                        onChange={handleChange}
                        disabled={disabled}
                        className={clsx(
                            baseClasses, 
                            "resize-none", 
                            disabled && "opacity-50 cursor-not-allowed",
                            className
                        )}
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
                        className={clsx(
                            baseClasses, 
                            disabled && "opacity-50 cursor-not-allowed",
                            className
                        )}
                    />
                )}
            </div>
        );
    }
);

InputField.displayName = "InputField";

export default InputField; 