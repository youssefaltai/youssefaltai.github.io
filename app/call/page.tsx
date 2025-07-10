import { redirect } from 'next/navigation';

export default function CallPage() {
  const calendarUrl = process.env.CALENDAR_URL || 'https://calendar.app.google/uHgBMjJY5JyELETd9';
  redirect(calendarUrl);
} 