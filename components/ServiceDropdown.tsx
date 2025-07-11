import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { services, type Service } from "@/lib/services";

type ServiceDropdownProps = {
    label?: string;
    labelNote?: string;
    required?: boolean;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
};

export default function ServiceDropdown({ label, labelNote, required = false, className, value, onChange, disabled = false }: ServiceDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(
        value ? services.find(service => service.slug === value) || null : null
    );
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll selected service into view when dropdown opens
    useEffect(() => {
        if (isOpen && selectedService && dropdownListRef.current) {
            const selectedElement = dropdownListRef.current.querySelector(
                `[data-service-slug="${selectedService.slug}"]`
            ) as HTMLElement;
            
            if (selectedElement && dropdownListRef.current) {
                const container = dropdownListRef.current;
                const elementTop = selectedElement.offsetTop;
                const elementHeight = selectedElement.offsetHeight;
                const containerHeight = container.clientHeight;
                const containerScrollTop = container.scrollTop;
                
                // Calculate if element is outside visible area
                const elementBottom = elementTop + elementHeight;
                const containerBottom = containerScrollTop + containerHeight;
                
                if (elementTop < containerScrollTop || elementBottom > containerBottom) {
                    // Scroll to center the element in the container
                    const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
                    container.scrollTo({
                        top: scrollTop,
                        behavior: "instant"
                    });
                }
            }
        }
    }, [isOpen, selectedService]);

    const handleServiceSelect = (service: Service) => {
        setSelectedService(service);
        onChange?.(service.slug);
        setIsOpen(false);
    };

    const baseClasses = "bg-gray-50 hover:bg-white active:bg-gray-100 text-gray-800 border border-spring-400 hover:shadow rounded-sm px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spring-400 focus:border-transparent";

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-bold text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                    {labelNote && <span className="text-gray-500 font-normal ml-2">({labelNote})</span>}
                </label>
            )}
            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={clsx(
                        baseClasses,
                        "w-full text-left flex justify-between items-center",
                        isOpen && "bg-white shadow",
                        disabled && "opacity-50 cursor-not-allowed",
                        className
                    )}
                >
                    <span className={selectedService ? "text-gray-800" : "text-gray-500"}>
                        {selectedService ? selectedService.name : "Select a service"}
                    </span>
                                    <svg
                    className={clsx(
                        "w-4 h-4 transition-transform duration-300 ease-in-out",
                        isOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>

                <div 
                    ref={dropdownListRef}
                    className={clsx(
                        "absolute z-10 w-full mt-1 bg-white border border-spring-400 rounded-sm shadow-lg max-h-60 overflow-auto transition-all duration-300 ease-in-out",
                        isOpen 
                            ? "opacity-100 transform translate-y-0" 
                            : "opacity-0 transform -translate-y-2 pointer-events-none"
                    )}
                >
                    {services.map((service) => (
                        <button
                            key={service.slug}
                            type="button"
                            data-service-slug={service.slug}
                            onClick={() => handleServiceSelect(service)}
                            className={clsx(
                                "w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200",
                                selectedService?.slug === service.slug && "bg-spring-50 text-spring-600"
                            )}
                        >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-gray-600">{service.description}</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
} 