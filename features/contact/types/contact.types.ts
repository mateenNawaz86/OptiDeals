import { z } from "zod";
import { serviceIds } from "@/lib/site";

const required = (message: string) => z.string().trim().min(1, message);

export const contactFormSchema = z.object({
  firstName: required("Please enter your first name."),
  lastName: required("Please enter your last name."),
  email: required("Please enter your email address.").pipe(
    z.email("Please enter a valid email address."),
  ),
  phone: required("Please enter your phone number.").regex(
    /^\+?[\d\s()-]{6,20}$/,
    "Please enter a valid phone number.",
  ),
  dateOfBirth: required("Please enter your date of birth.").regex(
    /^\d{4}-\d{2}-\d{2}$/,
    "Please enter a valid date.",
  ),
  // Input is any string (the empty placeholder option); output is a known service.
  service: z.string().pipe(z.enum(serviceIds, "Please choose a service.")),
  message: required("Please tell us how we can help."),
  agree: z
    .boolean()
    .refine((value) => value, "Please confirm that you agree to continue."),
});

/** What the form holds before validation. */
export type ContactFormValues = z.input<typeof contactFormSchema>;

export type ContactRequest = z.output<typeof contactFormSchema>;

export const contactResponseSchema = z.object({ id: z.string() });

export type ContactResponse = z.infer<typeof contactResponseSchema>;
