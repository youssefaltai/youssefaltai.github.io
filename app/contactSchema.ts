import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(1, {
    message: "Full name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  message: z.string().trim().min(1, {
    message: "Message is required.",
  }),
});
