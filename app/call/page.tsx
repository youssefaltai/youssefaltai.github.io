import { env } from "@/lib/env";
import { notFound, redirect } from "next/navigation";

export default function Call() {
    if (env.appointmentBookingLink) return redirect(env.appointmentBookingLink);
    return notFound();
}