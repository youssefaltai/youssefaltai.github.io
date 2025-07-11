"use server";

import { sendEmail } from "@/lib/email";
import { services } from "@/lib/services";
import { env } from "@/lib/env";

export type RequestFormData = {
    fullName: string;
    contact: string;
    service: string;
    projectDescription: string;
};

export async function submitRequest(formData: RequestFormData) {
    try {
        // Validate required fields
        if (!formData.contact || !formData.service || !formData.projectDescription) {
            throw new Error("Please fill in all required fields");
        }

        // Get service details
        const selectedService = services.find(service => service.slug === formData.service);
        if (!selectedService) {
            throw new Error("Invalid service selected");
        }

        // Create email content
        const subject = `New Project Request - ${selectedService.name}`;
        
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Project Request</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f6f6ee; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #444422;">
                <div style="max-width: 600px; margin: 0 auto; padding: 32px;">
                    <!-- Header -->
                    <div style="margin-bottom: 48px;">
                        <h1 style="margin: 0; color: #444422; font-size: 48px; font-weight: 700; line-height: 1.1;">New Project Request</h1>
                    </div>

                    <!-- Content -->
                    <div style="display: flex; flex-direction: column; gap: 48px;">
                        <!-- Service Section -->
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <h2 style="margin: 0; color: #444422; font-size: 24px; font-weight: 600;">Service Requested</h2>
                            <div style="background: #ffffff; border: 1px solid #BBBB77; border-radius: 4px; padding: 16px;">
                                <h3 style="margin: 0 0 8px 0; color: #444422; font-size: 18px; font-weight: 600;">${selectedService.name}</h3>
                                <p style="margin: 0; color: #666633; font-size: 14px; line-height: 1.5;">${selectedService.description}</p>
                            </div>
                        </div>

                        <!-- Contact Information -->
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <h2 style="margin: 0; color: #444422; font-size: 24px; font-weight: 600;">Contact Information</h2>
                            <div style="background: #ffffff; border: 1px solid #BBBB77; border-radius: 4px; padding: 16px;">
                                ${formData.fullName ? `
                                    <div style="margin-bottom: 12px;">
                                        <span style="font-weight: 600; color: #444422;">Name:</span>
                                        <span style="color: #666633; margin-left: 8px;">${formData.fullName}</span>
                                    </div>
                                ` : ''}
                                <div>
                                    <span style="font-weight: 600; color: #444422;">Contact:</span>
                                    <span style="color: #666633; margin-left: 8px;">${formData.contact}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Project Description -->
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <h2 style="margin: 0; color: #444422; font-size: 24px; font-weight: 600;">Project Description</h2>
                            <div style="background: #ffffff; border: 1px solid #BBBB77; border-radius: 4px; padding: 16px;">
                                <p style="margin: 0; color: #444422; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${formData.projectDescription}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="border-top: 1px solid #DDDDBB; padding-top: 24px; margin-top: 48px;">
                        <div style="text-align: center;">
                            <p style="margin: 0; color: #888844; font-size: 14px;">This request was submitted from your website contact form</p>
                            <p style="margin: 8px 0 0 0; color: #888844; font-size: 12px;">© ${new Date().getFullYear()} Youssef al-Tai. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email
        await sendEmail(env.email, subject, html);

        return { success: true, message: "Request submitted successfully! I'll get back to you soon." };
    } catch (error) {
        return { 
            success: false, 
            message: error instanceof Error ? error.message : "Failed to submit request. Please try again." 
        };
    }
} 