export const env = {
    resendApiKey: process.env.RESEND_API_KEY || '',
    name: process.env.NAME || 'Youssef al-Tai',
    email: process.env.EMAIL || 'hello@youssefaltai.com',
    phone: process.env.PHONE || '(+20) 155 245 2691',
    appointmentBookingLink: process.env.APPOINTMENT_BOOKING_LINK,
    socialLinks: {
        linkedin: process.env.LINKEDIN_USERNAME || 'youssefaltai',
        github: process.env.GITHUB_USERNAME || 'youssefaltai',
    },
    siteUrl: process.env.SITE_URL || 'https://youssefaltai.com'
}

export function pageUrl(pagePath: string) {
    return `${env.siteUrl}${pagePath}`;
}