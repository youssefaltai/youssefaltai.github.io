"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "@/components/InputField";
import ServiceDropdown from "@/components/ServiceDropdown";
import PrimaryButton from "@/components/Button/ButtonLink/PrimaryButton";
import { submitRequest, type RequestFormData } from "./actions";
import { services } from "@/lib/services";

// Email validation function
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Phone validation function (basic)
const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Get contact field prefix icon
const getContactPrefixIcon = (contact: string) => {
    if (!contact.trim()) return null;

    const isEmail = contact.includes('@');
    if (isEmail && isValidEmail(contact)) {
        return <Image src="/icons/email.svg" width={20} height={20} alt="Email" />;
    } else if (!isEmail && isValidPhone(contact)) {
        return <Image src="/icons/phone.svg" width={20} height={20} alt="Phone" />;
    }

    return null;
};

// Validation function
const validateForm = (formData: typeof initialFormData) => {
    const errors: Record<string, string> = {};

    // Contact validation - only show error if field has content but is invalid
    if (formData.contact.trim()) {
        const isEmailValid = isValidEmail(formData.contact);
        const isPhoneValid = isValidPhone(formData.contact);

        if (!isEmailValid && !isPhoneValid) {
            errors.contact = "Please enter a valid email address or phone number";
        }
    }

    // Service validation - only show error if field has content but is invalid
    if (formData.service.trim() && !services.find(service => service.slug === formData.service)) {
        errors.service = "Please select a valid service";
    }

    // Project description validation - only show error if field has content but is too short
    if (formData.projectDescription.trim() && formData.projectDescription.trim().length < 10) {
        errors.projectDescription = "Project description must be at least 10 characters long";
    }

    return errors;
};

const initialFormData = {
    fullName: "",
    contact: "",
    service: "",
    projectDescription: ""
};

export default function RequestForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [formData, setFormData] = useState({
        ...initialFormData,
        service: searchParams.get("service") || ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    // Validate form on every change
    const formErrors = useMemo(() => validateForm(formData), [formData]);

    // Check if form is valid for submission (all required fields filled + no validation errors)
    const isFormValid = useMemo(() => {
        const hasRequiredFields = formData.contact.trim() &&
            formData.service.trim() &&
            formData.projectDescription.trim();
        const hasNoErrors = Object.keys(formErrors).length === 0;
        return hasRequiredFields && hasNoErrors;
    }, [formData, formErrors]);

    // Get prefix icon for contact field
    const contactPrefixIcon = useMemo(() => getContactPrefixIcon(formData.contact), [formData.contact]);

    // Update URL when service changes
    const updateService = (service: string) => {
        setFormData(prev => ({ ...prev, service }));

        const params = new URLSearchParams(searchParams.toString());
        if (service) {
            params.set("service", service);
        } else {
            params.delete("service");
        }
        router.replace(`/request?${params.toString()}`, { scroll: false });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Double-check validation before submitting
        if (!isFormValid) {
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const result = await submitRequest(formData as RequestFormData);

            if (result.success) {
                setSubmitMessage({ type: 'success', message: result.message });
                // Clear form on success
                setFormData(initialFormData);
            } else {
                setSubmitMessage({ type: 'error', message: result.message });
            }
        } catch {
            setSubmitMessage({
                type: 'error',
                message: "An unexpected error occurred. Please try again."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateFormData = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl">
            <p className="text-base md:text-lg text-gray-600">
                Tell me about your project or what you want me to help you with, and I&apos;ll get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className={`flex flex-col gap-4 md:gap-6 ${isSubmitting ? 'pointer-events-none opacity-60' : ''}`}>
                <InputField
                    label="May I ask your name?"
                    labelNote="you don't have to"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(value) => updateFormData("fullName", value)}
                    disabled={isSubmitting}
                />

                <InputField
                    label="I'm gonna need your contact"
                    placeholder="Your email or phone number"
                    required
                    value={formData.contact}
                    onChange={(value) => updateFormData("contact", value)}
                    disabled={isSubmitting}
                    error={formErrors.contact}
                    prefixIcon={contactPrefixIcon}
                />

                <ServiceDropdown
                    label="Pick a service"
                    required
                    value={formData.service}
                    onChange={updateService}
                    disabled={isSubmitting}
                    error={formErrors.service}
                />

                <InputField
                    label="Tell me about your project, goals, timeline, and any specific requirements"
                    placeholder="The stage is yours!"
                    required
                    multiline
                    rows={6}
                    value={formData.projectDescription}
                    onChange={(value) => updateFormData("projectDescription", value)}
                    disabled={isSubmitting}
                    error={formErrors.projectDescription}
                />

                {/* Success State */}
                {submitMessage?.type === 'success' && (
                    <div className="bg-spring-50 border border-spring-200 rounded-sm p-6 animate-in slide-in-from-top-4 duration-500">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-spring-400 rounded-full flex items-center justify-center flex-shrink-0 animate-in zoom-in duration-300 delay-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-spring-800 text-lg mb-1">Request sent successfully!</div>
                                <div className="text-spring-700">{submitMessage.message}</div>
                                <div className="mt-3 text-sm text-spring-600">
                                    I&apos;ll review your request and get back to you within 24 hours.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {submitMessage?.type === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-sm p-6 animate-in slide-in-from-top-4 duration-500">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 animate-in zoom-in duration-300 delay-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-red-800 text-lg mb-1">Something went wrong</div>
                                <div className="text-red-700">{submitMessage.message}</div>
                                <div className="mt-3 text-sm text-red-600">
                                    Please check your information and try again.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-start">
                    <PrimaryButton
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send request'}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
} 