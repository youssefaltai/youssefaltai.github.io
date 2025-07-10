export const env = {
    resendApiKey: process.env.RESEND_API_KEY || '',
    name: process.env.NAME || 'Youssef al-Tai',
    email: process.env.EMAIL || 'hello@youssefaltai.com',
    appointmentBookingLink: process.env.APPOINTMENT_BOOKING_LINK,
    socialLinks: {
        linkedin: process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/youssefaltai',
        github: process.env.GITHUB_URL || 'https://github.com/youssefaltai',
    }
}