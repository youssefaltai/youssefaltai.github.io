import { Resend } from 'resend';
import { env } from './env';

const resend = new Resend(env.resendApiKey);

export const sendEmail = async (to: string, subject: string, html: string) => {
    await resend.emails.send({
        from: `${env.name} <${env.email}>`,
        to: [to],
        subject: subject,
        html: html,
    });
}