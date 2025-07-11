"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import ContactSection from "@/components/ContactSection";
import InputField from "@/components/InputField";
import ServiceDropdown from "@/components/ServiceDropdown";
import PrimaryButton from "@/components/Button/ButtonLink/PrimaryButton";
import { submitRequest, type RequestFormData } from "./actions";

export default function Page() {
    return (
        <Suspense>
            <Request />
        </Suspense>
    )
}
function Request() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        contact: "",
        service: searchParams.get("service") || "",
        projectDescription: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null);

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

        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const result = await submitRequest(formData as RequestFormData);

            if (result.success) {
                setSubmitMessage({ type: 'success', message: result.message });
                // Clear form on success
                setFormData({
                    fullName: "",
                    contact: "",
                    service: "",
                    projectDescription: ""
                });
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
        <PageTemplate title="Talk to me">
            <div className="flex flex-col gap-8 max-w-2xl">
                <p className="text-lg text-gray-600">
                    Tell me about your project or what you want me to help you with, and I&apos;ll get back to you quickly.
                </p>

                <form onSubmit={handleSubmit} className={`flex flex-col gap-6 ${isSubmitting ? 'pointer-events-none opacity-60' : ''}`}>
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
                    />

                    <ServiceDropdown
                        label="Pick a service"
                        required
                        value={formData.service}
                        onChange={updateService}
                        disabled={isSubmitting}
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
                            disabled={isSubmitting}
                            className="transition-all duration-300 hover:scale-101 active:scale-95"
                        >
                            <div className="flex items-center gap-2">
                                {isSubmitting && (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                                <span className="transition-all duration-300">
                                    {isSubmitting ? "Sending..." : "Send Request"}
                                </span>
                            </div>
                        </PrimaryButton>
                    </div>
                </form>

                <ContactSection />
            </div>
        </PageTemplate>
    );
} 