import clsx from "clsx";

type PrimaryButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
};

export default function PrimaryButton({ children, className, type = "button", onClick, disabled = false }: PrimaryButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={
                clsx(
                    "bg-spring-500 hover:bg-spring-400 active:bg-spring-600 text-white hover:shadow rounded-sm px-4 py-3 transition-all duration-300 flex justify-center items-center text-center disabled:opacity-50 disabled:cursor-not-allowed",
                    className
                )
            }
        >
            {children}
        </button>
    );
} 